import { Model, raw } from 'zilk'
import { Script } from './Script.js'
import { Build } from './Build.js'
import path from 'path'


const render_transpiler = new Bun.Transpiler({
  loader: "js",
  exports: {
    eliminate: ['meta']
  },
  trimUnusedImports: true,
  target: 'browser'
});

const full_transpiler = new Bun.Transpiler({
  loader: "js",
  trimUnusedImports: true,
  target: 'browser'
});


export async function Pages({
  _document='./pages/_document.js',
  output:{
    sync_router,
    sync_hydration,
    dyna_route_import,
    dyna_css_inline,
    global_css,
    static_pages,
    sitemap
  }
}={}){

  let _document_module = await import(path.join(process.cwd(),_document))

  let FileModel = Model(Script,{
    get meta(){
      return this.module.meta
    },
    get render_transpilation(){
      let { route, contents } = this
      return `// src:${route}\n` + render_transpiler.transformSync(contents)
    },
    get full_transpilation(){
      let { route, contents } = this
      return `// src:${route}\n` + full_transpiler.transformSync(contents)
    },
    get render_imports(){
      return render_transpiler.scan(this.contents).imports
    },
    get ssr_html(){
      return this.module.default()
    },
    get full_html(){
      let { ssr_html, meta } = this
      return _document_module.template(meta,ssr_html)
    },
    get output_html_route(){
      let { name } = this
      return name.match(/[\/]*index/) ? `${name}.html` : `${name}/index.html`
    },
    get used_classes(){
      const rewriter = new HTMLRewriter();
      let class_list = []
      rewriter.on("*", {
        element(el) {
          class_list.push(...el.getAttribute('class').split(' '))
        }
      })
      rewriter.transform(new Response(this.full_html))
      return class_list
    },
    get route_str(){
      let { name } = this
      let segs = name.split('/')
      let new_segs = segs.map(x => {
        let res = null
        if(res = x.match(/\[([\w-.]+)\]/)){
          return ':' + res[1]
        } else if (res = x.match(/\[\.\.\.([\w-.]+)\]/)){
          return '*'
        } else {
          return x
        }
      })
      return new_segs.join('/')
    }
  })

  return Model(Build,{
    filter: '**/[^_]*.js',
    input_dir: 'pages',
    FileModelCallback: () =>  FileModel,
    build_each(page){
      let out = {}
      // STATIC HTML FILE
      if(static_pages){
        out[`public/${page.output_html_route}`] = page.full_html
      }
      if(sync_router){
        out[`.zilk/pages/${page.name}/render.js`] = page.render_transpilation
        out[`.zilk/pages/${page.name}/full.js`] = page.full_transpilation
      }
      return out
    },
    build_all(pages){
      let out = {}
      if(sitemap){
        out[sitemap] = build_sitemap({ pages, domain: 'macy.pink'})
      }
      if(sync_router){
        out[`.zilk/browser/router.js`] = build_router({ pages })
      }
      return out;
    },
    async prompt_create({ Text, List }){
      let page_name = await Text({
        message: 'Page name?'
      })
    
      let classes_list = (await List({
        message: 'List classes (space separated)',
        separator: ' '
      })).map(s => s.toUpperCase())

      return {
        [`./pages/${page_name}.js`]: `
          import { html } from 'zilk';

          export let meta = {
            title: "Test",
            description: "",
            index: true
          }

          export default () => html\`
            
          \`
        `
      }
    }
  })
}

function build_sitemap({pages,domain}){
  // TODO: make removing 'index.html' automatic by page model
  let indexed_pages = pages.filter(({ meta }) => meta.index)
  let makeUrl = route =>  `https://${domain}/${route.replace('index.html','')}`
  return raw.xml`
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${indexed_pages.map(({ output_html_route }) => raw.xml` <url>
    <loc>${makeUrl(output_html_route)}</loc>
    <lastmod>2023-01-01</lastmod>
  </url>`).join('\n')}
</urlset>`.toString()
}

function build_router({ pages }){
  let imports = [`import { register } from 'zilk/router'`,`import { render, htmlFor } from 'zilk'`]
  let defines = []
  pages.forEach(({ name, route_str },i) => {
    let _render = `$r${i}`
    let _meta = `$m${i}`
    imports.push(`import {default as ${_render}, meta as ${_meta}} from '${path.join('../pages/',name+'/full.js')}'`)
    defines.push(`register('${route_str}',${_meta},(root) => render(root,htmlFor(root,'${route_str}')\`$\{${_render}()}\`))`)
  });
  return `${imports.join('\n')}\n${defines.join('\n')}`
}
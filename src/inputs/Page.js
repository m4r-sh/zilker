export function Page(config){
  return {
    async setup({ cwd }){
      let [_document,zilk] = await Promise.all([
        import(cwd + '/' + config._document),
        import(Bun.resolveSync('zilk',cwd))
      ])
      this._document = _document
      this.zilk = zilk
      this.render_browser_transpiler = new Bun.Transpiler({
        loader: "js",
        exports: { eliminate: ['static_route','pull_bun','pull_cf'] },
        trimUnusedImports: true,
        target: 'browser'
      })
      this.render_server_transpiler = new Bun.Transpiler({
        loader: "js",
        exports: { eliminate: ['static_route','pull_browser','pull_cf'] },
        trimUnusedImports: true,
        target: 'bun'
      })
    },
    async each({ p, name, mod, contents }){
      let out = {}
      out.route_pattern = nameToPattern(name)
      out['client.js'] = this.render_browser_transpiler.transformSync(contents)
      out['server.js'] = this.render_server_transpiler.transformSync(contents)
      
      if(mod.static_route){
        let metadata = await mod.meta()
        let content = await mod.content()
        let str = this.zilk.render(String,this._document.template({ meta: metadata, content: content }))
        out['ssr.html'] = str
        out['meta.json'] = JSON.stringify(metadata,null,2)
      }
      return out
    }
  }

}
function nameToPattern(name) {
  const segments = name.split('/');
  return '/' + segments.map((x, i) => {
    let res = null;
    // Only convert 'index' to '' if it's the last segment
    if (x === 'index' && i === segments.length - 1) {
      return '';
    } else if (res = x.match(/\.\.\.([\w-.]+)/)) {
      return ':wild+';
    } else if (res = x.match(/\[([\w-.]+)/)) {
      return ':' + res[1];
    } else {
      return x;
    }
  }).join('/');
}

export function buildStaticPages({ removeComments=true }={}){
  return ({ pages }) => {
    const rewriter = new HTMLRewriter()
    rewriter.onDocument({
      comments(c){ if(removeComments){ c.remove() } }
    })
    return pages.filter(page => page.mod.static_route)
      .map(page => ({
        [page.name.replace(/index$/,'')+'/index.html']: rewriter.transform(page['ssr.html'])
      }))
  }
}

export function buildIttyFetch({ pull_type }){
  return ({ pages }, { relative_path }) => {
    let imports_str = `import { AutoRouter, html } from 'itty-router'\n`
    imports_str += `import { render } from 'zilk'\n`
    imports_str += `import * as _document from '${relative_path(pages._document)}'\n`
    let content_str = `const router = AutoRouter()\n`
    content_str += `async function writeHTML(mod,req){
    if(mod.${pull_type}){ req.pull = await mod.${pull_type}(req) }
    let [meta, content] = await Promise.all([mod.meta(req),mod.content(req)])
    return html(render(String,_document.template({ meta, content })))\n}\n`
    pages.filter(p => !p.mod.static_route).forEach((page,i) => {
      imports_str += `import * as $p${i} from '${relative_path(page.vfs['server.js'])}'\n`
      content_str += `router.get('${page.route_pattern}', req => writeHTML($p${i},req))\n`
    })
    content_str += `export function handler(req,server){\n`
    content_str += `  return router.fetch(req)\n`
    content_str += `}`
    return imports_str + content_str
  }
}

export function buildRouter({ pull_type }){
  return ({ pages }, { relative_path }) => {
    let import_str = `import { createRouter } from 'zilk/router'\n`
    import_str += `import { setup, redirects } from '${relative_path(pages._document)}'\n`
    let register_str = `let router = createRouter({ redirects, pages: {\n`
    pages.forEach((page,i) => {
      import_str += `import * as $p${i} from '${relative_path(page.vfs['client.js'])}'\n`
      register_str += `'${page.route_pattern}': wrap($p${i}),\n`
    })
    register_str += `}});\n`
    register_str += `setup(router);\n`
    register_str += `export { router }\n`
    let helpers_str = `function wrap(mod) {
    return async req => {
      if (mod.${pull_type}) req.pull = await mod.${pull_type}(req);
      let [meta, content] = await Promise.all([mod.meta(req),mod.content(req)])
      return { meta, content };
    };\n}`
    return import_str + register_str + helpers_str
  }
}
import { Model, css } from 'zilk'
import { Build } from './Build.js';
import { Script } from './Script.js'
import { $ } from 'bun'
import path from 'path'
import fs from 'fs'

const handler_transpiler = new Bun.Transpiler({
  loader: "js",
  exports: {
    eliminate: ['style','default']
  },
  trimUnusedImports: true,
  target: 'browser'
});

const render_transpiler = new Bun.Transpiler({
  loader: "js",
  exports: {
    eliminate: ['style','handlers']
  },
  trimUnusedImports: true,
  target: 'browser'
});


export function Views({
  output:{
    global_css,
    global_hydration
  }
  // lazy: [] // list of components to only load when they're seen (async)
  // instant: [] // list of components to hydrate as soon as possible
}={}){

  let FileModel = Model(Script,{
    get css(){
      if(this.module.style){
        return this.module.style().toString()
      }
      return ''
    },
    get render_transpilation(){
      let { route } = this
      return `// src:${route}\n` + render_transpiler.transformSync(this.contents)
    },
    get handler_transpilation(){
      let { route } = this
      return `// src:${route}\n` + handler_transpiler.transformSync(this.contents)
    },
    get classify_prefix(){
      let matches = /classify\(['"]([\w"'_]+)['"]\)/.exec(this.contents)
      if(matches){
        if(matches.length == 2){
          return matches[1]
        }
        console.log('TODO: only 1 classify per view')
      } else {
        console.log('No classify call found')
      }
    },
    get handler_classes(){
      let { module } = this
      return module.handlers ? Object.keys(module.handlers) : []
    }
  })

  return Model(Build,{
    filter: '**/[^_]*.js',
    input_dir: 'views',
    FileModelCallback: () => FileModel,
    build_each(view){
      let out = {}
      if(global_hydration){
        out[`.zilk/views/${view.name}/handler.js`] = view.handler_transpilation
      }
      out[`.zilk/views/${view.name}/render.js`] = view.render_transpilation
      return out
    },
    build_all(views){
      let out = {}
      if(global_css){
        out[`.zilk/css/views.css`] = build_stylesheet({ views })
      }
      if(global_hydration){
        out[`.zilk/browser/hydration.js`] = build_hydration({ views })
      }
      return out;
    },
    async prompt_create({ Text, List }){
      let component_name = await Text({
        message: 'Component name?'
      })
    
      let classes_list = (await List({
        message: 'List classes (space separated)',
        separator: ' '
      })).map(s => s.toUpperCase())
  
      return {
        [`./views/${component_name}.js`]: `
          import { html, css, classify } from 'zilk';
          let { ${classes_list.join(', ')} } = classify('${component_name}');
  
          export default () => html\`
            
          \`
  
          export let style = () => css\`
  
          \`
        `
      }
    }
  })
}

function build_stylesheet({ views }){
  let agg_css = ""
  views.forEach(({ css }) => {
    agg_css += css
  });
  return agg_css
}

function build_hydration({ views }){
  let imports = [`import { saturate } from 'zilk/hydrate'`]
  let defines = []
  views.forEach(({ name, handler_classes },i) => {
    if(handler_classes.length > 0){
      let vname = `$h${i}`
      imports.push(`import {handlers as ${vname}} from '${path.join('../views/',name+'/handler.js')}'`)
      defines.push(`saturate(${vname})`)
    }
  });
  return `${imports.join('\n')}\n${defines.join('\n')}`
}
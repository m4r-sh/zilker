import { fmt } from 'zilk'
import { extractTranspilers, nameToPattern, InputFolder } from '../core'

export const Views = async (config) => {

  let transpilers = extractTranspilers({
    handlers: {
      target: 'browser',
      exports: ['handlers']
    },
    csr: {
      target: 'browser',
      exports: ['default'] 
    },
    ssr: {
      target: 'bun',
      exports: ['default']
    },
    full: {
      target: 'browser'
    }
  })

  return new InputFolder(
  // CONFIG
  {
    ignore: /\/_|^_/,
    glob: '**/*.js',
    config,
    async each({ p, name, mod, contents }){
      if(!mod.default || typeof mod.default != 'function'){ throw 'skip' }
  
      let out = {}
      out.has_handlers = mod.handlers && Object.values(mod.handlers).filter(o => o).length > 0
      out.has_style = mod.style && typeof mod.style == 'function'
      if(out.has_style){
        out['styles.css'] = mod.style().toString()
      }
      if(out.has_handlers){
        out['handlers.js'] = transpilers.handlers.transformSync(contents)
      }
      out['render.js'] = transpilers.csr.transformSync(contents)
      out['server.js'] = transpilers.ssr.transformSync(contents)
      out['full.js'] = transpilers.full.transformSync(contents)
      return out
    }
  },
  // BUILDS
  {
    
    hydration({ filter='' }={}){
      return (views, { relative_path }) => {
        let live_views = views.filter(view => view.has_handlers)
        return fmt.js`
          import { hydrate } from 'zilk/hydrate'
          ${live_views.map((view,i) => fmt.js`
            import { handlers as $h${i} } from '${relative_path(view.vfs['handlers.js'])}'  
          `).join('\n')}
          ${live_views.map((view,i) => fmt.js`
            hydrate($h${i})
          `).join('\n')}
        `
      }
    },

    styles_css({ filter='' }={}){
      return (views, { relative_path }) => {
        let styled_views = views.filter(view => view.has_style)
        return fmt.css`
          ${styled_views.map(view => view['styles.css']).join('\n\n')}
        `
      }
    },
  },
  // ACTIONS
  {
    create: {
      options: {},
      schema: {},
      label: ['+', 'New View'],
      llms: {
        director: {
          system_prompt: ``,
          prompt: ``,
          schema: {},
          autoselect: `gpt-5`
        },
        zemmet_expert: {
          system_prompt: ``,
          prompt: ``,
          schema: {},
          autoselect: `gpt-4o`
        },
        css_expert: {
          system_prompt: ``,
          prompt: ``,
          schema: {},
          autoselect: `gpt-4o`
        },
        reviewer: {
          system_prompt: ``,
          prompt: ``,
          schema: {},
          autoselect: `gpt-5`
        }
      },
      async *flow(args={}, { askGaps, emmetHTML, emmetCSS, input, llms }){
        
        let { name, emmet } = yield askGaps(args,{
          name: input({ 
            message: 'Component Name',
            default: 'Button'
          }),
          emmet: emmetHTML({
            message: 'zemmet html',
            default: '.$WRAP>.$INNER>.$LABEL>$label'
          }),
          llm: input({
            message: 'short description of intention',
            default: 'Inline button with svg icon on left, label on right'
          })
        })
      
        /* .$WRAP>.$INNER>.$LABEL>$label */
      
      
        let { classes, params, html } = emmet
        name = name.at(0).toUpperCase() + name.substring(1)
      
        let styles_by_class = {}
      
        for(let c of classes){
          styles_by_class[c] = yield emmetCSS({
            message: `(css) .\${${c}}`
          })()
        }
      
        return {
          [`./${name}.js`]: fmt.js`
            import { html, css, classify } from 'zilk'
            
            let { ${classes.join(', ')} } = classify("${name}")
      
            export default ({
              ${params.map(p => `${p} = ''`).join(',\n')}
            }={}) => html\`
              ${html}
            \`
      
            export let handlers = {
              // BEHAVIOR
            }
      
            export let style = () => css\`
              ${classes.map(c => fmt.js`
                .\${${c.replaceAll('--','.')}}{
                  ${styles_by_class[c]}
                }
              `).join('\n')}
            \`
          `
        }
      }
    },
  }

  )
}

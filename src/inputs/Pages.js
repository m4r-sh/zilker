import { fmt } from 'zilk'
import { extractTranspilers, nameToPattern, InputFolder } from '../core'

export const Pages = async (config) => {

  let cwd = process.cwd()

  let [_document,zilk] = await Promise.all([
    import(cwd + '/inputs/' + config._document),
    import(Bun.resolveSync('zilk',cwd))
  ])

  let transpilers = extractTranspilers({
    browser: {
      target: 'browser',
      exports: ['content','meta','pull_browser']
    },
    bun: {
      target: 'bun',
      exports: ['content','meta','pull_bun'] 
    },
    cf: {
      target: 'browser',
      exports: ['content', 'meta','pull_cf']
    }
  })

  return new InputFolder(
  // CONFIG
  {
    ignore: /\/_|^_/,
    glob: '**/*.js',
    config,
    async each({ p, name, mod, contents }){
      let out = {}
      out.route_pattern = nameToPattern(name)
      out['client.js'] = transpilers.browser.transformSync(contents)
      out['server.js'] = transpilers.bun.transformSync(contents)
      out['cf.js'] = transpilers.cf.transformSync(contents)
      
      if(mod.static_route){
        let [meta, content] = await Promise.all([ mod.meta(), mod.content() ])
        let str = zilk.render(String,_document.template({ meta, content }))
        out['ssr.html'] = str
        out['meta.json'] = JSON.stringify(meta,null,2)
      }
      return out
    }
  },
  // BUILDS
  {
    
    static_pages({ removeComments=true }={}){
      const rewriter = new HTMLRewriter()
      rewriter.onDocument({
        comments(c){ if(removeComments){ c.remove() } }
      })
      return (pages) => pages.filter(page => page.mod.static_route)
        .map(page => ({
          [page.name.replace(/index$/,'')+'/index.html']: rewriter.transform(page['ssr.html'])
        }))
    },

    itty_fetch({ pull_type }){
      return (pages, { relative_path }) => {
        let dynamic_pages = pages.filter(p => !p.mod.static_route)
        return fmt.js`
          import { createHandler } from 'zilk/fetch'
          import { template, redirects } from '${relative_path(pages.config._document)}'
          ${ dynamic_pages.map((page,i) => fmt.js`
            import * as $p${i} from '${relative_path(page.vfs['server.js'])}'  
          `).join('\n')}
          export const handler = createHandler({
            pull: "${pull_type}",
            template,
            redirects,
            pages: {
              ${dynamic_pages.map((page,i) => fmt.js`
                '${page.route_pattern}': $p${i},
              `).join('\n')}
            }
          })
        `
      }
    },

    cf_fetch({ pull_type }){
      return (pages, { relative_path }) => {
        let dynamic_pages = pages.filter(p => !p.mod.static_route)
        return fmt.js`
          import { AutoRouter, html } from 'itty-router'
          import { render } from 'zilk'
          import * as _document from '${relative_path(pages.config._document)}'
          ${ dynamic_pages.map((page,i) => fmt.js`
            import * as $p${i} from '${relative_path(page.vfs['cf.js'])}'  
          `).join('\n') }

          const router = AutoRouter()
          async function writeHTML(mod,req){
            if(mod.${pull_type}){ req.pull = await mod.${pull_type}(req) }
            let [meta,content] = await Promise.all([mod.meta(req), mod.content(req)])
            return html(render(String,_document.template({ meta, content })))
          }

          ${ dynamic_pages.map((page,i) => fmt.js`
            router.get('${page.route_pattern}', req => writeHTML($p${i}, req))
          `).join('\n') }
          export default {
            async fetch(req, env, ctx){
              req.env = env;
              req.ctx = ctx;
              return router.fetch(req)
            }
          }
        `
      }
    },

    client_nav({ pull_type }){
      return (pages, { relative_path }) => {
        return fmt.js`
          import { createRouter } from 'zilk/nav'
          import { setup, redirects } from '${relative_path(pages.config._document)}'
          ${pages.map((page,i) => fmt.js`
            import * as $p${i} from '${ relative_path(page.vfs['client.js']) }'
          `).join('\n')}
          let router = createRouter({
            pull: '${pull_type}',
            redirects,
            pages: {
              ${pages.map((page,i) => fmt.js`
                '${page.route_pattern}': $p${i},
              `).join('\n')}
            }
          })
          if(setup){ setup(router) }
          export { router }
        `
      }
    }
  },
  // ACTIONS
  {
    
  }

  )
}

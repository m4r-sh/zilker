import { fmt } from 'zilk'
import { version as zilker_version, dependencies as zilker_dependencies } from '../../../package.json'

export async function init(){

  let files_to_write = {
    'inputs/pages/_document.js': writeDocument(),
    'inputs/assets/global.css.js': writeGlobalStyles(),
    'inputs/views/Nav.js': writeNav(),
    'zilker.js': writeConfig(),
    'package.json': writePackage()
  }

  await Promise.all(
    Object.entries(files_to_write).map(async ([p,contents]) => {
      await Bun.write(`./${p}`, contents)
    })
  )
}

function writePackage(){
  return JSON.stringify({
    name: 'new-zilker-project',
    version: '0.0.1',
    scripts: {
      'dev': 'zilker dev',
      'build': 'zilker build'
    },
    dependencies: {
      'zilk': zilker_dependencies.zilk
    },
    devDependencies: {
      'zilker': '^' + zilker_version
    }
  }, null, 2)
}

function writeNav(){
  return fmt.js`
    import { html, css, classify } from 'zilk'

    const { TITLE } = classify('Nav')

    export default ({
      title="Hello"
    }={}) => html\`
      <h1 class=\${TITLE}>
        \${title}
      </h1>
    \`

    export let handlers = {
      [TITLE]: {
        onclick(e){
          console.log(e)
        }
      }
    }

    export let style = () => css\`
      .\${TITLE}{
        font-size: 3rem;
        background-color: #DA0;
        color: #000;
      }
    \`
  `
}

function writeGlobalStyles(){
  return fmt.js`
    import { css } from 'zilk'

    export default () => css\`
      \${reset()}
      /* TODO: define fonts */
      html,body{
        font-family: serif;
        font-size: 14px; 
        background-color: #ffffff;
        color: #000000;
        line-height: 1.5;
        font-weight: normal;
      }
    \`.toString()

    function reset(){
      return css\`
        /* Box sizing rules */
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        /* Remove default padding */
        ul,
        ol,
        button {
          padding: 0;
        }

        /* Remove default margin */
        body,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        ul,
        ol,
        li,
        figure,
        figcaption,
        blockquote,
        dl,
        dd {
          font-size: 1rem;
          margin: 0;
        }

        /* Set core body defaults */
        body {
          scroll-behavior: smooth;
        }

        ul,
        ol {
          list-style: none;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        button{
          cursor: pointer;
          outline: none;
          border: none;
          background: transparent;
        }

        /* Inherit fonts for inputs and buttons */
        input,
        button,
        textarea,
        select {
          font: inherit;
        }

        /* Remove all animations and transitions for people that prefer not to see them */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      \`
    }
  `
}

function writeDocument(){
  return fmt.js`
    import { html, render } from 'zilk'

    import Nav from '../views/Nav.js'

    export let redirects = {
      '/home': '/'
    }

    export function template({ meta, content }){
      return html\`
        <html>
          <head>

            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
            <base href="/" >
            <title>\${meta.title}</title>

            <link rel="stylesheet" href="/global.css" />
            <link rel="stylesheet" href="/views.css" />
            <script src="/hydration.js" type="module"></script>
            <script src="/router.js" type="module"></script>
          </head>
          <body>
            <main id="root">
              \${content}
            </main>
          </body>
        </html>
      \`
    }

    export function setup(router){
      let root = document.getElementById('root')
      router.performTransition(({ content, meta }) => {
        render(root,content)
        if(meta.title){ document.title = meta.title }
      })
      router.onStart(() => console.log('start'))
      router.onError((e) => console.log(e))
      router.onCancel(() => console.log('cancel'))
    }
  `
}

function writeConfig(){
  return fmt.js`
    import { Assets, Pages, Views } from 'zilker/inputs'
    
    export let server = {
      port: 3000,
      development: true,
      static_dir: 'outputs/public',
      fetch_handler: 'outputs/api/fetch.js',
      static_headers: {
        'Cross-Origin-Opener-Policy': 'same-origin',
        'Cross-Origin-Embedder-Policy': 'require-corp',
        'Cross-Origin-Resource-Policy': 'same-origin'
      }
    }
    
    export let inputs = {
      assets: Assets(),
      pages: Pages({
        _document: 'pages/_document.js'
      }),
      views: Views()
    }
    
    export let outputs = [
      // INPUTS
      ({ pages }) => ({
        'public/(pages)/': pages.static_pages(),
        'bun/fetch.js': pages.itty_fetch({ pull_type: 'pull_bun' }),
        'browser/router.js': pages.router({ pull_type: 'pull_browser' })
      }),
      ({ views }) => ({
        'browser/': {
          'hydration.js': views.hydration(),
          'views.css': views.styles()
        }
      }),
      ({ assets }) => ({
        'public/(assets)/': assets.map(asset => ({
          [asset.output_path]: asset.blob
        }))
      }),
      // OUTPUTS
      {
        'public/(js)/': (_,{ output }) => Bun.build({
          entrypoints: output.filter(p => p.startsWith('browser/') && p.endsWith('.js')),
          target: 'browser',
          minify: false,
          splitting: true
        }),
        'public/(css)/': (_, { output }) => Bun.build({
          entrypoints: output.filter(out => out.startsWith('browser/') && out.endsWith('.css')),
          minify: true
        }),
        'api/': (_,{output}) => Bun.build({
          entrypoints: output.filter(out => out.startsWith('bun/') && out.endsWith('.js')),
          target: 'bun',
          splitting: true,
          minify: false
        })
      },
      // OVERWRITE OUTPUTS
      {
        'public/(html)/': async (_,{ output }) => {
          let entrypoints = output.filter(out => out.startsWith('outputs/public/') && out.endsWith('.html'))
          const rewriter = new HTMLRewriter()
          rewriter.on('script',{
            async element(element) {
              let src = element.getAttribute('src')
              let hash = Buffer.from(Bun.hash(
                (await Bun.file('./outputs/public'+src).arrayBuffer())
                ,1234
              ).toString(16),'hex').toString('base64url')
              element.setAttribute('src',element.getAttribute('src') + '?v=' + hash)
            },
          })
          let out = await Promise.all(entrypoints.map(async (p) => {
            const result = await rewriter.transform(await Bun.file('./'+p).text());
            return { [p.replace('outputs/public/','')]: result }
          }))
          return out
        }
      }
    ]
  `
}
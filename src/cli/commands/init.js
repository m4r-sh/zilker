// Scaffold a project (package.json, zilker.js, choose builders, )
import fs from 'fs'

export async function init(){
  // TODO: read current dir to check if project already exists
  if(!fs.existsSync('./views')){ fs.mkdirSync('./views') }
  if(!fs.existsSync('./pages')){ fs.mkdirSync('./pages') }
  if(!fs.existsSync('./models')){ fs.mkdirSync('./models') }
  if(!fs.existsSync('./assets')){ fs.mkdirSync('./assets') }

  await Bun.write('./views/Nav.js',createViewSource('Nav'))
  await Bun.write('./models/Menu.js',createModelSource('Menu'))
  await Bun.write('./pages/index.js',createPageSource('index'))
}

function createViewSource(name){
  name = name[0].toUpperCase() + name.substring(1)
  return `import { html, css, classify } from 'zilk'

let { ${name.toUpperCase()} } = classify('${name}')

export default () => html\`
  <div class=\${${name.toUpperCase()}} />
\`

export let handlers = {
  [${name.toUpperCase()}]: {
    init(){
      console.log('here')
    }
  }
}

export let style = () => css\`
  .\${${name.toUpperCase()}}{
    border: 1px solid red;
  }
\``
}

function createModelSource(name){
  name = name[0].toUpperCase() + name.substring(1)
  return `import { Model } from 'zilk'

export const ${name} = Model({
  // model definition
})`
}

function createPageSource(){
  return `import { html } from 'zilk'

export let meta = {
  title: "Example",
  description: "description"
}

export default () => html\`

\``
}
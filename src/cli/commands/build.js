import { get_config } from '../src/get_config.js'
import { Glob, $ } from 'bun'
import browserslist from 'browserslist';
import { transform, browserslistToTargets } from 'lightningcss'
import fs from 'fs'
import path from 'path'

const isGenerator = fn => ['GeneratorFunction', 'AsyncGeneratorFunction'].includes(fn.constructor.name)


function writeOutputObject(out={}){
  Object.keys(out).forEach((output_path) => {
    let should_skip = false
    let val = out[output_path]
    // if a function, resolve it
    if(typeof val == 'function'){
      if(isGenerator(val)){

      } else {

      }
    }
    if(val.then && typeof val.then == 'function'){
      // await promise
      should_skip = true
      Promise.resolve(val).then((res) => {
        Bun.write(output_path,res)
      })
    }
    if(typeof val == 'object' && !Buffer.isBuffer(val)){
      if(val.toString){
        val = val.toString()
      }
      // check for nested output object
    }
    if(!should_skip){
      Bun.write(output_path,val)
    }
  })
}

export async function executeBuild(build){
  await Promise.all(build.all_files.map(async buildfile => {
    await buildfile.update()
    writeOutputObject(build.build_each(buildfile))
  }))
  writeOutputObject(build.build_all(build.all_files))
}

export async function browser_bundle(){
  let browser_input_glob = new Glob('**.js')
  let browser_input_arr = Array.from(browser_input_glob.scanSync({
    cwd: path.join(process.cwd(), './.zilk/browser/')
  })).map(p => path.join(`./.zilk/browser/`,p))

  await bundleCSS()

  let res = await Bun.build({
    entrypoints: browser_input_arr,
    outdir: 'public/~z',
    minify: false,
    splitting: true,
    target: "browser",
    plugins: [
      {
        name: 'zilker-import-remapping',
        setup(build){
          build.onResolve({ filter: /views\/.+\.js$/ }, (args) => {
            if(args.importer.endsWith('hydration.js')){ return }
            let out = path.join(args.importer,'../../',args.path.substring(0,args.path.length-3) + '/render.js')
            return { path: out }
          })
          build.onResolve({ filter: /^\./ }, (args) => {
            let input_file = fs.readFileSync(args.importer,'utf8')
            let matches = /^\/\/[\s]*src:([^\n]+)\n/.exec(input_file)
            if(matches){
              let src_route = matches[1]
              return { path: path.join(src_route,'../',args.path)}
            }
          })
        }
      }
    ]
  })
  if(!res.success){ console.log(res) }
}

async function bundleCSS(){
  let browser_input_glob = new Glob('**.css')
  let browser_input_arr = Array.from(browser_input_glob.scanSync({
    cwd: path.join(process.cwd(), './.zilk/css/')
  }))

  let outdir = 'public/'

  for(let input of browser_input_arr){
    let file_contents = await (Bun.file(path.join(`./.zilk/css/`,input))).arrayBuffer()
    let file_dest = path.join(outdir,input)
    let { code } = transform({
      filename: file_dest,
      minify: true,
      code: file_contents,
      targets: browserslistToTargets(browserslist('>= 0.25%'))
    })
    Bun.write(file_dest, code)
  }
}

export async function build(){
  let { builds } = await get_config()

  await Promise.all(builds.map(build => executeBuild(build)))
  await browser_bundle()
}
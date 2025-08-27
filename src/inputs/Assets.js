import { fmt } from 'zilk'
import { extractTranspilers, nameToPattern, InputFolder } from '../core'

export const Assets = async (config) => {
  return new InputFolder(
  // CONFIG
  {
    ignore: /\/_|^_/,
    glob: '**/*',
    config,
    async each({ p, name, mod, contents }){
      let out = {}
      let generated_format = getGeneratedFormat(name)
      out.output_path = generated_format ? name.substring(0,name.length-3) : name
      if(generated_format){
        out.blob = await mod.default()
      } else {
        out.blob = Bun.file(p)
      } 
      return out
    }
  },
  // BUILDS
  {
    static_assets({ removeComments=true }={}){
      return (assets) => assets.map(asset => ({ [asset.output_path]: asset.blob }) )
    }
  },
  // ACTIONS
  {
    
  }

  )
}


function getGeneratedFormat(route){
  let matches = route.match(/([\w-.\/]+)\.([\w]+)\.js$/)
  return matches ? matches[2] : false
}
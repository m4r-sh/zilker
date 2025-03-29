export function Asset(config){
  
  return {
    async setup(){
      
    },
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
  }
}

function getGeneratedFormat(route){
  let matches = route.match(/([\w-.\/]+)\.([\w]+)\.js$/)
  return matches ? matches[2] : false
}
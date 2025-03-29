import { InputGroup } from "../engine/InputGroup.js";
import { OutputTree } from "../engine/OutputTree.js";

export async function build({
  cwd=process.cwd(),
  config_path='zilker.js'
}={}){
  let config = await import(cwd + '/' + config_path)
  
  let input_groups = {}
  Object.entries(config.inputs).forEach(([k,v]) => {
    input_groups[k] = new InputGroup(k,v)
  })
  let output_tree = new OutputTree(config.outputs, input_groups) 


  // await Bun.$`rm -rf ${cwd + '/outputs'}`
  
  for (const group of Object.values(input_groups)) {
    await group.scan();
  }

  let out = await output_tree.build()
  return out
}


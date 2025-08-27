import { InputFolder } from "./InputFolder"
import { OutputTree } from './OutputTree'
import { spinner } from "../cli/prompts"
import { Server } from "./Server"

export async function readConfig({
  path='zilker.js',
  cwd=process.cwd()
}={}){
  let zilker_module
  let import_path = `${cwd}/${path}`
  try{
    zilker_module = await import(import_path)
  } catch(e){
    console.log('error reading config')
    console.log(e)
  }
  return zilker_module
}

export async function parseConfig(config){

  for(let key in config){
    if(!['inputs','outputs','server','studio'].includes(key)){
      console.log('warning: key ' + key + ' not supported in zilker')
    }
  }

  let inputs = {}
  await spinner('Loading inputs...', async ({ success }) => {
    await Promise.all(
      Object.entries(config.inputs).map(async ([input_dir, folder_obj_promise]) => {
        let folder_obj = await folder_obj_promise
        if(!(folder_obj instanceof InputFolder)){
          console.log('invalid input ' + input_dir + '... skipping')
        } else {
          folder_obj.setKey(input_dir)
          inputs[input_dir] = folder_obj
        }
      })
    )
    // await Bun.sleep(1000)
    success('Loaded inputs: ' + Object.keys(inputs).join(','))
  })

  let outputs = await spinner('Loading outputs...', async ({ success }) => {
    // await Bun.sleep(200)
    return new OutputTree(inputs,config.outputs)
  })
  
  let server
  if(config.server && typeof config.server == 'object'){
    server = new Server(config.server)
  }


  let studio
  // if(config.studio && typeof config.studio == 'object'){
  //   studio = new Studio(config.studio)
  // }

  return { inputs, outputs, server, studio }
}
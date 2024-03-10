import fs from 'fs'
import path from 'path'
import { Build } from 'zilker/files'

let default_localhost = {
  port: 3000,
  hostname: '0.0.0.0'
}


export async function get_config(config_filename='zilker.js'){

  let config_path = path.join(process.cwd(),config_filename)

  if(!fs.existsSync(config_path)){
    throw Error('No config file')
  }

  let config = await import(config_path)

  return await parseConfig(config)
}


export async function parseConfig(config){
  let { localhost, folders, ...rest } = config

  localhost = { ...default_localhost, ...localhost }

  if(Object.keys(rest).length > 0){
    console.log(`Unsupported exports in config: ${Object.keys(rest)}`)
  }

  let builds = []

  await Promise.all(Object.keys(folders).map(async dirname => {
    let build_orb = (await folders[dirname])({ input_dir: dirname })
    await build_orb.init()
    builds.push(build_orb)
  }))


  return { localhost, folders, builds }
  
}
import fs from 'fs'
import path from 'path'
import { Build } from 'zilker/files'

export async function get_config(config_filename='zilker.js'){

  let config_path = path.join(process.cwd(),config_filename)

  if(!fs.existsSync(config_path)){
    throw Error('No config file')
  }

  let config = await import(config_path)

  return await parseConfig(config)
}


let default_options = {
  port: 3000,
  hot_reload: false,
  static: './public',
  api: './api',
  verbose: true
}

export async function parseConfig(config){
  let { options, folders, ...rest } = config

  if(Object.keys(rest).length > 0){
    console.log(`Unsupported exports in config: ${Object.keys(rest)}`)
  }

  let builds = []

  await Promise.all(Object.keys(folders).map(async dirname => {
    let build_orb = folders[dirname]({ input_dir: dirname })
    await build_orb.init()
    builds.push(build_orb)
  }))

  // TODO: check for extra option keys
  // TODO: validate each option
  // TODO: ensure each folder value is typeof FolderModel
  // TODO: create / set global file list.
  // -> allows for traversing imports and calling `update()`
  // -> allows for getting the associated `view` model from imports from `pages`
  // 


  function buildAll(){
    // for each Build
    // build each individual file
    // then build aggregates
    // and output all files to filesystem
    
    // ALSO:
    // error messages
    // tips
    // analysis
    // normalized paths
    //
  }

  return { options, folders, builds }
  
}
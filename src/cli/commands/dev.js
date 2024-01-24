import { get_config } from '../src/get_config.js'
import { executeBuild, browser_bundle } from './build.js'
import { simple_server } from '../../engine/server.js'
import fs from 'fs'

// watch root directory 
// -> initialize all input files and their imports
// -> maintain a list of imports, starting with build inputs
// -> on file change, see if it exists in existing import graph
// -> if so, trigger update, flag corresponding flag is invalidated, and traverse import graph
// -> recurse this ^ until done, with list of changed files and corresponding builds
// -> trigger build.update()
// -> on delete, remove import tree
// -> on add, add to import tree
// -> if not in import list, check against globs for each build. must be adding *OR RENAMING* if not in import directory

export async function dev(){
  let { builds } = await get_config()

  await Promise.all(builds.map(build => executeBuild(build)))
  await browser_bundle()

  
  let watcher = fs.watch(process.cwd(),{ recursive: true }, async (event,filename) => {
    for(let i = 0; i < builds.length;i++){
      let build = builds[i]
      if(build.globber.match(filename)){
        console.log('update ' + build.input_dir)
        await executeBuild(build)
        await browser_bundle()
      }
    }
  })

  simple_server({ root: 'public', port: 3000 })
  console.log(`Serving at http://localhost:3000`)

}
import { get_config } from '../src/get_config.js'
import { executeBuild, browser_bundle } from './build.js'
import { simple_server } from '../src/server.js'
import fs from 'fs'
import { networkInterfaces as getNetworkInteraces } from 'node:os'

const networkInterfaces = getNetworkInteraces()

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
  let { builds, localhost } = await get_config()

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

  let server = simple_server({ 
    root: 'public',
    ...localhost,
    pages: builds.find(({ input_dir }) => {
      console.log(input_dir)
      return input_dir == 'pages'
    })
  })

  let network_hint = server.hostname == 'localhost' ? ` (${getNetworkAddress()}:${server.port})` : ''
  console.log(`server listening on ${server.hostname}:${server.port}${network_hint}`)
  
}

function getNetworkAddress(){
  for(const interfaceDetails of Object.values(networkInterfaces)){
    if(!interfaceDetails) continue;

    for(const details of interfaceDetails){
      const { address, family, internal } = details

      if(family == 'IPv4' && !internal) return address
    }
  }
}
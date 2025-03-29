import { InputGroup } from "../engine/InputGroup.js";
import { OutputTree } from "../engine/OutputTree.js";
import { DependencyGraph } from "../engine/DependencyGraph.js";
import { getHeaders, getNetworkAddress } from "../engine/server_utils.js";
import fs from 'fs'


export async function dev({
  cwd=process.cwd(),
  config_path='zilker.js'
}={}){
  let config = await import(cwd + '/' + config_path)
  
  let dependency_graph = new DependencyGraph(100);
  let input_groups = {}
  Object.entries(config.inputs).forEach(([k,v]) => {
    input_groups[k] = new InputGroup(k,v)
  })
  let output_tree = new OutputTree(config.outputs, input_groups) 


  await Bun.$`rm -rf ${cwd + '/outputs'}`

  let get_server_config = async () => {
    let server_settings = {
      port: 3000,
      development: true,
      static_dir: 'outputs/public',
      fetch_handler: 'outputs/api/fetch.js',
      ...config.settings.server
    }
    let { static_dir, fetch_handler, ...server_opts } = server_settings
    let fetch_module = await import(cwd + '/' + fetch_handler)
    let static_tree = {}
    for await (const file of (new Bun.Glob('**/*')).scan(cwd + '/' + static_dir)) {
      let abs_p = cwd + '/' + static_dir + '/' + file
      let static_path = '/'+file.replace(/(\/)?index.html$/,'')
      static_tree[static_path] = new Response(await Bun.file(abs_p).bytes(), {
        headers: {...getHeaders(abs_p), ...server_opts.static_headers },
      })
    }
    return {
      ...server_opts,
      fetch(req,s){
        return fetch_module.handler(req,s)
      },
      static: static_tree
    }
  }
  
  // PARALLEL
  // await Promise.all(
  //   Object.values(input_groups).map(async group => {
  //     let {files: input_files} = await group.scan()
  //     input_files.forEach(p => {
  //       dependency_graph.addSource(p)
  //     })
  //   })
  // )

  for (const group of Object.values(input_groups)) {
    let { files: input_files } = await group.scan();
    input_files.forEach(p => {
      dependency_graph.addSource(p);
    });
  }


  let server

  dependency_graph.onSourcesChanged(async (srcs) => {
    let build_start = Bun.nanoseconds()

    let out = await output_tree.build()
    let build_end = Bun.nanoseconds()
    if(!server){
      server = Bun.serve(await get_server_config())
      let network_hint = server.hostname == 'localhost' ? ` (${getNetworkAddress()}:${server.port})` : ''
      console.log(`server listening on ${server.hostname}:${server.port}${network_hint}`)
    } else {
      server.reload(await get_server_config())
    }
    let server_made = Bun.nanoseconds()

    console.log(`Built: ${Math.round((build_end - build_start)/1_000_000)}ms : Server reload: ${Math.round((server_made - build_end)/1_000_000)}ms`)

  })


  dependency_graph.tick()


  let config_file_list = []

  const watcher = fs.watch(cwd, { recursive: true }, async (event,filename) => {
    let p = cwd + '/' + filename
    let input_group = Object.values(input_groups).find(group => 
      group.matchPath(p.replace(cwd + '/',''))
    )
    if(input_group){

      for (const file of Object.keys(require.cache).filter(s => !s.includes('stabilimentum/packages')))
        delete require.cache[file]
      let { added, removed } = await input_group.scan()
      if(added.length == 0 && removed.length == 0){
        await dependency_graph.updateSource(p)
      } else {
        await Promise.all(
          ...added.map(p => dependency_graph.addSource(p)),
          ...removed.map(p => dependency_graph.removeFile(p))
        )
      }
    } else if(dependency_graph.checkIfTracked(p)){
      await dependency_graph.updateDependency(p)
    }
    dependency_graph.tick()
  })
  

  process.on("SIGINT", async () => {
    await Bun.$`rm -rf ${cwd + '/outputs/.temp'}`
    watcher.close();
    process.exit(0);
  });
}


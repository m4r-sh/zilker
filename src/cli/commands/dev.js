import { DependencyGraph } from "../../core"
import { spinner } from "../prompts"
import fs from 'fs'

export async function dev({inputs, outputs, server }){

  let cwd = process.cwd()

  let dependency_graph = new DependencyGraph(100)

  await spinner('scanning inputs', async () => {
    for(const folder of Object.values(inputs)){
      let { files: input_files } = await folder.scan();
      input_files.forEach(p => {
        dependency_graph.addSource(p);
      });
    }
  })

  await spinner('building outputs', async () => {
    let out = await outputs.build()
  })

  server.update()



  dependency_graph.onSourcesChanged(async (srcs) => {
    let build_start = Bun.nanoseconds()

    let out = await outputs.build()
    let build_end = Bun.nanoseconds()
    server.update()
    let server_made = Bun.nanoseconds()

    console.log(`Built: ${Math.round((build_end - build_start)/1_000_000)}ms : Server reload: ${Math.round((server_made - build_end)/1_000_000)}ms`)

  })
  
  
  const watcher = fs.watch(cwd+'/inputs/', { recursive: true }, async (event,filename) => {
    let p = cwd + '/inputs/' + filename
    let input_folder = Object.values(inputs).find(folder => 
      folder.matchPath(p.replace(cwd + '/',''))
    )
    if(input_folder){

      for (const file of Object.keys(require.cache).filter(s => !s.includes('/zilk/dist')))
        delete require.cache[file]
      let { added, removed } = await input_folder.scan()
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
  })
  

  process.on("SIGINT", async () => {
    await Bun.$`rm -rf ${cwd + '/outputs/.temp'}`
    watcher.close();
    server.stop(true);
    process.exit(0);
  });
}
import { spinner } from "../prompts"

export async function build({inputs, outputs}){
  await spinner('scanning inputs', async () => {
    for(const folder of Object.values(inputs)){
      await folder.scan()
    }
  })

  await spinner('building outputs', async () => {
    let out = await outputs.build()
  })
  
  
}
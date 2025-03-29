build()

async function build(){
  let builds = [
    {
      entrypoints: ['./src/cli/index.js'],
      outdir: './dist/cli',
      minify: false,
      target: 'bun'
    },
    {
      entrypoints: ['./src/inputs/index.js'],
      outdir: './dist/inputs',
      minify: false,
      target: 'bun'
    },
    {
      entrypoints: ['./src/index.js'],
      outdir: './dist/engine',
      minify: false,
      target: 'bun'
    }
  ]

  for(let i = 0; i < builds.length; i++){
    let res = await Bun.build(builds[i])
    if(!res.success) console.log(res)
  }
}
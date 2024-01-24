build()

// TODO: Split by bun vs node


async function build(){
  let builds = [
    {
      entrypoints: ['./src/cli/index.js'],
      outdir: './dist/cli',
      minify: false,
      naming: '[dir]/[name].[ext]',
      target: 'bun'
    },
    {
      entrypoints: ['./src/files/index.js'],
      outdir: './dist/files',
      minify: false,
      naming: '[dir]/[name].[ext]',
      target: 'bun'
    }
  ]

  for(let i = 0; i < builds.length; i++){
    let res = await Bun.build(builds[i])
    if(!res.success) console.log(res)
  }
}
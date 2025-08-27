

export function hashSourcesHTML({
  startsWith='public/',
  endsWith='.html'
}){
  return async (_,{ output }) => {
    let entrypoints = output.filter(out => out.startsWith(startsWith) && out.endsWith(endsWith))
    const rewriter = new HTMLRewriter()
    rewriter.on('script',{
      async element(element) {
        let src = element.getAttribute('src')
        let hash = Buffer.from(Bun.hash(
          (await Bun.file('./public'+src).arrayBuffer())
          ,1234
        ).toString(16),'hex').toString('base64url')
        element.setAttribute('src',element.getAttribute('src') + '?v=' + hash)
      },
    })
    return await Promise.all(
      entrypoints.map(async (p) => ({
        [p]: await rewriter.transform(await Bun.file('./'+p).text())
      }))
    )
  }
}
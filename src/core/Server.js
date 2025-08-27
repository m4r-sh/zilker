import { networkInterfaces as getNetworkInteraces } from 'node:os'

const networkInterfaces = getNetworkInteraces()

export class Server { 
  constructor(config){
    // TODO: merge defaults with options in zilker.js
    this.config = {
      port: 3000,
      ...config
    }
    this.server = null
  }

  async update(){
    let manifest = await this.getManifest()
    if(this.server){
      this.server.reload(manifest)
    } else {
      this.server = Bun.serve(manifest)
      let network_hint = this.server.hostname == 'localhost' ? ` (${getNetworkAddress()}:${this.server.port})` : ''
      console.log(`server listening on ${this.server.hostname}:${this.server.port}${network_hint}`)
    }
  }

  async stop(closeActiveConnections=false){
    this.server.stop(closeActiveConnections)
  }

  async getManifest(){

    let cwd = process.cwd()
    let fetch_module
    let { static_dir, fetch_handler, ...server_opts } = this.config
    if(fetch_handler && typeof fetch_handler == 'string'){
      fetch_module = await import(cwd + '/' + fetch_handler)
    }
    let static_tree = {}
    for await (const file of (new Bun.Glob('**/*')).scan(cwd + '/' + static_dir)) {
      let abs_p = cwd + '/' + static_dir + '/' + file
      let static_path = '/' + file;
      // TODO: either load in memory or keep lazy depending on size / frequency
      static_tree[static_path] = new Response(await Bun.file(abs_p).bytes(), {
        headers: { ...getHeaders(abs_p), ...server_opts.static_headers },
      });

      // If it ends with index.html, also add a route for the base path
      if (/(^|\/)index\.html$/.test(file)) {
        let extra_path = '/' + file.replace(/(^|\/)index\.html$/, '');
        static_tree[extra_path] = new Response(await Bun.file(abs_p).bytes(), {
          headers: { ...getHeaders(abs_p), ...server_opts.static_headers },
        });
      }
    }
    return {
      ...server_opts,
      routes: {
        ...static_tree,
        ...server_opts.routes
      },
      fetch(req,s){
        let res
        if(fetch_module){
          res = fetch_module.handler(req,s)
        }
        if(res){ return res }
        if(server_opts.fetch){
          res = server_opts.fetch(req,s)
        }
        if(res){ return res }
        return new Response(`404!`, { status: 404 })
      },
      error(e){
        console.error(e)
        return new Response(`Internal Error: ${e.message}`, {
          status: 500,
          headers: {
            "Content-Type": "text/plain",
          },
        });
      },
    }
  }
}



const headersMap = {
  html: { 'Content-Type': 'text/html; charset=utf-8' },
  js: { 'Content-Type': 'application/javascript' },
  css: { 'Content-Type': 'text/css' },
  xml: { 'Content-Type': 'application/xml' },
  svg: { 'Content-Type': 'image/svg+xml' },
  gif: { 'Content-Type': 'image/gif' },
  png: { 'Content-Type': 'image/png' },
  jpeg: { 'Content-Type': 'image/jpeg' },
  jpg: { 'Content-Type': 'image/jpeg' },
  ico: { 'Content-Type': 'image/x-icon' },
  json: { 'Content-Type': 'application/json' },
  txt: { 'Content-Type': 'text/plain; charset=utf-8' },
  pdf: { 'Content-Type': 'application/pdf' },
  wasm: { 'Content-Type': 'application/wasm' },
  webp: { 'Content-Type': 'image/webp' },
  mp4: { 'Content-Type': 'video/mp4' },
  webm: { 'Content-Type': 'video/webm' },
  mp3: { 'Content-Type': 'audio/mpeg' },
  ogg: { 'Content-Type': 'audio/ogg' },
  wav: { 'Content-Type': 'audio/wav' },
  ttf: { 'Content-Type': 'font/ttf' },
  woff: { 'Content-Type': 'font/woff' },
  woff2: { 'Content-Type': 'font/woff2' },
  avif: { 'Content-Type': 'image/avif' },
  zip: { 'Content-Type': 'application/zip' },
  tar: { 'Content-Type': 'application/x-tar' },
  gz: { 'Content-Type': 'application/gzip' },
  csv: { 'Content-Type': 'text/csv' },
  md: { 'Content-Type': 'text/markdown; charset=utf-8' },
};

export function getHeaders(p){
  const ext = p.split('.').pop().toLowerCase();
  return headersMap[ext] || { 'Content-Type': 'application/octet-stream' };
};

export function getNetworkAddress(){
  for(const interfaceDetails of Object.values(networkInterfaces)){
    if(!interfaceDetails) continue;

    for(const details of interfaceDetails){
      const { address, family, internal } = details

      if(family == 'IPv4' && !internal) return address
    }
  }
}
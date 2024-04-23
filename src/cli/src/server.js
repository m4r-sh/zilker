import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { Pages } from '../../files/Pages'

export function simple_server({
  root='./public',
  port=3000,
  hostname="0.0.0.0",
  pages=Pages()
}={}){
  const app = new Hono()

  pages.all_files.forEach(page => {
    app.get(`${page.route_str}`, (c) => {
      let params = c.req.param()
      console.log(params)
      return c.html(page.param_render(params))
    })
  });
  
  app.get('*', serveStatic({ root }))

  return Bun.serve({
    fetch(req){
      return app.fetch(req)
    },
    error(e){
      console.log('Error from Bun.serve')
      console.log(e)
    },
    // hostname: hostname,
    port: port
  })
}
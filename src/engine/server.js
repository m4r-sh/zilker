import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'

export function simple_server({
  root='./public',
  port=3000
}={}){
  const app = new Hono()

  // pages.forEach(page => {
  //   app.get(`${page.route_str}`, (c) => {
  //     let params = c.req.param()
  //     console.log(params)
  //     return c.html(page.html_page)
  //   })
  // });
  
  app.get('*', serveStatic({ root }))

  return Bun.serve({
    fetch(req){
      return app.fetch(req)
    },
    error(){
      console.log('Error from Bun.serve')
    },
    port: port
  })
}
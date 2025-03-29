export function View(config){
  
  return {
    async setup(){
      let transpiler_settings = {
        loader: "js",
        trimUnusedImports: true,
        target: 'browser'
      }
      this.handler_transpiler = new Bun.Transpiler({
        ...transpiler_settings,
        exports: { eliminate: ['style','default'] },
      });
      this.render_transpiler = new Bun.Transpiler({
        ...transpiler_settings,
        exports: { eliminate: ['style','handlers'] },
      });
      this.server_transpiler = new Bun.Transpiler({
        ...transpiler_settings,
        target: 'bun',
        exports: { eliminate: ['style','handlers'] },
      });
      this.full_transpiler = new Bun.Transpiler(transpiler_settings)
    },
    async each({ p, name, mod, contents }){

      if(!mod.default || typeof mod.default != 'function'){ throw 'skip' }
  
      let out = {}
      out.has_handlers = mod.handlers && Object.values(mod.handlers).filter(o => o).length > 0
      out.has_style = mod.style && typeof mod.style == 'function'
      if(out.has_style){
        out['styles.css'] = mod.style().toString()
      }
      if(out.has_handlers){
        out['handlers.js'] = this.handler_transpiler.transformSync(contents)
      }
      out['render.js'] = this.render_transpiler.transformSync(contents)
      out['server.js'] = this.server_transpiler.transformSync(contents)
      out['full.js'] = this.full_transpiler.transformSync(contents)
  
      return out
    }
  }
}
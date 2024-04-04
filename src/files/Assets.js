import { Model } from 'zilk'
import { Build } from './Build.js';
import { File } from './File.js'
import path from 'path'
import fs from 'fs'

export function Assets({
  output={}
}={}){

  let FileModel = Model(File,{
    module: null,
    _generated_contents: '',
    get transpilation(){
      return transpiler.scan(this.contents)
    },
    get imported(){
      return this.transpilation.imports
    },
    get is_generated(){
      // route must end with .[ext].js
      let regex = /([\w-.]+)\.([\w]+)\.js$/
      let matches = this.route.match(regex)
      return matches ? matches[2] : false
    },
    get filetype(){
      let { is_generated, route } = this
      return is_generated ? is_generated : route.substring(route.lastIndexOf('.')+1)
    },
    get asset_contents(){
      return (this.is_generated && this.filetype != 'worker') ? this._generated_contents : this.contents
    },
    get asset_route(){
      let { is_generated, name, route } = this
      return is_generated ? name : name + route.substring(route.lastIndexOf('.'))
    },
    async update(){
      // TODO: watch for import chain as well (same with any script)
      // maybe a flag "force" parameter that gets called by import scanner?
      let new_contents = fs.readFileSync(this.route)
      if(Buffer.compare(new_contents,this.contents) != 0){
        this.contents = new_contents
        Loader.registry.delete(this.route)
        if(this.is_generated && this.filetype != 'worker'){
          this.module = await import(this.route)
          let res = await this.module.default()
          this.update_generated_contents(res)
        } else {
          this.module = null
        }
      }
    },
    update_generated_contents(x){
      this._generated_contents = x
    }
  })

  return Model(Build,{
    filter: '**/[^_]*',
    input_dir: 'assets',
    FileModelCallback: () => FileModel,
    build_each(asset){
      let out = {}
      if(asset.filetype == 'js'){
        out[`.zilk/browser/${asset.asset_route}`] = asset.asset_contents
      } else if(asset.filetype == 'css'){
        out[`.zilk/css/${asset.asset_route}`] = asset.asset_contents
      } else if(asset.filetype == 'worker'){
        out[`.zilk/workers/${asset.asset_route}.js`] = asset.asset_contents
      } else {
        out[`public/${asset.asset_route}`] = asset.asset_contents
      }
      return out
    },
    build_all(assets){
      let out = {}
      return out;
    },
  })
}
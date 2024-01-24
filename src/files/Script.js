import { Model } from 'zilk'
import {File} from './File.js'
import fs from 'fs'

const transpiler = new Bun.Transpiler({
  loader: "js"
});

export let Script = Model(File,{
  module: {},
  get transpilation(){
    return transpiler.scan(this.contents)
  },
  get imported(){
    return [...this.transpilation.imports]
  },
  async update(){
    let new_contents = fs.readFileSync(this.route)
    if(Buffer.compare(new_contents,this.contents) != 0){
      this.contents = new_contents
      Loader.registry.delete(this.route)
      this.module = await import(this.route)
    }
  }
})
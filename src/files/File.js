import { Model } from 'zilk'
import fs from 'fs'

const transpiler = new Bun.Transpiler({
  loader: "js"
});

export let File = Model({
  _last_update: null,
  _contents: Buffer.from(''),
  route: '',
  name: '',
  get contents(){
    return this._contents
  },
  set contents(v){
    this._last_update = Date.now()
    this._contents = Buffer.from(v)
  },
  get updated(){
    return this._last_update
  },
  async update(){
    let new_contents = fs.readFileSync(this.route)
    if(Buffer.compare(new_contents,this.contents) != 0){
      this.contents = new_contents
      Loader.registry.delete(this.route)
    }
  }
})
import path from 'path'

export class InputFolder {

  constructor({ ignore, glob, each, config, prebuild }, builds, actions){
    Object.assign(this, { ignore, glob, each, prebuild, config, actions, builds })
    this.globber = new Bun.Glob(this.glob)
    this.inputs_map = new Map()
    this.input_objects = []
    this.file_list = []
  }

  setKey(str){
    if(this.key){ throw 'Key already set' }
    this.key = str
    this.vfs = `./outputs/.temp/${str}/`
    Object.entries(this.builds).forEach(([k,fn]) => {
      this[k] = (params) => {
        let build_cb = this.builds[k](params)
        return (i,o) => build_cb(i[this.key],o)
      }
    })
  }

  async scan(){
    let { ignore, globber, glob, each, vfs, prebuild } = this
    let file_list = []
    let glob_prefix = glob.substring(0,glob.indexOf('*'))
    let glob_postfix = glob.substring(glob.lastIndexOf('*')+1)
    for await(let p of globber.scan(`./inputs/${this.key}`)){
      if(ignore.test(p)){ continue; }
      const name = p.replace(glob_prefix,'').replace(glob_postfix,'')
      const ext = p.includes('.') ? p.split('.').pop() : ''
      p = process.cwd() + `/inputs/${this.key}/` + p
      let input_object = await createModel({ each, p, name, ext, vfs })
      if(input_object){
        this.inputs_map.set(p,input_object)
        file_list.push(p)
      } 
    }
    if(prebuild){
      await Promise.all(
        Object.keys(prebuild).map(async key => {
          let fn = prebuild[key]
          let content = await fn({ [this.key ]: this })
          await Bun.write(process.cwd() + '/inputs/' + this.key + '/' + glob_prefix + '/' + key, content)
        })
      )
    }
    let added = file_list.filter(p => !this.inputs_map.has(p))
    let removed = [...this.inputs_map.keys()].filter(p => !file_list.includes(p))
    return { added, removed, files: file_list }
  }

  matchPath(p){
    console.log('match path: ' + p)
    return p.startsWith(`inputs/${this.key}/`) && this.globber.match(p)
  }


  *[Symbol.iterator](){
    for(let [k,v] of this.inputs_map){
      yield v
    }
  }

  // Custom foreach
  forEach(callback, thisArg) {
    let index = 0;
    for (let item of this) {
      callback.call(thisArg, item, index, this);
      index++;
    }
  }
  
  // Custom map: callback(element, index, collection)
  map(callback, thisArg) {
    const result = [];
    let index = 0;
    for (let item of this) {
      result.push(callback.call(thisArg, item, index, this));
      index++;
    }
    return result;
  }
  
  // Custom filter: callback(element, index, collection)
  filter(callback, thisArg) {
    const result = [];
    let index = 0;
    for (let item of this) {
      if (callback.call(thisArg, item, index, this)) {
        result.push(item);
      }
      index++;
    }
    return result;
  }
  
  // Custom reduce
  reduce(callback, initialValue) {
    let accumulator = initialValue;
    let started = initialValue !== undefined;
    for (let item of this) {
      if (!started) {
        accumulator = item;
        started = true;
      } else {
        accumulator = callback(accumulator, item);
      }
    }
    if (!started) {
      throw new TypeError("Reduce of empty collection with no initial value");
    }
    return accumulator;
  }


  get is_input_folder(){ return true }
  static [Symbol.hasInstance](obj) {
    return obj != null && obj.is_input_folder === true;
  }



}

async function createModel({ each, p, name, vfs }){
  let file_object, mod, contents
  try {
    if(p.endsWith('.js')){
      mod = await import(p)
    }
    if(p.endsWith('.js') || p.endsWith('.css') || p.endsWith('.html') || p.endsWith('.svg') || p.endsWith('.xml') || p.endsWith('.txt')){
      contents = await Bun.file(p).text()
    } else {
      contents = await Bun.file(p).bytes()
    }
    file_object = await each({ p, name, mod, contents })
  } catch(e){
    console.log('error: creating file model for ' + name)
    console.log(e)
  }
  if(!file_object){ return }
  await Promise.all(
    Object.keys(file_object).filter(key => file_object[key]).map(async key => {
      if(key.indexOf('.') > 0){
        let virt_out = process.cwd() + '/' + vfs + name + '/' + key
        if(key.endsWith('.js')){
          let src = file_object[key]
          src = src.replace(
            /(import\s+(?:.*?\s+from\s+)?['"])(\.[^'"]+)(['"])/g,
            (_, p1, p2, p3) => {
              const modifiedPath = Bun.resolveSync(p2, p.substring(0,p.lastIndexOf('/'))); 
              return `${p1}${path.relative(process.cwd() + '/' + vfs + name,modifiedPath)}${p3}`;
            }
          )
          await Bun.write(virt_out, src)
        } else {
          await Bun.write(virt_out, file_object[key])
        }
      }
    })
  )
  return {
    ...file_object,
    mod,
    name,
    contents,
    p,
    vfs: new Proxy(file_object,{
      get(_,k){
        if(k.indexOf('.' > 0)){
          return process.cwd() + '/' + vfs + name + '/' + k
        }
        return file_object[k]
      }
    })
  }
}

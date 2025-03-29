import path from 'path'

export class InputGroup {
  constructor(key, { model, glob, ignore, vfs, ...rest }){
    Object.assign(this,rest)
    this.key = key
    this.ignore = ignore
    this.vfs = vfs
    this.glob = glob
    this.model = model

    this.inputs = new Map()

    this.input_objects = []
    this.file_list = []
    this.globber = new Bun.Glob(glob)
  }

  async init(){
    await this.scan()
  }

  async scan(){
    let { ignore, globber, glob, model, vfs, prebuild } = this
    let file_list = []
    let file_model_this = {}
    Object.keys(model).forEach(k => {
      model[k] = model[k].bind(file_model_this)
    })
    await model.setup({
      cwd: process.cwd()
    })
    let glob_prefix = glob.substring(0,glob.indexOf('*'))
    let glob_postfix = glob.substring(glob.lastIndexOf('*')+1)
    for await(let p of globber.scan('.')){
      if(ignore.test(p)){ continue; }
      const name = p.replace(glob_prefix,'').replace(glob_postfix,'')
      const ext = p.includes('.') ? p.split('.').pop() : ''
      p = process.cwd() + '/' + p
      let input_object = await createModel({ model, p, name, ext, vfs })
      if(input_object){
        this.inputs.set(p,input_object)
        file_list.push(p)
      } 
    }
    if(prebuild){
      await Promise.all(
        Object.keys(prebuild).map(async key => {
          let fn = prebuild[key]
          let content = await fn({ [this.key ]: this })
          await Bun.write(process.cwd() + '/' + glob_prefix + '/' + key, content)
        })
      )
    }
    let added = file_list.filter(p => !this.inputs.has(p))
    let removed = [...this.inputs.keys()].filter(p => !file_list.includes(p))
    return { added, removed, files: file_list }
  }

  matchPath(p){
    return this.globber.match(p)
  }


  *[Symbol.iterator](){
    for(let [k,v] of this.inputs){
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



}

async function createModel({ model, p, name, vfs }){
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
    file_object = await model.each({ p, name, mod, contents })
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

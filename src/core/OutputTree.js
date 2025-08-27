import path from 'path'

export class OutputTree {
  constructor(inputs, config){
    this.inputs = inputs
    this.config = config
  }

  async build(){
    let outputs = {}
    for await (let [out_p,content,deps] of this.flattenObject(this.config)) {
      if(content){
        out_p = out_p.replaceAll(/\(\w+\)\//g, "")
        await Bun.write(out_p,content)
        outputs[out_p] = content
      }
    }
    return outputs
  }

  async *flattenObject(value, prefix = './outputs/', results = []) {
    const stack = [{ value, prefix, accessList: [] }];
  
    while (stack.length > 0) {
      let { value, prefix, accessList } = stack.pop();
  
      if (typeof value === 'function') {
        const proxy = new Proxy(this.inputs, {
          get(obj, prop, receiver) {
            if (typeof prop === 'symbol' || !(prop in obj)) return Reflect.get(...arguments);
            accessList.push(prop);
            return obj[prop];
          }
        });
  
        accessList = [];
  
        let cur_dir = prefix.substring(0, prefix.lastIndexOf('/'));
        let relative_path = (p) => {
          if (!p.startsWith(process.cwd())) {
            p = process.cwd() + '/inputs/' + p;
          }
          return path.relative(cur_dir, p);
        };
  
        // Execute function with access to partial results
        let current_output = {
          relative_path,
          outputs: results.filter(s => s && s.length).map(arr => 
            arr[0].replaceAll(/\(\w+\)\//g, "")
          )
        }

        try {
          value = value(proxy, current_output)
        } catch(e){
          value = null
          console.log('skipping ' + prefix)
          console.log(e)
        }
      }
  
      if (Bun.peek.status(value) == 'pending') {
        value = await value;
      } else {
        value = Bun.peek(value);
      }
  
      // If value is an object or array, push children first before yielding
      if (Array.isArray(value)) {
        for (let i = value.length - 1; i >= 0; i--) {
          stack.push({ value: value[i], prefix, accessList: [] });
        }
      } else if(value && value.outputs && value.success){
        // Bun: BuildArtifact
        for(let output of value.outputs){
          stack.push({ value: output.text(), prefix: joinPaths(prefix, output.path) })
        }
      } else if (isPlainObject(value)) {
        const entries = Object.entries(value);
        for (let i = entries.length - 1; i >= 0; i--) {
          const [k, v] = entries[i];
          stack.push({ value: v, prefix: joinPaths(prefix, k), accessList: [] });
        }
      } else {
        // Only yield once we confirm it's NOT an object or array
        const entry = [prefix, value, accessList];
        results.push(entry);
        yield entry;
      }
    }
  }

}

function joinPaths(prefix,key) {
  if(!prefix.endsWith('/') && prefix.length > 0){ prefix += '/' }
  return prefix + key
}

function isPlainObject(obj) {
  if (obj === null || typeof obj !== 'object') return false;
  const proto = Object.getPrototypeOf(obj);
  return proto === Object.prototype || proto === null;
}
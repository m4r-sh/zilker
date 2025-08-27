export function extractTranspilers(transpilers={}){
  let dict = {}

  let scanner = new Bun.Transpiler({ loader: 'js' })
  
  Object.entries(transpilers).forEach(([k,v]) => {
    let opts = {
      loader: 'js',
      trimUnusedImports: true
    }
    dict[k] = {
      transformSync(contents){
        let { exports: og_exports } = scanner.scan(contents)
        let ignored_exports = v.exports && v.exports.length > 0
          ? og_exports.filter(x => !v.exports.includes(x))
          : []
        let new_transpiler = new Bun.Transpiler({
          loader: 'js',
          target: v.target || 'browser',
          tsconfig: v.tsconfig,
          exports: {
            eliminate: ignored_exports,
          },
          trimUnusedImports: true
        })
        return new_transpiler.transformSync(contents)
      }
    }
  })
  
  return dict
}

export function nameToPattern(name) {
  const segments = name.split('/').map(s => s.trim()).filter(s => s && s.length > 0);
  return '/' + segments.map((x, i) => {
    let res = null;
    // Only convert 'index' to '' if it's the last segment
    if (x === 'index' && i === segments.length - 1) {
      return '';
    } else if (res = x.match(/\.\.\.([\w-.]+)/)) {
      return ':' + res[1] + '+';
    } else if (res = x.match(/\[([\w-.]+)/)) {
      return ':' + res[1];
    } else {
      return x;
    }
  }).join('/');
}

export { InputFolder } from './InputFolder'
export { OutputTree } from './OutputTree'
export { DependencyGraph } from './DependencyGraph'
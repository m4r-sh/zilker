#!/usr/bin/env bun
// @bun
var __require = import.meta.require;

// node_modules/mri/lib/index.mjs
function toArr(any) {
  return any == null ? [] : Array.isArray(any) ? any : [any];
}
function toVal(out, key, val, opts) {
  var x, old = out[key], nxt = ~opts.string.indexOf(key) ? val == null || val === true ? "" : String(val) : typeof val === "boolean" ? val : ~opts.boolean.indexOf(key) ? val === "false" ? false : val === "true" || (out._.push((x = +val, x * 0 === 0) ? x : val), !!val) : (x = +val, x * 0 === 0) ? x : val;
  out[key] = old == null ? nxt : Array.isArray(old) ? old.concat(nxt) : [old, nxt];
}
function lib_default(args, opts) {
  args = args || [];
  opts = opts || {};
  var k, arr, arg, name, val, out = { _: [] };
  var i = 0, j = 0, idx = 0, len = args.length;
  const alibi = opts.alias !== undefined;
  const strict = opts.unknown !== undefined;
  const defaults = opts.default !== undefined;
  opts.alias = opts.alias || {};
  opts.string = toArr(opts.string);
  opts.boolean = toArr(opts.boolean);
  if (alibi) {
    for (k in opts.alias) {
      arr = opts.alias[k] = toArr(opts.alias[k]);
      for (i = 0;i < arr.length; i++) {
        (opts.alias[arr[i]] = arr.concat(k)).splice(i, 1);
      }
    }
  }
  for (i = opts.boolean.length;i-- > 0; ) {
    arr = opts.alias[opts.boolean[i]] || [];
    for (j = arr.length;j-- > 0; )
      opts.boolean.push(arr[j]);
  }
  for (i = opts.string.length;i-- > 0; ) {
    arr = opts.alias[opts.string[i]] || [];
    for (j = arr.length;j-- > 0; )
      opts.string.push(arr[j]);
  }
  if (defaults) {
    for (k in opts.default) {
      name = typeof opts.default[k];
      arr = opts.alias[k] = opts.alias[k] || [];
      if (opts[name] !== undefined) {
        opts[name].push(k);
        for (i = 0;i < arr.length; i++) {
          opts[name].push(arr[i]);
        }
      }
    }
  }
  const keys = strict ? Object.keys(opts.alias) : [];
  for (i = 0;i < len; i++) {
    arg = args[i];
    if (arg === "--") {
      out._ = out._.concat(args.slice(++i));
      break;
    }
    for (j = 0;j < arg.length; j++) {
      if (arg.charCodeAt(j) !== 45)
        break;
    }
    if (j === 0) {
      out._.push(arg);
    } else if (arg.substring(j, j + 3) === "no-") {
      name = arg.substring(j + 3);
      if (strict && !~keys.indexOf(name)) {
        return opts.unknown(arg);
      }
      out[name] = false;
    } else {
      for (idx = j + 1;idx < arg.length; idx++) {
        if (arg.charCodeAt(idx) === 61)
          break;
      }
      name = arg.substring(j, idx);
      val = arg.substring(++idx) || (i + 1 === len || ("" + args[i + 1]).charCodeAt(0) === 45 || args[++i]);
      arr = j === 2 ? [name] : name;
      for (idx = 0;idx < arr.length; idx++) {
        name = arr[idx];
        if (strict && !~keys.indexOf(name))
          return opts.unknown("-".repeat(j) + name);
        toVal(out, name, idx + 1 < arr.length || val, opts);
      }
    }
  }
  if (defaults) {
    for (k in opts.default) {
      if (out[k] === undefined) {
        out[k] = opts.default[k];
      }
    }
  }
  if (alibi) {
    for (k in out) {
      arr = opts.alias[k] || [];
      while (arr.length > 0) {
        out[arr.shift()] = out[k];
      }
    }
  }
  return out;
}

// node_modules/sade/lib/index.mjs
var t = "__all__";
var i = "__default__";
var s = `
`;
function r(e) {
  if (!e.length)
    return "";
  let t2 = function(e2) {
    let t3 = 0, i2 = 0, s2 = 0, r2 = e2.length;
    if (r2)
      for (;r2--; )
        i2 = e2[r2].length, i2 > t3 && (s2 = r2, t3 = i2);
    return e2[s2].length;
  }(e.map((e2) => e2[0])) + 4;
  return e.map((e2) => e2[0] + " ".repeat(t2 - e2[0].length) + e2[1] + (e2[2] == null ? "" : `  (default ${e2[2]})`));
}
function n(e) {
  return e;
}
function l(e, t2, i2) {
  if (!t2 || !t2.length)
    return "";
  let r2 = 0, n2 = "";
  for (n2 += `
  ` + e;r2 < t2.length; r2++)
    n2 += `
    ` + i2(t2[r2]);
  return n2 + s;
}
function a(e, t2, i2 = 1) {
  let s2 = l("ERROR", [t2], n);
  s2 += `
  Run \`$ ${e} --help\` for more info.
`, console.error(s2), process.exit(i2);
}

class o {
  constructor(e, s2) {
    let [r2, ...n2] = e.split(/\s+/);
    s2 = s2 || n2.length > 0, this.bin = r2, this.ver = "0.0.0", this.default = "", this.tree = {}, this.command(t), this.command([i].concat(s2 ? n2 : "<command>").join(" ")), this.single = s2, this.curr = "";
  }
  command(e, t2, i2 = {}) {
    if (this.single)
      throw new Error('Disable "single" mode to add commands');
    let s2 = [], r2 = [], n2 = /(\[|<)/;
    if (e.split(/\s+/).forEach((e2) => {
      (n2.test(e2.charAt(0)) ? r2 : s2).push(e2);
    }), s2 = s2.join(" "), s2 in this.tree)
      throw new Error("Command already exists: " + s2);
    return s2.includes("__") || r2.unshift(s2), r2 = r2.join(" "), this.curr = s2, i2.default && (this.default = s2), this.tree[s2] = { usage: r2, alibi: [], options: [], alias: {}, default: {}, examples: [] }, i2.alias && this.alias(i2.alias), t2 && this.describe(t2), this;
  }
  describe(e) {
    return this.tree[this.curr || i].describe = Array.isArray(e) ? e : function(e2) {
      return (e2 || "").replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
    }(e), this;
  }
  alias(...e) {
    if (this.single)
      throw new Error('Cannot call `alias()` in "single" mode');
    if (!this.curr)
      throw new Error("Cannot call `alias()` before defining a command");
    return (this.tree[this.curr].alibi = this.tree[this.curr].alibi.concat(...e)).forEach((e2) => this.tree[e2] = this.curr), this;
  }
  option(e, i2, s2) {
    let r2 = this.tree[this.curr || t], [n2, l2] = function(e2) {
      return (e2 || "").split(/^-{1,2}|,|\s+-{1,2}|\s+/).filter(Boolean);
    }(e);
    if (l2 && l2.length > 1 && ([n2, l2] = [l2, n2]), e = "--" + n2, l2 && l2.length > 0) {
      e = `-${l2}, ${e}`;
      let t2 = r2.alias[l2];
      r2.alias[l2] = (t2 || []).concat(n2);
    }
    let a2 = [e, i2 || ""];
    return s2 !== undefined ? (a2.push(s2), r2.default[n2] = s2) : l2 || (r2.default[n2] = undefined), r2.options.push(a2), this;
  }
  action(e) {
    return this.tree[this.curr || i].handler = e, this;
  }
  example(e) {
    return this.tree[this.curr || i].examples.push(e), this;
  }
  version(e) {
    return this.ver = e, this;
  }
  parse(s2, r2 = {}) {
    s2 = s2.slice();
    let n2, l2, o2, h, u = 2, f = lib_default(s2.slice(u), { alias: { h: "help", v: "version" } }), c = this.single, p = this.bin, d = "";
    if (c)
      h = this.tree[i];
    else {
      let e, t2 = 1, i2 = f._.length + 1;
      for (;t2 < i2; t2++)
        if (n2 = f._.slice(0, t2).join(" "), e = this.tree[n2], typeof e == "string")
          l2 = (d = e).split(" "), s2.splice(s2.indexOf(f._[0]), t2, ...l2), t2 += l2.length - t2;
        else if (e)
          d = n2;
        else if (d)
          break;
      if (h = this.tree[d], o2 = h === undefined, o2) {
        if (this.default)
          d = this.default, h = this.tree[d], s2.unshift(d), u++;
        else if (n2)
          return a(p, "Invalid command: " + n2);
      }
    }
    if (f.help)
      return this.help(!c && !o2 && d);
    if (f.version)
      return this._version();
    if (!c && h === undefined)
      return a(p, "No command specified.");
    let g = this.tree[t];
    r2.alias = Object.assign(g.alias, h.alias, r2.alias), r2.default = Object.assign(g.default, h.default, r2.default), n2 = d.split(" "), l2 = s2.indexOf(n2[0], 2), ~l2 && s2.splice(l2, n2.length);
    let m = lib_default(s2.slice(u), r2);
    if (!m || typeof m == "string")
      return a(p, m || "Parsed unknown option flag(s)!");
    let b = h.usage.split(/\s+/), _ = b.filter((e) => e.charAt(0) === "<"), v = m._.splice(0, _.length);
    if (v.length < _.length)
      return d && (p += " " + d), a(p, "Insufficient arguments!");
    b.filter((e) => e.charAt(0) === "[").forEach((e) => {
      v.push(m._.shift());
    }), v.push(m);
    let $ = h.handler;
    return r2.lazy ? { args: v, name: d, handler: $ } : $.apply(null, v);
  }
  help(e) {
    console.log(function(e2, a2, o2, h) {
      let u = "", f = a2[o2], c = "$ " + e2, p = a2[t], d = (e3) => `${c} ${e3}`.replace(/\s+/g, " "), g = [["-h, --help", "Displays this message"]];
      if (o2 === i && g.unshift(["-v, --version", "Displays current version"]), f.options = (f.options || []).concat(p.options, g), f.options.length > 0 && (f.usage += " [options]"), u += l("Description", f.describe, n), u += l("Usage", [f.usage], d), h || o2 !== i)
        h || o2 === i || (u += l("Aliases", f.alibi, d));
      else {
        let e3, t2 = /^__/, i2 = "", o3 = [];
        for (e3 in a2)
          typeof a2[e3] == "string" || t2.test(e3) || o3.push([e3, (a2[e3].describe || [""])[0]]) < 3 && (i2 += `
    ${c} ${e3} --help`);
        u += l("Available Commands", r(o3), n), u += "\n  For more info, run any command with the `--help` flag" + i2 + s;
      }
      return u += l("Options", r(f.options), n), u += l("Examples", f.examples.map(d), n), u;
    }(this.bin, this.tree, e || i, this.single));
  }
  _version() {
    console.log(`${this.bin}, ${this.ver}`);
  }
}
var lib_default2 = (e, t2) => new o(e, t2);

// package.json
var version = "0.4.0";

// src/engine/InputGroup.js
import path from "node:path";

class InputGroup {
  constructor(key, { model, glob, ignore, vfs, ...rest }) {
    Object.assign(this, rest);
    this.key = key;
    this.ignore = ignore;
    this.vfs = vfs;
    this.glob = glob;
    this.model = model;
    this.inputs = new Map;
    this.input_objects = [];
    this.file_list = [];
    this.globber = new Bun.Glob(glob);
  }
  async init() {
    await this.scan();
  }
  async scan() {
    let { ignore, globber, glob, model, vfs, prebuild } = this;
    let file_list = [];
    let file_model_this = {};
    Object.keys(model).forEach((k) => {
      model[k] = model[k].bind(file_model_this);
    });
    await model.setup({
      cwd: process.cwd()
    });
    let glob_prefix = glob.substring(0, glob.indexOf("*"));
    let glob_postfix = glob.substring(glob.lastIndexOf("*") + 1);
    for await (let p of globber.scan(".")) {
      if (ignore.test(p)) {
        continue;
      }
      const name = p.replace(glob_prefix, "").replace(glob_postfix, "");
      const ext = p.includes(".") ? p.split(".").pop() : "";
      p = process.cwd() + "/" + p;
      let input_object = await createModel({ model, p, name, ext, vfs });
      if (input_object) {
        this.inputs.set(p, input_object);
        file_list.push(p);
      }
    }
    if (prebuild) {
      await Promise.all(Object.keys(prebuild).map(async (key) => {
        let fn = prebuild[key];
        let content = await fn({ [this.key]: this });
        await Bun.write(process.cwd() + "/" + glob_prefix + "/" + key, content);
      }));
    }
    let added = file_list.filter((p) => !this.inputs.has(p));
    let removed = [...this.inputs.keys()].filter((p) => !file_list.includes(p));
    return { added, removed, files: file_list };
  }
  matchPath(p) {
    return this.globber.match(p);
  }
  *[Symbol.iterator]() {
    for (let [k, v] of this.inputs) {
      yield v;
    }
  }
  forEach(callback, thisArg) {
    let index = 0;
    for (let item of this) {
      callback.call(thisArg, item, index, this);
      index++;
    }
  }
  map(callback, thisArg) {
    const result = [];
    let index = 0;
    for (let item of this) {
      result.push(callback.call(thisArg, item, index, this));
      index++;
    }
    return result;
  }
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
async function createModel({ model, p, name, vfs }) {
  let file_object, mod, contents;
  try {
    if (p.endsWith(".js")) {
      mod = await import(p);
    }
    if (p.endsWith(".js") || p.endsWith(".css") || p.endsWith(".html") || p.endsWith(".svg") || p.endsWith(".xml") || p.endsWith(".txt")) {
      contents = await Bun.file(p).text();
    } else {
      contents = await Bun.file(p).bytes();
    }
    file_object = await model.each({ p, name, mod, contents });
  } catch (e) {
    console.log("error: creating file model for " + name);
    console.log(e);
  }
  if (!file_object) {
    return;
  }
  await Promise.all(Object.keys(file_object).filter((key) => file_object[key]).map(async (key) => {
    if (key.indexOf(".") > 0) {
      let virt_out = process.cwd() + "/" + vfs + name + "/" + key;
      if (key.endsWith(".js")) {
        let src = file_object[key];
        src = src.replace(/(import\s+(?:.*?\s+from\s+)?['"])(\.[^'"]+)(['"])/g, (_, p1, p2, p3) => {
          const modifiedPath = Bun.resolveSync(p2, p.substring(0, p.lastIndexOf("/")));
          return `${p1}${path.relative(process.cwd() + "/" + vfs + name, modifiedPath)}${p3}`;
        });
        await Bun.write(virt_out, src);
      } else {
        await Bun.write(virt_out, file_object[key]);
      }
    }
  }));
  return {
    ...file_object,
    mod,
    name,
    contents,
    p,
    vfs: new Proxy(file_object, {
      get(_, k) {
        if (k.indexOf("." > 0)) {
          return process.cwd() + "/" + vfs + name + "/" + k;
        }
        return file_object[k];
      }
    })
  };
}

// src/engine/OutputTree.js
import path2 from "node:path";

class OutputTree {
  constructor(config, inputs) {
    this.inputs = inputs;
    this.config = config;
  }
  async build() {
    let output = {};
    for await (let [out_p, content, deps] of this.flattenObject(this.config)) {
      if (content) {
        out_p = out_p.replaceAll(/\(\w+\)\//g, "");
        await Bun.write(out_p, content);
        output[out_p] = content;
      }
    }
    return output;
  }
  async* flattenObject(value, prefix = "", results = []) {
    const stack = [{ value, prefix, accessList: [] }];
    while (stack.length > 0) {
      let { value: value2, prefix: prefix2, accessList } = stack.pop();
      if (typeof value2 === "function") {
        const proxy = new Proxy(this.inputs, {
          get(obj, prop, receiver) {
            if (typeof prop === "symbol" || !(prop in obj))
              return Reflect.get(...arguments);
            accessList.push(prop);
            return obj[prop];
          }
        });
        accessList = [];
        let cur_dir = prefix2.substring(0, prefix2.lastIndexOf("/"));
        let relative_path = (p) => {
          if (!p.startsWith(process.cwd())) {
            p = process.cwd() + "/" + p;
          }
          return path2.relative(cur_dir, p);
        };
        value2 = value2(proxy, { relative_path, output: results.map((arr) => arr[0].replaceAll(/\(\w+\)\//g, "")) });
      }
      if (Bun.peek.status(value2) == "pending") {
        value2 = await value2;
      } else {
        value2 = Bun.peek(value2);
      }
      if (Array.isArray(value2)) {
        for (let i2 = value2.length - 1;i2 >= 0; i2--) {
          stack.push({ value: value2[i2], prefix: prefix2, accessList: [] });
        }
      } else if (isPlainObject(value2)) {
        const entries = Object.entries(value2);
        for (let i2 = entries.length - 1;i2 >= 0; i2--) {
          const [k, v] = entries[i2];
          stack.push({ value: v, prefix: joinPaths(prefix2, k), accessList: [] });
        }
      } else {
        const entry = [prefix2, value2, accessList];
        results.push(entry);
        yield entry;
      }
    }
  }
}
function joinPaths(prefix, key) {
  if (!prefix.endsWith("/") && prefix.length > 0) {
    prefix += "/";
  }
  return prefix + key;
}
function isPlainObject(obj) {
  if (obj === null || typeof obj !== "object")
    return false;
  const proto = Object.getPrototypeOf(obj);
  return proto === Object.prototype || proto === null;
}

// src/cli/build.js
async function build({
  cwd = process.cwd(),
  config_path = "zilker.js"
} = {}) {
  let config = await import(cwd + "/" + config_path);
  let input_groups = {};
  Object.entries(config.inputs).forEach(([k, v]) => {
    input_groups[k] = new InputGroup(k, v);
  });
  let output_tree = new OutputTree(config.outputs, input_groups);
  for (const group of Object.values(input_groups)) {
    await group.scan();
  }
  let out = await output_tree.build();
  return out;
}

// src/engine/DependencyGraph.js
var transpiler = new Bun.Transpiler({ loader: "js" });

class DependencyGraph {
  constructor(debounceInterval = 69) {
    this.children = new Map;
    this.parents = new Map;
    this.sources = new Set;
    this.sourcesChangedCallbacks = [];
    this.debounceInterval = debounceInterval;
    this.debounceTimeout = null;
    this.staleSources = new Set;
  }
  async addSource(file) {
    this.sources.add(file);
    await this.updateSource(file);
  }
  async updateSource(file) {
    this.sources.add(file);
    await this._updateFile(file, true, new Set);
    const affectedSources = this._collectSourceAncestors(file);
    for (let src of affectedSources) {
      this.staleSources.add(src);
    }
    this._scheduleSourcesChanged();
  }
  async updateDependency(file) {
    await this._updateFile(file, false, new Set);
    const affectedSources = this._collectSourceAncestors(file);
    for (let src of affectedSources) {
      this.staleSources.add(src);
    }
    this._scheduleSourcesChanged();
  }
  checkIfTracked(file) {
    if (this.sources.has(file))
      return "source";
    if (this.children.has(file))
      return "dependency";
    return false;
  }
  removeFile(file) {
    this._removeFile(file);
  }
  onSourcesChanged(callback) {
    this.sourcesChangedCallbacks.push(callback);
  }
  _scheduleSourcesChanged() {
    if (this.debounceTimeout)
      clearTimeout(this.debounceTimeout);
    this.debounceTimeout = setTimeout(() => {
      const changedSources = Array.from(this.staleSources);
      this.staleSources.clear();
      this.debounceTimeout = null;
      for (let cb of this.sourcesChangedCallbacks) {
        try {
          cb(changedSources);
        } catch (err) {
          console.error("Error in sourcesChanged callback:", err);
        }
      }
    }, this.debounceInterval);
  }
  async tick() {}
  async _updateFile(file, isSource, visited) {
    if (visited.has(file))
      return;
    visited.add(file);
    if (!this.children.has(file)) {
      this.children.set(file, new Set);
    }
    if (isSource) {
      this.sources.add(file);
    }
    let contents;
    try {
      contents = await Bun.file(file).text();
    } catch (e) {
      contents = "";
    }
    let scannedImports;
    try {
      scannedImports = transpiler.scanImports(contents);
    } catch (e) {
      scannedImports = [];
    }
    const fileDir = file.substring(0, file.lastIndexOf("/"));
    const newDeps = new Set;
    for (let imp of scannedImports) {
      if (imp.path.startsWith(".")) {
        try {
          let resolved = Bun.resolveSync(imp.path, fileDir);
          newDeps.add(resolved);
        } catch (err) {
          console.log(err);
        }
      }
    }
    const currentDeps = this.children.get(file);
    for (let dep of Array.from(currentDeps)) {
      if (!newDeps.has(dep)) {
        if (this.parents.has(dep)) {
          this.parents.get(dep).delete(file);
          if (this.parents.get(dep).size === 0 && !this.sources.has(dep)) {
            this._removeFile(dep);
          }
        }
        currentDeps.delete(dep);
      }
    }
    for (let dep of newDeps) {
      if (!currentDeps.has(dep)) {
        currentDeps.add(dep);
        if (!this.parents.has(dep)) {
          this.parents.set(dep, new Set);
        }
        this.parents.get(dep).add(file);
        await this._updateFile(dep, false, visited);
      }
    }
  }
  _collectSourceAncestors(file) {
    const sources = new Set;
    const visited = new Set;
    const stack = [file];
    while (stack.length) {
      const current = stack.pop();
      if (visited.has(current))
        continue;
      visited.add(current);
      if (this.sources.has(current))
        sources.add(current);
      if (this.parents.has(current)) {
        for (let parent of this.parents.get(current)) {
          stack.push(parent);
        }
      }
    }
    return sources;
  }
  _removeFile(file) {
    if (this.children.has(file)) {
      const childrenSet = this.children.get(file);
      for (let child of childrenSet) {
        if (this.parents.has(child)) {
          this.parents.get(child).delete(file);
          if (this.parents.get(child).size === 0 && !this.sources.has(child)) {
            this._removeFile(child);
          }
        }
      }
      this.children.delete(file);
    }
    if (this.parents.has(file)) {
      const parentsSet = this.parents.get(file);
      for (let parent of parentsSet) {
        if (this.children.has(parent)) {
          this.children.get(parent).delete(file);
        }
      }
      this.parents.delete(file);
    }
    this.sources.delete(file);
  }
}

// src/engine/server_utils.js
import { networkInterfaces as getNetworkInteraces } from "node:os";
var networkInterfaces = getNetworkInteraces();
var headersMap = {
  html: { "Content-Type": "text/html; charset=utf-8" },
  js: { "Content-Type": "application/javascript" },
  css: { "Content-Type": "text/css" },
  xml: { "Content-Type": "application/xml" },
  svg: { "Content-Type": "image/svg+xml" },
  gif: { "Content-Type": "image/gif" },
  png: { "Content-Type": "image/png" },
  jpeg: { "Content-Type": "image/jpeg" },
  jpg: { "Content-Type": "image/jpeg" },
  ico: { "Content-Type": "image/x-icon" },
  json: { "Content-Type": "application/json" },
  txt: { "Content-Type": "text/plain; charset=utf-8" },
  pdf: { "Content-Type": "application/pdf" },
  wasm: { "Content-Type": "application/wasm" },
  webp: { "Content-Type": "image/webp" },
  mp4: { "Content-Type": "video/mp4" },
  webm: { "Content-Type": "video/webm" },
  mp3: { "Content-Type": "audio/mpeg" },
  ogg: { "Content-Type": "audio/ogg" },
  wav: { "Content-Type": "audio/wav" },
  ttf: { "Content-Type": "font/ttf" },
  woff: { "Content-Type": "font/woff" },
  woff2: { "Content-Type": "font/woff2" },
  avif: { "Content-Type": "image/avif" },
  zip: { "Content-Type": "application/zip" },
  tar: { "Content-Type": "application/x-tar" },
  gz: { "Content-Type": "application/gzip" },
  csv: { "Content-Type": "text/csv" },
  md: { "Content-Type": "text/markdown; charset=utf-8" }
};
function getHeaders(p) {
  const ext = p.split(".").pop().toLowerCase();
  return headersMap[ext] || { "Content-Type": "application/octet-stream" };
}
function getNetworkAddress() {
  for (const interfaceDetails of Object.values(networkInterfaces)) {
    if (!interfaceDetails)
      continue;
    for (const details of interfaceDetails) {
      const { address, family, internal } = details;
      if (family == "IPv4" && !internal)
        return address;
    }
  }
}

// src/cli/dev.js
import fs from "node:fs";
async function dev({
  cwd = process.cwd(),
  config_path = "zilker.js"
} = {}) {
  let config = await import(cwd + "/" + config_path);
  let dependency_graph = new DependencyGraph(100);
  let input_groups = {};
  Object.entries(config.inputs).forEach(([k, v]) => {
    input_groups[k] = new InputGroup(k, v);
  });
  let output_tree = new OutputTree(config.outputs, input_groups);
  await Bun.$`rm -rf ${cwd + "/outputs"}`;
  let get_server_config = async () => {
    let server_settings = {
      port: 3000,
      development: true,
      static_dir: "outputs/public",
      fetch_handler: "outputs/api/fetch.js",
      ...config.settings.server
    };
    let { static_dir, fetch_handler, ...server_opts } = server_settings;
    let fetch_module = await import(cwd + "/" + fetch_handler);
    let static_tree = {};
    for await (const file of new Bun.Glob("**/*").scan(cwd + "/" + static_dir)) {
      let abs_p = cwd + "/" + static_dir + "/" + file;
      let static_path = "/" + file;
      static_tree[static_path] = new Response(await Bun.file(abs_p).bytes(), {
        headers: { ...getHeaders(abs_p), ...server_opts.static_headers }
      });
      if (/index\.html$/.test(file)) {
        let extra_path = "/" + file.replace(/index\.html$/, "");
        static_tree[extra_path] = new Response(await Bun.file(abs_p).bytes(), {
          headers: { ...getHeaders(abs_p), ...server_opts.static_headers }
        });
      }
    }
    return {
      ...server_opts,
      fetch(req, s2) {
        return fetch_module.handler(req, s2);
      },
      static: static_tree
    };
  };
  for (const group of Object.values(input_groups)) {
    let { files: input_files } = await group.scan();
    input_files.forEach((p) => {
      dependency_graph.addSource(p);
    });
  }
  let server;
  dependency_graph.onSourcesChanged(async (srcs) => {
    let build_start = Bun.nanoseconds();
    let out = await output_tree.build();
    let build_end = Bun.nanoseconds();
    if (!server) {
      server = Bun.serve(await get_server_config());
      let network_hint = server.hostname == "localhost" ? ` (${getNetworkAddress()}:${server.port})` : "";
      console.log(`server listening on ${server.hostname}:${server.port}${network_hint}`);
    } else {
      server.reload(await get_server_config());
    }
    let server_made = Bun.nanoseconds();
    console.log(`Built: ${Math.round((build_end - build_start) / 1e6)}ms : Server reload: ${Math.round((server_made - build_end) / 1e6)}ms`);
  });
  dependency_graph.tick();
  let config_file_list = [];
  const watcher = fs.watch(cwd, { recursive: true }, async (event, filename) => {
    let p = cwd + "/" + filename;
    let input_group = Object.values(input_groups).find((group) => group.matchPath(p.replace(cwd + "/", "")));
    if (input_group) {
      for (const file of Object.keys(__require.cache).filter((s2) => !s2.includes("stabilimentum/packages")))
        delete __require.cache[file];
      let { added, removed } = await input_group.scan();
      if (added.length == 0 && removed.length == 0) {
        await dependency_graph.updateSource(p);
      } else {
        await Promise.all(...added.map((p2) => dependency_graph.addSource(p2)), ...removed.map((p2) => dependency_graph.removeFile(p2)));
      }
    } else if (dependency_graph.checkIfTracked(p)) {
      await dependency_graph.updateDependency(p);
    }
    dependency_graph.tick();
  });
  process.on("SIGINT", async () => {
    await Bun.$`rm -rf ${cwd + "/outputs/.temp"}`;
    watcher.close();
    process.exit(0);
  });
}

// src/cli/index.js
var prog = lib_default2("zilker2");
prog.version(version).option("-c, --config", "Provide path to custom config", "zilker.js");
prog.command("build").describe(`Build project files according to config`).example("build").action((opts) => {
  build().then(() => process.exit(0));
});
prog.command("dev").describe(`Start a dev session`).example("dev").action(async (opts) => {
  dev();
});
prog.parse(process.argv);

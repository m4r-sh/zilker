// @bun
var __require = import.meta.require;

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
        for (let i = value2.length - 1;i >= 0; i--) {
          stack.push({ value: value2[i], prefix: prefix2, accessList: [] });
        }
      } else if (isPlainObject(value2)) {
        const entries = Object.entries(value2);
        for (let i = entries.length - 1;i >= 0; i--) {
          const [k, v] = entries[i];
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
      fetch(req, s) {
        return fetch_module.handler(req, s);
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
      for (const file of Object.keys(__require.cache).filter((s) => !s.includes("stabilimentum/packages")))
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
export {
  dev,
  build
};

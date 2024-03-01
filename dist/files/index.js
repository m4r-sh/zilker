// @bun
// /Users/marshall/code/stabilimentum/packages/zilker/node_modules/zilk/build/ssr/bun.js
class WeakMapSet extends WeakMap {
  set(key, value) {
    super.set(key, value);
    return value;
  }
}
/*! (c) Andrea Giammarchi - ISC */
var empty = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
var elements = /<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/?)>/g;
var attributes = /([^\s\\>"'=]+)\s*=\s*(['"]?)\x01/g;
var holes = /[\x01\x02]/g;
var esm_default = (template, prefix, svg) => {
  let i = 0;
  return template.join("\x01").trim().replace(elements, (_, name, attrs, selfClosing) => {
    let ml = name + attrs.replace(attributes, "\x02=$2$1").trimEnd();
    if (selfClosing.length)
      ml += svg || empty.test(name) ? " /" : "></" + name;
    return "<" + ml + ">";
  }).replace(holes, (hole) => hole === "\x01" ? "<!--" + prefix + i++ + "-->" : prefix + i++);
};
var { replace } = "";
var ca = /[&<>'"]/g;
var esca = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;"
};
var pe = (m) => esca[m];
var escape = (es) => replace.call(es, ca, pe);
var esm_default2 = (camel) => camel.replace(/(([A-Z0-9])([A-Z0-9][a-z]))|(([a-z])([A-Z]))/g, "$2$5-$3$6").toLowerCase();
var ref = (node) => {
  let oldValue;
  return (value) => {
    if (oldValue !== value) {
      oldValue = value;
      if (typeof value === "function")
        value(node);
      else
        value.current = node;
    }
  };
};
var aria = function(key) {
  const value = escape(this[key]);
  return key === "role" ? ` role="${value}"` : ` aria-${key.toLowerCase()}="${value}"`;
};
var data = function(key) {
  return ` data-${esm_default2(key)}="${escape(this[key])}"`;
};
var { isArray: isArray2 } = Array;
var { toString } = Function;
var { keys } = Object;
var passRef = ref(null);
var prefix = "is\xB5" + Date.now();
var rename = /([^\s>]+)[\s\S]*$/;
var interpolation = new RegExp(`(<!--${prefix}(\\d+)-->|\\s*${prefix}(\\d+)=([^\\s>]))`, "g");
var attribute = (name, quote, value) => ` ${name}=${quote}${escape(value)}${quote}`;
var getValue = (value) => {
  switch (typeof value) {
    case "string":
      return escape(value);
    case "boolean":
    case "number":
      return String(value);
    case "object":
      switch (true) {
        case isArray2(value):
          return value.map(getValue).join("");
        case value instanceof Hole:
          return value.toString();
      }
      break;
    case "function":
      return getValue(value());
  }
  return value == null ? "" : escape(String(value));
};
var useForeign = false;

class Foreign {
  constructor(handler, value) {
    this._ = (...args) => handler(...args, value);
  }
}

class Hole extends String {
}
var parse = (template, expectedLength, svg) => {
  const html = esm_default(template, prefix, svg);
  const updates = [];
  let i = 0;
  let match = null;
  while (match = interpolation.exec(html)) {
    const pre = html.slice(i, match.index);
    i = match.index + match[0].length;
    if (match[2])
      updates.push((value) => pre + getValue(value));
    else {
      let name = "";
      let quote = match[4];
      switch (quote) {
        case '"':
        case "'":
          const next = html.indexOf(quote, i);
          name = html.slice(i, next);
          i = next + 1;
          break;
        default:
          name = html.slice(--i).replace(rename, "$1");
          i += name.length;
          quote = '"';
          break;
      }
      switch (true) {
        case name === "aria":
          updates.push((value) => pre + keys(value).map(aria, value).join(""));
          break;
        case name === "ref":
          updates.push((value) => {
            passRef(value);
            return pre;
          });
          break;
        case name[0] === "?":
          const boolean = name.slice(1).toLowerCase();
          updates.push((value) => {
            let result = pre;
            if (value)
              result += ` ${boolean}`;
            return result;
          });
          break;
        case name[0] === ".":
          const lower = name.slice(1).toLowerCase();
          updates.push(lower === "dataset" ? (value) => pre + keys(value).filter((key) => value[key] != null).map(data, value).join("") : (value) => {
            let result = pre;
            if (value != null && value !== false) {
              if (value === true)
                result += ` ${lower}`;
              else
                result += attribute(lower, quote, value);
            }
            return result;
          });
          break;
        case name[0] === "@":
          name = "on" + name.slice(1);
        case (name[0] === "o" && name[1] === "n"):
          updates.push((value) => {
            let result = pre;
            switch (typeof value) {
              case "object":
                if (!(name in value))
                  break;
                value = value[name];
                if (typeof value !== "function")
                  break;
              case "function":
                if (value.toString === toString)
                  break;
              case "string":
                result += attribute(name, quote, value);
                break;
            }
            return result;
          });
          break;
        default:
          updates.push((value) => {
            let result = pre;
            if (value != null) {
              if (useForeign && value instanceof Foreign) {
                value = value._(null, name);
                if (value == null)
                  return result;
              }
              result += attribute(name, quote, value);
            }
            return result;
          });
          break;
      }
    }
  }
  const { length } = updates;
  if (length !== expectedLength)
    throw new Error(`invalid template ${template}`);
  if (length) {
    const last = updates[length - 1];
    const chunk = html.slice(i);
    updates[length - 1] = (value) => last(value) + chunk;
  } else
    updates.push(() => html);
  return updates;
};
var update = function(value, i) {
  return this[i](value);
};
var cache = new WeakMapSet;
var uhtmlParity = (svg) => {
  const fn = (template, ...values) => {
    const { length } = values;
    const updates = cache.get(template) || cache.set(template, parse(template, length, svg));
    return new Hole(length ? values.map(update, updates).join("") : updates[0]());
  };
  fn.node = fn;
  fn.for = () => fn;
  return fn;
};
var html = uhtmlParity(false);
var svg = uhtmlParity(true);
var plain = function(t) {
  if (typeof t === "string") {
    return t;
  }
  for (var s = t[0], i = 1, l = arguments.length;i < l; i++)
    s += arguments[i] + t[i];
  return s;
};
var raw = new Proxy(plain, {
  get(_, k) {
    let f = plain.bind(null);
    f.lang = k;
    return f;
  }
});
var css = raw.css;
var htmlFor = html.for;
var svgFor = svg.for;
var diff_acc = function(before, after) {
  let toRemove = new Set([...before].filter((x) => !after.has(x)));
  let toAdd = new Set([...after].filter((x) => !before.has(x)));
  let orb_keys = {};
  Array.from([...after]).forEach((key) => {
    if (key.indexOf(".") > 0) {
      let o_k = key.substring(0, key.indexOf("."));
      let o_v = key.substring(key.indexOf(".") + 1);
      if (orb_keys[o_k]) {
        orb_keys[o_k].add(o_v);
      } else {
        orb_keys[o_k] = new Set([o_v]);
      }
      toAdd.delete(key);
    }
  });
  let toSub = Object.keys(orb_keys).map((k) => [k, orb_keys[k]]);
  return [toRemove, toAdd, toSub];
};
var entry_count = 0;
var get_stack = [];
var curr_get = null;
var prefix2 = "";
var $Z = Symbol("orbz-core");

class OrbCore {
  #models = {};
  #state = {};
  #orbs = {};
  #changed = new Set;
  #cache = {};
  #valid = {};
  #getters = {};
  #entrypoints = {};
  #this_orb;
  #subs = new Map;
  #dep_graph = {};
  #get_watchlists = {};
  #link_graph = {};
  constructor(defs, state, this_orb) {
    this.#this_orb = this_orb;
    this.#models = defs.orbs;
    for (const key in defs.state) {
      this.#dep_graph[key] = new Set;
      this.set_state(key, key in state ? state[key] : structuredClone(defs.state[key]));
    }
    for (const key in defs.orbs) {
      this.#dep_graph[key] = new Set;
      this.set_orb(key, state[key]);
    }
    for (const key in defs.entry) {
      this.#entrypoints[key] = defs.entry[key].bind(this.#this_orb);
    }
    for (const key in defs.async) {
      this.#entrypoints[key] = defs.async[key].bind(this.#this_orb);
    }
    for (const key in defs.derived) {
      this.#dep_graph[key] = new Set;
      this.#get_watchlists[key] = new Set;
      this.#getters[key] = defs.derived[key].bind(this.#this_orb);
    }
    for (const key in defs.getset) {
      this.#dep_graph[key] = new Set;
      this.#get_watchlists[key] = new Set;
      this.#getters[key] = defs.getset[key].get.bind(this.#this_orb);
      this.#entrypoints[key] = defs.getset[key].set.bind(this.#this_orb);
    }
  }
  add_link(k, options) {
    let link_set = this.#link_graph[k];
    return (external_cb) => {
      link_set.add(external_cb);
      return () => {
        link_set.delete(external_cb);
      };
    };
  }
  add_sub(cb, watchlist) {
    this.#subs.set(cb, null);
    return () => {
      this.#subs.delete(cb);
    };
  }
  get_state(k) {
    if (!k.startsWith("_") || this.#isLocal()) {
      this.#watch_get(k);
      return this.#state[k];
    }
  }
  set_state(k, v) {
    if (!k.startsWith("_") || this.#isLocal()) {
      if (v != this.#state[k]) {
        this.#state[k] = v;
        this.#invalidate(k, true);
        this.#flush();
      }
    }
  }
  get_derived(k) {
    if (!k.startsWith("_") || this.#isLocal()) {
      this.#watch_get(k);
      const prev = curr_get;
      let res;
      curr_get = this;
      try {
        res = this.#derived_value(k);
      } finally {
        curr_get = prev;
      }
      return res;
    }
  }
  run_entrypoint(k, args, { async = false } = {}) {
    if (!k.startsWith("_") || this.#isLocal()) {
      if (this.#entrypoints[k]) {
        if (!async) {
          entry_count++;
        }
        let result = this.#entrypoints[k](...args);
        if (async) {
          return result.then((ans) => {
            this.#flush();
            return ans;
          });
        } else {
          entry_count--;
          this.#flush();
          return result;
        }
      }
    }
  }
  set_orb(k, v) {
    let def_model = this.#models[k];
    if (v && v instanceof def_model) {
      this.#orbs[k] = v;
    } else if (v && typeof v == "object") {
      this.#orbs[k] = new def_model({ ...v });
    } else {
      this.#orbs[k] = null;
    }
  }
  get_orb(k) {
    return this.#orbs[k];
  }
  #isLocal() {
    return true;
  }
  #watch_get(key) {
    let len = get_stack.length;
    if (len != 0) {
      get_stack[len - 1].add(prefix2 + key);
      prefix2 = "";
    }
  }
  #get_stack_push() {
    get_stack.push(new Set);
  }
  #get_stack_pop() {
    let accessed = get_stack.splice(get_stack.length - 1, 1)[0];
    return accessed;
  }
  #derived_value(key) {
    if (this.#valid[key]) {
      return this.#cache[key];
    } else {
      this.#get_stack_push();
      let watchlist = this.#get_watchlists[key];
      let v = this.#getters[key]();
      let accessed = this.#get_stack_pop();
      let [toRemove, toAdd, toSub] = diff_acc(watchlist, accessed);
      toRemove.forEach((r_k) => {
        this.#dep_graph[r_k].delete(key);
        this.#get_watchlists[key].delete(r_k);
      });
      toAdd.forEach((a_k) => {
        if (this.#dep_graph[a_k]) {
          this.#dep_graph[a_k].add(key);
        }
        this.#get_watchlists[key].add(a_k);
      });
      toSub.forEach(([orb, acc_keys]) => {
        this.#orbs[orb].$((o) => {
        });
      });
      this.#cache[key] = v;
      this.#valid[key] = true;
      return v;
    }
  }
  #invalidate(key, is_state = false) {
    if (is_state || this.#valid[key]) {
      this.#changed.add(key);
      if (!is_state) {
        this.#valid[key] = false;
      }
      this.#dep_graph[key].forEach((k) => this.#invalidate(k));
    }
  }
  #flush() {
    if (entry_count == 0) {
      this.#subs.forEach((watchlist, cb) => {
        if (watchlist == null || [...watchlist].some((k) => this.#changed.has(k))) {
          watchlist = new Set;
          this.#subs.set(cb, watchlist);
          this.#get_stack_push();
          cb(this.#this_orb);
          let accessed = this.#get_stack_pop();
          let [toRemove, toAdd, toSub] = diff_acc(watchlist, accessed);
          toRemove.forEach((r_k) => {
            watchlist.delete(r_k);
          });
          toAdd.forEach((a_k) => {
            watchlist.add(a_k);
          });
          toSub.forEach(([orb_key, props]) => {
          });
          if (watchlist.size == 0) {
            this.#subs.delete(cb);
          }
        }
      });
      this.#changed.clear();
    }
  }
}
var $Z2 = Symbol("orb-core");
var $L = Symbol("list-core");
var MODEL_SELF = Symbol("m-self");
var SYMBOL_ISMODEL = Symbol("orbz-ismodel");
var Z_DEFS = Symbol("model-def");
var Z_MODEL_IDS = Symbol("model-id");
var MODEL_IMPLEMENTS = Symbol("model-id");
var Model = function() {
  let { defs, types } = scan(arguments[arguments.length - 1]);
  let model_id = Symbol("unique-model-id");
  let ids = [model_id];
  for (let i = arguments.length - 2;i >= 0; i--) {
    defs = deepMerge(arguments[i][Z_DEFS], defs);
    ids.push(...arguments[i][Z_MODEL_IDS]);
  }
  function ModelConstructor(state = {}) {
    if (!new.target) {
      return new ModelConstructor(state);
    }
    Object.defineProperty(this, $Z2, { value: new OrbCore(defs, state, this) });
    Object.defineProperty(this, MODEL_IMPLEMENTS, { value: ids });
    Object.preventExtensions(this);
  }
  Object.defineProperty(ModelConstructor, Symbol.hasInstance, {
    value: function(o) {
      return o && o[MODEL_IMPLEMENTS] && o[MODEL_IMPLEMENTS].includes(model_id);
    }
  });
  ModelConstructor[Z_DEFS] = defs;
  ModelConstructor[Z_MODEL_IDS] = ids;
  Object.keys(defs.orbs).forEach((k) => {
    if (defs.orbs[k] == MODEL_SELF) {
      defs.orbs[k] = ModelConstructor;
    }
  });
  Object.keys(defs.entry).forEach((k) => {
    Object.defineProperty(ModelConstructor.prototype, k, {
      value: function() {
        return this[$Z2].run_entrypoint(k, arguments, { async: false });
      }
    });
  });
  Object.keys(defs.async).forEach((k) => {
    Object.defineProperty(ModelConstructor.prototype, k, {
      value: function() {
        return this[$Z2].run_entrypoint(k, arguments, { async: true });
      }
    });
  });
  Object.keys(defs.derived).forEach((k) => {
    Object.defineProperty(ModelConstructor.prototype, k, {
      get() {
        return this[$Z2].get_derived(k);
      },
      enumerable: !k.startsWith("_")
    });
  });
  Object.keys(defs.getset).forEach((k) => {
    Object.defineProperty(ModelConstructor.prototype, k, {
      get() {
        return this[$Z2].get_derived(k);
      },
      set(v) {
        return this[$Z2].run_entrypoint(k, [v]);
      },
      enumerable: !k.startsWith("_")
    });
  });
  Object.keys(defs.state).forEach((k) => {
    Object.defineProperty(ModelConstructor.prototype, k, {
      get() {
        return this[$Z2].get_state(k);
      },
      set(v) {
        this[$Z2].set_state(k, v);
      },
      enumerable: !k.startsWith("_")
    });
  });
  Object.keys(defs.orbs).forEach((k) => {
    Object.defineProperty(ModelConstructor.prototype, k, {
      get() {
        return this[$Z2].get_orb(k);
      },
      set(v) {
        this[$Z2].set_orb(k, v);
      },
      enumerable: !k.startsWith("_")
    });
  });
  Object.defineProperties(ModelConstructor.prototype, shared_proto);
  return ModelConstructor;
};
var scan = function(model) {
  let defs = {
    state: {},
    derived: {},
    entry: {},
    orbs: {},
    getset: {},
    async: {}
  };
  let types = {};
  let prop_descs = Object.getOwnPropertyDescriptors(model);
  Object.keys(prop_descs).forEach((key) => {
    let type, def;
    let { value, get, set } = prop_descs[key];
    if (get && set) {
      type = "getset";
      def = { get, set };
    } else if (get) {
      def = get;
      type = "derived";
    } else if (set) {
      console.log("TODO: lone setter");
    } else {
      def = value;
      if (typeof value == "function") {
        if (value instanceof Model) {
          type = "orbs";
        } else if (value.constructor.name == "AsyncFunction") {
          type = "async";
        } else {
          type = "entry";
        }
      } else {
        if (value == MODEL_SELF) {
          type = "orbs";
        } else {
          type = "state";
        }
      }
    }
    types[key] = type;
    defs[type][key] = def;
  });
  return { types, defs };
};
var deepMerge = function(target, source) {
  const result = { ...target, ...source };
  for (const key of Object.keys(result)) {
    result[key] = typeof target[key] == "object" && typeof source[key] == "object" ? deepMerge(target[key], source[key]) : result[key];
  }
  return result;
};
var shared_proto = {
  $: { value: function(cb, watchlist) {
    if (typeof cb == "function") {
      return this[$Z2].add_sub(cb, watchlist);
    } else if (typeof cb == "string") {
      return this[$Z2].add_link(cb, watchlist);
    }
  } },
  $invalidate: { value: function(str) {
    this[$Z2].inval(str);
  } },
  toString: { value: function() {
    return "orb toString";
  } },
  [Symbol.toPrimitive]: { value: function() {
    return "orb toPrimitive";
  } },
  [Symbol.toStringTag]: { value: function() {
    return "orb string tag";
  } }
};
Model.self = () => MODEL_SELF;
Object.defineProperty(Model, Symbol.hasInstance, {
  value(o) {
    return o && Object.hasOwn(o, Z_MODEL_IDS);
  }
});
var Orb = function(def) {
  return Model(def)();
};
Object.defineProperty(Orb, Symbol.hasInstance, {
  value(o) {
    return o && o[$Z2] && o[$Z2] instanceof OrbCore;
  }
});

// src/files/File.js
import fs from "fs";
var transpiler2 = new Bun.Transpiler({
  loader: "js"
});
var File = Model({
  _last_update: null,
  _contents: Buffer.from(""),
  route: "",
  name: "",
  get contents() {
    return this._contents;
  },
  set contents(v) {
    this._last_update = Date.now();
    this._contents = Buffer.from(v);
  },
  get updated() {
    return this._last_update;
  },
  async update() {
    let new_contents = fs.readFileSync(this.route);
    if (Buffer.compare(new_contents, this.contents) != 0) {
      this.contents = new_contents;
      Loader.registry.delete(this.route);
    }
  }
});
// src/files/Script.js
import fs2 from "fs";
var transpiler3 = new Bun.Transpiler({
  loader: "js"
});
var Script = Model(File, {
  module: {},
  get transpilation() {
    return transpiler3.scan(this.contents);
  },
  get imported() {
    return [...this.transpilation.imports];
  },
  async update() {
    let new_contents = fs2.readFileSync(this.route);
    if (Buffer.compare(new_contents, this.contents) != 0) {
      this.contents = new_contents;
      Loader.registry.delete(this.route);
      this.module = await import(this.route);
    }
  }
});
// src/files/Build.js
var {Glob } = globalThis.Bun;
import path from "path";
var Build = Model({
  filter: "",
  input_dir: ".",
  get glob() {
    let { input_dir, filter } = this;
    return `${input_dir}/${filter}`;
  },
  get globber() {
    let { glob } = this;
    return new Glob(glob);
  },
  _files: {},
  get all_files() {
    let { _files } = this;
    return Object.values(_files);
  },
  FileModelCallback() {
    return File;
  },
  async create_file(route) {
    if (!this._files[route]) {
      let FileModel = this.FileModelCallback();
      let name = route.replace(this.input_dir + "/", "");
      name = name.substring(0, name.lastIndexOf("."));
      let forb = FileModel({
        route: path.join(process.cwd(), route),
        name
      });
      await forb.update();
      this._files[route] = forb;
      this._files = this._files;
    } else {
      console.log("file already exists!");
    }
  },
  async init() {
    await this.update({ skip_delete: true });
  },
  async update({ skip_delete = false } = {}) {
    let { _files, globber } = this;
    let path_arr = [...globber.scanSync(".")];
    if (!skip_delete) {
      Object.keys(_files).forEach((prev_path) => {
        if (path_arr.indexOf(prev_path) == -1) {
          console.log("DELETE " + prev_path);
          delete _files[prev_path];
        }
      });
    }
    for (let i = 0;i < path_arr.length; i++) {
      let cur_path = path_arr[i];
      if (_files[cur_path]) {
        await _files[cur_path].update();
      } else {
        await this.create_file(cur_path);
      }
    }
  }
});

// src/files/Assets.js
import fs3 from "fs";
function Assets({
  output = {}
} = {}) {
  let FileModel = Model(File, {
    module: null,
    _generated_contents: "",
    get transpilation() {
      return transpiler.scan(this.contents);
    },
    get imported() {
      return this.transpilation.imports;
    },
    get is_generated() {
      let regex = /([\w-.]+)\.([\w]+)\.js$/;
      let matches = this.route.match(regex);
      return matches ? matches[2] : false;
    },
    get filetype() {
      let { is_generated, route } = this;
      return is_generated ? is_generated : route.substring(route.lastIndexOf("."));
    },
    get asset_contents() {
      return this.is_generated ? this._generated_contents : this.contents;
    },
    get asset_route() {
      let { is_generated, name, route } = this;
      return is_generated ? name : name + route.substring(route.lastIndexOf("."));
    },
    async update() {
      let new_contents = fs3.readFileSync(this.route);
      if (Buffer.compare(new_contents, this.contents) != 0) {
        this.contents = new_contents;
        Loader.registry.delete(this.route);
        if (this.is_generated) {
          this.module = await import(this.route);
          let res = await this.module.default();
          this.update_generated_contents(res);
        } else {
          this.module = null;
        }
      }
    },
    update_generated_contents(x) {
      this._generated_contents = x;
    }
  });
  return Model(Build, {
    filter: "**/[^_]*",
    input_dir: "assets",
    FileModelCallback: () => FileModel,
    build_each(asset) {
      let out = {};
      if (asset.filetype == "js") {
        out[`.zilk/browser/${asset.asset_route}`] = asset.asset_contents;
      } else if (asset.filetype == "css") {
        out[`.zilk/css/${asset.asset_route}`] = asset.asset_contents;
      } else {
        out[`public/${asset.asset_route}`] = asset.asset_contents;
      }
      return out;
    },
    build_all(assets) {
      let out = {};
      return out;
    }
  });
}
// src/files/Pages.js
import path2 from "path";
async function Pages({
  _document = "./pages/_document.js",
  output: {
    sync_router,
    sync_hydration,
    dyna_route_import,
    dyna_css_inline,
    global_css,
    static_pages,
    sitemap
  }
} = {}) {
  let _document_module = await import(path2.join(process.cwd(), _document));
  let FileModel = Model(Script, {
    get meta() {
      return this.module.meta;
    },
    get render_transpilation() {
      let { route, contents } = this;
      return `// src:${route}\n` + render_transpiler.transformSync(contents);
    },
    get full_transpilation() {
      let { route, contents } = this;
      return `// src:${route}\n` + full_transpiler.transformSync(contents);
    },
    get render_imports() {
      return render_transpiler.scan(this.contents).imports;
    },
    get ssr_html() {
      return this.module.default();
    },
    get full_html() {
      let { ssr_html, meta } = this;
      return _document_module.template(meta, ssr_html).toString();
    },
    get output_html_route() {
      let { name } = this;
      return name.match(/[\/]*index/) ? `${name}.html` : `${name}/index.html`;
    },
    get used_classes() {
      const rewriter = new HTMLRewriter;
      let class_list = [];
      rewriter.on("*", {
        element(el) {
          class_list.push(...el.getAttribute("class").split(" "));
        }
      });
      rewriter.transform(new Response(this.full_html));
      return class_list;
    },
    get route_str() {
      let { name } = this;
      let segs = name.split("/");
      let new_segs = segs.map((x) => {
        let res = null;
        if (res = x.match(/\[([\w-.]+)\]/)) {
          return ":" + res[1];
        } else if (res = x.match(/\[\.\.\.([\w-.]+)\]/)) {
          return "*";
        } else {
          return x;
        }
      });
      return new_segs.join("/");
    }
  });
  return Model(Build, {
    filter: "**/[^_]*.js",
    input_dir: "pages",
    FileModelCallback: () => FileModel,
    build_each(page) {
      let out = {};
      if (static_pages) {
        out[`public/${page.output_html_route}`] = page.full_html;
      }
      if (sync_router) {
        out[`.zilk/pages/${page.name}/render.js`] = page.render_transpilation;
        out[`.zilk/pages/${page.name}/full.js`] = page.full_transpilation;
      }
      return out;
    },
    build_all(pages) {
      let out = {};
      if (sitemap) {
        out[sitemap] = build_sitemap({ pages, domain: "macy.pink" });
      }
      if (sync_router) {
        out[`.zilk/browser/router.js`] = build_router({ pages });
      }
      return out;
    },
    async prompt_create({ Text, List }) {
      let page_name = await Text({
        message: "Page name?"
      });
      let classes_list = (await List({
        message: "List classes (space separated)",
        separator: " "
      })).map((s) => s.toUpperCase());
      return {
        [`./pages/${page_name}.js`]: `
          import { html } from 'zilk';

          export let meta = {
            title: "Test",
            description: "",
            index: true
          }

          export default () => html\`
            
          \`
        `
      };
    }
  });
}
var build_sitemap = function({ pages, domain }) {
  let indexed_pages = pages.filter(({ meta }) => meta.index);
  let makeUrl = (route) => `https://${domain}/${route.replace("index.html", "")}`;
  return raw.xml`
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${indexed_pages.map(({ output_html_route }) => raw.xml` <url>
    <loc>${makeUrl(output_html_route)}</loc>
    <lastmod>2023-01-01</lastmod>
  </url>`).join("\n")}
</urlset>`.toString();
};
var build_router = function({ pages }) {
  let imports = [`import { register } from 'zilk/router'`, `import { render, htmlFor } from 'zilk'`];
  let defines = [];
  pages.forEach(({ name, route_str }, i) => {
    let _render = `\$r${i}`;
    let _meta = `\$m${i}`;
    imports.push(`import {default as ${_render}, meta as ${_meta}} from '${path2.join("../pages/", name + "/full.js")}'`);
    defines.push(`register('${route_str}',${_meta},(root) => render(root,htmlFor(root,'${route_str}')\`\${${_render}()}\`))`);
  });
  return `${imports.join("\n")}\n${defines.join("\n")}`;
};
var render_transpiler = new Bun.Transpiler({
  loader: "js",
  exports: {
    eliminate: ["meta"]
  },
  trimUnusedImports: true,
  target: "browser"
});
var full_transpiler = new Bun.Transpiler({
  loader: "js",
  trimUnusedImports: true,
  target: "browser"
});
// src/files/Views.js
import path3 from "path";
function Views({
  output: {
    global_css,
    global_hydration
  }
} = {}) {
  let FileModel = Model(Script, {
    get css() {
      if (this.module.style) {
        return this.module.style().toString();
      }
      return "";
    },
    get render_transpilation() {
      let { route } = this;
      return `// src:${route}\n` + render_transpiler2.transformSync(this.contents);
    },
    get handler_transpilation() {
      let { route } = this;
      return `// src:${route}\n` + handler_transpiler.transformSync(this.contents);
    },
    get classify_prefix() {
      let matches = /classify\(['"]([\w"'_]+)['"]\)/.exec(this.contents);
      if (matches) {
        if (matches.length == 2) {
          return matches[1];
        }
        console.log("TODO: only 1 classify per view");
      } else {
        console.log("No classify call found");
      }
    },
    get handler_classes() {
      let { module } = this;
      return module.handlers ? Object.keys(module.handlers) : [];
    }
  });
  return Model(Build, {
    filter: "**/[^_]*.js",
    input_dir: "views",
    FileModelCallback: () => FileModel,
    build_each(view) {
      let out = {};
      if (global_hydration) {
        out[`.zilk/views/${view.name}/handler.js`] = view.handler_transpilation;
      }
      out[`.zilk/views/${view.name}/render.js`] = view.render_transpilation;
      return out;
    },
    build_all(views) {
      let out = {};
      if (global_css) {
        out[`.zilk/css/views.css`] = build_stylesheet({ views });
      }
      if (global_hydration) {
        out[`.zilk/browser/hydration.js`] = build_hydration({ views });
      }
      return out;
    },
    async prompt_create({ Text, List }) {
      let component_name = await Text({
        message: "Component name?"
      });
      let classes_list = (await List({
        message: "List classes (space separated)",
        separator: " "
      })).map((s) => s.toUpperCase());
      return {
        [`./views/${component_name}.js`]: `
          import { html, css, classify } from 'zilk';
          let { ${classes_list.join(", ")} } = classify('${component_name}');
  
          export default () => html\`
            
          \`
  
          export let style = () => css\`
  
          \`
        `
      };
    }
  });
}
var build_stylesheet = function({ views }) {
  let agg_css = "";
  views.forEach(({ css: css2 }) => {
    agg_css += css2;
  });
  return agg_css;
};
var build_hydration = function({ views }) {
  let imports = [`import { saturate } from 'zilk/hydrate'`];
  let defines = [];
  views.forEach(({ name, handler_classes }, i) => {
    if (handler_classes.length > 0) {
      let vname = `\$h${i}`;
      imports.push(`import {handlers as ${vname}} from '${path3.join("../views/", name + "/handler.js")}'`);
      defines.push(`saturate(${vname})`);
    }
  });
  return `${imports.join("\n")}\n${defines.join("\n")}`;
};
var handler_transpiler = new Bun.Transpiler({
  loader: "js",
  exports: {
    eliminate: ["style", "default"]
  },
  trimUnusedImports: true,
  target: "browser"
});
var render_transpiler2 = new Bun.Transpiler({
  loader: "js",
  exports: {
    eliminate: ["style", "handlers"]
  },
  trimUnusedImports: true,
  target: "browser"
});
export {
  Views,
  Script,
  Pages,
  File,
  Build,
  Assets
};

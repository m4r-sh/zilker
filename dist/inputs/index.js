// @bun
// src/inputs/Page.js
function Page(config) {
  return {
    async setup({ cwd }) {
      let [_document, zilk] = await Promise.all([
        import(cwd + "/" + config._document),
        import(Bun.resolveSync("zilk", cwd))
      ]);
      this._document = _document;
      this.zilk = zilk;
      this.render_browser_transpiler = new Bun.Transpiler({
        loader: "js",
        exports: { eliminate: ["static_route", "pull_bun", "pull_cf"] },
        trimUnusedImports: true,
        target: "browser"
      });
      this.render_server_transpiler = new Bun.Transpiler({
        loader: "js",
        exports: { eliminate: ["static_route", "pull_browser", "pull_cf"] },
        trimUnusedImports: true,
        target: "bun"
      });
    },
    async each({ p, name, mod, contents }) {
      let out = {};
      out.route_pattern = nameToPattern(name);
      out["client.js"] = this.render_browser_transpiler.transformSync(contents);
      out["server.js"] = this.render_server_transpiler.transformSync(contents);
      if (mod.static_route) {
        let metadata = await mod.meta();
        let content = await mod.content();
        let str = this.zilk.render(String, this._document.template({ meta: metadata, content }));
        out["ssr.html"] = str;
        out["meta.json"] = JSON.stringify(metadata, null, 2);
      }
      return out;
    }
  };
}
function nameToPattern(name) {
  const segments = name.split("/");
  return "/" + segments.map((x, i) => {
    let res = null;
    if (x === "index" && i === segments.length - 1) {
      return "";
    } else if (res = x.match(/\.\.\.([\w-.]+)/)) {
      return ":wild+";
    } else if (res = x.match(/\[([\w-.]+)/)) {
      return ":" + res[1];
    } else {
      return x;
    }
  }).join("/");
}
// src/inputs/View.js
function View(config) {
  return {
    async setup() {
      let transpiler_settings = {
        loader: "js",
        trimUnusedImports: true,
        target: "browser"
      };
      this.handler_transpiler = new Bun.Transpiler({
        ...transpiler_settings,
        exports: { eliminate: ["style", "default"] }
      });
      this.render_transpiler = new Bun.Transpiler({
        ...transpiler_settings,
        exports: { eliminate: ["style", "handlers"] }
      });
      this.server_transpiler = new Bun.Transpiler({
        ...transpiler_settings,
        target: "bun",
        exports: { eliminate: ["style", "handlers"] }
      });
      this.full_transpiler = new Bun.Transpiler(transpiler_settings);
    },
    async each({ p, name, mod, contents }) {
      if (!mod.default || typeof mod.default != "function") {
        throw "skip";
      }
      let out = {};
      out.has_handlers = mod.handlers && Object.values(mod.handlers).filter((o) => o).length > 0;
      out.has_style = mod.style && typeof mod.style == "function";
      if (out.has_style) {
        out["styles.css"] = mod.style().toString();
      }
      if (out.has_handlers) {
        out["handlers.js"] = this.handler_transpiler.transformSync(contents);
      }
      out["render.js"] = this.render_transpiler.transformSync(contents);
      out["server.js"] = this.server_transpiler.transformSync(contents);
      out["full.js"] = this.full_transpiler.transformSync(contents);
      return out;
    }
  };
}
// src/inputs/Asset.js
function Asset(config) {
  return {
    async setup() {},
    async each({ p, name, mod, contents }) {
      let out = {};
      let generated_format = getGeneratedFormat(name);
      out.output_path = generated_format ? name.substring(0, name.length - 3) : name;
      if (generated_format) {
        out.blob = await mod.default();
      } else {
        out.blob = Bun.file(p);
      }
      return out;
    }
  };
}
function getGeneratedFormat(route) {
  let matches = route.match(/([\w-.\/]+)\.([\w]+)\.js$/);
  return matches ? matches[2] : false;
}
export {
  View,
  Page,
  Asset
};

#!/usr/bin/env bun
// @bun
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// node_modules/prompts/node_modules/kleur/index.js
var require_kleur = __commonJS((exports, module) => {
  var run2 = function(arr, str) {
    let i2 = 0, tmp, beg = "", end = "";
    for (;i2 < arr.length; i2++) {
      tmp = arr[i2];
      beg += tmp.open;
      end += tmp.close;
      if (str.includes(tmp.close)) {
        str = str.replace(tmp.rgx, tmp.close + tmp.open);
      }
    }
    return beg + str + end;
  };
  var chain2 = function(has, keys) {
    let ctx = { has, keys };
    ctx.reset = $2.reset.bind(ctx);
    ctx.bold = $2.bold.bind(ctx);
    ctx.dim = $2.dim.bind(ctx);
    ctx.italic = $2.italic.bind(ctx);
    ctx.underline = $2.underline.bind(ctx);
    ctx.inverse = $2.inverse.bind(ctx);
    ctx.hidden = $2.hidden.bind(ctx);
    ctx.strikethrough = $2.strikethrough.bind(ctx);
    ctx.black = $2.black.bind(ctx);
    ctx.red = $2.red.bind(ctx);
    ctx.green = $2.green.bind(ctx);
    ctx.yellow = $2.yellow.bind(ctx);
    ctx.blue = $2.blue.bind(ctx);
    ctx.magenta = $2.magenta.bind(ctx);
    ctx.cyan = $2.cyan.bind(ctx);
    ctx.white = $2.white.bind(ctx);
    ctx.gray = $2.gray.bind(ctx);
    ctx.grey = $2.grey.bind(ctx);
    ctx.bgBlack = $2.bgBlack.bind(ctx);
    ctx.bgRed = $2.bgRed.bind(ctx);
    ctx.bgGreen = $2.bgGreen.bind(ctx);
    ctx.bgYellow = $2.bgYellow.bind(ctx);
    ctx.bgBlue = $2.bgBlue.bind(ctx);
    ctx.bgMagenta = $2.bgMagenta.bind(ctx);
    ctx.bgCyan = $2.bgCyan.bind(ctx);
    ctx.bgWhite = $2.bgWhite.bind(ctx);
    return ctx;
  };
  var init2 = function(open, close) {
    let blk = {
      open: `\x1B[${open}m`,
      close: `\x1B[${close}m`,
      rgx: new RegExp(`\\x1b\\[${close}m`, "g")
    };
    return function(txt) {
      if (this !== undefined && this.has !== undefined) {
        this.has.includes(open) || (this.has.push(open), this.keys.push(blk));
        return txt === undefined ? this : $2.enabled ? run2(this.keys, txt + "") : txt + "";
      }
      return txt === undefined ? chain2([open], [blk]) : $2.enabled ? run2([blk], txt + "") : txt + "";
    };
  };
  var { FORCE_COLOR: FORCE_COLOR2, NODE_DISABLE_COLORS: NODE_DISABLE_COLORS2, TERM: TERM2 } = process.env;
  var $2 = {
    enabled: !NODE_DISABLE_COLORS2 && TERM2 !== "dumb" && FORCE_COLOR2 !== "0",
    reset: init2(0, 0),
    bold: init2(1, 22),
    dim: init2(2, 22),
    italic: init2(3, 23),
    underline: init2(4, 24),
    inverse: init2(7, 27),
    hidden: init2(8, 28),
    strikethrough: init2(9, 29),
    black: init2(30, 39),
    red: init2(31, 39),
    green: init2(32, 39),
    yellow: init2(33, 39),
    blue: init2(34, 39),
    magenta: init2(35, 39),
    cyan: init2(36, 39),
    white: init2(37, 39),
    gray: init2(90, 39),
    grey: init2(90, 39),
    bgBlack: init2(40, 49),
    bgRed: init2(41, 49),
    bgGreen: init2(42, 49),
    bgYellow: init2(43, 49),
    bgBlue: init2(44, 49),
    bgMagenta: init2(45, 49),
    bgCyan: init2(46, 49),
    bgWhite: init2(47, 49)
  };
  module.exports = $2;
});

// node_modules/prompts/dist/util/action.js
var require_action = __commonJS((exports, module) => {
  module.exports = (key, isSelect) => {
    if (key.meta && key.name !== "escape")
      return;
    if (key.ctrl) {
      if (key.name === "a")
        return "first";
      if (key.name === "c")
        return "abort";
      if (key.name === "d")
        return "abort";
      if (key.name === "e")
        return "last";
      if (key.name === "g")
        return "reset";
    }
    if (isSelect) {
      if (key.name === "j")
        return "down";
      if (key.name === "k")
        return "up";
    }
    if (key.name === "return")
      return "submit";
    if (key.name === "enter")
      return "submit";
    if (key.name === "backspace")
      return "delete";
    if (key.name === "delete")
      return "deleteForward";
    if (key.name === "abort")
      return "abort";
    if (key.name === "escape")
      return "exit";
    if (key.name === "tab")
      return "next";
    if (key.name === "pagedown")
      return "nextPage";
    if (key.name === "pageup")
      return "prevPage";
    if (key.name === "home")
      return "home";
    if (key.name === "end")
      return "end";
    if (key.name === "up")
      return "up";
    if (key.name === "down")
      return "down";
    if (key.name === "right")
      return "right";
    if (key.name === "left")
      return "left";
    return false;
  };
});

// node_modules/prompts/dist/util/strip.js
var require_strip = __commonJS((exports, module) => {
  module.exports = (str) => {
    const pattern = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))"].join("|");
    const RGX = new RegExp(pattern, "g");
    return typeof str === "string" ? str.replace(RGX, "") : str;
  };
});

// node_modules/sisteransi/src/index.js
var require_src = __commonJS((exports, module) => {
  var ESC = "\x1B";
  var CSI = `${ESC}[`;
  var beep = "\x07";
  var cursor = {
    to(x, y) {
      if (!y)
        return `${CSI}${x + 1}G`;
      return `${CSI}${y + 1};${x + 1}H`;
    },
    move(x, y) {
      let ret = "";
      if (x < 0)
        ret += `${CSI}${-x}D`;
      else if (x > 0)
        ret += `${CSI}${x}C`;
      if (y < 0)
        ret += `${CSI}${-y}A`;
      else if (y > 0)
        ret += `${CSI}${y}B`;
      return ret;
    },
    up: (count = 1) => `${CSI}${count}A`,
    down: (count = 1) => `${CSI}${count}B`,
    forward: (count = 1) => `${CSI}${count}C`,
    backward: (count = 1) => `${CSI}${count}D`,
    nextLine: (count = 1) => `${CSI}E`.repeat(count),
    prevLine: (count = 1) => `${CSI}F`.repeat(count),
    left: `${CSI}G`,
    hide: `${CSI}?25l`,
    show: `${CSI}?25h`,
    save: `${ESC}7`,
    restore: `${ESC}8`
  };
  var scroll = {
    up: (count = 1) => `${CSI}S`.repeat(count),
    down: (count = 1) => `${CSI}T`.repeat(count)
  };
  var erase = {
    screen: `${CSI}2J`,
    up: (count = 1) => `${CSI}1J`.repeat(count),
    down: (count = 1) => `${CSI}J`.repeat(count),
    line: `${CSI}2K`,
    lineEnd: `${CSI}K`,
    lineStart: `${CSI}1K`,
    lines(count) {
      let clear = "";
      for (let i2 = 0;i2 < count; i2++)
        clear += this.line + (i2 < count - 1 ? cursor.up() : "");
      if (count)
        clear += cursor.left;
      return clear;
    }
  };
  module.exports = { cursor, scroll, erase, beep };
});

// node_modules/prompts/dist/util/clear.js
var require_clear = __commonJS((exports, module) => {
  var _createForOfIteratorHelper = function(o2, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o2[Symbol.iterator] || o2["@@iterator"];
    if (!it) {
      if (Array.isArray(o2) || (it = _unsupportedIterableToArray(o2)) || allowArrayLike && o2 && typeof o2.length === "number") {
        if (it)
          o2 = it;
        var i2 = 0;
        var F = function F() {
        };
        return { s: F, n: function n() {
          if (i2 >= o2.length)
            return { done: true };
          return { done: false, value: o2[i2++] };
        }, e: function e(_e) {
          throw _e;
        }, f: F };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return { s: function s() {
      it = it.call(o2);
    }, n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    }, e: function e(_e2) {
      didErr = true;
      err = _e2;
    }, f: function f() {
      try {
        if (!normalCompletion && it.return != null)
          it.return();
      } finally {
        if (didErr)
          throw err;
      }
    } };
  };
  var _unsupportedIterableToArray = function(o2, minLen) {
    if (!o2)
      return;
    if (typeof o2 === "string")
      return _arrayLikeToArray(o2, minLen);
    var n2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (n2 === "Object" && o2.constructor)
      n2 = o2.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o2);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray(o2, minLen);
  };
  var _arrayLikeToArray = function(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i2 = 0, arr2 = new Array(len);i2 < len; i2++)
      arr2[i2] = arr[i2];
    return arr2;
  };
  var strip = require_strip();
  var _require = require_src();
  var erase = _require.erase;
  var cursor = _require.cursor;
  var width = (str) => [...strip(str)].length;
  module.exports = function(prompt, perLine) {
    if (!perLine)
      return erase.line + cursor.to(0);
    let rows = 0;
    const lines = prompt.split(/\r?\n/);
    var _iterator = _createForOfIteratorHelper(lines), _step;
    try {
      for (_iterator.s();!(_step = _iterator.n()).done; ) {
        let line = _step.value;
        rows += 1 + Math.floor(Math.max(width(line) - 1, 0) / perLine);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return erase.lines(rows);
  };
});

// node_modules/prompts/dist/util/figures.js
var require_figures = __commonJS((exports, module) => {
  var main = {
    arrowUp: "\u2191",
    arrowDown: "\u2193",
    arrowLeft: "\u2190",
    arrowRight: "\u2192",
    radioOn: "\u25C9",
    radioOff: "\u25EF",
    tick: "\u2714",
    cross: "\u2716",
    ellipsis: "\u2026",
    pointerSmall: "\u203A",
    line: "\u2500",
    pointer: "\u276F"
  };
  var win = {
    arrowUp: main.arrowUp,
    arrowDown: main.arrowDown,
    arrowLeft: main.arrowLeft,
    arrowRight: main.arrowRight,
    radioOn: "(*)",
    radioOff: "( )",
    tick: "\u221A",
    cross: "\xD7",
    ellipsis: "...",
    pointerSmall: "\xBB",
    line: "\u2500",
    pointer: ">"
  };
  var figures = process.platform === "win32" ? win : main;
  module.exports = figures;
});

// node_modules/prompts/dist/util/style.js
var require_style = __commonJS((exports, module) => {
  var c = require_kleur();
  var figures = require_figures();
  var styles = Object.freeze({
    password: {
      scale: 1,
      render: (input) => "*".repeat(input.length)
    },
    emoji: {
      scale: 2,
      render: (input) => "\uD83D\uDE03".repeat(input.length)
    },
    invisible: {
      scale: 0,
      render: (input) => ""
    },
    default: {
      scale: 1,
      render: (input) => `${input}`
    }
  });
  var render = (type) => styles[type] || styles.default;
  var symbols = Object.freeze({
    aborted: c.red(figures.cross),
    done: c.green(figures.tick),
    exited: c.yellow(figures.cross),
    default: c.cyan("?")
  });
  var symbol = (done, aborted, exited) => aborted ? symbols.aborted : exited ? symbols.exited : done ? symbols.done : symbols.default;
  var delimiter = (completing) => c.gray(completing ? figures.ellipsis : figures.pointerSmall);
  var item = (expandable, expanded) => c.gray(expandable ? expanded ? figures.pointerSmall : "+" : figures.line);
  module.exports = {
    styles,
    render,
    symbols,
    symbol,
    delimiter,
    item
  };
});

// node_modules/prompts/dist/util/lines.js
var require_lines = __commonJS((exports, module) => {
  var strip = require_strip();
  module.exports = function(msg, perLine) {
    let lines = String(strip(msg) || "").split(/\r?\n/);
    if (!perLine)
      return lines.length;
    return lines.map((l2) => Math.ceil(l2.length / perLine)).reduce((a2, b) => a2 + b);
  };
});

// node_modules/prompts/dist/util/wrap.js
var require_wrap = __commonJS((exports, module) => {
  module.exports = (msg, opts = {}) => {
    const tab = Number.isSafeInteger(parseInt(opts.margin)) ? new Array(parseInt(opts.margin)).fill(" ").join("") : opts.margin || "";
    const width = opts.width;
    return (msg || "").split(/\r?\n/g).map((line) => line.split(/\s+/g).reduce((arr, w) => {
      if (w.length + tab.length >= width || arr[arr.length - 1].length + w.length + 1 < width)
        arr[arr.length - 1] += ` ${w}`;
      else
        arr.push(`${tab}${w}`);
      return arr;
    }, [tab]).join("\n")).join("\n");
  };
});

// node_modules/prompts/dist/util/entriesToDisplay.js
var require_entriesToDisplay = __commonJS((exports, module) => {
  module.exports = (cursor, total, maxVisible) => {
    maxVisible = maxVisible || total;
    let startIndex = Math.min(total - maxVisible, cursor - Math.floor(maxVisible / 2));
    if (startIndex < 0)
      startIndex = 0;
    let endIndex = Math.min(startIndex + maxVisible, total);
    return {
      startIndex,
      endIndex
    };
  };
});

// node_modules/prompts/dist/util/index.js
var require_util = __commonJS((exports, module) => {
  module.exports = {
    action: require_action(),
    clear: require_clear(),
    style: require_style(),
    strip: require_strip(),
    figures: require_figures(),
    lines: require_lines(),
    wrap: require_wrap(),
    entriesToDisplay: require_entriesToDisplay()
  };
});

// node_modules/prompts/dist/elements/prompt.js
var require_prompt = __commonJS((exports, module) => {
  var readline = import.meta.require("readline");
  var _require = require_util();
  var action = _require.action;
  var EventEmitter = import.meta.require("events");
  var _require2 = require_src();
  var beep = _require2.beep;
  var cursor = _require2.cursor;
  var color = require_kleur();

  class Prompt extends EventEmitter {
    constructor(opts = {}) {
      super();
      this.firstRender = true;
      this.in = opts.stdin || process.stdin;
      this.out = opts.stdout || process.stdout;
      this.onRender = (opts.onRender || (() => {
        return;
      })).bind(this);
      const rl = readline.createInterface({
        input: this.in,
        escapeCodeTimeout: 50
      });
      readline.emitKeypressEvents(this.in, rl);
      if (this.in.isTTY)
        this.in.setRawMode(true);
      const isSelect = ["SelectPrompt", "MultiselectPrompt"].indexOf(this.constructor.name) > -1;
      const keypress = (str, key) => {
        let a2 = action(key, isSelect);
        if (a2 === false) {
          this._ && this._(str, key);
        } else if (typeof this[a2] === "function") {
          this[a2](key);
        } else {
          this.bell();
        }
      };
      this.close = () => {
        this.out.write(cursor.show);
        this.in.removeListener("keypress", keypress);
        if (this.in.isTTY)
          this.in.setRawMode(false);
        rl.close();
        this.emit(this.aborted ? "abort" : this.exited ? "exit" : "submit", this.value);
        this.closed = true;
      };
      this.in.on("keypress", keypress);
    }
    fire() {
      this.emit("state", {
        value: this.value,
        aborted: !!this.aborted,
        exited: !!this.exited
      });
    }
    bell() {
      this.out.write(beep);
    }
    render() {
      this.onRender(color);
      if (this.firstRender)
        this.firstRender = false;
    }
  }
  module.exports = Prompt;
});

// node_modules/prompts/dist/elements/text.js
var require_text = __commonJS((exports, module) => {
  var asyncGeneratorStep = function(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  };
  var _asyncToGenerator = function(fn) {
    return function() {
      var self = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  };
  var color = require_kleur();
  var Prompt = require_prompt();
  var _require = require_src();
  var erase = _require.erase;
  var cursor = _require.cursor;
  var _require2 = require_util();
  var style = _require2.style;
  var clear = _require2.clear;
  var lines = _require2.lines;
  var figures = _require2.figures;

  class TextPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.transform = style.render(opts.style);
      this.scale = this.transform.scale;
      this.msg = opts.message;
      this.initial = opts.initial || ``;
      this.validator = opts.validate || (() => true);
      this.value = ``;
      this.errorMsg = opts.error || `Please Enter A Valid Value`;
      this.cursor = Number(!!this.initial);
      this.cursorOffset = 0;
      this.clear = clear(``, this.out.columns);
      this.render();
    }
    set value(v) {
      if (!v && this.initial) {
        this.placeholder = true;
        this.rendered = color.gray(this.transform.render(this.initial));
      } else {
        this.placeholder = false;
        this.rendered = this.transform.render(v);
      }
      this._value = v;
      this.fire();
    }
    get value() {
      return this._value;
    }
    reset() {
      this.value = ``;
      this.cursor = Number(!!this.initial);
      this.cursorOffset = 0;
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.value = this.value || this.initial;
      this.done = this.aborted = true;
      this.error = false;
      this.red = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    validate() {
      var _this = this;
      return _asyncToGenerator(function* () {
        let valid = yield _this.validator(_this.value);
        if (typeof valid === `string`) {
          _this.errorMsg = valid;
          valid = false;
        }
        _this.error = !valid;
      })();
    }
    submit() {
      var _this2 = this;
      return _asyncToGenerator(function* () {
        _this2.value = _this2.value || _this2.initial;
        _this2.cursorOffset = 0;
        _this2.cursor = _this2.rendered.length;
        yield _this2.validate();
        if (_this2.error) {
          _this2.red = true;
          _this2.fire();
          _this2.render();
          return;
        }
        _this2.done = true;
        _this2.aborted = false;
        _this2.fire();
        _this2.render();
        _this2.out.write("\n");
        _this2.close();
      })();
    }
    next() {
      if (!this.placeholder)
        return this.bell();
      this.value = this.initial;
      this.cursor = this.rendered.length;
      this.fire();
      this.render();
    }
    moveCursor(n2) {
      if (this.placeholder)
        return;
      this.cursor = this.cursor + n2;
      this.cursorOffset += n2;
    }
    _(c, key) {
      let s1 = this.value.slice(0, this.cursor);
      let s2 = this.value.slice(this.cursor);
      this.value = `${s1}${c}${s2}`;
      this.red = false;
      this.cursor = this.placeholder ? 0 : s1.length + 1;
      this.render();
    }
    delete() {
      if (this.isCursorAtStart())
        return this.bell();
      let s1 = this.value.slice(0, this.cursor - 1);
      let s2 = this.value.slice(this.cursor);
      this.value = `${s1}${s2}`;
      this.red = false;
      if (this.isCursorAtStart()) {
        this.cursorOffset = 0;
      } else {
        this.cursorOffset++;
        this.moveCursor(-1);
      }
      this.render();
    }
    deleteForward() {
      if (this.cursor * this.scale >= this.rendered.length || this.placeholder)
        return this.bell();
      let s1 = this.value.slice(0, this.cursor);
      let s2 = this.value.slice(this.cursor + 1);
      this.value = `${s1}${s2}`;
      this.red = false;
      if (this.isCursorAtEnd()) {
        this.cursorOffset = 0;
      } else {
        this.cursorOffset++;
      }
      this.render();
    }
    first() {
      this.cursor = 0;
      this.render();
    }
    last() {
      this.cursor = this.value.length;
      this.render();
    }
    left() {
      if (this.cursor <= 0 || this.placeholder)
        return this.bell();
      this.moveCursor(-1);
      this.render();
    }
    right() {
      if (this.cursor * this.scale >= this.rendered.length || this.placeholder)
        return this.bell();
      this.moveCursor(1);
      this.render();
    }
    isCursorAtStart() {
      return this.cursor === 0 || this.placeholder && this.cursor === 1;
    }
    isCursorAtEnd() {
      return this.cursor === this.rendered.length || this.placeholder && this.cursor === this.rendered.length + 1;
    }
    render() {
      if (this.closed)
        return;
      if (!this.firstRender) {
        if (this.outputError)
          this.out.write(cursor.down(lines(this.outputError, this.out.columns) - 1) + clear(this.outputError, this.out.columns));
        this.out.write(clear(this.outputText, this.out.columns));
      }
      super.render();
      this.outputError = "";
      this.outputText = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(this.done), this.red ? color.red(this.rendered) : this.rendered].join(` `);
      if (this.error) {
        this.outputError += this.errorMsg.split(`\n`).reduce((a2, l2, i2) => a2 + `\n${i2 ? " " : figures.pointerSmall} ${color.red().italic(l2)}`, ``);
      }
      this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore + cursor.move(this.cursorOffset, 0));
    }
  }
  module.exports = TextPrompt;
});

// node_modules/prompts/dist/elements/select.js
var require_select = __commonJS((exports, module) => {
  var color = require_kleur();
  var Prompt = require_prompt();
  var _require = require_util();
  var style = _require.style;
  var clear = _require.clear;
  var figures = _require.figures;
  var wrap = _require.wrap;
  var entriesToDisplay = _require.entriesToDisplay;
  var _require2 = require_src();
  var cursor = _require2.cursor;

  class SelectPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.hint = opts.hint || "- Use arrow-keys. Return to submit.";
      this.warn = opts.warn || "- This option is disabled";
      this.cursor = opts.initial || 0;
      this.choices = opts.choices.map((ch, idx) => {
        if (typeof ch === "string")
          ch = {
            title: ch,
            value: idx
          };
        return {
          title: ch && (ch.title || ch.value || ch),
          value: ch && (ch.value === undefined ? idx : ch.value),
          description: ch && ch.description,
          selected: ch && ch.selected,
          disabled: ch && ch.disabled
        };
      });
      this.optionsPerPage = opts.optionsPerPage || 10;
      this.value = (this.choices[this.cursor] || {}).value;
      this.clear = clear("", this.out.columns);
      this.render();
    }
    moveCursor(n2) {
      this.cursor = n2;
      this.value = this.choices[n2].value;
      this.fire();
    }
    reset() {
      this.moveCursor(0);
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      if (!this.selection.disabled) {
        this.done = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      } else
        this.bell();
    }
    first() {
      this.moveCursor(0);
      this.render();
    }
    last() {
      this.moveCursor(this.choices.length - 1);
      this.render();
    }
    up() {
      if (this.cursor === 0) {
        this.moveCursor(this.choices.length - 1);
      } else {
        this.moveCursor(this.cursor - 1);
      }
      this.render();
    }
    down() {
      if (this.cursor === this.choices.length - 1) {
        this.moveCursor(0);
      } else {
        this.moveCursor(this.cursor + 1);
      }
      this.render();
    }
    next() {
      this.moveCursor((this.cursor + 1) % this.choices.length);
      this.render();
    }
    _(c, key) {
      if (c === " ")
        return this.submit();
    }
    get selection() {
      return this.choices[this.cursor];
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      else
        this.out.write(clear(this.outputText, this.out.columns));
      super.render();
      let _entriesToDisplay = entriesToDisplay(this.cursor, this.choices.length, this.optionsPerPage), startIndex = _entriesToDisplay.startIndex, endIndex = _entriesToDisplay.endIndex;
      this.outputText = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(false), this.done ? this.selection.title : this.selection.disabled ? color.yellow(this.warn) : color.gray(this.hint)].join(" ");
      if (!this.done) {
        this.outputText += "\n";
        for (let i2 = startIndex;i2 < endIndex; i2++) {
          let title, prefix, desc = "", v = this.choices[i2];
          if (i2 === startIndex && startIndex > 0) {
            prefix = figures.arrowUp;
          } else if (i2 === endIndex - 1 && endIndex < this.choices.length) {
            prefix = figures.arrowDown;
          } else {
            prefix = " ";
          }
          if (v.disabled) {
            title = this.cursor === i2 ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
            prefix = (this.cursor === i2 ? color.bold().gray(figures.pointer) + " " : "  ") + prefix;
          } else {
            title = this.cursor === i2 ? color.cyan().underline(v.title) : v.title;
            prefix = (this.cursor === i2 ? color.cyan(figures.pointer) + " " : "  ") + prefix;
            if (v.description && this.cursor === i2) {
              desc = ` - ${v.description}`;
              if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
                desc = "\n" + wrap(v.description, {
                  margin: 3,
                  width: this.out.columns
                });
              }
            }
          }
          this.outputText += `${prefix} ${title}${color.gray(desc)}\n`;
        }
      }
      this.out.write(this.outputText);
    }
  }
  module.exports = SelectPrompt;
});

// node_modules/prompts/dist/elements/toggle.js
var require_toggle = __commonJS((exports, module) => {
  var color = require_kleur();
  var Prompt = require_prompt();
  var _require = require_util();
  var style = _require.style;
  var clear = _require.clear;
  var _require2 = require_src();
  var cursor = _require2.cursor;
  var erase = _require2.erase;

  class TogglePrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.value = !!opts.initial;
      this.active = opts.active || "on";
      this.inactive = opts.inactive || "off";
      this.initialValue = this.value;
      this.render();
    }
    reset() {
      this.value = this.initialValue;
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      this.done = true;
      this.aborted = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    deactivate() {
      if (this.value === false)
        return this.bell();
      this.value = false;
      this.render();
    }
    activate() {
      if (this.value === true)
        return this.bell();
      this.value = true;
      this.render();
    }
    delete() {
      this.deactivate();
    }
    left() {
      this.deactivate();
    }
    right() {
      this.activate();
    }
    down() {
      this.deactivate();
    }
    up() {
      this.activate();
    }
    next() {
      this.value = !this.value;
      this.fire();
      this.render();
    }
    _(c, key) {
      if (c === " ") {
        this.value = !this.value;
      } else if (c === "1") {
        this.value = true;
      } else if (c === "0") {
        this.value = false;
      } else
        return this.bell();
      this.render();
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      else
        this.out.write(clear(this.outputText, this.out.columns));
      super.render();
      this.outputText = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(this.done), this.value ? this.inactive : color.cyan().underline(this.inactive), color.gray("/"), this.value ? color.cyan().underline(this.active) : this.active].join(" ");
      this.out.write(erase.line + cursor.to(0) + this.outputText);
    }
  }
  module.exports = TogglePrompt;
});

// node_modules/prompts/dist/dateparts/datepart.js
var require_datepart = __commonJS((exports, module) => {
  class DatePart {
    constructor({
      token,
      date,
      parts,
      locales
    }) {
      this.token = token;
      this.date = date || new Date;
      this.parts = parts || [this];
      this.locales = locales || {};
    }
    up() {
    }
    down() {
    }
    next() {
      const currentIdx = this.parts.indexOf(this);
      return this.parts.find((part, idx) => idx > currentIdx && part instanceof DatePart);
    }
    setTo(val) {
    }
    prev() {
      let parts = [].concat(this.parts).reverse();
      const currentIdx = parts.indexOf(this);
      return parts.find((part, idx) => idx > currentIdx && part instanceof DatePart);
    }
    toString() {
      return String(this.date);
    }
  }
  module.exports = DatePart;
});

// node_modules/prompts/dist/dateparts/meridiem.js
var require_meridiem = __commonJS((exports, module) => {
  var DatePart = require_datepart();

  class Meridiem extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setHours((this.date.getHours() + 12) % 24);
    }
    down() {
      this.up();
    }
    toString() {
      let meridiem = this.date.getHours() > 12 ? "pm" : "am";
      return /\A/.test(this.token) ? meridiem.toUpperCase() : meridiem;
    }
  }
  module.exports = Meridiem;
});

// node_modules/prompts/dist/dateparts/day.js
var require_day = __commonJS((exports, module) => {
  var DatePart = require_datepart();
  var pos = (n2) => {
    n2 = n2 % 10;
    return n2 === 1 ? "st" : n2 === 2 ? "nd" : n2 === 3 ? "rd" : "th";
  };

  class Day extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setDate(this.date.getDate() + 1);
    }
    down() {
      this.date.setDate(this.date.getDate() - 1);
    }
    setTo(val) {
      this.date.setDate(parseInt(val.substr(-2)));
    }
    toString() {
      let date = this.date.getDate();
      let day = this.date.getDay();
      return this.token === "DD" ? String(date).padStart(2, "0") : this.token === "Do" ? date + pos(date) : this.token === "d" ? day + 1 : this.token === "ddd" ? this.locales.weekdaysShort[day] : this.token === "dddd" ? this.locales.weekdays[day] : date;
    }
  }
  module.exports = Day;
});

// node_modules/prompts/dist/dateparts/hours.js
var require_hours = __commonJS((exports, module) => {
  var DatePart = require_datepart();

  class Hours extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setHours(this.date.getHours() + 1);
    }
    down() {
      this.date.setHours(this.date.getHours() - 1);
    }
    setTo(val) {
      this.date.setHours(parseInt(val.substr(-2)));
    }
    toString() {
      let hours = this.date.getHours();
      if (/h/.test(this.token))
        hours = hours % 12 || 12;
      return this.token.length > 1 ? String(hours).padStart(2, "0") : hours;
    }
  }
  module.exports = Hours;
});

// node_modules/prompts/dist/dateparts/milliseconds.js
var require_milliseconds = __commonJS((exports, module) => {
  var DatePart = require_datepart();

  class Milliseconds extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setMilliseconds(this.date.getMilliseconds() + 1);
    }
    down() {
      this.date.setMilliseconds(this.date.getMilliseconds() - 1);
    }
    setTo(val) {
      this.date.setMilliseconds(parseInt(val.substr(-this.token.length)));
    }
    toString() {
      return String(this.date.getMilliseconds()).padStart(4, "0").substr(0, this.token.length);
    }
  }
  module.exports = Milliseconds;
});

// node_modules/prompts/dist/dateparts/minutes.js
var require_minutes = __commonJS((exports, module) => {
  var DatePart = require_datepart();

  class Minutes extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setMinutes(this.date.getMinutes() + 1);
    }
    down() {
      this.date.setMinutes(this.date.getMinutes() - 1);
    }
    setTo(val) {
      this.date.setMinutes(parseInt(val.substr(-2)));
    }
    toString() {
      let m = this.date.getMinutes();
      return this.token.length > 1 ? String(m).padStart(2, "0") : m;
    }
  }
  module.exports = Minutes;
});

// node_modules/prompts/dist/dateparts/month.js
var require_month = __commonJS((exports, module) => {
  var DatePart = require_datepart();

  class Month extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setMonth(this.date.getMonth() + 1);
    }
    down() {
      this.date.setMonth(this.date.getMonth() - 1);
    }
    setTo(val) {
      val = parseInt(val.substr(-2)) - 1;
      this.date.setMonth(val < 0 ? 0 : val);
    }
    toString() {
      let month = this.date.getMonth();
      let tl = this.token.length;
      return tl === 2 ? String(month + 1).padStart(2, "0") : tl === 3 ? this.locales.monthsShort[month] : tl === 4 ? this.locales.months[month] : String(month + 1);
    }
  }
  module.exports = Month;
});

// node_modules/prompts/dist/dateparts/seconds.js
var require_seconds = __commonJS((exports, module) => {
  var DatePart = require_datepart();

  class Seconds extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setSeconds(this.date.getSeconds() + 1);
    }
    down() {
      this.date.setSeconds(this.date.getSeconds() - 1);
    }
    setTo(val) {
      this.date.setSeconds(parseInt(val.substr(-2)));
    }
    toString() {
      let s2 = this.date.getSeconds();
      return this.token.length > 1 ? String(s2).padStart(2, "0") : s2;
    }
  }
  module.exports = Seconds;
});

// node_modules/prompts/dist/dateparts/year.js
var require_year = __commonJS((exports, module) => {
  var DatePart = require_datepart();

  class Year extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setFullYear(this.date.getFullYear() + 1);
    }
    down() {
      this.date.setFullYear(this.date.getFullYear() - 1);
    }
    setTo(val) {
      this.date.setFullYear(val.substr(-4));
    }
    toString() {
      let year = String(this.date.getFullYear()).padStart(4, "0");
      return this.token.length === 2 ? year.substr(-2) : year;
    }
  }
  module.exports = Year;
});

// node_modules/prompts/dist/dateparts/index.js
var require_dateparts = __commonJS((exports, module) => {
  module.exports = {
    DatePart: require_datepart(),
    Meridiem: require_meridiem(),
    Day: require_day(),
    Hours: require_hours(),
    Milliseconds: require_milliseconds(),
    Minutes: require_minutes(),
    Month: require_month(),
    Seconds: require_seconds(),
    Year: require_year()
  };
});

// node_modules/prompts/dist/elements/date.js
var require_date = __commonJS((exports, module) => {
  var asyncGeneratorStep = function(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  };
  var _asyncToGenerator = function(fn) {
    return function() {
      var self = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  };
  var color = require_kleur();
  var Prompt = require_prompt();
  var _require = require_util();
  var style = _require.style;
  var clear = _require.clear;
  var figures = _require.figures;
  var _require2 = require_src();
  var erase = _require2.erase;
  var cursor = _require2.cursor;
  var _require3 = require_dateparts();
  var DatePart = _require3.DatePart;
  var Meridiem = _require3.Meridiem;
  var Day = _require3.Day;
  var Hours = _require3.Hours;
  var Milliseconds = _require3.Milliseconds;
  var Minutes = _require3.Minutes;
  var Month = _require3.Month;
  var Seconds = _require3.Seconds;
  var Year = _require3.Year;
  var regex = /\\(.)|"((?:\\["\\]|[^"])+)"|(D[Do]?|d{3,4}|d)|(M{1,4})|(YY(?:YY)?)|([aA])|([Hh]{1,2})|(m{1,2})|(s{1,2})|(S{1,4})|./g;
  var regexGroups = {
    1: ({
      token
    }) => token.replace(/\\(.)/g, "$1"),
    2: (opts) => new Day(opts),
    3: (opts) => new Month(opts),
    4: (opts) => new Year(opts),
    5: (opts) => new Meridiem(opts),
    6: (opts) => new Hours(opts),
    7: (opts) => new Minutes(opts),
    8: (opts) => new Seconds(opts),
    9: (opts) => new Milliseconds(opts)
  };
  var dfltLocales = {
    months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
    monthsShort: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
    weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
    weekdaysShort: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(",")
  };

  class DatePrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.cursor = 0;
      this.typed = "";
      this.locales = Object.assign(dfltLocales, opts.locales);
      this._date = opts.initial || new Date;
      this.errorMsg = opts.error || "Please Enter A Valid Value";
      this.validator = opts.validate || (() => true);
      this.mask = opts.mask || "YYYY-MM-DD HH:mm:ss";
      this.clear = clear("", this.out.columns);
      this.render();
    }
    get value() {
      return this.date;
    }
    get date() {
      return this._date;
    }
    set date(date) {
      if (date)
        this._date.setTime(date.getTime());
    }
    set mask(mask) {
      let result;
      this.parts = [];
      while (result = regex.exec(mask)) {
        let match = result.shift();
        let idx = result.findIndex((gr) => gr != null);
        this.parts.push(idx in regexGroups ? regexGroups[idx]({
          token: result[idx] || match,
          date: this.date,
          parts: this.parts,
          locales: this.locales
        }) : result[idx] || match);
      }
      let parts = this.parts.reduce((arr, i2) => {
        if (typeof i2 === "string" && typeof arr[arr.length - 1] === "string")
          arr[arr.length - 1] += i2;
        else
          arr.push(i2);
        return arr;
      }, []);
      this.parts.splice(0);
      this.parts.push(...parts);
      this.reset();
    }
    moveCursor(n2) {
      this.typed = "";
      this.cursor = n2;
      this.fire();
    }
    reset() {
      this.moveCursor(this.parts.findIndex((p) => p instanceof DatePart));
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.error = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    validate() {
      var _this = this;
      return _asyncToGenerator(function* () {
        let valid = yield _this.validator(_this.value);
        if (typeof valid === "string") {
          _this.errorMsg = valid;
          valid = false;
        }
        _this.error = !valid;
      })();
    }
    submit() {
      var _this2 = this;
      return _asyncToGenerator(function* () {
        yield _this2.validate();
        if (_this2.error) {
          _this2.color = "red";
          _this2.fire();
          _this2.render();
          return;
        }
        _this2.done = true;
        _this2.aborted = false;
        _this2.fire();
        _this2.render();
        _this2.out.write("\n");
        _this2.close();
      })();
    }
    up() {
      this.typed = "";
      this.parts[this.cursor].up();
      this.render();
    }
    down() {
      this.typed = "";
      this.parts[this.cursor].down();
      this.render();
    }
    left() {
      let prev = this.parts[this.cursor].prev();
      if (prev == null)
        return this.bell();
      this.moveCursor(this.parts.indexOf(prev));
      this.render();
    }
    right() {
      let next = this.parts[this.cursor].next();
      if (next == null)
        return this.bell();
      this.moveCursor(this.parts.indexOf(next));
      this.render();
    }
    next() {
      let next = this.parts[this.cursor].next();
      this.moveCursor(next ? this.parts.indexOf(next) : this.parts.findIndex((part) => part instanceof DatePart));
      this.render();
    }
    _(c) {
      if (/\d/.test(c)) {
        this.typed += c;
        this.parts[this.cursor].setTo(this.typed);
        this.render();
      }
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      else
        this.out.write(clear(this.outputText, this.out.columns));
      super.render();
      this.outputText = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(false), this.parts.reduce((arr, p, idx) => arr.concat(idx === this.cursor && !this.done ? color.cyan().underline(p.toString()) : p), []).join("")].join(" ");
      if (this.error) {
        this.outputText += this.errorMsg.split("\n").reduce((a2, l2, i2) => a2 + `\n${i2 ? ` ` : figures.pointerSmall} ${color.red().italic(l2)}`, ``);
      }
      this.out.write(erase.line + cursor.to(0) + this.outputText);
    }
  }
  module.exports = DatePrompt;
});

// node_modules/prompts/dist/elements/number.js
var require_number = __commonJS((exports, module) => {
  var asyncGeneratorStep = function(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  };
  var _asyncToGenerator = function(fn) {
    return function() {
      var self = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  };
  var color = require_kleur();
  var Prompt = require_prompt();
  var _require = require_src();
  var cursor = _require.cursor;
  var erase = _require.erase;
  var _require2 = require_util();
  var style = _require2.style;
  var figures = _require2.figures;
  var clear = _require2.clear;
  var lines = _require2.lines;
  var isNumber = /[0-9]/;
  var isDef = (any) => any !== undefined;
  var round = (number, precision) => {
    let factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  };

  class NumberPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.transform = style.render(opts.style);
      this.msg = opts.message;
      this.initial = isDef(opts.initial) ? opts.initial : "";
      this.float = !!opts.float;
      this.round = opts.round || 2;
      this.inc = opts.increment || 1;
      this.min = isDef(opts.min) ? opts.min : (-Infinity);
      this.max = isDef(opts.max) ? opts.max : Infinity;
      this.errorMsg = opts.error || `Please Enter A Valid Value`;
      this.validator = opts.validate || (() => true);
      this.color = `cyan`;
      this.value = ``;
      this.typed = ``;
      this.lastHit = 0;
      this.render();
    }
    set value(v) {
      if (!v && v !== 0) {
        this.placeholder = true;
        this.rendered = color.gray(this.transform.render(`${this.initial}`));
        this._value = ``;
      } else {
        this.placeholder = false;
        this.rendered = this.transform.render(`${round(v, this.round)}`);
        this._value = round(v, this.round);
      }
      this.fire();
    }
    get value() {
      return this._value;
    }
    parse(x) {
      return this.float ? parseFloat(x) : parseInt(x);
    }
    valid(c) {
      return c === `-` || c === `.` && this.float || isNumber.test(c);
    }
    reset() {
      this.typed = ``;
      this.value = ``;
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      let x = this.value;
      this.value = x !== `` ? x : this.initial;
      this.done = this.aborted = true;
      this.error = false;
      this.fire();
      this.render();
      this.out.write(`\n`);
      this.close();
    }
    validate() {
      var _this = this;
      return _asyncToGenerator(function* () {
        let valid = yield _this.validator(_this.value);
        if (typeof valid === `string`) {
          _this.errorMsg = valid;
          valid = false;
        }
        _this.error = !valid;
      })();
    }
    submit() {
      var _this2 = this;
      return _asyncToGenerator(function* () {
        yield _this2.validate();
        if (_this2.error) {
          _this2.color = `red`;
          _this2.fire();
          _this2.render();
          return;
        }
        let x = _this2.value;
        _this2.value = x !== `` ? x : _this2.initial;
        _this2.done = true;
        _this2.aborted = false;
        _this2.error = false;
        _this2.fire();
        _this2.render();
        _this2.out.write(`\n`);
        _this2.close();
      })();
    }
    up() {
      this.typed = ``;
      if (this.value === "") {
        this.value = this.min - this.inc;
      }
      if (this.value >= this.max)
        return this.bell();
      this.value += this.inc;
      this.color = `cyan`;
      this.fire();
      this.render();
    }
    down() {
      this.typed = ``;
      if (this.value === "") {
        this.value = this.min + this.inc;
      }
      if (this.value <= this.min)
        return this.bell();
      this.value -= this.inc;
      this.color = `cyan`;
      this.fire();
      this.render();
    }
    delete() {
      let val = this.value.toString();
      if (val.length === 0)
        return this.bell();
      this.value = this.parse(val = val.slice(0, -1)) || ``;
      if (this.value !== "" && this.value < this.min) {
        this.value = this.min;
      }
      this.color = `cyan`;
      this.fire();
      this.render();
    }
    next() {
      this.value = this.initial;
      this.fire();
      this.render();
    }
    _(c, key) {
      if (!this.valid(c))
        return this.bell();
      const now = Date.now();
      if (now - this.lastHit > 1000)
        this.typed = ``;
      this.typed += c;
      this.lastHit = now;
      this.color = `cyan`;
      if (c === `.`)
        return this.fire();
      this.value = Math.min(this.parse(this.typed), this.max);
      if (this.value > this.max)
        this.value = this.max;
      if (this.value < this.min)
        this.value = this.min;
      this.fire();
      this.render();
    }
    render() {
      if (this.closed)
        return;
      if (!this.firstRender) {
        if (this.outputError)
          this.out.write(cursor.down(lines(this.outputError, this.out.columns) - 1) + clear(this.outputError, this.out.columns));
        this.out.write(clear(this.outputText, this.out.columns));
      }
      super.render();
      this.outputError = "";
      this.outputText = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(this.done), !this.done || !this.done && !this.placeholder ? color[this.color]().underline(this.rendered) : this.rendered].join(` `);
      if (this.error) {
        this.outputError += this.errorMsg.split(`\n`).reduce((a2, l2, i2) => a2 + `\n${i2 ? ` ` : figures.pointerSmall} ${color.red().italic(l2)}`, ``);
      }
      this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore);
    }
  }
  module.exports = NumberPrompt;
});

// node_modules/prompts/dist/elements/multiselect.js
var require_multiselect = __commonJS((exports, module) => {
  var color = require_kleur();
  var _require = require_src();
  var cursor = _require.cursor;
  var Prompt = require_prompt();
  var _require2 = require_util();
  var clear = _require2.clear;
  var figures = _require2.figures;
  var style = _require2.style;
  var wrap = _require2.wrap;
  var entriesToDisplay = _require2.entriesToDisplay;

  class MultiselectPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.cursor = opts.cursor || 0;
      this.scrollIndex = opts.cursor || 0;
      this.hint = opts.hint || "";
      this.warn = opts.warn || "- This option is disabled -";
      this.minSelected = opts.min;
      this.showMinError = false;
      this.maxChoices = opts.max;
      this.instructions = opts.instructions;
      this.optionsPerPage = opts.optionsPerPage || 10;
      this.value = opts.choices.map((ch, idx) => {
        if (typeof ch === "string")
          ch = {
            title: ch,
            value: idx
          };
        return {
          title: ch && (ch.title || ch.value || ch),
          description: ch && ch.description,
          value: ch && (ch.value === undefined ? idx : ch.value),
          selected: ch && ch.selected,
          disabled: ch && ch.disabled
        };
      });
      this.clear = clear("", this.out.columns);
      if (!opts.overrideRender) {
        this.render();
      }
    }
    reset() {
      this.value.map((v) => !v.selected);
      this.cursor = 0;
      this.fire();
      this.render();
    }
    selected() {
      return this.value.filter((v) => v.selected);
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      const selected = this.value.filter((e) => e.selected);
      if (this.minSelected && selected.length < this.minSelected) {
        this.showMinError = true;
        this.render();
      } else {
        this.done = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
    }
    first() {
      this.cursor = 0;
      this.render();
    }
    last() {
      this.cursor = this.value.length - 1;
      this.render();
    }
    next() {
      this.cursor = (this.cursor + 1) % this.value.length;
      this.render();
    }
    up() {
      if (this.cursor === 0) {
        this.cursor = this.value.length - 1;
      } else {
        this.cursor--;
      }
      this.render();
    }
    down() {
      if (this.cursor === this.value.length - 1) {
        this.cursor = 0;
      } else {
        this.cursor++;
      }
      this.render();
    }
    left() {
      this.value[this.cursor].selected = false;
      this.render();
    }
    right() {
      if (this.value.filter((e) => e.selected).length >= this.maxChoices)
        return this.bell();
      this.value[this.cursor].selected = true;
      this.render();
    }
    handleSpaceToggle() {
      const v = this.value[this.cursor];
      if (v.selected) {
        v.selected = false;
        this.render();
      } else if (v.disabled || this.value.filter((e) => e.selected).length >= this.maxChoices) {
        return this.bell();
      } else {
        v.selected = true;
        this.render();
      }
    }
    toggleAll() {
      if (this.maxChoices !== undefined || this.value[this.cursor].disabled) {
        return this.bell();
      }
      const newSelected = !this.value[this.cursor].selected;
      this.value.filter((v) => !v.disabled).forEach((v) => v.selected = newSelected);
      this.render();
    }
    _(c, key) {
      if (c === " ") {
        this.handleSpaceToggle();
      } else if (c === "a") {
        this.toggleAll();
      } else {
        return this.bell();
      }
    }
    renderInstructions() {
      if (this.instructions === undefined || this.instructions) {
        if (typeof this.instructions === "string") {
          return this.instructions;
        }
        return "\nInstructions:\n" + `    ${figures.arrowUp}/${figures.arrowDown}: Highlight option\n` + `    ${figures.arrowLeft}/${figures.arrowRight}/[space]: Toggle selection\n` + (this.maxChoices === undefined ? `    a: Toggle all\n` : "") + `    enter/return: Complete answer`;
      }
      return "";
    }
    renderOption(cursor2, v, i2, arrowIndicator) {
      const prefix = (v.selected ? color.green(figures.radioOn) : figures.radioOff) + " " + arrowIndicator + " ";
      let title, desc;
      if (v.disabled) {
        title = cursor2 === i2 ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
      } else {
        title = cursor2 === i2 ? color.cyan().underline(v.title) : v.title;
        if (cursor2 === i2 && v.description) {
          desc = ` - ${v.description}`;
          if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
            desc = "\n" + wrap(v.description, {
              margin: prefix.length,
              width: this.out.columns
            });
          }
        }
      }
      return prefix + title + color.gray(desc || "");
    }
    paginateOptions(options) {
      if (options.length === 0) {
        return color.red("No matches for this query.");
      }
      let _entriesToDisplay = entriesToDisplay(this.cursor, options.length, this.optionsPerPage), startIndex = _entriesToDisplay.startIndex, endIndex = _entriesToDisplay.endIndex;
      let prefix, styledOptions = [];
      for (let i2 = startIndex;i2 < endIndex; i2++) {
        if (i2 === startIndex && startIndex > 0) {
          prefix = figures.arrowUp;
        } else if (i2 === endIndex - 1 && endIndex < options.length) {
          prefix = figures.arrowDown;
        } else {
          prefix = " ";
        }
        styledOptions.push(this.renderOption(this.cursor, options[i2], i2, prefix));
      }
      return "\n" + styledOptions.join("\n");
    }
    renderOptions(options) {
      if (!this.done) {
        return this.paginateOptions(options);
      }
      return "";
    }
    renderDoneOrInstructions() {
      if (this.done) {
        return this.value.filter((e) => e.selected).map((v) => v.title).join(", ");
      }
      const output = [color.gray(this.hint), this.renderInstructions()];
      if (this.value[this.cursor].disabled) {
        output.push(color.yellow(this.warn));
      }
      return output.join(" ");
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      super.render();
      let prompt = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(false), this.renderDoneOrInstructions()].join(" ");
      if (this.showMinError) {
        prompt += color.red(`You must select a minimum of ${this.minSelected} choices.`);
        this.showMinError = false;
      }
      prompt += this.renderOptions(this.value);
      this.out.write(this.clear + prompt);
      this.clear = clear(prompt, this.out.columns);
    }
  }
  module.exports = MultiselectPrompt;
});

// node_modules/prompts/dist/elements/autocomplete.js
var require_autocomplete = __commonJS((exports, module) => {
  var asyncGeneratorStep = function(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  };
  var _asyncToGenerator = function(fn) {
    return function() {
      var self = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  };
  var color = require_kleur();
  var Prompt = require_prompt();
  var _require = require_src();
  var erase = _require.erase;
  var cursor = _require.cursor;
  var _require2 = require_util();
  var style = _require2.style;
  var clear = _require2.clear;
  var figures = _require2.figures;
  var wrap = _require2.wrap;
  var entriesToDisplay = _require2.entriesToDisplay;
  var getVal = (arr, i2) => arr[i2] && (arr[i2].value || arr[i2].title || arr[i2]);
  var getTitle = (arr, i2) => arr[i2] && (arr[i2].title || arr[i2].value || arr[i2]);
  var getIndex = (arr, valOrTitle) => {
    const index = arr.findIndex((el) => el.value === valOrTitle || el.title === valOrTitle);
    return index > -1 ? index : undefined;
  };

  class AutocompletePrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.suggest = opts.suggest;
      this.choices = opts.choices;
      this.initial = typeof opts.initial === "number" ? opts.initial : getIndex(opts.choices, opts.initial);
      this.select = this.initial || opts.cursor || 0;
      this.i18n = {
        noMatches: opts.noMatches || "no matches found"
      };
      this.fallback = opts.fallback || this.initial;
      this.clearFirst = opts.clearFirst || false;
      this.suggestions = [];
      this.input = "";
      this.limit = opts.limit || 10;
      this.cursor = 0;
      this.transform = style.render(opts.style);
      this.scale = this.transform.scale;
      this.render = this.render.bind(this);
      this.complete = this.complete.bind(this);
      this.clear = clear("", this.out.columns);
      this.complete(this.render);
      this.render();
    }
    set fallback(fb) {
      this._fb = Number.isSafeInteger(parseInt(fb)) ? parseInt(fb) : fb;
    }
    get fallback() {
      let choice;
      if (typeof this._fb === "number")
        choice = this.choices[this._fb];
      else if (typeof this._fb === "string")
        choice = {
          title: this._fb
        };
      return choice || this._fb || {
        title: this.i18n.noMatches
      };
    }
    moveSelect(i2) {
      this.select = i2;
      if (this.suggestions.length > 0)
        this.value = getVal(this.suggestions, i2);
      else
        this.value = this.fallback.value;
      this.fire();
    }
    complete(cb) {
      var _this = this;
      return _asyncToGenerator(function* () {
        const p = _this.completing = _this.suggest(_this.input, _this.choices);
        const suggestions = yield p;
        if (_this.completing !== p)
          return;
        _this.suggestions = suggestions.map((s2, i2, arr) => ({
          title: getTitle(arr, i2),
          value: getVal(arr, i2),
          description: s2.description
        }));
        _this.completing = false;
        const l2 = Math.max(suggestions.length - 1, 0);
        _this.moveSelect(Math.min(l2, _this.select));
        cb && cb();
      })();
    }
    reset() {
      this.input = "";
      this.complete(() => {
        this.moveSelect(this.initial !== undefined ? this.initial : 0);
        this.render();
      });
      this.render();
    }
    exit() {
      if (this.clearFirst && this.input.length > 0) {
        this.reset();
      } else {
        this.done = this.exited = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
    }
    abort() {
      this.done = this.aborted = true;
      this.exited = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      this.done = true;
      this.aborted = this.exited = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    _(c, key) {
      let s1 = this.input.slice(0, this.cursor);
      let s2 = this.input.slice(this.cursor);
      this.input = `${s1}${c}${s2}`;
      this.cursor = s1.length + 1;
      this.complete(this.render);
      this.render();
    }
    delete() {
      if (this.cursor === 0)
        return this.bell();
      let s1 = this.input.slice(0, this.cursor - 1);
      let s2 = this.input.slice(this.cursor);
      this.input = `${s1}${s2}`;
      this.complete(this.render);
      this.cursor = this.cursor - 1;
      this.render();
    }
    deleteForward() {
      if (this.cursor * this.scale >= this.rendered.length)
        return this.bell();
      let s1 = this.input.slice(0, this.cursor);
      let s2 = this.input.slice(this.cursor + 1);
      this.input = `${s1}${s2}`;
      this.complete(this.render);
      this.render();
    }
    first() {
      this.moveSelect(0);
      this.render();
    }
    last() {
      this.moveSelect(this.suggestions.length - 1);
      this.render();
    }
    up() {
      if (this.select === 0) {
        this.moveSelect(this.suggestions.length - 1);
      } else {
        this.moveSelect(this.select - 1);
      }
      this.render();
    }
    down() {
      if (this.select === this.suggestions.length - 1) {
        this.moveSelect(0);
      } else {
        this.moveSelect(this.select + 1);
      }
      this.render();
    }
    next() {
      if (this.select === this.suggestions.length - 1) {
        this.moveSelect(0);
      } else
        this.moveSelect(this.select + 1);
      this.render();
    }
    nextPage() {
      this.moveSelect(Math.min(this.select + this.limit, this.suggestions.length - 1));
      this.render();
    }
    prevPage() {
      this.moveSelect(Math.max(this.select - this.limit, 0));
      this.render();
    }
    left() {
      if (this.cursor <= 0)
        return this.bell();
      this.cursor = this.cursor - 1;
      this.render();
    }
    right() {
      if (this.cursor * this.scale >= this.rendered.length)
        return this.bell();
      this.cursor = this.cursor + 1;
      this.render();
    }
    renderOption(v, hovered, isStart, isEnd) {
      let desc;
      let prefix = isStart ? figures.arrowUp : isEnd ? figures.arrowDown : " ";
      let title = hovered ? color.cyan().underline(v.title) : v.title;
      prefix = (hovered ? color.cyan(figures.pointer) + " " : "  ") + prefix;
      if (v.description) {
        desc = ` - ${v.description}`;
        if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
          desc = "\n" + wrap(v.description, {
            margin: 3,
            width: this.out.columns
          });
        }
      }
      return prefix + " " + title + color.gray(desc || "");
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      else
        this.out.write(clear(this.outputText, this.out.columns));
      super.render();
      let _entriesToDisplay = entriesToDisplay(this.select, this.choices.length, this.limit), startIndex = _entriesToDisplay.startIndex, endIndex = _entriesToDisplay.endIndex;
      this.outputText = [style.symbol(this.done, this.aborted, this.exited), color.bold(this.msg), style.delimiter(this.completing), this.done && this.suggestions[this.select] ? this.suggestions[this.select].title : this.rendered = this.transform.render(this.input)].join(" ");
      if (!this.done) {
        const suggestions = this.suggestions.slice(startIndex, endIndex).map((item, i2) => this.renderOption(item, this.select === i2 + startIndex, i2 === 0 && startIndex > 0, i2 + startIndex === endIndex - 1 && endIndex < this.choices.length)).join("\n");
        this.outputText += `\n` + (suggestions || color.gray(this.fallback.title));
      }
      this.out.write(erase.line + cursor.to(0) + this.outputText);
    }
  }
  module.exports = AutocompletePrompt;
});

// node_modules/prompts/dist/elements/autocompleteMultiselect.js
var require_autocompleteMultiselect = __commonJS((exports, module) => {
  var color = require_kleur();
  var _require = require_src();
  var cursor = _require.cursor;
  var MultiselectPrompt = require_multiselect();
  var _require2 = require_util();
  var clear = _require2.clear;
  var style = _require2.style;
  var figures = _require2.figures;

  class AutocompleteMultiselectPrompt extends MultiselectPrompt {
    constructor(opts = {}) {
      opts.overrideRender = true;
      super(opts);
      this.inputValue = "";
      this.clear = clear("", this.out.columns);
      this.filteredOptions = this.value;
      this.render();
    }
    last() {
      this.cursor = this.filteredOptions.length - 1;
      this.render();
    }
    next() {
      this.cursor = (this.cursor + 1) % this.filteredOptions.length;
      this.render();
    }
    up() {
      if (this.cursor === 0) {
        this.cursor = this.filteredOptions.length - 1;
      } else {
        this.cursor--;
      }
      this.render();
    }
    down() {
      if (this.cursor === this.filteredOptions.length - 1) {
        this.cursor = 0;
      } else {
        this.cursor++;
      }
      this.render();
    }
    left() {
      this.filteredOptions[this.cursor].selected = false;
      this.render();
    }
    right() {
      if (this.value.filter((e) => e.selected).length >= this.maxChoices)
        return this.bell();
      this.filteredOptions[this.cursor].selected = true;
      this.render();
    }
    delete() {
      if (this.inputValue.length) {
        this.inputValue = this.inputValue.substr(0, this.inputValue.length - 1);
        this.updateFilteredOptions();
      }
    }
    updateFilteredOptions() {
      const currentHighlight = this.filteredOptions[this.cursor];
      this.filteredOptions = this.value.filter((v) => {
        if (this.inputValue) {
          if (typeof v.title === "string") {
            if (v.title.toLowerCase().includes(this.inputValue.toLowerCase())) {
              return true;
            }
          }
          if (typeof v.value === "string") {
            if (v.value.toLowerCase().includes(this.inputValue.toLowerCase())) {
              return true;
            }
          }
          return false;
        }
        return true;
      });
      const newHighlightIndex = this.filteredOptions.findIndex((v) => v === currentHighlight);
      this.cursor = newHighlightIndex < 0 ? 0 : newHighlightIndex;
      this.render();
    }
    handleSpaceToggle() {
      const v = this.filteredOptions[this.cursor];
      if (v.selected) {
        v.selected = false;
        this.render();
      } else if (v.disabled || this.value.filter((e) => e.selected).length >= this.maxChoices) {
        return this.bell();
      } else {
        v.selected = true;
        this.render();
      }
    }
    handleInputChange(c) {
      this.inputValue = this.inputValue + c;
      this.updateFilteredOptions();
    }
    _(c, key) {
      if (c === " ") {
        this.handleSpaceToggle();
      } else {
        this.handleInputChange(c);
      }
    }
    renderInstructions() {
      if (this.instructions === undefined || this.instructions) {
        if (typeof this.instructions === "string") {
          return this.instructions;
        }
        return `
Instructions:
    ${figures.arrowUp}/${figures.arrowDown}: Highlight option
    ${figures.arrowLeft}/${figures.arrowRight}/[space]: Toggle selection
    [a,b,c]/delete: Filter choices
    enter/return: Complete answer
`;
      }
      return "";
    }
    renderCurrentInput() {
      return `
Filtered results for: ${this.inputValue ? this.inputValue : color.gray("Enter something to filter")}\n`;
    }
    renderOption(cursor2, v, i2) {
      let title;
      if (v.disabled)
        title = cursor2 === i2 ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
      else
        title = cursor2 === i2 ? color.cyan().underline(v.title) : v.title;
      return (v.selected ? color.green(figures.radioOn) : figures.radioOff) + "  " + title;
    }
    renderDoneOrInstructions() {
      if (this.done) {
        return this.value.filter((e) => e.selected).map((v) => v.title).join(", ");
      }
      const output = [color.gray(this.hint), this.renderInstructions(), this.renderCurrentInput()];
      if (this.filteredOptions.length && this.filteredOptions[this.cursor].disabled) {
        output.push(color.yellow(this.warn));
      }
      return output.join(" ");
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      super.render();
      let prompt = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(false), this.renderDoneOrInstructions()].join(" ");
      if (this.showMinError) {
        prompt += color.red(`You must select a minimum of ${this.minSelected} choices.`);
        this.showMinError = false;
      }
      prompt += this.renderOptions(this.filteredOptions);
      this.out.write(this.clear + prompt);
      this.clear = clear(prompt, this.out.columns);
    }
  }
  module.exports = AutocompleteMultiselectPrompt;
});

// node_modules/prompts/dist/elements/confirm.js
var require_confirm = __commonJS((exports, module) => {
  var color = require_kleur();
  var Prompt = require_prompt();
  var _require = require_util();
  var style = _require.style;
  var clear = _require.clear;
  var _require2 = require_src();
  var erase = _require2.erase;
  var cursor = _require2.cursor;

  class ConfirmPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.value = opts.initial;
      this.initialValue = !!opts.initial;
      this.yesMsg = opts.yes || "yes";
      this.yesOption = opts.yesOption || "(Y/n)";
      this.noMsg = opts.no || "no";
      this.noOption = opts.noOption || "(y/N)";
      this.render();
    }
    reset() {
      this.value = this.initialValue;
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      this.value = this.value || false;
      this.done = true;
      this.aborted = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    _(c, key) {
      if (c.toLowerCase() === "y") {
        this.value = true;
        return this.submit();
      }
      if (c.toLowerCase() === "n") {
        this.value = false;
        return this.submit();
      }
      return this.bell();
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      else
        this.out.write(clear(this.outputText, this.out.columns));
      super.render();
      this.outputText = [style.symbol(this.done, this.aborted), color.bold(this.msg), style.delimiter(this.done), this.done ? this.value ? this.yesMsg : this.noMsg : color.gray(this.initialValue ? this.yesOption : this.noOption)].join(" ");
      this.out.write(erase.line + cursor.to(0) + this.outputText);
    }
  }
  module.exports = ConfirmPrompt;
});

// node_modules/prompts/dist/elements/index.js
var require_elements = __commonJS((exports, module) => {
  module.exports = {
    TextPrompt: require_text(),
    SelectPrompt: require_select(),
    TogglePrompt: require_toggle(),
    DatePrompt: require_date(),
    NumberPrompt: require_number(),
    MultiselectPrompt: require_multiselect(),
    AutocompletePrompt: require_autocomplete(),
    AutocompleteMultiselectPrompt: require_autocompleteMultiselect(),
    ConfirmPrompt: require_confirm()
  };
});

// node_modules/prompts/dist/prompts.js
var require_prompts = __commonJS((exports) => {
  var toPrompt = function(type, args, opts = {}) {
    return new Promise((res, rej) => {
      const p = new el[type](args);
      const onAbort = opts.onAbort || noop;
      const onSubmit = opts.onSubmit || noop;
      const onExit = opts.onExit || noop;
      p.on("state", args.onState || noop);
      p.on("submit", (x) => res(onSubmit(x)));
      p.on("exit", (x) => res(onExit(x)));
      p.on("abort", (x) => rej(onAbort(x)));
    });
  };
  var $2 = exports;
  var el = require_elements();
  var noop = (v) => v;
  $2.text = (args) => toPrompt("TextPrompt", args);
  $2.password = (args) => {
    args.style = "password";
    return $2.text(args);
  };
  $2.invisible = (args) => {
    args.style = "invisible";
    return $2.text(args);
  };
  $2.number = (args) => toPrompt("NumberPrompt", args);
  $2.date = (args) => toPrompt("DatePrompt", args);
  $2.confirm = (args) => toPrompt("ConfirmPrompt", args);
  $2.list = (args) => {
    const sep = args.separator || ",";
    return toPrompt("TextPrompt", args, {
      onSubmit: (str) => str.split(sep).map((s2) => s2.trim())
    });
  };
  $2.toggle = (args) => toPrompt("TogglePrompt", args);
  $2.select = (args) => toPrompt("SelectPrompt", args);
  $2.multiselect = (args) => {
    args.choices = [].concat(args.choices || []);
    const toSelected = (items) => items.filter((item) => item.selected).map((item) => item.value);
    return toPrompt("MultiselectPrompt", args, {
      onAbort: toSelected,
      onSubmit: toSelected
    });
  };
  $2.autocompleteMultiselect = (args) => {
    args.choices = [].concat(args.choices || []);
    const toSelected = (items) => items.filter((item) => item.selected).map((item) => item.value);
    return toPrompt("AutocompleteMultiselectPrompt", args, {
      onAbort: toSelected,
      onSubmit: toSelected
    });
  };
  var byTitle = (input, choices) => Promise.resolve(choices.filter((item) => item.title.slice(0, input.length).toLowerCase() === input.toLowerCase()));
  $2.autocomplete = (args) => {
    args.suggest = args.suggest || byTitle;
    args.choices = [].concat(args.choices || []);
    return toPrompt("AutocompletePrompt", args);
  };
});

// node_modules/prompts/dist/index.js
var require_dist = __commonJS((exports, module) => {
  var ownKeys = function(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys.push.apply(keys, symbols);
    }
    return keys;
  };
  var _objectSpread = function(target) {
    for (var i2 = 1;i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  };
  var _defineProperty = function(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  };
  var _createForOfIteratorHelper = function(o2, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o2[Symbol.iterator] || o2["@@iterator"];
    if (!it) {
      if (Array.isArray(o2) || (it = _unsupportedIterableToArray(o2)) || allowArrayLike && o2 && typeof o2.length === "number") {
        if (it)
          o2 = it;
        var i2 = 0;
        var F = function F() {
        };
        return { s: F, n: function n() {
          if (i2 >= o2.length)
            return { done: true };
          return { done: false, value: o2[i2++] };
        }, e: function e(_e) {
          throw _e;
        }, f: F };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return { s: function s() {
      it = it.call(o2);
    }, n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    }, e: function e(_e2) {
      didErr = true;
      err = _e2;
    }, f: function f() {
      try {
        if (!normalCompletion && it.return != null)
          it.return();
      } finally {
        if (didErr)
          throw err;
      }
    } };
  };
  var _unsupportedIterableToArray = function(o2, minLen) {
    if (!o2)
      return;
    if (typeof o2 === "string")
      return _arrayLikeToArray(o2, minLen);
    var n2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (n2 === "Object" && o2.constructor)
      n2 = o2.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o2);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray(o2, minLen);
  };
  var _arrayLikeToArray = function(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i2 = 0, arr2 = new Array(len);i2 < len; i2++)
      arr2[i2] = arr[i2];
    return arr2;
  };
  var asyncGeneratorStep = function(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  };
  var _asyncToGenerator = function(fn) {
    return function() {
      var self = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  };
  var prompt = function() {
    return _prompt.apply(this, arguments);
  };
  var _prompt = function() {
    _prompt = _asyncToGenerator(function* (questions = [], {
      onSubmit = noop,
      onCancel = noop
    } = {}) {
      const answers = {};
      const override2 = prompt._override || {};
      questions = [].concat(questions);
      let answer, question, quit, name, type, lastPrompt;
      const getFormattedAnswer = function() {
        var _ref = _asyncToGenerator(function* (question2, answer2, skipValidation = false) {
          if (!skipValidation && question2.validate && question2.validate(answer2) !== true) {
            return;
          }
          return question2.format ? yield question2.format(answer2, answers) : answer2;
        });
        return function getFormattedAnswer(_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }();
      var _iterator = _createForOfIteratorHelper(questions), _step;
      try {
        for (_iterator.s();!(_step = _iterator.n()).done; ) {
          question = _step.value;
          var _question = question;
          name = _question.name;
          type = _question.type;
          if (typeof type === "function") {
            type = yield type(answer, _objectSpread({}, answers), question);
            question["type"] = type;
          }
          if (!type)
            continue;
          for (let key in question) {
            if (passOn.includes(key))
              continue;
            let value = question[key];
            question[key] = typeof value === "function" ? yield value(answer, _objectSpread({}, answers), lastPrompt) : value;
          }
          lastPrompt = question;
          if (typeof question.message !== "string") {
            throw new Error("prompt message is required");
          }
          var _question2 = question;
          name = _question2.name;
          type = _question2.type;
          if (prompts[type] === undefined) {
            throw new Error(`prompt type (${type}) is not defined`);
          }
          if (override2[question.name] !== undefined) {
            answer = yield getFormattedAnswer(question, override2[question.name]);
            if (answer !== undefined) {
              answers[name] = answer;
              continue;
            }
          }
          try {
            answer = prompt._injected ? getInjectedAnswer(prompt._injected, question.initial) : yield prompts[type](question);
            answers[name] = answer = yield getFormattedAnswer(question, answer, true);
            quit = yield onSubmit(question, answer, answers);
          } catch (err) {
            quit = !(yield onCancel(question, answers));
          }
          if (quit)
            return answers;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return answers;
    });
    return _prompt.apply(this, arguments);
  };
  var getInjectedAnswer = function(injected, deafultValue) {
    const answer = injected.shift();
    if (answer instanceof Error) {
      throw answer;
    }
    return answer === undefined ? deafultValue : answer;
  };
  var inject = function(answers) {
    prompt._injected = (prompt._injected || []).concat(answers);
  };
  var override = function(answers) {
    prompt._override = Object.assign({}, answers);
  };
  var prompts = require_prompts();
  var passOn = ["suggest", "format", "onState", "validate", "onRender", "type"];
  var noop = () => {
  };
  module.exports = Object.assign(prompt, {
    prompt,
    prompts,
    inject,
    override
  });
});

// node_modules/prompts/lib/util/action.js
var require_action2 = __commonJS((exports, module) => {
  module.exports = (key, isSelect) => {
    if (key.meta && key.name !== "escape")
      return;
    if (key.ctrl) {
      if (key.name === "a")
        return "first";
      if (key.name === "c")
        return "abort";
      if (key.name === "d")
        return "abort";
      if (key.name === "e")
        return "last";
      if (key.name === "g")
        return "reset";
    }
    if (isSelect) {
      if (key.name === "j")
        return "down";
      if (key.name === "k")
        return "up";
    }
    if (key.name === "return")
      return "submit";
    if (key.name === "enter")
      return "submit";
    if (key.name === "backspace")
      return "delete";
    if (key.name === "delete")
      return "deleteForward";
    if (key.name === "abort")
      return "abort";
    if (key.name === "escape")
      return "exit";
    if (key.name === "tab")
      return "next";
    if (key.name === "pagedown")
      return "nextPage";
    if (key.name === "pageup")
      return "prevPage";
    if (key.name === "home")
      return "home";
    if (key.name === "end")
      return "end";
    if (key.name === "up")
      return "up";
    if (key.name === "down")
      return "down";
    if (key.name === "right")
      return "right";
    if (key.name === "left")
      return "left";
    return false;
  };
});

// node_modules/prompts/lib/util/strip.js
var require_strip2 = __commonJS((exports, module) => {
  module.exports = (str) => {
    const pattern = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))"
    ].join("|");
    const RGX = new RegExp(pattern, "g");
    return typeof str === "string" ? str.replace(RGX, "") : str;
  };
});

// node_modules/prompts/lib/util/clear.js
var require_clear2 = __commonJS((exports, module) => {
  var strip = require_strip2();
  var { erase, cursor } = require_src();
  var width = (str) => [...strip(str)].length;
  module.exports = function(prompt, perLine) {
    if (!perLine)
      return erase.line + cursor.to(0);
    let rows = 0;
    const lines = prompt.split(/\r?\n/);
    for (let line of lines) {
      rows += 1 + Math.floor(Math.max(width(line) - 1, 0) / perLine);
    }
    return erase.lines(rows);
  };
});

// node_modules/prompts/lib/util/figures.js
var require_figures2 = __commonJS((exports, module) => {
  var main = {
    arrowUp: "\u2191",
    arrowDown: "\u2193",
    arrowLeft: "\u2190",
    arrowRight: "\u2192",
    radioOn: "\u25C9",
    radioOff: "\u25EF",
    tick: "\u2714",
    cross: "\u2716",
    ellipsis: "\u2026",
    pointerSmall: "\u203A",
    line: "\u2500",
    pointer: "\u276F"
  };
  var win = {
    arrowUp: main.arrowUp,
    arrowDown: main.arrowDown,
    arrowLeft: main.arrowLeft,
    arrowRight: main.arrowRight,
    radioOn: "(*)",
    radioOff: "( )",
    tick: "\u221A",
    cross: "\xD7",
    ellipsis: "...",
    pointerSmall: "\xBB",
    line: "\u2500",
    pointer: ">"
  };
  var figures = process.platform === "win32" ? win : main;
  module.exports = figures;
});

// node_modules/prompts/lib/util/style.js
var require_style2 = __commonJS((exports, module) => {
  var c = require_kleur();
  var figures = require_figures2();
  var styles = Object.freeze({
    password: { scale: 1, render: (input) => "*".repeat(input.length) },
    emoji: { scale: 2, render: (input) => "\uD83D\uDE03".repeat(input.length) },
    invisible: { scale: 0, render: (input) => "" },
    default: { scale: 1, render: (input) => `${input}` }
  });
  var render = (type) => styles[type] || styles.default;
  var symbols = Object.freeze({
    aborted: c.red(figures.cross),
    done: c.green(figures.tick),
    exited: c.yellow(figures.cross),
    default: c.cyan("?")
  });
  var symbol = (done, aborted, exited) => aborted ? symbols.aborted : exited ? symbols.exited : done ? symbols.done : symbols.default;
  var delimiter = (completing) => c.gray(completing ? figures.ellipsis : figures.pointerSmall);
  var item = (expandable, expanded) => c.gray(expandable ? expanded ? figures.pointerSmall : "+" : figures.line);
  module.exports = {
    styles,
    render,
    symbols,
    symbol,
    delimiter,
    item
  };
});

// node_modules/prompts/lib/util/lines.js
var require_lines2 = __commonJS((exports, module) => {
  var strip = require_strip2();
  module.exports = function(msg, perLine) {
    let lines = String(strip(msg) || "").split(/\r?\n/);
    if (!perLine)
      return lines.length;
    return lines.map((l2) => Math.ceil(l2.length / perLine)).reduce((a2, b) => a2 + b);
  };
});

// node_modules/prompts/lib/util/wrap.js
var require_wrap2 = __commonJS((exports, module) => {
  module.exports = (msg, opts = {}) => {
    const tab = Number.isSafeInteger(parseInt(opts.margin)) ? new Array(parseInt(opts.margin)).fill(" ").join("") : opts.margin || "";
    const width = opts.width;
    return (msg || "").split(/\r?\n/g).map((line) => line.split(/\s+/g).reduce((arr, w) => {
      if (w.length + tab.length >= width || arr[arr.length - 1].length + w.length + 1 < width)
        arr[arr.length - 1] += ` ${w}`;
      else
        arr.push(`${tab}${w}`);
      return arr;
    }, [tab]).join("\n")).join("\n");
  };
});

// node_modules/prompts/lib/util/entriesToDisplay.js
var require_entriesToDisplay2 = __commonJS((exports, module) => {
  module.exports = (cursor, total, maxVisible) => {
    maxVisible = maxVisible || total;
    let startIndex = Math.min(total - maxVisible, cursor - Math.floor(maxVisible / 2));
    if (startIndex < 0)
      startIndex = 0;
    let endIndex = Math.min(startIndex + maxVisible, total);
    return { startIndex, endIndex };
  };
});

// node_modules/prompts/lib/util/index.js
var require_util2 = __commonJS((exports, module) => {
  module.exports = {
    action: require_action2(),
    clear: require_clear2(),
    style: require_style2(),
    strip: require_strip2(),
    figures: require_figures2(),
    lines: require_lines2(),
    wrap: require_wrap2(),
    entriesToDisplay: require_entriesToDisplay2()
  };
});

// node_modules/prompts/lib/elements/prompt.js
var require_prompt2 = __commonJS((exports, module) => {
  var readline = import.meta.require("readline");
  var { action } = require_util2();
  var EventEmitter = import.meta.require("events");
  var { beep, cursor } = require_src();
  var color = require_kleur();

  class Prompt extends EventEmitter {
    constructor(opts = {}) {
      super();
      this.firstRender = true;
      this.in = opts.stdin || process.stdin;
      this.out = opts.stdout || process.stdout;
      this.onRender = (opts.onRender || (() => {
        return;
      })).bind(this);
      const rl = readline.createInterface({ input: this.in, escapeCodeTimeout: 50 });
      readline.emitKeypressEvents(this.in, rl);
      if (this.in.isTTY)
        this.in.setRawMode(true);
      const isSelect = ["SelectPrompt", "MultiselectPrompt"].indexOf(this.constructor.name) > -1;
      const keypress = (str, key) => {
        let a2 = action(key, isSelect);
        if (a2 === false) {
          this._ && this._(str, key);
        } else if (typeof this[a2] === "function") {
          this[a2](key);
        } else {
          this.bell();
        }
      };
      this.close = () => {
        this.out.write(cursor.show);
        this.in.removeListener("keypress", keypress);
        if (this.in.isTTY)
          this.in.setRawMode(false);
        rl.close();
        this.emit(this.aborted ? "abort" : this.exited ? "exit" : "submit", this.value);
        this.closed = true;
      };
      this.in.on("keypress", keypress);
    }
    fire() {
      this.emit("state", {
        value: this.value,
        aborted: !!this.aborted,
        exited: !!this.exited
      });
    }
    bell() {
      this.out.write(beep);
    }
    render() {
      this.onRender(color);
      if (this.firstRender)
        this.firstRender = false;
    }
  }
  module.exports = Prompt;
});

// node_modules/prompts/lib/elements/text.js
var require_text2 = __commonJS((exports, module) => {
  var color = require_kleur();
  var Prompt = require_prompt2();
  var { erase, cursor } = require_src();
  var { style, clear, lines, figures } = require_util2();

  class TextPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.transform = style.render(opts.style);
      this.scale = this.transform.scale;
      this.msg = opts.message;
      this.initial = opts.initial || ``;
      this.validator = opts.validate || (() => true);
      this.value = ``;
      this.errorMsg = opts.error || `Please Enter A Valid Value`;
      this.cursor = Number(!!this.initial);
      this.cursorOffset = 0;
      this.clear = clear(``, this.out.columns);
      this.render();
    }
    set value(v) {
      if (!v && this.initial) {
        this.placeholder = true;
        this.rendered = color.gray(this.transform.render(this.initial));
      } else {
        this.placeholder = false;
        this.rendered = this.transform.render(v);
      }
      this._value = v;
      this.fire();
    }
    get value() {
      return this._value;
    }
    reset() {
      this.value = ``;
      this.cursor = Number(!!this.initial);
      this.cursorOffset = 0;
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.value = this.value || this.initial;
      this.done = this.aborted = true;
      this.error = false;
      this.red = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    async validate() {
      let valid = await this.validator(this.value);
      if (typeof valid === `string`) {
        this.errorMsg = valid;
        valid = false;
      }
      this.error = !valid;
    }
    async submit() {
      this.value = this.value || this.initial;
      this.cursorOffset = 0;
      this.cursor = this.rendered.length;
      await this.validate();
      if (this.error) {
        this.red = true;
        this.fire();
        this.render();
        return;
      }
      this.done = true;
      this.aborted = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    next() {
      if (!this.placeholder)
        return this.bell();
      this.value = this.initial;
      this.cursor = this.rendered.length;
      this.fire();
      this.render();
    }
    moveCursor(n2) {
      if (this.placeholder)
        return;
      this.cursor = this.cursor + n2;
      this.cursorOffset += n2;
    }
    _(c, key) {
      let s1 = this.value.slice(0, this.cursor);
      let s2 = this.value.slice(this.cursor);
      this.value = `${s1}${c}${s2}`;
      this.red = false;
      this.cursor = this.placeholder ? 0 : s1.length + 1;
      this.render();
    }
    delete() {
      if (this.isCursorAtStart())
        return this.bell();
      let s1 = this.value.slice(0, this.cursor - 1);
      let s2 = this.value.slice(this.cursor);
      this.value = `${s1}${s2}`;
      this.red = false;
      if (this.isCursorAtStart()) {
        this.cursorOffset = 0;
      } else {
        this.cursorOffset++;
        this.moveCursor(-1);
      }
      this.render();
    }
    deleteForward() {
      if (this.cursor * this.scale >= this.rendered.length || this.placeholder)
        return this.bell();
      let s1 = this.value.slice(0, this.cursor);
      let s2 = this.value.slice(this.cursor + 1);
      this.value = `${s1}${s2}`;
      this.red = false;
      if (this.isCursorAtEnd()) {
        this.cursorOffset = 0;
      } else {
        this.cursorOffset++;
      }
      this.render();
    }
    first() {
      this.cursor = 0;
      this.render();
    }
    last() {
      this.cursor = this.value.length;
      this.render();
    }
    left() {
      if (this.cursor <= 0 || this.placeholder)
        return this.bell();
      this.moveCursor(-1);
      this.render();
    }
    right() {
      if (this.cursor * this.scale >= this.rendered.length || this.placeholder)
        return this.bell();
      this.moveCursor(1);
      this.render();
    }
    isCursorAtStart() {
      return this.cursor === 0 || this.placeholder && this.cursor === 1;
    }
    isCursorAtEnd() {
      return this.cursor === this.rendered.length || this.placeholder && this.cursor === this.rendered.length + 1;
    }
    render() {
      if (this.closed)
        return;
      if (!this.firstRender) {
        if (this.outputError)
          this.out.write(cursor.down(lines(this.outputError, this.out.columns) - 1) + clear(this.outputError, this.out.columns));
        this.out.write(clear(this.outputText, this.out.columns));
      }
      super.render();
      this.outputError = "";
      this.outputText = [
        style.symbol(this.done, this.aborted),
        color.bold(this.msg),
        style.delimiter(this.done),
        this.red ? color.red(this.rendered) : this.rendered
      ].join(` `);
      if (this.error) {
        this.outputError += this.errorMsg.split(`\n`).reduce((a2, l2, i2) => a2 + `\n${i2 ? " " : figures.pointerSmall} ${color.red().italic(l2)}`, ``);
      }
      this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore + cursor.move(this.cursorOffset, 0));
    }
  }
  module.exports = TextPrompt;
});

// node_modules/prompts/lib/elements/select.js
var require_select2 = __commonJS((exports, module) => {
  var color = require_kleur();
  var Prompt = require_prompt2();
  var { style, clear, figures, wrap, entriesToDisplay } = require_util2();
  var { cursor } = require_src();

  class SelectPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.hint = opts.hint || "- Use arrow-keys. Return to submit.";
      this.warn = opts.warn || "- This option is disabled";
      this.cursor = opts.initial || 0;
      this.choices = opts.choices.map((ch, idx) => {
        if (typeof ch === "string")
          ch = { title: ch, value: idx };
        return {
          title: ch && (ch.title || ch.value || ch),
          value: ch && (ch.value === undefined ? idx : ch.value),
          description: ch && ch.description,
          selected: ch && ch.selected,
          disabled: ch && ch.disabled
        };
      });
      this.optionsPerPage = opts.optionsPerPage || 10;
      this.value = (this.choices[this.cursor] || {}).value;
      this.clear = clear("", this.out.columns);
      this.render();
    }
    moveCursor(n2) {
      this.cursor = n2;
      this.value = this.choices[n2].value;
      this.fire();
    }
    reset() {
      this.moveCursor(0);
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      if (!this.selection.disabled) {
        this.done = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      } else
        this.bell();
    }
    first() {
      this.moveCursor(0);
      this.render();
    }
    last() {
      this.moveCursor(this.choices.length - 1);
      this.render();
    }
    up() {
      if (this.cursor === 0) {
        this.moveCursor(this.choices.length - 1);
      } else {
        this.moveCursor(this.cursor - 1);
      }
      this.render();
    }
    down() {
      if (this.cursor === this.choices.length - 1) {
        this.moveCursor(0);
      } else {
        this.moveCursor(this.cursor + 1);
      }
      this.render();
    }
    next() {
      this.moveCursor((this.cursor + 1) % this.choices.length);
      this.render();
    }
    _(c, key) {
      if (c === " ")
        return this.submit();
    }
    get selection() {
      return this.choices[this.cursor];
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      else
        this.out.write(clear(this.outputText, this.out.columns));
      super.render();
      let { startIndex, endIndex } = entriesToDisplay(this.cursor, this.choices.length, this.optionsPerPage);
      this.outputText = [
        style.symbol(this.done, this.aborted),
        color.bold(this.msg),
        style.delimiter(false),
        this.done ? this.selection.title : this.selection.disabled ? color.yellow(this.warn) : color.gray(this.hint)
      ].join(" ");
      if (!this.done) {
        this.outputText += "\n";
        for (let i2 = startIndex;i2 < endIndex; i2++) {
          let title, prefix, desc = "", v = this.choices[i2];
          if (i2 === startIndex && startIndex > 0) {
            prefix = figures.arrowUp;
          } else if (i2 === endIndex - 1 && endIndex < this.choices.length) {
            prefix = figures.arrowDown;
          } else {
            prefix = " ";
          }
          if (v.disabled) {
            title = this.cursor === i2 ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
            prefix = (this.cursor === i2 ? color.bold().gray(figures.pointer) + " " : "  ") + prefix;
          } else {
            title = this.cursor === i2 ? color.cyan().underline(v.title) : v.title;
            prefix = (this.cursor === i2 ? color.cyan(figures.pointer) + " " : "  ") + prefix;
            if (v.description && this.cursor === i2) {
              desc = ` - ${v.description}`;
              if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
                desc = "\n" + wrap(v.description, { margin: 3, width: this.out.columns });
              }
            }
          }
          this.outputText += `${prefix} ${title}${color.gray(desc)}\n`;
        }
      }
      this.out.write(this.outputText);
    }
  }
  module.exports = SelectPrompt;
});

// node_modules/prompts/lib/elements/toggle.js
var require_toggle2 = __commonJS((exports, module) => {
  var color = require_kleur();
  var Prompt = require_prompt2();
  var { style, clear } = require_util2();
  var { cursor, erase } = require_src();

  class TogglePrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.value = !!opts.initial;
      this.active = opts.active || "on";
      this.inactive = opts.inactive || "off";
      this.initialValue = this.value;
      this.render();
    }
    reset() {
      this.value = this.initialValue;
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      this.done = true;
      this.aborted = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    deactivate() {
      if (this.value === false)
        return this.bell();
      this.value = false;
      this.render();
    }
    activate() {
      if (this.value === true)
        return this.bell();
      this.value = true;
      this.render();
    }
    delete() {
      this.deactivate();
    }
    left() {
      this.deactivate();
    }
    right() {
      this.activate();
    }
    down() {
      this.deactivate();
    }
    up() {
      this.activate();
    }
    next() {
      this.value = !this.value;
      this.fire();
      this.render();
    }
    _(c, key) {
      if (c === " ") {
        this.value = !this.value;
      } else if (c === "1") {
        this.value = true;
      } else if (c === "0") {
        this.value = false;
      } else
        return this.bell();
      this.render();
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      else
        this.out.write(clear(this.outputText, this.out.columns));
      super.render();
      this.outputText = [
        style.symbol(this.done, this.aborted),
        color.bold(this.msg),
        style.delimiter(this.done),
        this.value ? this.inactive : color.cyan().underline(this.inactive),
        color.gray("/"),
        this.value ? color.cyan().underline(this.active) : this.active
      ].join(" ");
      this.out.write(erase.line + cursor.to(0) + this.outputText);
    }
  }
  module.exports = TogglePrompt;
});

// node_modules/prompts/lib/dateparts/datepart.js
var require_datepart2 = __commonJS((exports, module) => {
  class DatePart {
    constructor({ token, date, parts, locales }) {
      this.token = token;
      this.date = date || new Date;
      this.parts = parts || [this];
      this.locales = locales || {};
    }
    up() {
    }
    down() {
    }
    next() {
      const currentIdx = this.parts.indexOf(this);
      return this.parts.find((part, idx) => idx > currentIdx && part instanceof DatePart);
    }
    setTo(val) {
    }
    prev() {
      let parts = [].concat(this.parts).reverse();
      const currentIdx = parts.indexOf(this);
      return parts.find((part, idx) => idx > currentIdx && part instanceof DatePart);
    }
    toString() {
      return String(this.date);
    }
  }
  module.exports = DatePart;
});

// node_modules/prompts/lib/dateparts/meridiem.js
var require_meridiem2 = __commonJS((exports, module) => {
  var DatePart = require_datepart2();

  class Meridiem extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setHours((this.date.getHours() + 12) % 24);
    }
    down() {
      this.up();
    }
    toString() {
      let meridiem = this.date.getHours() > 12 ? "pm" : "am";
      return /\A/.test(this.token) ? meridiem.toUpperCase() : meridiem;
    }
  }
  module.exports = Meridiem;
});

// node_modules/prompts/lib/dateparts/day.js
var require_day2 = __commonJS((exports, module) => {
  var DatePart = require_datepart2();
  var pos = (n2) => {
    n2 = n2 % 10;
    return n2 === 1 ? "st" : n2 === 2 ? "nd" : n2 === 3 ? "rd" : "th";
  };

  class Day extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setDate(this.date.getDate() + 1);
    }
    down() {
      this.date.setDate(this.date.getDate() - 1);
    }
    setTo(val) {
      this.date.setDate(parseInt(val.substr(-2)));
    }
    toString() {
      let date = this.date.getDate();
      let day = this.date.getDay();
      return this.token === "DD" ? String(date).padStart(2, "0") : this.token === "Do" ? date + pos(date) : this.token === "d" ? day + 1 : this.token === "ddd" ? this.locales.weekdaysShort[day] : this.token === "dddd" ? this.locales.weekdays[day] : date;
    }
  }
  module.exports = Day;
});

// node_modules/prompts/lib/dateparts/hours.js
var require_hours2 = __commonJS((exports, module) => {
  var DatePart = require_datepart2();

  class Hours extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setHours(this.date.getHours() + 1);
    }
    down() {
      this.date.setHours(this.date.getHours() - 1);
    }
    setTo(val) {
      this.date.setHours(parseInt(val.substr(-2)));
    }
    toString() {
      let hours = this.date.getHours();
      if (/h/.test(this.token))
        hours = hours % 12 || 12;
      return this.token.length > 1 ? String(hours).padStart(2, "0") : hours;
    }
  }
  module.exports = Hours;
});

// node_modules/prompts/lib/dateparts/milliseconds.js
var require_milliseconds2 = __commonJS((exports, module) => {
  var DatePart = require_datepart2();

  class Milliseconds extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setMilliseconds(this.date.getMilliseconds() + 1);
    }
    down() {
      this.date.setMilliseconds(this.date.getMilliseconds() - 1);
    }
    setTo(val) {
      this.date.setMilliseconds(parseInt(val.substr(-this.token.length)));
    }
    toString() {
      return String(this.date.getMilliseconds()).padStart(4, "0").substr(0, this.token.length);
    }
  }
  module.exports = Milliseconds;
});

// node_modules/prompts/lib/dateparts/minutes.js
var require_minutes2 = __commonJS((exports, module) => {
  var DatePart = require_datepart2();

  class Minutes extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setMinutes(this.date.getMinutes() + 1);
    }
    down() {
      this.date.setMinutes(this.date.getMinutes() - 1);
    }
    setTo(val) {
      this.date.setMinutes(parseInt(val.substr(-2)));
    }
    toString() {
      let m = this.date.getMinutes();
      return this.token.length > 1 ? String(m).padStart(2, "0") : m;
    }
  }
  module.exports = Minutes;
});

// node_modules/prompts/lib/dateparts/month.js
var require_month2 = __commonJS((exports, module) => {
  var DatePart = require_datepart2();

  class Month extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setMonth(this.date.getMonth() + 1);
    }
    down() {
      this.date.setMonth(this.date.getMonth() - 1);
    }
    setTo(val) {
      val = parseInt(val.substr(-2)) - 1;
      this.date.setMonth(val < 0 ? 0 : val);
    }
    toString() {
      let month = this.date.getMonth();
      let tl = this.token.length;
      return tl === 2 ? String(month + 1).padStart(2, "0") : tl === 3 ? this.locales.monthsShort[month] : tl === 4 ? this.locales.months[month] : String(month + 1);
    }
  }
  module.exports = Month;
});

// node_modules/prompts/lib/dateparts/seconds.js
var require_seconds2 = __commonJS((exports, module) => {
  var DatePart = require_datepart2();

  class Seconds extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setSeconds(this.date.getSeconds() + 1);
    }
    down() {
      this.date.setSeconds(this.date.getSeconds() - 1);
    }
    setTo(val) {
      this.date.setSeconds(parseInt(val.substr(-2)));
    }
    toString() {
      let s2 = this.date.getSeconds();
      return this.token.length > 1 ? String(s2).padStart(2, "0") : s2;
    }
  }
  module.exports = Seconds;
});

// node_modules/prompts/lib/dateparts/year.js
var require_year2 = __commonJS((exports, module) => {
  var DatePart = require_datepart2();

  class Year extends DatePart {
    constructor(opts = {}) {
      super(opts);
    }
    up() {
      this.date.setFullYear(this.date.getFullYear() + 1);
    }
    down() {
      this.date.setFullYear(this.date.getFullYear() - 1);
    }
    setTo(val) {
      this.date.setFullYear(val.substr(-4));
    }
    toString() {
      let year = String(this.date.getFullYear()).padStart(4, "0");
      return this.token.length === 2 ? year.substr(-2) : year;
    }
  }
  module.exports = Year;
});

// node_modules/prompts/lib/dateparts/index.js
var require_dateparts2 = __commonJS((exports, module) => {
  module.exports = {
    DatePart: require_datepart2(),
    Meridiem: require_meridiem2(),
    Day: require_day2(),
    Hours: require_hours2(),
    Milliseconds: require_milliseconds2(),
    Minutes: require_minutes2(),
    Month: require_month2(),
    Seconds: require_seconds2(),
    Year: require_year2()
  };
});

// node_modules/prompts/lib/elements/date.js
var require_date2 = __commonJS((exports, module) => {
  var color = require_kleur();
  var Prompt = require_prompt2();
  var { style, clear, figures } = require_util2();
  var { erase, cursor } = require_src();
  var { DatePart, Meridiem, Day, Hours, Milliseconds, Minutes, Month, Seconds, Year } = require_dateparts2();
  var regex = /\\(.)|"((?:\\["\\]|[^"])+)"|(D[Do]?|d{3,4}|d)|(M{1,4})|(YY(?:YY)?)|([aA])|([Hh]{1,2})|(m{1,2})|(s{1,2})|(S{1,4})|./g;
  var regexGroups = {
    1: ({ token }) => token.replace(/\\(.)/g, "$1"),
    2: (opts) => new Day(opts),
    3: (opts) => new Month(opts),
    4: (opts) => new Year(opts),
    5: (opts) => new Meridiem(opts),
    6: (opts) => new Hours(opts),
    7: (opts) => new Minutes(opts),
    8: (opts) => new Seconds(opts),
    9: (opts) => new Milliseconds(opts)
  };
  var dfltLocales = {
    months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
    monthsShort: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
    weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
    weekdaysShort: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(",")
  };

  class DatePrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.cursor = 0;
      this.typed = "";
      this.locales = Object.assign(dfltLocales, opts.locales);
      this._date = opts.initial || new Date;
      this.errorMsg = opts.error || "Please Enter A Valid Value";
      this.validator = opts.validate || (() => true);
      this.mask = opts.mask || "YYYY-MM-DD HH:mm:ss";
      this.clear = clear("", this.out.columns);
      this.render();
    }
    get value() {
      return this.date;
    }
    get date() {
      return this._date;
    }
    set date(date) {
      if (date)
        this._date.setTime(date.getTime());
    }
    set mask(mask) {
      let result;
      this.parts = [];
      while (result = regex.exec(mask)) {
        let match = result.shift();
        let idx = result.findIndex((gr) => gr != null);
        this.parts.push(idx in regexGroups ? regexGroups[idx]({ token: result[idx] || match, date: this.date, parts: this.parts, locales: this.locales }) : result[idx] || match);
      }
      let parts = this.parts.reduce((arr, i2) => {
        if (typeof i2 === "string" && typeof arr[arr.length - 1] === "string")
          arr[arr.length - 1] += i2;
        else
          arr.push(i2);
        return arr;
      }, []);
      this.parts.splice(0);
      this.parts.push(...parts);
      this.reset();
    }
    moveCursor(n2) {
      this.typed = "";
      this.cursor = n2;
      this.fire();
    }
    reset() {
      this.moveCursor(this.parts.findIndex((p) => p instanceof DatePart));
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.error = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    async validate() {
      let valid = await this.validator(this.value);
      if (typeof valid === "string") {
        this.errorMsg = valid;
        valid = false;
      }
      this.error = !valid;
    }
    async submit() {
      await this.validate();
      if (this.error) {
        this.color = "red";
        this.fire();
        this.render();
        return;
      }
      this.done = true;
      this.aborted = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    up() {
      this.typed = "";
      this.parts[this.cursor].up();
      this.render();
    }
    down() {
      this.typed = "";
      this.parts[this.cursor].down();
      this.render();
    }
    left() {
      let prev = this.parts[this.cursor].prev();
      if (prev == null)
        return this.bell();
      this.moveCursor(this.parts.indexOf(prev));
      this.render();
    }
    right() {
      let next = this.parts[this.cursor].next();
      if (next == null)
        return this.bell();
      this.moveCursor(this.parts.indexOf(next));
      this.render();
    }
    next() {
      let next = this.parts[this.cursor].next();
      this.moveCursor(next ? this.parts.indexOf(next) : this.parts.findIndex((part) => part instanceof DatePart));
      this.render();
    }
    _(c) {
      if (/\d/.test(c)) {
        this.typed += c;
        this.parts[this.cursor].setTo(this.typed);
        this.render();
      }
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      else
        this.out.write(clear(this.outputText, this.out.columns));
      super.render();
      this.outputText = [
        style.symbol(this.done, this.aborted),
        color.bold(this.msg),
        style.delimiter(false),
        this.parts.reduce((arr, p, idx) => arr.concat(idx === this.cursor && !this.done ? color.cyan().underline(p.toString()) : p), []).join("")
      ].join(" ");
      if (this.error) {
        this.outputText += this.errorMsg.split("\n").reduce((a2, l2, i2) => a2 + `\n${i2 ? ` ` : figures.pointerSmall} ${color.red().italic(l2)}`, ``);
      }
      this.out.write(erase.line + cursor.to(0) + this.outputText);
    }
  }
  module.exports = DatePrompt;
});

// node_modules/prompts/lib/elements/number.js
var require_number2 = __commonJS((exports, module) => {
  var color = require_kleur();
  var Prompt = require_prompt2();
  var { cursor, erase } = require_src();
  var { style, figures, clear, lines } = require_util2();
  var isNumber = /[0-9]/;
  var isDef = (any) => any !== undefined;
  var round = (number, precision) => {
    let factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  };

  class NumberPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.transform = style.render(opts.style);
      this.msg = opts.message;
      this.initial = isDef(opts.initial) ? opts.initial : "";
      this.float = !!opts.float;
      this.round = opts.round || 2;
      this.inc = opts.increment || 1;
      this.min = isDef(opts.min) ? opts.min : (-Infinity);
      this.max = isDef(opts.max) ? opts.max : Infinity;
      this.errorMsg = opts.error || `Please Enter A Valid Value`;
      this.validator = opts.validate || (() => true);
      this.color = `cyan`;
      this.value = ``;
      this.typed = ``;
      this.lastHit = 0;
      this.render();
    }
    set value(v) {
      if (!v && v !== 0) {
        this.placeholder = true;
        this.rendered = color.gray(this.transform.render(`${this.initial}`));
        this._value = ``;
      } else {
        this.placeholder = false;
        this.rendered = this.transform.render(`${round(v, this.round)}`);
        this._value = round(v, this.round);
      }
      this.fire();
    }
    get value() {
      return this._value;
    }
    parse(x) {
      return this.float ? parseFloat(x) : parseInt(x);
    }
    valid(c) {
      return c === `-` || c === `.` && this.float || isNumber.test(c);
    }
    reset() {
      this.typed = ``;
      this.value = ``;
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      let x = this.value;
      this.value = x !== `` ? x : this.initial;
      this.done = this.aborted = true;
      this.error = false;
      this.fire();
      this.render();
      this.out.write(`\n`);
      this.close();
    }
    async validate() {
      let valid = await this.validator(this.value);
      if (typeof valid === `string`) {
        this.errorMsg = valid;
        valid = false;
      }
      this.error = !valid;
    }
    async submit() {
      await this.validate();
      if (this.error) {
        this.color = `red`;
        this.fire();
        this.render();
        return;
      }
      let x = this.value;
      this.value = x !== `` ? x : this.initial;
      this.done = true;
      this.aborted = false;
      this.error = false;
      this.fire();
      this.render();
      this.out.write(`\n`);
      this.close();
    }
    up() {
      this.typed = ``;
      if (this.value === "") {
        this.value = this.min - this.inc;
      }
      if (this.value >= this.max)
        return this.bell();
      this.value += this.inc;
      this.color = `cyan`;
      this.fire();
      this.render();
    }
    down() {
      this.typed = ``;
      if (this.value === "") {
        this.value = this.min + this.inc;
      }
      if (this.value <= this.min)
        return this.bell();
      this.value -= this.inc;
      this.color = `cyan`;
      this.fire();
      this.render();
    }
    delete() {
      let val = this.value.toString();
      if (val.length === 0)
        return this.bell();
      this.value = this.parse(val = val.slice(0, -1)) || ``;
      if (this.value !== "" && this.value < this.min) {
        this.value = this.min;
      }
      this.color = `cyan`;
      this.fire();
      this.render();
    }
    next() {
      this.value = this.initial;
      this.fire();
      this.render();
    }
    _(c, key) {
      if (!this.valid(c))
        return this.bell();
      const now = Date.now();
      if (now - this.lastHit > 1000)
        this.typed = ``;
      this.typed += c;
      this.lastHit = now;
      this.color = `cyan`;
      if (c === `.`)
        return this.fire();
      this.value = Math.min(this.parse(this.typed), this.max);
      if (this.value > this.max)
        this.value = this.max;
      if (this.value < this.min)
        this.value = this.min;
      this.fire();
      this.render();
    }
    render() {
      if (this.closed)
        return;
      if (!this.firstRender) {
        if (this.outputError)
          this.out.write(cursor.down(lines(this.outputError, this.out.columns) - 1) + clear(this.outputError, this.out.columns));
        this.out.write(clear(this.outputText, this.out.columns));
      }
      super.render();
      this.outputError = "";
      this.outputText = [
        style.symbol(this.done, this.aborted),
        color.bold(this.msg),
        style.delimiter(this.done),
        !this.done || !this.done && !this.placeholder ? color[this.color]().underline(this.rendered) : this.rendered
      ].join(` `);
      if (this.error) {
        this.outputError += this.errorMsg.split(`\n`).reduce((a2, l2, i2) => a2 + `\n${i2 ? ` ` : figures.pointerSmall} ${color.red().italic(l2)}`, ``);
      }
      this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore);
    }
  }
  module.exports = NumberPrompt;
});

// node_modules/prompts/lib/elements/multiselect.js
var require_multiselect2 = __commonJS((exports, module) => {
  var color = require_kleur();
  var { cursor } = require_src();
  var Prompt = require_prompt2();
  var { clear, figures, style, wrap, entriesToDisplay } = require_util2();

  class MultiselectPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.cursor = opts.cursor || 0;
      this.scrollIndex = opts.cursor || 0;
      this.hint = opts.hint || "";
      this.warn = opts.warn || "- This option is disabled -";
      this.minSelected = opts.min;
      this.showMinError = false;
      this.maxChoices = opts.max;
      this.instructions = opts.instructions;
      this.optionsPerPage = opts.optionsPerPage || 10;
      this.value = opts.choices.map((ch, idx) => {
        if (typeof ch === "string")
          ch = { title: ch, value: idx };
        return {
          title: ch && (ch.title || ch.value || ch),
          description: ch && ch.description,
          value: ch && (ch.value === undefined ? idx : ch.value),
          selected: ch && ch.selected,
          disabled: ch && ch.disabled
        };
      });
      this.clear = clear("", this.out.columns);
      if (!opts.overrideRender) {
        this.render();
      }
    }
    reset() {
      this.value.map((v) => !v.selected);
      this.cursor = 0;
      this.fire();
      this.render();
    }
    selected() {
      return this.value.filter((v) => v.selected);
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      const selected = this.value.filter((e) => e.selected);
      if (this.minSelected && selected.length < this.minSelected) {
        this.showMinError = true;
        this.render();
      } else {
        this.done = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
    }
    first() {
      this.cursor = 0;
      this.render();
    }
    last() {
      this.cursor = this.value.length - 1;
      this.render();
    }
    next() {
      this.cursor = (this.cursor + 1) % this.value.length;
      this.render();
    }
    up() {
      if (this.cursor === 0) {
        this.cursor = this.value.length - 1;
      } else {
        this.cursor--;
      }
      this.render();
    }
    down() {
      if (this.cursor === this.value.length - 1) {
        this.cursor = 0;
      } else {
        this.cursor++;
      }
      this.render();
    }
    left() {
      this.value[this.cursor].selected = false;
      this.render();
    }
    right() {
      if (this.value.filter((e) => e.selected).length >= this.maxChoices)
        return this.bell();
      this.value[this.cursor].selected = true;
      this.render();
    }
    handleSpaceToggle() {
      const v = this.value[this.cursor];
      if (v.selected) {
        v.selected = false;
        this.render();
      } else if (v.disabled || this.value.filter((e) => e.selected).length >= this.maxChoices) {
        return this.bell();
      } else {
        v.selected = true;
        this.render();
      }
    }
    toggleAll() {
      if (this.maxChoices !== undefined || this.value[this.cursor].disabled) {
        return this.bell();
      }
      const newSelected = !this.value[this.cursor].selected;
      this.value.filter((v) => !v.disabled).forEach((v) => v.selected = newSelected);
      this.render();
    }
    _(c, key) {
      if (c === " ") {
        this.handleSpaceToggle();
      } else if (c === "a") {
        this.toggleAll();
      } else {
        return this.bell();
      }
    }
    renderInstructions() {
      if (this.instructions === undefined || this.instructions) {
        if (typeof this.instructions === "string") {
          return this.instructions;
        }
        return "\nInstructions:\n" + `    ${figures.arrowUp}/${figures.arrowDown}: Highlight option\n` + `    ${figures.arrowLeft}/${figures.arrowRight}/[space]: Toggle selection\n` + (this.maxChoices === undefined ? `    a: Toggle all\n` : "") + `    enter/return: Complete answer`;
      }
      return "";
    }
    renderOption(cursor2, v, i2, arrowIndicator) {
      const prefix = (v.selected ? color.green(figures.radioOn) : figures.radioOff) + " " + arrowIndicator + " ";
      let title, desc;
      if (v.disabled) {
        title = cursor2 === i2 ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
      } else {
        title = cursor2 === i2 ? color.cyan().underline(v.title) : v.title;
        if (cursor2 === i2 && v.description) {
          desc = ` - ${v.description}`;
          if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
            desc = "\n" + wrap(v.description, { margin: prefix.length, width: this.out.columns });
          }
        }
      }
      return prefix + title + color.gray(desc || "");
    }
    paginateOptions(options) {
      if (options.length === 0) {
        return color.red("No matches for this query.");
      }
      let { startIndex, endIndex } = entriesToDisplay(this.cursor, options.length, this.optionsPerPage);
      let prefix, styledOptions = [];
      for (let i2 = startIndex;i2 < endIndex; i2++) {
        if (i2 === startIndex && startIndex > 0) {
          prefix = figures.arrowUp;
        } else if (i2 === endIndex - 1 && endIndex < options.length) {
          prefix = figures.arrowDown;
        } else {
          prefix = " ";
        }
        styledOptions.push(this.renderOption(this.cursor, options[i2], i2, prefix));
      }
      return "\n" + styledOptions.join("\n");
    }
    renderOptions(options) {
      if (!this.done) {
        return this.paginateOptions(options);
      }
      return "";
    }
    renderDoneOrInstructions() {
      if (this.done) {
        return this.value.filter((e) => e.selected).map((v) => v.title).join(", ");
      }
      const output = [color.gray(this.hint), this.renderInstructions()];
      if (this.value[this.cursor].disabled) {
        output.push(color.yellow(this.warn));
      }
      return output.join(" ");
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      super.render();
      let prompt = [
        style.symbol(this.done, this.aborted),
        color.bold(this.msg),
        style.delimiter(false),
        this.renderDoneOrInstructions()
      ].join(" ");
      if (this.showMinError) {
        prompt += color.red(`You must select a minimum of ${this.minSelected} choices.`);
        this.showMinError = false;
      }
      prompt += this.renderOptions(this.value);
      this.out.write(this.clear + prompt);
      this.clear = clear(prompt, this.out.columns);
    }
  }
  module.exports = MultiselectPrompt;
});

// node_modules/prompts/lib/elements/autocomplete.js
var require_autocomplete2 = __commonJS((exports, module) => {
  var color = require_kleur();
  var Prompt = require_prompt2();
  var { erase, cursor } = require_src();
  var { style, clear, figures, wrap, entriesToDisplay } = require_util2();
  var getVal = (arr, i2) => arr[i2] && (arr[i2].value || arr[i2].title || arr[i2]);
  var getTitle = (arr, i2) => arr[i2] && (arr[i2].title || arr[i2].value || arr[i2]);
  var getIndex = (arr, valOrTitle) => {
    const index = arr.findIndex((el) => el.value === valOrTitle || el.title === valOrTitle);
    return index > -1 ? index : undefined;
  };

  class AutocompletePrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.suggest = opts.suggest;
      this.choices = opts.choices;
      this.initial = typeof opts.initial === "number" ? opts.initial : getIndex(opts.choices, opts.initial);
      this.select = this.initial || opts.cursor || 0;
      this.i18n = { noMatches: opts.noMatches || "no matches found" };
      this.fallback = opts.fallback || this.initial;
      this.clearFirst = opts.clearFirst || false;
      this.suggestions = [];
      this.input = "";
      this.limit = opts.limit || 10;
      this.cursor = 0;
      this.transform = style.render(opts.style);
      this.scale = this.transform.scale;
      this.render = this.render.bind(this);
      this.complete = this.complete.bind(this);
      this.clear = clear("", this.out.columns);
      this.complete(this.render);
      this.render();
    }
    set fallback(fb) {
      this._fb = Number.isSafeInteger(parseInt(fb)) ? parseInt(fb) : fb;
    }
    get fallback() {
      let choice;
      if (typeof this._fb === "number")
        choice = this.choices[this._fb];
      else if (typeof this._fb === "string")
        choice = { title: this._fb };
      return choice || this._fb || { title: this.i18n.noMatches };
    }
    moveSelect(i2) {
      this.select = i2;
      if (this.suggestions.length > 0)
        this.value = getVal(this.suggestions, i2);
      else
        this.value = this.fallback.value;
      this.fire();
    }
    async complete(cb) {
      const p = this.completing = this.suggest(this.input, this.choices);
      const suggestions = await p;
      if (this.completing !== p)
        return;
      this.suggestions = suggestions.map((s2, i2, arr) => ({ title: getTitle(arr, i2), value: getVal(arr, i2), description: s2.description }));
      this.completing = false;
      const l2 = Math.max(suggestions.length - 1, 0);
      this.moveSelect(Math.min(l2, this.select));
      cb && cb();
    }
    reset() {
      this.input = "";
      this.complete(() => {
        this.moveSelect(this.initial !== undefined ? this.initial : 0);
        this.render();
      });
      this.render();
    }
    exit() {
      if (this.clearFirst && this.input.length > 0) {
        this.reset();
      } else {
        this.done = this.exited = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
    }
    abort() {
      this.done = this.aborted = true;
      this.exited = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      this.done = true;
      this.aborted = this.exited = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    _(c, key) {
      let s1 = this.input.slice(0, this.cursor);
      let s2 = this.input.slice(this.cursor);
      this.input = `${s1}${c}${s2}`;
      this.cursor = s1.length + 1;
      this.complete(this.render);
      this.render();
    }
    delete() {
      if (this.cursor === 0)
        return this.bell();
      let s1 = this.input.slice(0, this.cursor - 1);
      let s2 = this.input.slice(this.cursor);
      this.input = `${s1}${s2}`;
      this.complete(this.render);
      this.cursor = this.cursor - 1;
      this.render();
    }
    deleteForward() {
      if (this.cursor * this.scale >= this.rendered.length)
        return this.bell();
      let s1 = this.input.slice(0, this.cursor);
      let s2 = this.input.slice(this.cursor + 1);
      this.input = `${s1}${s2}`;
      this.complete(this.render);
      this.render();
    }
    first() {
      this.moveSelect(0);
      this.render();
    }
    last() {
      this.moveSelect(this.suggestions.length - 1);
      this.render();
    }
    up() {
      if (this.select === 0) {
        this.moveSelect(this.suggestions.length - 1);
      } else {
        this.moveSelect(this.select - 1);
      }
      this.render();
    }
    down() {
      if (this.select === this.suggestions.length - 1) {
        this.moveSelect(0);
      } else {
        this.moveSelect(this.select + 1);
      }
      this.render();
    }
    next() {
      if (this.select === this.suggestions.length - 1) {
        this.moveSelect(0);
      } else
        this.moveSelect(this.select + 1);
      this.render();
    }
    nextPage() {
      this.moveSelect(Math.min(this.select + this.limit, this.suggestions.length - 1));
      this.render();
    }
    prevPage() {
      this.moveSelect(Math.max(this.select - this.limit, 0));
      this.render();
    }
    left() {
      if (this.cursor <= 0)
        return this.bell();
      this.cursor = this.cursor - 1;
      this.render();
    }
    right() {
      if (this.cursor * this.scale >= this.rendered.length)
        return this.bell();
      this.cursor = this.cursor + 1;
      this.render();
    }
    renderOption(v, hovered, isStart, isEnd) {
      let desc;
      let prefix = isStart ? figures.arrowUp : isEnd ? figures.arrowDown : " ";
      let title = hovered ? color.cyan().underline(v.title) : v.title;
      prefix = (hovered ? color.cyan(figures.pointer) + " " : "  ") + prefix;
      if (v.description) {
        desc = ` - ${v.description}`;
        if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
          desc = "\n" + wrap(v.description, { margin: 3, width: this.out.columns });
        }
      }
      return prefix + " " + title + color.gray(desc || "");
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      else
        this.out.write(clear(this.outputText, this.out.columns));
      super.render();
      let { startIndex, endIndex } = entriesToDisplay(this.select, this.choices.length, this.limit);
      this.outputText = [
        style.symbol(this.done, this.aborted, this.exited),
        color.bold(this.msg),
        style.delimiter(this.completing),
        this.done && this.suggestions[this.select] ? this.suggestions[this.select].title : this.rendered = this.transform.render(this.input)
      ].join(" ");
      if (!this.done) {
        const suggestions = this.suggestions.slice(startIndex, endIndex).map((item, i2) => this.renderOption(item, this.select === i2 + startIndex, i2 === 0 && startIndex > 0, i2 + startIndex === endIndex - 1 && endIndex < this.choices.length)).join("\n");
        this.outputText += `\n` + (suggestions || color.gray(this.fallback.title));
      }
      this.out.write(erase.line + cursor.to(0) + this.outputText);
    }
  }
  module.exports = AutocompletePrompt;
});

// node_modules/prompts/lib/elements/autocompleteMultiselect.js
var require_autocompleteMultiselect2 = __commonJS((exports, module) => {
  var color = require_kleur();
  var { cursor } = require_src();
  var MultiselectPrompt = require_multiselect2();
  var { clear, style, figures } = require_util2();

  class AutocompleteMultiselectPrompt extends MultiselectPrompt {
    constructor(opts = {}) {
      opts.overrideRender = true;
      super(opts);
      this.inputValue = "";
      this.clear = clear("", this.out.columns);
      this.filteredOptions = this.value;
      this.render();
    }
    last() {
      this.cursor = this.filteredOptions.length - 1;
      this.render();
    }
    next() {
      this.cursor = (this.cursor + 1) % this.filteredOptions.length;
      this.render();
    }
    up() {
      if (this.cursor === 0) {
        this.cursor = this.filteredOptions.length - 1;
      } else {
        this.cursor--;
      }
      this.render();
    }
    down() {
      if (this.cursor === this.filteredOptions.length - 1) {
        this.cursor = 0;
      } else {
        this.cursor++;
      }
      this.render();
    }
    left() {
      this.filteredOptions[this.cursor].selected = false;
      this.render();
    }
    right() {
      if (this.value.filter((e) => e.selected).length >= this.maxChoices)
        return this.bell();
      this.filteredOptions[this.cursor].selected = true;
      this.render();
    }
    delete() {
      if (this.inputValue.length) {
        this.inputValue = this.inputValue.substr(0, this.inputValue.length - 1);
        this.updateFilteredOptions();
      }
    }
    updateFilteredOptions() {
      const currentHighlight = this.filteredOptions[this.cursor];
      this.filteredOptions = this.value.filter((v) => {
        if (this.inputValue) {
          if (typeof v.title === "string") {
            if (v.title.toLowerCase().includes(this.inputValue.toLowerCase())) {
              return true;
            }
          }
          if (typeof v.value === "string") {
            if (v.value.toLowerCase().includes(this.inputValue.toLowerCase())) {
              return true;
            }
          }
          return false;
        }
        return true;
      });
      const newHighlightIndex = this.filteredOptions.findIndex((v) => v === currentHighlight);
      this.cursor = newHighlightIndex < 0 ? 0 : newHighlightIndex;
      this.render();
    }
    handleSpaceToggle() {
      const v = this.filteredOptions[this.cursor];
      if (v.selected) {
        v.selected = false;
        this.render();
      } else if (v.disabled || this.value.filter((e) => e.selected).length >= this.maxChoices) {
        return this.bell();
      } else {
        v.selected = true;
        this.render();
      }
    }
    handleInputChange(c) {
      this.inputValue = this.inputValue + c;
      this.updateFilteredOptions();
    }
    _(c, key) {
      if (c === " ") {
        this.handleSpaceToggle();
      } else {
        this.handleInputChange(c);
      }
    }
    renderInstructions() {
      if (this.instructions === undefined || this.instructions) {
        if (typeof this.instructions === "string") {
          return this.instructions;
        }
        return `
Instructions:
    ${figures.arrowUp}/${figures.arrowDown}: Highlight option
    ${figures.arrowLeft}/${figures.arrowRight}/[space]: Toggle selection
    [a,b,c]/delete: Filter choices
    enter/return: Complete answer
`;
      }
      return "";
    }
    renderCurrentInput() {
      return `
Filtered results for: ${this.inputValue ? this.inputValue : color.gray("Enter something to filter")}\n`;
    }
    renderOption(cursor2, v, i2) {
      let title;
      if (v.disabled)
        title = cursor2 === i2 ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
      else
        title = cursor2 === i2 ? color.cyan().underline(v.title) : v.title;
      return (v.selected ? color.green(figures.radioOn) : figures.radioOff) + "  " + title;
    }
    renderDoneOrInstructions() {
      if (this.done) {
        return this.value.filter((e) => e.selected).map((v) => v.title).join(", ");
      }
      const output = [color.gray(this.hint), this.renderInstructions(), this.renderCurrentInput()];
      if (this.filteredOptions.length && this.filteredOptions[this.cursor].disabled) {
        output.push(color.yellow(this.warn));
      }
      return output.join(" ");
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      super.render();
      let prompt = [
        style.symbol(this.done, this.aborted),
        color.bold(this.msg),
        style.delimiter(false),
        this.renderDoneOrInstructions()
      ].join(" ");
      if (this.showMinError) {
        prompt += color.red(`You must select a minimum of ${this.minSelected} choices.`);
        this.showMinError = false;
      }
      prompt += this.renderOptions(this.filteredOptions);
      this.out.write(this.clear + prompt);
      this.clear = clear(prompt, this.out.columns);
    }
  }
  module.exports = AutocompleteMultiselectPrompt;
});

// node_modules/prompts/lib/elements/confirm.js
var require_confirm2 = __commonJS((exports, module) => {
  var color = require_kleur();
  var Prompt = require_prompt2();
  var { style, clear } = require_util2();
  var { erase, cursor } = require_src();

  class ConfirmPrompt extends Prompt {
    constructor(opts = {}) {
      super(opts);
      this.msg = opts.message;
      this.value = opts.initial;
      this.initialValue = !!opts.initial;
      this.yesMsg = opts.yes || "yes";
      this.yesOption = opts.yesOption || "(Y/n)";
      this.noMsg = opts.no || "no";
      this.noOption = opts.noOption || "(y/N)";
      this.render();
    }
    reset() {
      this.value = this.initialValue;
      this.fire();
      this.render();
    }
    exit() {
      this.abort();
    }
    abort() {
      this.done = this.aborted = true;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    submit() {
      this.value = this.value || false;
      this.done = true;
      this.aborted = false;
      this.fire();
      this.render();
      this.out.write("\n");
      this.close();
    }
    _(c, key) {
      if (c.toLowerCase() === "y") {
        this.value = true;
        return this.submit();
      }
      if (c.toLowerCase() === "n") {
        this.value = false;
        return this.submit();
      }
      return this.bell();
    }
    render() {
      if (this.closed)
        return;
      if (this.firstRender)
        this.out.write(cursor.hide);
      else
        this.out.write(clear(this.outputText, this.out.columns));
      super.render();
      this.outputText = [
        style.symbol(this.done, this.aborted),
        color.bold(this.msg),
        style.delimiter(this.done),
        this.done ? this.value ? this.yesMsg : this.noMsg : color.gray(this.initialValue ? this.yesOption : this.noOption)
      ].join(" ");
      this.out.write(erase.line + cursor.to(0) + this.outputText);
    }
  }
  module.exports = ConfirmPrompt;
});

// node_modules/prompts/lib/elements/index.js
var require_elements2 = __commonJS((exports, module) => {
  module.exports = {
    TextPrompt: require_text2(),
    SelectPrompt: require_select2(),
    TogglePrompt: require_toggle2(),
    DatePrompt: require_date2(),
    NumberPrompt: require_number2(),
    MultiselectPrompt: require_multiselect2(),
    AutocompletePrompt: require_autocomplete2(),
    AutocompleteMultiselectPrompt: require_autocompleteMultiselect2(),
    ConfirmPrompt: require_confirm2()
  };
});

// node_modules/prompts/lib/prompts.js
var require_prompts2 = __commonJS((exports) => {
  var toPrompt = function(type, args, opts = {}) {
    return new Promise((res, rej) => {
      const p = new el[type](args);
      const onAbort = opts.onAbort || noop;
      const onSubmit = opts.onSubmit || noop;
      const onExit = opts.onExit || noop;
      p.on("state", args.onState || noop);
      p.on("submit", (x) => res(onSubmit(x)));
      p.on("exit", (x) => res(onExit(x)));
      p.on("abort", (x) => rej(onAbort(x)));
    });
  };
  var $2 = exports;
  var el = require_elements2();
  var noop = (v) => v;
  $2.text = (args) => toPrompt("TextPrompt", args);
  $2.password = (args) => {
    args.style = "password";
    return $2.text(args);
  };
  $2.invisible = (args) => {
    args.style = "invisible";
    return $2.text(args);
  };
  $2.number = (args) => toPrompt("NumberPrompt", args);
  $2.date = (args) => toPrompt("DatePrompt", args);
  $2.confirm = (args) => toPrompt("ConfirmPrompt", args);
  $2.list = (args) => {
    const sep = args.separator || ",";
    return toPrompt("TextPrompt", args, {
      onSubmit: (str) => str.split(sep).map((s2) => s2.trim())
    });
  };
  $2.toggle = (args) => toPrompt("TogglePrompt", args);
  $2.select = (args) => toPrompt("SelectPrompt", args);
  $2.multiselect = (args) => {
    args.choices = [].concat(args.choices || []);
    const toSelected = (items) => items.filter((item) => item.selected).map((item) => item.value);
    return toPrompt("MultiselectPrompt", args, {
      onAbort: toSelected,
      onSubmit: toSelected
    });
  };
  $2.autocompleteMultiselect = (args) => {
    args.choices = [].concat(args.choices || []);
    const toSelected = (items) => items.filter((item) => item.selected).map((item) => item.value);
    return toPrompt("AutocompleteMultiselectPrompt", args, {
      onAbort: toSelected,
      onSubmit: toSelected
    });
  };
  var byTitle = (input, choices) => Promise.resolve(choices.filter((item) => item.title.slice(0, input.length).toLowerCase() === input.toLowerCase()));
  $2.autocomplete = (args) => {
    args.suggest = args.suggest || byTitle;
    args.choices = [].concat(args.choices || []);
    return toPrompt("AutocompletePrompt", args);
  };
});

// node_modules/prompts/lib/index.js
var require_lib = __commonJS((exports, module) => {
  async function prompt(questions = [], { onSubmit = noop, onCancel = noop } = {}) {
    const answers = {};
    const override2 = prompt._override || {};
    questions = [].concat(questions);
    let answer, question, quit, name, type, lastPrompt;
    const getFormattedAnswer = async (question2, answer2, skipValidation = false) => {
      if (!skipValidation && question2.validate && question2.validate(answer2) !== true) {
        return;
      }
      return question2.format ? await question2.format(answer2, answers) : answer2;
    };
    for (question of questions) {
      ({ name, type } = question);
      if (typeof type === "function") {
        type = await type(answer, { ...answers }, question);
        question["type"] = type;
      }
      if (!type)
        continue;
      for (let key in question) {
        if (passOn.includes(key))
          continue;
        let value = question[key];
        question[key] = typeof value === "function" ? await value(answer, { ...answers }, lastPrompt) : value;
      }
      lastPrompt = question;
      if (typeof question.message !== "string") {
        throw new Error("prompt message is required");
      }
      ({ name, type } = question);
      if (prompts[type] === undefined) {
        throw new Error(`prompt type (${type}) is not defined`);
      }
      if (override2[question.name] !== undefined) {
        answer = await getFormattedAnswer(question, override2[question.name]);
        if (answer !== undefined) {
          answers[name] = answer;
          continue;
        }
      }
      try {
        answer = prompt._injected ? getInjectedAnswer(prompt._injected, question.initial) : await prompts[type](question);
        answers[name] = answer = await getFormattedAnswer(question, answer, true);
        quit = await onSubmit(question, answer, answers);
      } catch (err) {
        quit = !await onCancel(question, answers);
      }
      if (quit)
        return answers;
    }
    return answers;
  }
  var getInjectedAnswer = function(injected, deafultValue) {
    const answer = injected.shift();
    if (answer instanceof Error) {
      throw answer;
    }
    return answer === undefined ? deafultValue : answer;
  };
  var inject = function(answers) {
    prompt._injected = (prompt._injected || []).concat(answers);
  };
  var override = function(answers) {
    prompt._override = Object.assign({}, answers);
  };
  var prompts = require_prompts2();
  var passOn = ["suggest", "format", "onState", "validate", "onRender", "type"];
  var noop = () => {
  };
  module.exports = Object.assign(prompt, { prompt, prompts, inject, override });
});

// node_modules/prompts/index.js
var require_prompts3 = __commonJS((exports, module) => {
  var isNodeLT = function(tar) {
    tar = (Array.isArray(tar) ? tar : tar.split(".")).map(Number);
    let i2 = 0, src = process.versions.node.split(".").map(Number);
    for (;i2 < tar.length; i2++) {
      if (src[i2] > tar[i2])
        return false;
      if (tar[i2] > src[i2])
        return true;
    }
    return false;
  };
  module.exports = isNodeLT("8.6.0") ? require_dist() : require_lib();
});

// node_modules/node-releases/data/processed/envs.json
var require_envs = __commonJS((exports, module) => {
  module.exports = [{ name: "nodejs", version: "0.2.0", date: "2011-08-26", lts: false, security: false, v8: "2.3.8.0" }, { name: "nodejs", version: "0.3.0", date: "2011-08-26", lts: false, security: false, v8: "2.5.1.0" }, { name: "nodejs", version: "0.4.0", date: "2011-08-26", lts: false, security: false, v8: "3.1.2.0" }, { name: "nodejs", version: "0.5.0", date: "2011-08-26", lts: false, security: false, v8: "3.1.8.25" }, { name: "nodejs", version: "0.6.0", date: "2011-11-04", lts: false, security: false, v8: "3.6.6.6" }, { name: "nodejs", version: "0.7.0", date: "2012-01-17", lts: false, security: false, v8: "3.8.6.0" }, { name: "nodejs", version: "0.8.0", date: "2012-06-22", lts: false, security: false, v8: "3.11.10.10" }, { name: "nodejs", version: "0.9.0", date: "2012-07-20", lts: false, security: false, v8: "3.11.10.15" }, { name: "nodejs", version: "0.10.0", date: "2013-03-11", lts: false, security: false, v8: "3.14.5.8" }, { name: "nodejs", version: "0.11.0", date: "2013-03-28", lts: false, security: false, v8: "3.17.13.0" }, { name: "nodejs", version: "0.12.0", date: "2015-02-06", lts: false, security: false, v8: "3.28.73.0" }, { name: "nodejs", version: "4.0.0", date: "2015-09-08", lts: false, security: false, v8: "4.5.103.30" }, { name: "nodejs", version: "4.1.0", date: "2015-09-17", lts: false, security: false, v8: "4.5.103.33" }, { name: "nodejs", version: "4.2.0", date: "2015-10-12", lts: "Argon", security: false, v8: "4.5.103.35" }, { name: "nodejs", version: "4.3.0", date: "2016-02-09", lts: "Argon", security: false, v8: "4.5.103.35" }, { name: "nodejs", version: "4.4.0", date: "2016-03-08", lts: "Argon", security: false, v8: "4.5.103.35" }, { name: "nodejs", version: "4.5.0", date: "2016-08-16", lts: "Argon", security: false, v8: "4.5.103.37" }, { name: "nodejs", version: "4.6.0", date: "2016-09-27", lts: "Argon", security: true, v8: "4.5.103.37" }, { name: "nodejs", version: "4.7.0", date: "2016-12-06", lts: "Argon", security: false, v8: "4.5.103.43" }, { name: "nodejs", version: "4.8.0", date: "2017-02-21", lts: "Argon", security: false, v8: "4.5.103.45" }, { name: "nodejs", version: "4.9.0", date: "2018-03-28", lts: "Argon", security: true, v8: "4.5.103.53" }, { name: "nodejs", version: "5.0.0", date: "2015-10-29", lts: false, security: false, v8: "4.6.85.28" }, { name: "nodejs", version: "5.1.0", date: "2015-11-17", lts: false, security: false, v8: "4.6.85.31" }, { name: "nodejs", version: "5.2.0", date: "2015-12-09", lts: false, security: false, v8: "4.6.85.31" }, { name: "nodejs", version: "5.3.0", date: "2015-12-15", lts: false, security: false, v8: "4.6.85.31" }, { name: "nodejs", version: "5.4.0", date: "2016-01-06", lts: false, security: false, v8: "4.6.85.31" }, { name: "nodejs", version: "5.5.0", date: "2016-01-21", lts: false, security: false, v8: "4.6.85.31" }, { name: "nodejs", version: "5.6.0", date: "2016-02-09", lts: false, security: false, v8: "4.6.85.31" }, { name: "nodejs", version: "5.7.0", date: "2016-02-23", lts: false, security: false, v8: "4.6.85.31" }, { name: "nodejs", version: "5.8.0", date: "2016-03-09", lts: false, security: false, v8: "4.6.85.31" }, { name: "nodejs", version: "5.9.0", date: "2016-03-16", lts: false, security: false, v8: "4.6.85.31" }, { name: "nodejs", version: "5.10.0", date: "2016-04-01", lts: false, security: false, v8: "4.6.85.31" }, { name: "nodejs", version: "5.11.0", date: "2016-04-21", lts: false, security: false, v8: "4.6.85.31" }, { name: "nodejs", version: "5.12.0", date: "2016-06-23", lts: false, security: false, v8: "4.6.85.32" }, { name: "nodejs", version: "6.0.0", date: "2016-04-26", lts: false, security: false, v8: "5.0.71.35" }, { name: "nodejs", version: "6.1.0", date: "2016-05-05", lts: false, security: false, v8: "5.0.71.35" }, { name: "nodejs", version: "6.2.0", date: "2016-05-17", lts: false, security: false, v8: "5.0.71.47" }, { name: "nodejs", version: "6.3.0", date: "2016-07-06", lts: false, security: false, v8: "5.0.71.52" }, { name: "nodejs", version: "6.4.0", date: "2016-08-12", lts: false, security: false, v8: "5.0.71.60" }, { name: "nodejs", version: "6.5.0", date: "2016-08-26", lts: false, security: false, v8: "5.1.281.81" }, { name: "nodejs", version: "6.6.0", date: "2016-09-14", lts: false, security: false, v8: "5.1.281.83" }, { name: "nodejs", version: "6.7.0", date: "2016-09-27", lts: false, security: true, v8: "5.1.281.83" }, { name: "nodejs", version: "6.8.0", date: "2016-10-12", lts: false, security: false, v8: "5.1.281.84" }, { name: "nodejs", version: "6.9.0", date: "2016-10-18", lts: "Boron", security: false, v8: "5.1.281.84" }, { name: "nodejs", version: "6.10.0", date: "2017-02-21", lts: "Boron", security: false, v8: "5.1.281.93" }, { name: "nodejs", version: "6.11.0", date: "2017-06-06", lts: "Boron", security: false, v8: "5.1.281.102" }, { name: "nodejs", version: "6.12.0", date: "2017-11-06", lts: "Boron", security: false, v8: "5.1.281.108" }, { name: "nodejs", version: "6.13.0", date: "2018-02-10", lts: "Boron", security: false, v8: "5.1.281.111" }, { name: "nodejs", version: "6.14.0", date: "2018-03-28", lts: "Boron", security: true, v8: "5.1.281.111" }, { name: "nodejs", version: "6.15.0", date: "2018-11-27", lts: "Boron", security: true, v8: "5.1.281.111" }, { name: "nodejs", version: "6.16.0", date: "2018-12-26", lts: "Boron", security: false, v8: "5.1.281.111" }, { name: "nodejs", version: "6.17.0", date: "2019-02-28", lts: "Boron", security: true, v8: "5.1.281.111" }, { name: "nodejs", version: "7.0.0", date: "2016-10-25", lts: false, security: false, v8: "5.4.500.36" }, { name: "nodejs", version: "7.1.0", date: "2016-11-08", lts: false, security: false, v8: "5.4.500.36" }, { name: "nodejs", version: "7.2.0", date: "2016-11-22", lts: false, security: false, v8: "5.4.500.43" }, { name: "nodejs", version: "7.3.0", date: "2016-12-20", lts: false, security: false, v8: "5.4.500.45" }, { name: "nodejs", version: "7.4.0", date: "2017-01-04", lts: false, security: false, v8: "5.4.500.45" }, { name: "nodejs", version: "7.5.0", date: "2017-01-31", lts: false, security: false, v8: "5.4.500.48" }, { name: "nodejs", version: "7.6.0", date: "2017-02-21", lts: false, security: false, v8: "5.5.372.40" }, { name: "nodejs", version: "7.7.0", date: "2017-02-28", lts: false, security: false, v8: "5.5.372.41" }, { name: "nodejs", version: "7.8.0", date: "2017-03-29", lts: false, security: false, v8: "5.5.372.43" }, { name: "nodejs", version: "7.9.0", date: "2017-04-11", lts: false, security: false, v8: "5.5.372.43" }, { name: "nodejs", version: "7.10.0", date: "2017-05-02", lts: false, security: false, v8: "5.5.372.43" }, { name: "nodejs", version: "8.0.0", date: "2017-05-30", lts: false, security: false, v8: "5.8.283.41" }, { name: "nodejs", version: "8.1.0", date: "2017-06-08", lts: false, security: false, v8: "5.8.283.41" }, { name: "nodejs", version: "8.2.0", date: "2017-07-19", lts: false, security: false, v8: "5.8.283.41" }, { name: "nodejs", version: "8.3.0", date: "2017-08-08", lts: false, security: false, v8: "6.0.286.52" }, { name: "nodejs", version: "8.4.0", date: "2017-08-15", lts: false, security: false, v8: "6.0.286.52" }, { name: "nodejs", version: "8.5.0", date: "2017-09-12", lts: false, security: false, v8: "6.0.287.53" }, { name: "nodejs", version: "8.6.0", date: "2017-09-26", lts: false, security: false, v8: "6.0.287.53" }, { name: "nodejs", version: "8.7.0", date: "2017-10-11", lts: false, security: false, v8: "6.1.534.42" }, { name: "nodejs", version: "8.8.0", date: "2017-10-24", lts: false, security: false, v8: "6.1.534.42" }, { name: "nodejs", version: "8.9.0", date: "2017-10-31", lts: "Carbon", security: false, v8: "6.1.534.46" }, { name: "nodejs", version: "8.10.0", date: "2018-03-06", lts: "Carbon", security: false, v8: "6.2.414.50" }, { name: "nodejs", version: "8.11.0", date: "2018-03-28", lts: "Carbon", security: true, v8: "6.2.414.50" }, { name: "nodejs", version: "8.12.0", date: "2018-09-10", lts: "Carbon", security: false, v8: "6.2.414.66" }, { name: "nodejs", version: "8.13.0", date: "2018-11-20", lts: "Carbon", security: false, v8: "6.2.414.72" }, { name: "nodejs", version: "8.14.0", date: "2018-11-27", lts: "Carbon", security: true, v8: "6.2.414.72" }, { name: "nodejs", version: "8.15.0", date: "2018-12-26", lts: "Carbon", security: false, v8: "6.2.414.75" }, { name: "nodejs", version: "8.16.0", date: "2019-04-16", lts: "Carbon", security: false, v8: "6.2.414.77" }, { name: "nodejs", version: "8.17.0", date: "2019-12-17", lts: "Carbon", security: true, v8: "6.2.414.78" }, { name: "nodejs", version: "9.0.0", date: "2017-10-31", lts: false, security: false, v8: "6.2.414.32" }, { name: "nodejs", version: "9.1.0", date: "2017-11-07", lts: false, security: false, v8: "6.2.414.32" }, { name: "nodejs", version: "9.2.0", date: "2017-11-14", lts: false, security: false, v8: "6.2.414.44" }, { name: "nodejs", version: "9.3.0", date: "2017-12-12", lts: false, security: false, v8: "6.2.414.46" }, { name: "nodejs", version: "9.4.0", date: "2018-01-10", lts: false, security: false, v8: "6.2.414.46" }, { name: "nodejs", version: "9.5.0", date: "2018-01-31", lts: false, security: false, v8: "6.2.414.46" }, { name: "nodejs", version: "9.6.0", date: "2018-02-21", lts: false, security: false, v8: "6.2.414.46" }, { name: "nodejs", version: "9.7.0", date: "2018-03-01", lts: false, security: false, v8: "6.2.414.46" }, { name: "nodejs", version: "9.8.0", date: "2018-03-07", lts: false, security: false, v8: "6.2.414.46" }, { name: "nodejs", version: "9.9.0", date: "2018-03-21", lts: false, security: false, v8: "6.2.414.46" }, { name: "nodejs", version: "9.10.0", date: "2018-03-28", lts: false, security: true, v8: "6.2.414.46" }, { name: "nodejs", version: "9.11.0", date: "2018-04-04", lts: false, security: false, v8: "6.2.414.46" }, { name: "nodejs", version: "10.0.0", date: "2018-04-24", lts: false, security: false, v8: "6.6.346.24" }, { name: "nodejs", version: "10.1.0", date: "2018-05-08", lts: false, security: false, v8: "6.6.346.27" }, { name: "nodejs", version: "10.2.0", date: "2018-05-23", lts: false, security: false, v8: "6.6.346.32" }, { name: "nodejs", version: "10.3.0", date: "2018-05-29", lts: false, security: false, v8: "6.6.346.32" }, { name: "nodejs", version: "10.4.0", date: "2018-06-06", lts: false, security: false, v8: "6.7.288.43" }, { name: "nodejs", version: "10.5.0", date: "2018-06-20", lts: false, security: false, v8: "6.7.288.46" }, { name: "nodejs", version: "10.6.0", date: "2018-07-04", lts: false, security: false, v8: "6.7.288.46" }, { name: "nodejs", version: "10.7.0", date: "2018-07-18", lts: false, security: false, v8: "6.7.288.49" }, { name: "nodejs", version: "10.8.0", date: "2018-08-01", lts: false, security: false, v8: "6.7.288.49" }, { name: "nodejs", version: "10.9.0", date: "2018-08-15", lts: false, security: false, v8: "6.8.275.24" }, { name: "nodejs", version: "10.10.0", date: "2018-09-06", lts: false, security: false, v8: "6.8.275.30" }, { name: "nodejs", version: "10.11.0", date: "2018-09-19", lts: false, security: false, v8: "6.8.275.32" }, { name: "nodejs", version: "10.12.0", date: "2018-10-10", lts: false, security: false, v8: "6.8.275.32" }, { name: "nodejs", version: "10.13.0", date: "2018-10-30", lts: "Dubnium", security: false, v8: "6.8.275.32" }, { name: "nodejs", version: "10.14.0", date: "2018-11-27", lts: "Dubnium", security: true, v8: "6.8.275.32" }, { name: "nodejs", version: "10.15.0", date: "2018-12-26", lts: "Dubnium", security: false, v8: "6.8.275.32" }, { name: "nodejs", version: "10.16.0", date: "2019-05-28", lts: "Dubnium", security: false, v8: "6.8.275.32" }, { name: "nodejs", version: "10.17.0", date: "2019-10-22", lts: "Dubnium", security: false, v8: "6.8.275.32" }, { name: "nodejs", version: "10.18.0", date: "2019-12-17", lts: "Dubnium", security: true, v8: "6.8.275.32" }, { name: "nodejs", version: "10.19.0", date: "2020-02-05", lts: "Dubnium", security: true, v8: "6.8.275.32" }, { name: "nodejs", version: "10.20.0", date: "2020-03-26", lts: "Dubnium", security: false, v8: "6.8.275.32" }, { name: "nodejs", version: "10.21.0", date: "2020-06-02", lts: "Dubnium", security: true, v8: "6.8.275.32" }, { name: "nodejs", version: "10.22.0", date: "2020-07-21", lts: "Dubnium", security: false, v8: "6.8.275.32" }, { name: "nodejs", version: "10.23.0", date: "2020-10-27", lts: "Dubnium", security: false, v8: "6.8.275.32" }, { name: "nodejs", version: "10.24.0", date: "2021-02-23", lts: "Dubnium", security: true, v8: "6.8.275.32" }, { name: "nodejs", version: "11.0.0", date: "2018-10-23", lts: false, security: false, v8: "7.0.276.28" }, { name: "nodejs", version: "11.1.0", date: "2018-10-30", lts: false, security: false, v8: "7.0.276.32" }, { name: "nodejs", version: "11.2.0", date: "2018-11-15", lts: false, security: false, v8: "7.0.276.38" }, { name: "nodejs", version: "11.3.0", date: "2018-11-27", lts: false, security: true, v8: "7.0.276.38" }, { name: "nodejs", version: "11.4.0", date: "2018-12-07", lts: false, security: false, v8: "7.0.276.38" }, { name: "nodejs", version: "11.5.0", date: "2018-12-18", lts: false, security: false, v8: "7.0.276.38" }, { name: "nodejs", version: "11.6.0", date: "2018-12-26", lts: false, security: false, v8: "7.0.276.38" }, { name: "nodejs", version: "11.7.0", date: "2019-01-17", lts: false, security: false, v8: "7.0.276.38" }, { name: "nodejs", version: "11.8.0", date: "2019-01-24", lts: false, security: false, v8: "7.0.276.38" }, { name: "nodejs", version: "11.9.0", date: "2019-01-30", lts: false, security: false, v8: "7.0.276.38" }, { name: "nodejs", version: "11.10.0", date: "2019-02-14", lts: false, security: false, v8: "7.0.276.38" }, { name: "nodejs", version: "11.11.0", date: "2019-03-05", lts: false, security: false, v8: "7.0.276.38" }, { name: "nodejs", version: "11.12.0", date: "2019-03-14", lts: false, security: false, v8: "7.0.276.38" }, { name: "nodejs", version: "11.13.0", date: "2019-03-28", lts: false, security: false, v8: "7.0.276.38" }, { name: "nodejs", version: "11.14.0", date: "2019-04-10", lts: false, security: false, v8: "7.0.276.38" }, { name: "nodejs", version: "11.15.0", date: "2019-04-30", lts: false, security: false, v8: "7.0.276.38" }, { name: "nodejs", version: "12.0.0", date: "2019-04-23", lts: false, security: false, v8: "7.4.288.21" }, { name: "nodejs", version: "12.1.0", date: "2019-04-29", lts: false, security: false, v8: "7.4.288.21" }, { name: "nodejs", version: "12.2.0", date: "2019-05-07", lts: false, security: false, v8: "7.4.288.21" }, { name: "nodejs", version: "12.3.0", date: "2019-05-21", lts: false, security: false, v8: "7.4.288.27" }, { name: "nodejs", version: "12.4.0", date: "2019-06-04", lts: false, security: false, v8: "7.4.288.27" }, { name: "nodejs", version: "12.5.0", date: "2019-06-26", lts: false, security: false, v8: "7.5.288.22" }, { name: "nodejs", version: "12.6.0", date: "2019-07-03", lts: false, security: false, v8: "7.5.288.22" }, { name: "nodejs", version: "12.7.0", date: "2019-07-23", lts: false, security: false, v8: "7.5.288.22" }, { name: "nodejs", version: "12.8.0", date: "2019-08-06", lts: false, security: false, v8: "7.5.288.22" }, { name: "nodejs", version: "12.9.0", date: "2019-08-20", lts: false, security: false, v8: "7.6.303.29" }, { name: "nodejs", version: "12.10.0", date: "2019-09-04", lts: false, security: false, v8: "7.6.303.29" }, { name: "nodejs", version: "12.11.0", date: "2019-09-25", lts: false, security: false, v8: "7.7.299.11" }, { name: "nodejs", version: "12.12.0", date: "2019-10-11", lts: false, security: false, v8: "7.7.299.13" }, { name: "nodejs", version: "12.13.0", date: "2019-10-21", lts: "Erbium", security: false, v8: "7.7.299.13" }, { name: "nodejs", version: "12.14.0", date: "2019-12-17", lts: "Erbium", security: true, v8: "7.7.299.13" }, { name: "nodejs", version: "12.15.0", date: "2020-02-05", lts: "Erbium", security: true, v8: "7.7.299.13" }, { name: "nodejs", version: "12.16.0", date: "2020-02-11", lts: "Erbium", security: false, v8: "7.8.279.23" }, { name: "nodejs", version: "12.17.0", date: "2020-05-26", lts: "Erbium", security: false, v8: "7.8.279.23" }, { name: "nodejs", version: "12.18.0", date: "2020-06-02", lts: "Erbium", security: true, v8: "7.8.279.23" }, { name: "nodejs", version: "12.19.0", date: "2020-10-06", lts: "Erbium", security: false, v8: "7.8.279.23" }, { name: "nodejs", version: "12.20.0", date: "2020-11-24", lts: "Erbium", security: false, v8: "7.8.279.23" }, { name: "nodejs", version: "12.21.0", date: "2021-02-23", lts: "Erbium", security: true, v8: "7.8.279.23" }, { name: "nodejs", version: "12.22.0", date: "2021-03-30", lts: "Erbium", security: false, v8: "7.8.279.23" }, { name: "nodejs", version: "13.0.0", date: "2019-10-22", lts: false, security: false, v8: "7.8.279.17" }, { name: "nodejs", version: "13.1.0", date: "2019-11-05", lts: false, security: false, v8: "7.8.279.17" }, { name: "nodejs", version: "13.2.0", date: "2019-11-21", lts: false, security: false, v8: "7.9.317.23" }, { name: "nodejs", version: "13.3.0", date: "2019-12-03", lts: false, security: false, v8: "7.9.317.25" }, { name: "nodejs", version: "13.4.0", date: "2019-12-17", lts: false, security: true, v8: "7.9.317.25" }, { name: "nodejs", version: "13.5.0", date: "2019-12-18", lts: false, security: false, v8: "7.9.317.25" }, { name: "nodejs", version: "13.6.0", date: "2020-01-07", lts: false, security: false, v8: "7.9.317.25" }, { name: "nodejs", version: "13.7.0", date: "2020-01-21", lts: false, security: false, v8: "7.9.317.25" }, { name: "nodejs", version: "13.8.0", date: "2020-02-05", lts: false, security: true, v8: "7.9.317.25" }, { name: "nodejs", version: "13.9.0", date: "2020-02-18", lts: false, security: false, v8: "7.9.317.25" }, { name: "nodejs", version: "13.10.0", date: "2020-03-04", lts: false, security: false, v8: "7.9.317.25" }, { name: "nodejs", version: "13.11.0", date: "2020-03-12", lts: false, security: false, v8: "7.9.317.25" }, { name: "nodejs", version: "13.12.0", date: "2020-03-26", lts: false, security: false, v8: "7.9.317.25" }, { name: "nodejs", version: "13.13.0", date: "2020-04-14", lts: false, security: false, v8: "7.9.317.25" }, { name: "nodejs", version: "13.14.0", date: "2020-04-29", lts: false, security: false, v8: "7.9.317.25" }, { name: "nodejs", version: "14.0.0", date: "2020-04-21", lts: false, security: false, v8: "8.1.307.30" }, { name: "nodejs", version: "14.1.0", date: "2020-04-29", lts: false, security: false, v8: "8.1.307.31" }, { name: "nodejs", version: "14.2.0", date: "2020-05-05", lts: false, security: false, v8: "8.1.307.31" }, { name: "nodejs", version: "14.3.0", date: "2020-05-19", lts: false, security: false, v8: "8.1.307.31" }, { name: "nodejs", version: "14.4.0", date: "2020-06-02", lts: false, security: true, v8: "8.1.307.31" }, { name: "nodejs", version: "14.5.0", date: "2020-06-30", lts: false, security: false, v8: "8.3.110.9" }, { name: "nodejs", version: "14.6.0", date: "2020-07-20", lts: false, security: false, v8: "8.4.371.19" }, { name: "nodejs", version: "14.7.0", date: "2020-07-29", lts: false, security: false, v8: "8.4.371.19" }, { name: "nodejs", version: "14.8.0", date: "2020-08-11", lts: false, security: false, v8: "8.4.371.19" }, { name: "nodejs", version: "14.9.0", date: "2020-08-27", lts: false, security: false, v8: "8.4.371.19" }, { name: "nodejs", version: "14.10.0", date: "2020-09-08", lts: false, security: false, v8: "8.4.371.19" }, { name: "nodejs", version: "14.11.0", date: "2020-09-15", lts: false, security: true, v8: "8.4.371.19" }, { name: "nodejs", version: "14.12.0", date: "2020-09-22", lts: false, security: false, v8: "8.4.371.19" }, { name: "nodejs", version: "14.13.0", date: "2020-09-29", lts: false, security: false, v8: "8.4.371.19" }, { name: "nodejs", version: "14.14.0", date: "2020-10-15", lts: false, security: false, v8: "8.4.371.19" }, { name: "nodejs", version: "14.15.0", date: "2020-10-27", lts: "Fermium", security: false, v8: "8.4.371.19" }, { name: "nodejs", version: "14.16.0", date: "2021-02-23", lts: "Fermium", security: true, v8: "8.4.371.19" }, { name: "nodejs", version: "14.17.0", date: "2021-05-11", lts: "Fermium", security: false, v8: "8.4.371.23" }, { name: "nodejs", version: "14.18.0", date: "2021-09-28", lts: "Fermium", security: false, v8: "8.4.371.23" }, { name: "nodejs", version: "14.19.0", date: "2022-02-01", lts: "Fermium", security: false, v8: "8.4.371.23" }, { name: "nodejs", version: "14.20.0", date: "2022-07-07", lts: "Fermium", security: true, v8: "8.4.371.23" }, { name: "nodejs", version: "14.21.0", date: "2022-11-01", lts: "Fermium", security: false, v8: "8.4.371.23" }, { name: "nodejs", version: "15.0.0", date: "2020-10-20", lts: false, security: false, v8: "8.6.395.16" }, { name: "nodejs", version: "15.1.0", date: "2020-11-04", lts: false, security: false, v8: "8.6.395.17" }, { name: "nodejs", version: "15.2.0", date: "2020-11-10", lts: false, security: false, v8: "8.6.395.17" }, { name: "nodejs", version: "15.3.0", date: "2020-11-24", lts: false, security: false, v8: "8.6.395.17" }, { name: "nodejs", version: "15.4.0", date: "2020-12-09", lts: false, security: false, v8: "8.6.395.17" }, { name: "nodejs", version: "15.5.0", date: "2020-12-22", lts: false, security: false, v8: "8.6.395.17" }, { name: "nodejs", version: "15.6.0", date: "2021-01-14", lts: false, security: false, v8: "8.6.395.17" }, { name: "nodejs", version: "15.7.0", date: "2021-01-25", lts: false, security: false, v8: "8.6.395.17" }, { name: "nodejs", version: "15.8.0", date: "2021-02-02", lts: false, security: false, v8: "8.6.395.17" }, { name: "nodejs", version: "15.9.0", date: "2021-02-18", lts: false, security: false, v8: "8.6.395.17" }, { name: "nodejs", version: "15.10.0", date: "2021-02-23", lts: false, security: true, v8: "8.6.395.17" }, { name: "nodejs", version: "15.11.0", date: "2021-03-03", lts: false, security: false, v8: "8.6.395.17" }, { name: "nodejs", version: "15.12.0", date: "2021-03-17", lts: false, security: false, v8: "8.6.395.17" }, { name: "nodejs", version: "15.13.0", date: "2021-03-31", lts: false, security: false, v8: "8.6.395.17" }, { name: "nodejs", version: "15.14.0", date: "2021-04-06", lts: false, security: false, v8: "8.6.395.17" }, { name: "nodejs", version: "16.0.0", date: "2021-04-20", lts: false, security: false, v8: "9.0.257.17" }, { name: "nodejs", version: "16.1.0", date: "2021-05-04", lts: false, security: false, v8: "9.0.257.24" }, { name: "nodejs", version: "16.2.0", date: "2021-05-19", lts: false, security: false, v8: "9.0.257.25" }, { name: "nodejs", version: "16.3.0", date: "2021-06-03", lts: false, security: false, v8: "9.0.257.25" }, { name: "nodejs", version: "16.4.0", date: "2021-06-23", lts: false, security: false, v8: "9.1.269.36" }, { name: "nodejs", version: "16.5.0", date: "2021-07-14", lts: false, security: false, v8: "9.1.269.38" }, { name: "nodejs", version: "16.6.0", date: "2021-07-29", lts: false, security: true, v8: "9.2.230.21" }, { name: "nodejs", version: "16.7.0", date: "2021-08-18", lts: false, security: false, v8: "9.2.230.21" }, { name: "nodejs", version: "16.8.0", date: "2021-08-25", lts: false, security: false, v8: "9.2.230.21" }, { name: "nodejs", version: "16.9.0", date: "2021-09-07", lts: false, security: false, v8: "9.3.345.16" }, { name: "nodejs", version: "16.10.0", date: "2021-09-22", lts: false, security: false, v8: "9.3.345.19" }, { name: "nodejs", version: "16.11.0", date: "2021-10-08", lts: false, security: false, v8: "9.4.146.19" }, { name: "nodejs", version: "16.12.0", date: "2021-10-20", lts: false, security: false, v8: "9.4.146.19" }, { name: "nodejs", version: "16.13.0", date: "2021-10-26", lts: "Gallium", security: false, v8: "9.4.146.19" }, { name: "nodejs", version: "16.14.0", date: "2022-02-08", lts: "Gallium", security: false, v8: "9.4.146.24" }, { name: "nodejs", version: "16.15.0", date: "2022-04-26", lts: "Gallium", security: false, v8: "9.4.146.24" }, { name: "nodejs", version: "16.16.0", date: "2022-07-07", lts: "Gallium", security: true, v8: "9.4.146.24" }, { name: "nodejs", version: "16.17.0", date: "2022-08-16", lts: "Gallium", security: false, v8: "9.4.146.26" }, { name: "nodejs", version: "16.18.0", date: "2022-10-12", lts: "Gallium", security: false, v8: "9.4.146.26" }, { name: "nodejs", version: "16.19.0", date: "2022-12-13", lts: "Gallium", security: false, v8: "9.4.146.26" }, { name: "nodejs", version: "16.20.0", date: "2023-03-28", lts: "Gallium", security: false, v8: "9.4.146.26" }, { name: "nodejs", version: "17.0.0", date: "2021-10-19", lts: false, security: false, v8: "9.5.172.21" }, { name: "nodejs", version: "17.1.0", date: "2021-11-09", lts: false, security: false, v8: "9.5.172.25" }, { name: "nodejs", version: "17.2.0", date: "2021-11-30", lts: false, security: false, v8: "9.6.180.14" }, { name: "nodejs", version: "17.3.0", date: "2021-12-17", lts: false, security: false, v8: "9.6.180.15" }, { name: "nodejs", version: "17.4.0", date: "2022-01-18", lts: false, security: false, v8: "9.6.180.15" }, { name: "nodejs", version: "17.5.0", date: "2022-02-10", lts: false, security: false, v8: "9.6.180.15" }, { name: "nodejs", version: "17.6.0", date: "2022-02-22", lts: false, security: false, v8: "9.6.180.15" }, { name: "nodejs", version: "17.7.0", date: "2022-03-09", lts: false, security: false, v8: "9.6.180.15" }, { name: "nodejs", version: "17.8.0", date: "2022-03-22", lts: false, security: false, v8: "9.6.180.15" }, { name: "nodejs", version: "17.9.0", date: "2022-04-07", lts: false, security: false, v8: "9.6.180.15" }, { name: "nodejs", version: "18.0.0", date: "2022-04-18", lts: false, security: false, v8: "10.1.124.8" }, { name: "nodejs", version: "18.1.0", date: "2022-05-03", lts: false, security: false, v8: "10.1.124.8" }, { name: "nodejs", version: "18.2.0", date: "2022-05-17", lts: false, security: false, v8: "10.1.124.8" }, { name: "nodejs", version: "18.3.0", date: "2022-06-02", lts: false, security: false, v8: "10.2.154.4" }, { name: "nodejs", version: "18.4.0", date: "2022-06-16", lts: false, security: false, v8: "10.2.154.4" }, { name: "nodejs", version: "18.5.0", date: "2022-07-06", lts: false, security: true, v8: "10.2.154.4" }, { name: "nodejs", version: "18.6.0", date: "2022-07-13", lts: false, security: false, v8: "10.2.154.13" }, { name: "nodejs", version: "18.7.0", date: "2022-07-26", lts: false, security: false, v8: "10.2.154.13" }, { name: "nodejs", version: "18.8.0", date: "2022-08-24", lts: false, security: false, v8: "10.2.154.13" }, { name: "nodejs", version: "18.9.0", date: "2022-09-07", lts: false, security: false, v8: "10.2.154.15" }, { name: "nodejs", version: "18.10.0", date: "2022-09-28", lts: false, security: false, v8: "10.2.154.15" }, { name: "nodejs", version: "18.11.0", date: "2022-10-13", lts: false, security: false, v8: "10.2.154.15" }, { name: "nodejs", version: "18.12.0", date: "2022-10-25", lts: "Hydrogen", security: false, v8: "10.2.154.15" }, { name: "nodejs", version: "18.13.0", date: "2023-01-05", lts: "Hydrogen", security: false, v8: "10.2.154.23" }, { name: "nodejs", version: "18.14.0", date: "2023-02-01", lts: "Hydrogen", security: false, v8: "10.2.154.23" }, { name: "nodejs", version: "18.15.0", date: "2023-03-05", lts: "Hydrogen", security: false, v8: "10.2.154.26" }, { name: "nodejs", version: "18.16.0", date: "2023-04-12", lts: "Hydrogen", security: false, v8: "10.2.154.26" }, { name: "nodejs", version: "18.17.0", date: "2023-07-18", lts: "Hydrogen", security: false, v8: "10.2.154.26" }, { name: "nodejs", version: "18.18.0", date: "2023-09-18", lts: "Hydrogen", security: false, v8: "10.2.154.26" }, { name: "nodejs", version: "18.19.0", date: "2023-11-29", lts: "Hydrogen", security: false, v8: "10.2.154.26" }, { name: "nodejs", version: "19.0.0", date: "2022-10-17", lts: false, security: false, v8: "10.7.193.13" }, { name: "nodejs", version: "19.1.0", date: "2022-11-14", lts: false, security: false, v8: "10.7.193.20" }, { name: "nodejs", version: "19.2.0", date: "2022-11-29", lts: false, security: false, v8: "10.8.168.20" }, { name: "nodejs", version: "19.3.0", date: "2022-12-14", lts: false, security: false, v8: "10.8.168.21" }, { name: "nodejs", version: "19.4.0", date: "2023-01-05", lts: false, security: false, v8: "10.8.168.25" }, { name: "nodejs", version: "19.5.0", date: "2023-01-24", lts: false, security: false, v8: "10.8.168.25" }, { name: "nodejs", version: "19.6.0", date: "2023-02-01", lts: false, security: false, v8: "10.8.168.25" }, { name: "nodejs", version: "19.7.0", date: "2023-02-21", lts: false, security: false, v8: "10.8.168.25" }, { name: "nodejs", version: "19.8.0", date: "2023-03-14", lts: false, security: false, v8: "10.8.168.25" }, { name: "nodejs", version: "19.9.0", date: "2023-04-10", lts: false, security: false, v8: "10.8.168.25" }, { name: "nodejs", version: "20.0.0", date: "2023-04-17", lts: false, security: false, v8: "11.3.244.4" }, { name: "nodejs", version: "20.1.0", date: "2023-05-03", lts: false, security: false, v8: "11.3.244.8" }, { name: "nodejs", version: "20.2.0", date: "2023-05-16", lts: false, security: false, v8: "11.3.244.8" }, { name: "nodejs", version: "20.3.0", date: "2023-06-08", lts: false, security: false, v8: "11.3.244.8" }, { name: "nodejs", version: "20.4.0", date: "2023-07-04", lts: false, security: false, v8: "11.3.244.8" }, { name: "nodejs", version: "20.5.0", date: "2023-07-19", lts: false, security: false, v8: "11.3.244.8" }, { name: "nodejs", version: "20.6.0", date: "2023-08-23", lts: false, security: false, v8: "11.3.244.8" }, { name: "nodejs", version: "20.7.0", date: "2023-09-18", lts: false, security: false, v8: "11.3.244.8" }, { name: "nodejs", version: "20.8.0", date: "2023-09-28", lts: false, security: false, v8: "11.3.244.8" }, { name: "nodejs", version: "20.9.0", date: "2023-10-24", lts: "Iron", security: false, v8: "11.3.244.8" }, { name: "nodejs", version: "20.10.0", date: "2023-11-22", lts: "Iron", security: false, v8: "11.3.244.8" }, { name: "nodejs", version: "21.0.0", date: "2023-10-17", lts: false, security: false, v8: "11.8.172.13" }, { name: "nodejs", version: "21.1.0", date: "2023-10-24", lts: false, security: false, v8: "11.8.172.15" }, { name: "nodejs", version: "21.2.0", date: "2023-11-14", lts: false, security: false, v8: "11.8.172.17" }, { name: "nodejs", version: "21.3.0", date: "2023-11-30", lts: false, security: false, v8: "11.8.172.17" }];
});

// node_modules/caniuse-lite/data/browsers.js
var require_browsers = __commonJS((exports, module) => {
  module.exports = { A: "ie", B: "edge", C: "firefox", D: "chrome", E: "safari", F: "opera", G: "ios_saf", H: "op_mini", I: "android", J: "bb", K: "op_mob", L: "and_chr", M: "and_ff", N: "ie_mob", O: "and_uc", P: "samsung", Q: "and_qq", R: "baidu", S: "kaios" };
});

// node_modules/caniuse-lite/dist/unpacker/browsers.js
var require_browsers2 = __commonJS((exports, module) => {
  exports.browsers = require_browsers();
});

// node_modules/caniuse-lite/data/browserVersions.js
var require_browserVersions = __commonJS((exports, module) => {
  module.exports = { "0": "112", "1": "113", "2": "114", "3": "115", "4": "116", "5": "117", "6": "118", "7": "119", "8": "120", "9": "5", A: "10", B: "11", C: "12", D: "7", E: "8", F: "9", G: "15", H: "121", I: "4", J: "6", K: "13", L: "14", M: "16", N: "17", O: "18", P: "79", Q: "80", R: "81", S: "83", T: "84", U: "85", V: "86", W: "87", X: "88", Y: "89", Z: "90", a: "91", b: "92", c: "93", d: "94", e: "95", f: "96", g: "97", h: "98", i: "99", j: "100", k: "101", l: "102", m: "103", n: "104", o: "105", p: "106", q: "20", r: "21", s: "22", t: "23", u: "73", v: "107", w: "108", x: "109", y: "110", z: "111", AB: "19", BB: "24", CB: "25", DB: "26", EB: "27", FB: "28", GB: "29", HB: "30", IB: "31", JB: "32", KB: "33", LB: "34", MB: "35", NB: "36", OB: "37", PB: "38", QB: "39", RB: "40", SB: "41", TB: "42", UB: "43", VB: "44", WB: "45", XB: "46", YB: "47", ZB: "48", aB: "49", bB: "50", cB: "51", dB: "52", eB: "53", fB: "54", gB: "55", hB: "56", iB: "57", jB: "58", kB: "60", lB: "62", mB: "63", nB: "64", oB: "65", pB: "66", qB: "67", rB: "68", sB: "69", tB: "70", uB: "71", vB: "72", wB: "74", xB: "75", yB: "76", zB: "77", "0B": "78", "1B": "122", "2B": "11.1", "3B": "12.1", "4B": "15.5", "5B": "16.0", "6B": "17.0", "7B": "3", "8B": "59", "9B": "61", AC: "82", BC: "123", CC: "124", DC: "125", EC: "3.2", FC: "10.1", GC: "13.1", HC: "15.2-15.3", IC: "15.4", JC: "16.1", KC: "16.2", LC: "16.3", MC: "16.4", NC: "16.5", OC: "17.1", PC: "17.2", QC: "17.3", RC: "17.4", SC: "11.5", TC: "4.2-4.3", UC: "5.5", VC: "2", WC: "126", XC: "3.5", YC: "3.6", ZC: "3.1", aC: "5.1", bC: "6.1", cC: "7.1", dC: "9.1", eC: "14.1", fC: "15.1", gC: "15.6", hC: "16.6", iC: "TP", jC: "9.5-9.6", kC: "10.0-10.1", lC: "10.5", mC: "10.6", nC: "11.6", oC: "4.0-4.1", pC: "5.0-5.1", qC: "6.0-6.1", rC: "7.0-7.1", sC: "8.1-8.4", tC: "9.0-9.2", uC: "9.3", vC: "10.0-10.2", wC: "10.3", xC: "11.0-11.2", yC: "11.3-11.4", zC: "12.0-12.1", "0C": "12.2-12.5", "1C": "13.0-13.1", "2C": "13.2", "3C": "13.3", "4C": "13.4-13.7", "5C": "14.0-14.4", "6C": "14.5-14.8", "7C": "15.0-15.1", "8C": "15.6-15.8", "9C": "16.6-16.7", AD: "all", BD: "2.1", CD: "2.2", DD: "2.3", ED: "4.1", FD: "4.4", GD: "4.4.3-4.4.4", HD: "5.0-5.4", ID: "6.2-6.4", JD: "7.2-7.4", KD: "8.2", LD: "9.2", MD: "11.1-11.2", ND: "12.0", OD: "13.0", PD: "14.0", QD: "15.0", RD: "18.0", SD: "19.0", TD: "13.18", UD: "2.5", VD: "3.0-3.1" };
});

// node_modules/caniuse-lite/dist/unpacker/browserVersions.js
var require_browserVersions2 = __commonJS((exports, module) => {
  exports.browserVersions = require_browserVersions();
});

// node_modules/caniuse-lite/data/agents.js
var require_agents = __commonJS((exports, module) => {
  module.exports = { A: { A: { J: 0, D: 0, E: 0.0130265, F: 0.0390796, A: 0, B: 0.442902, UC: 0 }, B: "ms", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "UC", "J", "D", "E", "F", "A", "B", "", "", ""], E: "IE", F: { UC: 962323200, J: 998870400, D: 1161129600, E: 1237420800, F: 1300060800, A: 1346716800, B: 1381968000 } }, B: { A: { "0": 0.007984, "1": 0.015968, "2": 0.015968, "3": 0.011976, "4": 0.015968, "5": 0.015968, "6": 0.035928, "7": 0.267464, "8": 3.72853, C: 0, K: 0, L: 0, G: 0.003992, M: 0, N: 0.003992, O: 0.011976, P: 0, Q: 0, R: 0, S: 0, T: 0, U: 0, V: 0, W: 0.35928, X: 0, Y: 0, Z: 0, a: 0, b: 0.011976, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0.015968, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0.003992, v: 0.007984, w: 0.011976, x: 0.067864, y: 0.007984, z: 0.007984, H: 0.522952 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "C", "K", "L", "G", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "H", "", "", ""], E: "Edge", F: { "0": 1680825600, "1": 1683158400, "2": 1685664000, "3": 1689897600, "4": 1692576000, "5": 1694649600, "6": 1697155200, "7": 1698969600, "8": 1701993600, C: 1438128000, K: 1447286400, L: 1470096000, G: 1491868800, M: 1508198400, N: 1525046400, O: 1542067200, P: 1579046400, Q: 1581033600, R: 1586736000, S: 1590019200, T: 1594857600, U: 1598486400, V: 1602201600, W: 1605830400, X: 1611360000, Y: 1614816000, Z: 1618358400, a: 1622073600, b: 1626912000, c: 1630627200, d: 1632441600, e: 1634774400, f: 1637539200, g: 1641427200, h: 1643932800, i: 1646265600, j: 1649635200, k: 1651190400, l: 1653955200, m: 1655942400, n: 1659657600, o: 1661990400, p: 1664755200, v: 1666915200, w: 1670198400, x: 1673481600, y: 1675900800, z: 1678665600, H: 1706227200 }, D: { C: "ms", K: "ms", L: "ms", G: "ms", M: "ms", N: "ms", O: "ms" } }, C: { A: { "0": 0.003992, "1": 0.007984, "2": 0.011976, "3": 0.467064, "4": 0.003992, "5": 0.007984, "6": 0.087824, "7": 0.227544, "8": 0.231536, "9": 0, VC: 0, "7B": 0, I: 0.003992, J: 0, D: 0, E: 0, F: 0, A: 0, B: 0.027944, C: 0.03992, K: 0, L: 0, G: 0, M: 0, N: 0, O: 0, AB: 0, q: 0, r: 0, s: 0, t: 0, BB: 0, CB: 0, DB: 0, EB: 0, FB: 0, GB: 0, HB: 0, IB: 0, JB: 0, KB: 0, LB: 0, MB: 0, NB: 0, OB: 0, PB: 0, QB: 0, RB: 0, SB: 0, TB: 0, UB: 0.007984, VB: 0.007984, WB: 0.003992, XB: 0, YB: 0, ZB: 0, aB: 0, bB: 0.003992, cB: 0, dB: 0.055888, eB: 0.007984, fB: 0.007984, gB: 0.007984, hB: 0.01996, iB: 0, jB: 0, "8B": 0.003992, kB: 0, "9B": 0, lB: 0, mB: 0, nB: 0, oB: 0, pB: 0, qB: 0, rB: 0, sB: 0, tB: 0, uB: 0, vB: 0.003992, u: 0, wB: 0, xB: 0, yB: 0, zB: 0, "0B": 0.015968, P: 0, Q: 0, R: 0, AC: 0, S: 0, T: 0, U: 0, V: 0, W: 0, X: 0.007984, Y: 0, Z: 0, a: 0.011976, b: 0, c: 0, d: 0.007984, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0.011976, l: 0.027944, m: 0.031936, n: 0.003992, o: 0.003992, p: 0, v: 0.003992, w: 0.007984, x: 0.007984, y: 0.003992, z: 0.003992, H: 1.2455, "1B": 0.275448, BC: 0, CC: 0, DC: 0, WC: 0, XC: 0, YC: 0 }, B: "moz", C: ["VC", "7B", "XC", "YC", "I", "9", "J", "D", "E", "F", "A", "B", "C", "K", "L", "G", "M", "N", "O", "AB", "q", "r", "s", "t", "BB", "CB", "DB", "EB", "FB", "GB", "HB", "IB", "JB", "KB", "LB", "MB", "NB", "OB", "PB", "QB", "RB", "SB", "TB", "UB", "VB", "WB", "XB", "YB", "ZB", "aB", "bB", "cB", "dB", "eB", "fB", "gB", "hB", "iB", "jB", "8B", "kB", "9B", "lB", "mB", "nB", "oB", "pB", "qB", "rB", "sB", "tB", "uB", "vB", "u", "wB", "xB", "yB", "zB", "0B", "P", "Q", "R", "AC", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "H", "1B", "BC", "CC", "DC", "WC"], E: "Firefox", F: { "0": 1681171200, "1": 1683590400, "2": 1686009600, "3": 1688428800, "4": 1690848000, "5": 1693267200, "6": 1695686400, "7": 1698105600, "8": 1700524800, "9": 1308614400, VC: 1161648000, "7B": 1213660800, XC: 1246320000, YC: 1264032000, I: 1300752000, J: 1313452800, D: 1317081600, E: 1317081600, F: 1320710400, A: 1324339200, B: 1327968000, C: 1331596800, K: 1335225600, L: 1338854400, G: 1342483200, M: 1346112000, N: 1349740800, O: 1353628800, AB: 1357603200, q: 1361232000, r: 1364860800, s: 1368489600, t: 1372118400, BB: 1375747200, CB: 1379376000, DB: 1386633600, EB: 1391472000, FB: 1395100800, GB: 1398729600, HB: 1402358400, IB: 1405987200, JB: 1409616000, KB: 1413244800, LB: 1417392000, MB: 1421107200, NB: 1424736000, OB: 1428278400, PB: 1431475200, QB: 1435881600, RB: 1439251200, SB: 1442880000, TB: 1446508800, UB: 1450137600, VB: 1453852800, WB: 1457395200, XB: 1461628800, YB: 1465257600, ZB: 1470096000, aB: 1474329600, bB: 1479168000, cB: 1485216000, dB: 1488844800, eB: 1492560000, fB: 1497312000, gB: 1502150400, hB: 1506556800, iB: 1510617600, jB: 1516665600, "8B": 1520985600, kB: 1525824000, "9B": 1529971200, lB: 1536105600, mB: 1540252800, nB: 1544486400, oB: 1548720000, pB: 1552953600, qB: 1558396800, rB: 1562630400, sB: 1567468800, tB: 1571788800, uB: 1575331200, vB: 1578355200, u: 1581379200, wB: 1583798400, xB: 1586304000, yB: 1588636800, zB: 1591056000, "0B": 1593475200, P: 1595894400, Q: 1598313600, R: 1600732800, AC: 1603152000, S: 1605571200, T: 1607990400, U: 1611619200, V: 1614038400, W: 1616457600, X: 1618790400, Y: 1622505600, Z: 1626134400, a: 1628553600, b: 1630972800, c: 1633392000, d: 1635811200, e: 1638835200, f: 1641859200, g: 1644364800, h: 1646697600, i: 1649116800, j: 1651536000, k: 1653955200, l: 1656374400, m: 1658793600, n: 1661212800, o: 1663632000, p: 1666051200, v: 1668470400, w: 1670889600, x: 1673913600, y: 1676332800, z: 1678752000, H: 1702944000, "1B": 1705968000, BC: 1708387200, CC: null, DC: null, WC: null } }, D: { A: { "0": 0.075848, "1": 0.15968, "2": 0.115768, "3": 0.07984, "4": 0.263472, "5": 0.195608, "6": 0.467064, "7": 2.4471, "8": 15.8562, "9": 0, I: 0, J: 0, D: 0, E: 0, F: 0, A: 0, B: 0, C: 0, K: 0, L: 0, G: 0, M: 0, N: 0, O: 0, AB: 0, q: 0, r: 0, s: 0, t: 0, BB: 0, CB: 0, DB: 0, EB: 0, FB: 0, GB: 0, HB: 0, IB: 0, JB: 0, KB: 0, LB: 0.003992, MB: 0, NB: 0, OB: 0, PB: 0.015968, QB: 0, RB: 0, SB: 0, TB: 0, UB: 0, VB: 0, WB: 0.007984, XB: 0, YB: 0.003992, ZB: 0.031936, aB: 0.027944, bB: 0.007984, cB: 0, dB: 0, eB: 0.007984, fB: 0.007984, gB: 0.007984, hB: 0.015968, iB: 0.007984, jB: 0, "8B": 0, kB: 0.015968, "9B": 0.003992, lB: 0, mB: 0.003992, nB: 0, oB: 0.003992, pB: 0.027944, qB: 0.007984, rB: 0, sB: 0.035928, tB: 0.023952, uB: 0.007984, vB: 0.003992, u: 0.011976, wB: 0.007984, xB: 0.007984, yB: 0.007984, zB: 0.011976, "0B": 0.015968, P: 0.11976, Q: 0.015968, R: 0.031936, S: 0.043912, T: 0.007984, U: 0.023952, V: 0.03992, W: 0.083832, X: 0.01996, Y: 0.015968, Z: 0.01996, a: 0.05988, b: 0.027944, c: 0.051896, d: 0.047904, e: 0.011976, f: 0.015968, g: 0.015968, h: 0.067864, i: 0.035928, j: 0.031936, k: 0.043912, l: 0.031936, m: 0.143712, n: 0.063872, o: 0.03992, p: 0.051896, v: 0.043912, w: 0.075848, x: 1.6447, y: 0.055888, z: 0.071856, H: 1.11776, "1B": 0.015968, BC: 0, CC: 0, DC: 0 }, B: "webkit", C: ["", "", "", "", "", "", "I", "9", "J", "D", "E", "F", "A", "B", "C", "K", "L", "G", "M", "N", "O", "AB", "q", "r", "s", "t", "BB", "CB", "DB", "EB", "FB", "GB", "HB", "IB", "JB", "KB", "LB", "MB", "NB", "OB", "PB", "QB", "RB", "SB", "TB", "UB", "VB", "WB", "XB", "YB", "ZB", "aB", "bB", "cB", "dB", "eB", "fB", "gB", "hB", "iB", "jB", "8B", "kB", "9B", "lB", "mB", "nB", "oB", "pB", "qB", "rB", "sB", "tB", "uB", "vB", "u", "wB", "xB", "yB", "zB", "0B", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "H", "1B", "BC", "CC", "DC"], E: "Chrome", F: { "0": 1680566400, "1": 1682985600, "2": 1685404800, "3": 1689724800, "4": 1692057600, "5": 1694476800, "6": 1696896000, "7": 1698710400, "8": 1701993600, "9": 1274745600, I: 1264377600, J: 1283385600, D: 1287619200, E: 1291248000, F: 1296777600, A: 1299542400, B: 1303862400, C: 1307404800, K: 1312243200, L: 1316131200, G: 1316131200, M: 1319500800, N: 1323734400, O: 1328659200, AB: 1332892800, q: 1337040000, r: 1340668800, s: 1343692800, t: 1348531200, BB: 1352246400, CB: 1357862400, DB: 1361404800, EB: 1364428800, FB: 1369094400, GB: 1374105600, HB: 1376956800, IB: 1384214400, JB: 1389657600, KB: 1392940800, LB: 1397001600, MB: 1400544000, NB: 1405468800, OB: 1409011200, PB: 1412640000, QB: 1416268800, RB: 1421798400, SB: 1425513600, TB: 1429401600, UB: 1432080000, VB: 1437523200, WB: 1441152000, XB: 1444780800, YB: 1449014400, ZB: 1453248000, aB: 1456963200, bB: 1460592000, cB: 1464134400, dB: 1469059200, eB: 1472601600, fB: 1476230400, gB: 1480550400, hB: 1485302400, iB: 1489017600, jB: 1492560000, "8B": 1496707200, kB: 1500940800, "9B": 1504569600, lB: 1508198400, mB: 1512518400, nB: 1516752000, oB: 1520294400, pB: 1523923200, qB: 1527552000, rB: 1532390400, sB: 1536019200, tB: 1539648000, uB: 1543968000, vB: 1548720000, u: 1552348800, wB: 1555977600, xB: 1559606400, yB: 1564444800, zB: 1568073600, "0B": 1571702400, P: 1575936000, Q: 1580860800, R: 1586304000, S: 1589846400, T: 1594684800, U: 1598313600, V: 1601942400, W: 1605571200, X: 1611014400, Y: 1614556800, Z: 1618272000, a: 1621987200, b: 1626739200, c: 1630368000, d: 1632268800, e: 1634601600, f: 1637020800, g: 1641340800, h: 1643673600, i: 1646092800, j: 1648512000, k: 1650931200, l: 1653350400, m: 1655769600, n: 1659398400, o: 1661817600, p: 1664236800, v: 1666656000, w: 1669680000, x: 1673308800, y: 1675728000, z: 1678147200, H: 1705968000, "1B": 1708387200, BC: null, CC: null, DC: null } }, E: { A: { "9": 0, I: 0, J: 0, D: 0, E: 0, F: 0.003992, A: 0, B: 0, C: 0, K: 0.007984, L: 0.03992, G: 0.007984, ZC: 0, EC: 0, aC: 0.003992, bC: 0, cC: 0, dC: 0.011976, FC: 0, "2B": 0.015968, "3B": 0.015968, GC: 0.071856, eC: 0.111776, fC: 0.031936, HC: 0.011976, IC: 0.031936, "4B": 0.043912, gC: 0.2994, "5B": 0.031936, JC: 0.071856, KC: 0.05988, LC: 0.143712, MC: 0.063872, NC: 0.103792, hC: 0.526944, "6B": 0.11976, OC: 0.694608, PC: 0.850296, QC: 0.055888, RC: 0, iC: 0 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "ZC", "EC", "I", "9", "aC", "J", "bC", "D", "cC", "E", "F", "dC", "A", "FC", "B", "2B", "C", "3B", "K", "GC", "L", "eC", "G", "fC", "HC", "IC", "4B", "gC", "5B", "JC", "KC", "LC", "MC", "NC", "hC", "6B", "OC", "PC", "QC", "RC", "iC", ""], E: "Safari", F: { "9": 1275868800, ZC: 1205798400, EC: 1226534400, I: 1244419200, aC: 1311120000, J: 1343174400, bC: 1382400000, D: 1382400000, cC: 1410998400, E: 1413417600, F: 1443657600, dC: 1458518400, A: 1474329600, FC: 1490572800, B: 1505779200, "2B": 1522281600, C: 1537142400, "3B": 1553472000, K: 1568851200, GC: 1585008000, L: 1600214400, eC: 1619395200, G: 1632096000, fC: 1635292800, HC: 1639353600, IC: 1647216000, "4B": 1652745600, gC: 1658275200, "5B": 1662940800, JC: 1666569600, KC: 1670889600, LC: 1674432000, MC: 1679875200, NC: 1684368000, hC: 1690156800, "6B": 1695686400, OC: 1698192000, PC: 1702252800, QC: 1705881600, RC: null, iC: null } }, F: { A: { F: 0, B: 0, C: 0, G: 0, M: 0, N: 0, O: 0, AB: 0, q: 0, r: 0, s: 0, t: 0, BB: 0, CB: 0, DB: 0, EB: 0, FB: 0.003992, GB: 0, HB: 0, IB: 0, JB: 0, KB: 0, LB: 0, MB: 0, NB: 0, OB: 0, PB: 0, QB: 0, RB: 0.003992, SB: 0, TB: 0, UB: 0, VB: 0, WB: 0, XB: 0.015968, YB: 0, ZB: 0, aB: 0, bB: 0, cB: 0, dB: 0, eB: 0, fB: 0, gB: 0, hB: 0, iB: 0, jB: 0, kB: 0, lB: 0, mB: 0, nB: 0, oB: 0, pB: 0, qB: 0, rB: 0, sB: 0, tB: 0, uB: 0, vB: 0, u: 0, wB: 0, xB: 0, yB: 0, zB: 0, "0B": 0, P: 0, Q: 0, R: 0, AC: 0, S: 0, T: 0, U: 0, V: 0, W: 0, X: 0, Y: 0.003992, Z: 0, a: 0, b: 0, c: 0, d: 0, e: 0.043912, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0.047904, m: 0, n: 0.007984, o: 0.570856, p: 0.483032, jC: 0, kC: 0, lC: 0, mC: 0, "2B": 0, SC: 0, nC: 0, "3B": 0 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "F", "jC", "kC", "lC", "mC", "B", "2B", "SC", "nC", "C", "3B", "G", "M", "N", "O", "AB", "q", "r", "s", "t", "BB", "CB", "DB", "EB", "FB", "GB", "HB", "IB", "JB", "KB", "LB", "MB", "NB", "OB", "PB", "QB", "RB", "SB", "TB", "UB", "VB", "WB", "XB", "YB", "ZB", "aB", "bB", "cB", "dB", "eB", "fB", "gB", "hB", "iB", "jB", "kB", "lB", "mB", "nB", "oB", "pB", "qB", "rB", "sB", "tB", "uB", "vB", "u", "wB", "xB", "yB", "zB", "0B", "P", "Q", "R", "AC", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "", "", ""], E: "Opera", F: { F: 1150761600, jC: 1223424000, kC: 1251763200, lC: 1267488000, mC: 1277942400, B: 1292457600, "2B": 1302566400, SC: 1309219200, nC: 1323129600, C: 1323129600, "3B": 1352073600, G: 1372723200, M: 1377561600, N: 1381104000, O: 1386288000, AB: 1390867200, q: 1393891200, r: 1399334400, s: 1401753600, t: 1405987200, BB: 1409616000, CB: 1413331200, DB: 1417132800, EB: 1422316800, FB: 1425945600, GB: 1430179200, HB: 1433808000, IB: 1438646400, JB: 1442448000, KB: 1445904000, LB: 1449100800, MB: 1454371200, NB: 1457308800, OB: 1462320000, PB: 1465344000, QB: 1470096000, RB: 1474329600, SB: 1477267200, TB: 1481587200, UB: 1486425600, VB: 1490054400, WB: 1494374400, XB: 1498003200, YB: 1502236800, ZB: 1506470400, aB: 1510099200, bB: 1515024000, cB: 1517961600, dB: 1521676800, eB: 1525910400, fB: 1530144000, gB: 1534982400, hB: 1537833600, iB: 1543363200, jB: 1548201600, kB: 1554768000, lB: 1561593600, mB: 1566259200, nB: 1570406400, oB: 1573689600, pB: 1578441600, qB: 1583971200, rB: 1587513600, sB: 1592956800, tB: 1595894400, uB: 1600128000, vB: 1603238400, u: 1613520000, wB: 1612224000, xB: 1616544000, yB: 1619568000, zB: 1623715200, "0B": 1627948800, P: 1631577600, Q: 1633392000, R: 1635984000, AC: 1638403200, S: 1642550400, T: 1644969600, U: 1647993600, V: 1650412800, W: 1652745600, X: 1654646400, Y: 1657152000, Z: 1660780800, a: 1663113600, b: 1668816000, c: 1668643200, d: 1671062400, e: 1675209600, f: 1677024000, g: 1679529600, h: 1681948800, i: 1684195200, j: 1687219200, k: 1690329600, l: 1692748800, m: 1696204800, n: 1699920000, o: 1699920000, p: 1702944000 }, D: { F: "o", B: "o", C: "o", jC: "o", kC: "o", lC: "o", mC: "o", "2B": "o", SC: "o", nC: "o", "3B": "o" } }, G: { A: { E: 0, EC: 0, oC: 0, TC: 0.00300931, pC: 0.00451396, qC: 0.00752327, rC: 0.0105326, sC: 0.00150465, tC: 0.00902792, uC: 0.034607, vC: 0.00300931, wC: 0.0541675, xC: 0.0210652, yC: 0.0240745, zC: 0.0135419, "0C": 0.267828, "1C": 0.00451396, "2C": 0.0496536, "3C": 0.0135419, "4C": 0.0601861, "5C": 0.105326, "6C": 0.160998, "7C": 0.0692141, HC: 0.0797466, IC: 0.0932885, "4B": 0.123382, "8C": 0.961474, "5B": 0.288893, JC: 0.615403, KC: 0.279866, LC: 0.52061, MC: 0.115858, NC: 0.246763, "9C": 2.01925, "6B": 0.335538, OC: 3.46221, PC: 4.67947, QC: 0.300931, RC: 0 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "EC", "oC", "TC", "pC", "qC", "rC", "E", "sC", "tC", "uC", "vC", "wC", "xC", "yC", "zC", "0C", "1C", "2C", "3C", "4C", "5C", "6C", "7C", "HC", "IC", "4B", "8C", "5B", "JC", "KC", "LC", "MC", "NC", "9C", "6B", "OC", "PC", "QC", "RC", "", ""], E: "Safari on iOS", F: { EC: 1270252800, oC: 1283904000, TC: 1299628800, pC: 1331078400, qC: 1359331200, rC: 1394409600, E: 1410912000, sC: 1413763200, tC: 1442361600, uC: 1458518400, vC: 1473724800, wC: 1490572800, xC: 1505779200, yC: 1522281600, zC: 1537142400, "0C": 1553472000, "1C": 1568851200, "2C": 1572220800, "3C": 1580169600, "4C": 1585008000, "5C": 1600214400, "6C": 1619395200, "7C": 1632096000, HC: 1639353600, IC: 1647216000, "4B": 1652659200, "8C": 1658275200, "5B": 1662940800, JC: 1666569600, KC: 1670889600, LC: 1674432000, MC: 1679875200, NC: 1684368000, "9C": 1690156800, "6B": 1694995200, OC: 1698192000, PC: 1702252800, QC: 1705881600, RC: null } }, H: { A: { AD: 0.08 }, B: "o", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "AD", "", "", ""], E: "Opera Mini", F: { AD: 1426464000 } }, I: { A: { "7B": 0, I: 0.0000588882, H: 0.293145, BD: 0, CD: 0.0000294441, DD: 0, ED: 0.0000588882, TC: 0.000206109, FD: 0, GD: 0.000765547 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "BD", "CD", "DD", "7B", "I", "ED", "TC", "FD", "GD", "H", "", "", ""], E: "Android Browser", F: { BD: 1256515200, CD: 1274313600, DD: 1291593600, "7B": 1298332800, I: 1318896000, ED: 1341792000, TC: 1374624000, FD: 1386547200, GD: 1401667200, H: 1705968000 } }, J: { A: { D: 0, A: 0 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "D", "A", "", "", ""], E: "Blackberry Browser", F: { D: 1325376000, A: 1359504000 } }, K: { A: { A: 0, B: 0, C: 0, u: 1.19391, "2B": 0, SC: 0, "3B": 0 }, B: "o", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "A", "B", "2B", "SC", "C", "3B", "u", "", "", ""], E: "Opera Mobile", F: { A: 1287100800, B: 1300752000, "2B": 1314835200, SC: 1318291200, C: 1330300800, "3B": 1349740800, u: 1673827200 }, D: { u: "webkit" } }, L: { A: { H: 40.5268 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "H", "", "", ""], E: "Chrome for Android", F: { H: 1705968000 } }, M: { A: { "1B": 0.30045 }, B: "moz", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "1B", "", "", ""], E: "Firefox for Android", F: { "1B": 1705968000 } }, N: { A: { A: 0, B: 0 }, B: "ms", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "A", "B", "", "", ""], E: "IE Mobile", F: { A: 1340150400, B: 1353456000 } }, O: { A: { "4B": 0.811215 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "4B", "", "", ""], E: "UC Browser for Android", F: { "4B": 1687132800 }, D: { "4B": "webkit" } }, P: { A: { I: 0.139654, q: 0.0322279, r: 0.0751983, s: 0.0966836, t: 2.10555, HD: 0.0107426, ID: 0, JD: 0.0537131, KD: 0, LD: 0, FC: 0, MD: 0.0107426, ND: 0, OD: 0.0107426, PD: 0, QD: 0, "5B": 0.0107426, "6B": 0.0322279, RD: 0.0214852, SD: 0.0322279 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "I", "HD", "ID", "JD", "KD", "LD", "FC", "MD", "ND", "OD", "PD", "QD", "5B", "6B", "RD", "SD", "q", "r", "s", "t", "", "", ""], E: "Samsung Internet", F: { I: 1461024000, HD: 1481846400, ID: 1509408000, JD: 1528329600, KD: 1546128000, LD: 1554163200, FC: 1567900800, MD: 1582588800, ND: 1593475200, OD: 1605657600, PD: 1618531200, QD: 1629072000, "5B": 1640736000, "6B": 1651708800, RD: 1659657600, SD: 1667260800, q: 1677369600, r: 1684454400, s: 1689292800, t: 1697587200 } }, Q: { A: { GC: 0.204306 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "GC", "", "", ""], E: "QQ Browser", F: { GC: 1663718400 } }, R: { A: { TD: 0 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "TD", "", "", ""], E: "Baidu Browser", F: { TD: 1663027200 } }, S: { A: { UD: 0.090135, VD: 0 }, B: "moz", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "UD", "VD", "", "", ""], E: "KaiOS Browser", F: { UD: 1527811200, VD: 1631664000 } } };
});

// node_modules/caniuse-lite/dist/unpacker/agents.js
var require_agents2 = __commonJS((exports, module) => {
  var unpackBrowserVersions = function(versionsData) {
    return Object.keys(versionsData).reduce((usage, version2) => {
      usage[versions[version2]] = versionsData[version2];
      return usage;
    }, {});
  };
  var browsers = require_browsers2().browsers;
  var versions = require_browserVersions2().browserVersions;
  var agentsData = require_agents();
  exports.agents = Object.keys(agentsData).reduce((map2, key2) => {
    let versionsData = agentsData[key2];
    map2[browsers[key2]] = Object.keys(versionsData).reduce((data, entry) => {
      if (entry === "A") {
        data.usage_global = unpackBrowserVersions(versionsData[entry]);
      } else if (entry === "C") {
        data.versions = versionsData[entry].reduce((list, version2) => {
          if (version2 === "") {
            list.push(null);
          } else {
            list.push(versions[version2]);
          }
          return list;
        }, []);
      } else if (entry === "D") {
        data.prefix_exceptions = unpackBrowserVersions(versionsData[entry]);
      } else if (entry === "E") {
        data.browser = versionsData[entry];
      } else if (entry === "F") {
        data.release_date = Object.keys(versionsData[entry]).reduce((map22, key22) => {
          map22[versions[key22]] = versionsData[entry][key22];
          return map22;
        }, {});
      } else {
        data.prefix = versionsData[entry];
      }
      return data;
    }, {});
    return map2;
  }, {});
});

// node_modules/node-releases/data/release-schedule/release-schedule.json
var require_release_schedule = __commonJS((exports, module) => {
  module.exports = { "v0.8": { start: "2012-06-25", end: "2014-07-31" }, "v0.10": { start: "2013-03-11", end: "2016-10-31" }, "v0.12": { start: "2015-02-06", end: "2016-12-31" }, v4: { start: "2015-09-08", lts: "2015-10-12", maintenance: "2017-04-01", end: "2018-04-30", codename: "Argon" }, v5: { start: "2015-10-29", maintenance: "2016-04-30", end: "2016-06-30" }, v6: { start: "2016-04-26", lts: "2016-10-18", maintenance: "2018-04-30", end: "2019-04-30", codename: "Boron" }, v7: { start: "2016-10-25", maintenance: "2017-04-30", end: "2017-06-30" }, v8: { start: "2017-05-30", lts: "2017-10-31", maintenance: "2019-01-01", end: "2019-12-31", codename: "Carbon" }, v9: { start: "2017-10-01", maintenance: "2018-04-01", end: "2018-06-30" }, v10: { start: "2018-04-24", lts: "2018-10-30", maintenance: "2020-05-19", end: "2021-04-30", codename: "Dubnium" }, v11: { start: "2018-10-23", maintenance: "2019-04-22", end: "2019-06-01" }, v12: { start: "2019-04-23", lts: "2019-10-21", maintenance: "2020-11-30", end: "2022-04-30", codename: "Erbium" }, v13: { start: "2019-10-22", maintenance: "2020-04-01", end: "2020-06-01" }, v14: { start: "2020-04-21", lts: "2020-10-27", maintenance: "2021-10-19", end: "2023-04-30", codename: "Fermium" }, v15: { start: "2020-10-20", maintenance: "2021-04-01", end: "2021-06-01" }, v16: { start: "2021-04-20", lts: "2021-10-26", maintenance: "2022-10-18", end: "2023-09-11", codename: "Gallium" }, v17: { start: "2021-10-19", maintenance: "2022-04-01", end: "2022-06-01" }, v18: { start: "2022-04-19", lts: "2022-10-25", maintenance: "2023-10-18", end: "2025-04-30", codename: "Hydrogen" }, v19: { start: "2022-10-18", maintenance: "2023-04-01", end: "2023-06-01" }, v20: { start: "2023-04-18", lts: "2023-10-24", maintenance: "2024-10-22", end: "2026-04-30", codename: "Iron" }, v21: { start: "2023-10-17", maintenance: "2024-04-01", end: "2024-06-01" }, v22: { start: "2024-04-23", lts: "2024-10-29", maintenance: "2025-10-21", end: "2027-04-30", codename: "" }, v23: { start: "2024-10-15", maintenance: "2025-04-01", end: "2025-06-01" }, v24: { start: "2025-04-22", lts: "2025-10-28", maintenance: "2026-10-20", end: "2028-04-30", codename: "" } };
});

// node_modules/electron-to-chromium/versions.js
var require_versions = __commonJS((exports, module) => {
  module.exports = {
    "0.20": "39",
    "0.21": "41",
    "0.22": "41",
    "0.23": "41",
    "0.24": "41",
    "0.25": "42",
    "0.26": "42",
    "0.27": "43",
    "0.28": "43",
    "0.29": "43",
    "0.30": "44",
    "0.31": "45",
    "0.32": "45",
    "0.33": "45",
    "0.34": "45",
    "0.35": "45",
    "0.36": "47",
    "0.37": "49",
    "1.0": "49",
    "1.1": "50",
    "1.2": "51",
    "1.3": "52",
    "1.4": "53",
    "1.5": "54",
    "1.6": "56",
    "1.7": "58",
    "1.8": "59",
    "2.0": "61",
    "2.1": "61",
    "3.0": "66",
    "3.1": "66",
    "4.0": "69",
    "4.1": "69",
    "4.2": "69",
    "5.0": "73",
    "6.0": "76",
    "6.1": "76",
    "7.0": "78",
    "7.1": "78",
    "7.2": "78",
    "7.3": "78",
    "8.0": "80",
    "8.1": "80",
    "8.2": "80",
    "8.3": "80",
    "8.4": "80",
    "8.5": "80",
    "9.0": "83",
    "9.1": "83",
    "9.2": "83",
    "9.3": "83",
    "9.4": "83",
    "10.0": "85",
    "10.1": "85",
    "10.2": "85",
    "10.3": "85",
    "10.4": "85",
    "11.0": "87",
    "11.1": "87",
    "11.2": "87",
    "11.3": "87",
    "11.4": "87",
    "11.5": "87",
    "12.0": "89",
    "12.1": "89",
    "12.2": "89",
    "13.0": "91",
    "13.1": "91",
    "13.2": "91",
    "13.3": "91",
    "13.4": "91",
    "13.5": "91",
    "13.6": "91",
    "14.0": "93",
    "14.1": "93",
    "14.2": "93",
    "15.0": "94",
    "15.1": "94",
    "15.2": "94",
    "15.3": "94",
    "15.4": "94",
    "15.5": "94",
    "16.0": "96",
    "16.1": "96",
    "16.2": "96",
    "17.0": "98",
    "17.1": "98",
    "17.2": "98",
    "17.3": "98",
    "17.4": "98",
    "18.0": "100",
    "18.1": "100",
    "18.2": "100",
    "18.3": "100",
    "19.0": "102",
    "19.1": "102",
    "20.0": "104",
    "20.1": "104",
    "20.2": "104",
    "20.3": "104",
    "21.0": "106",
    "21.1": "106",
    "21.2": "106",
    "21.3": "106",
    "21.4": "106",
    "22.0": "108",
    "22.1": "108",
    "22.2": "108",
    "22.3": "108",
    "23.0": "110",
    "23.1": "110",
    "23.2": "110",
    "23.3": "110",
    "24.0": "112",
    "24.1": "112",
    "24.2": "112",
    "24.3": "112",
    "24.4": "112",
    "24.5": "112",
    "24.6": "112",
    "24.7": "112",
    "24.8": "112",
    "25.0": "114",
    "25.1": "114",
    "25.2": "114",
    "25.3": "114",
    "25.4": "114",
    "25.5": "114",
    "25.6": "114",
    "25.7": "114",
    "25.8": "114",
    "25.9": "114",
    "26.0": "116",
    "26.1": "116",
    "26.2": "116",
    "26.3": "116",
    "26.4": "116",
    "26.5": "116",
    "26.6": "116",
    "27.0": "118",
    "27.1": "118",
    "27.2": "118",
    "27.3": "118",
    "28.0": "120",
    "28.1": "120",
    "28.2": "120",
    "29.0": "122",
    "29.1": "122",
    "30.0": "124"
  };
});

// node_modules/browserslist/error.js
var require_error = __commonJS((exports, module) => {
  var BrowserslistError = function(message) {
    this.name = "BrowserslistError";
    this.message = message;
    this.browserslist = true;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BrowserslistError);
    }
  };
  BrowserslistError.prototype = Error.prototype;
  module.exports = BrowserslistError;
});

// node_modules/browserslist/parse.js
var require_parse = __commonJS((exports, module) => {
  var flatten = function(array) {
    if (!Array.isArray(array))
      return [array];
    return array.reduce(function(a2, b) {
      return a2.concat(flatten(b));
    }, []);
  };
  var find2 = function(string, predicate) {
    for (var n2 = 1, max = string.length;n2 <= max; n2++) {
      var parsed = string.substr(-n2, n2);
      if (predicate(parsed, n2, max)) {
        return string.slice(0, -n2);
      }
    }
    return "";
  };
  var matchQuery = function(all, query) {
    var node = { query };
    if (query.indexOf("not ") === 0) {
      node.not = true;
      query = query.slice(4);
    }
    for (var name2 in all) {
      var type = all[name2];
      var match = query.match(type.regexp);
      if (match) {
        node.type = name2;
        for (var i2 = 0;i2 < type.matches.length; i2++) {
          node[type.matches[i2]] = match[i2 + 1];
        }
        return node;
      }
    }
    node.type = "unknown";
    return node;
  };
  var matchBlock = function(all, string, qs) {
    var node;
    return find2(string, function(parsed, n2, max) {
      if (AND_REGEXP.test(parsed)) {
        node = matchQuery(all, parsed.match(AND_REGEXP)[1]);
        node.compose = "and";
        qs.unshift(node);
        return true;
      } else if (OR_REGEXP.test(parsed)) {
        node = matchQuery(all, parsed.match(OR_REGEXP)[1]);
        node.compose = "or";
        qs.unshift(node);
        return true;
      } else if (n2 === max) {
        node = matchQuery(all, parsed.trim());
        node.compose = "or";
        qs.unshift(node);
        return true;
      }
      return false;
    });
  };
  var AND_REGEXP = /^\s+and\s+(.*)/i;
  var OR_REGEXP = /^(?:,\s*|\s+or\s+)(.*)/i;
  module.exports = function parse(all, queries) {
    if (!Array.isArray(queries))
      queries = [queries];
    return flatten(queries.map(function(block) {
      var qs = [];
      do {
        block = matchBlock(all, block, qs);
      } while (block);
      return qs;
    }));
  };
});

// node_modules/caniuse-lite/dist/lib/statuses.js
var require_statuses = __commonJS((exports, module) => {
  module.exports = {
    1: "ls",
    2: "rec",
    3: "pr",
    4: "cr",
    5: "wd",
    6: "other",
    7: "unoff"
  };
});

// node_modules/caniuse-lite/dist/lib/supported.js
var require_supported = __commonJS((exports, module) => {
  module.exports = {
    y: 1 << 0,
    n: 1 << 1,
    a: 1 << 2,
    p: 1 << 3,
    u: 1 << 4,
    x: 1 << 5,
    d: 1 << 6
  };
});

// node_modules/caniuse-lite/dist/unpacker/feature.js
var require_feature = __commonJS((exports, module) => {
  var unpackSupport = function(cipher) {
    let stats = Object.keys(supported).reduce((list, support) => {
      if (cipher & supported[support])
        list.push(support);
      return list;
    }, []);
    let notes = cipher >> 7;
    let notesArray = [];
    while (notes) {
      let note = Math.floor(Math.log(notes) / MATH2LOG) + 1;
      notesArray.unshift(`#${note}`);
      notes -= Math.pow(2, note - 1);
    }
    return stats.concat(notesArray).join(" ");
  };
  var unpackFeature = function(packed) {
    let unpacked = {
      status: statuses[packed.B],
      title: packed.C,
      shown: packed.D
    };
    unpacked.stats = Object.keys(packed.A).reduce((browserStats, key2) => {
      let browser = packed.A[key2];
      browserStats[browsers[key2]] = Object.keys(browser).reduce((stats, support) => {
        let packedVersions = browser[support].split(" ");
        let unpacked2 = unpackSupport(support);
        packedVersions.forEach((v) => stats[versions[v]] = unpacked2);
        return stats;
      }, {});
      return browserStats;
    }, {});
    return unpacked;
  };
  var statuses = require_statuses();
  var supported = require_supported();
  var browsers = require_browsers2().browsers;
  var versions = require_browserVersions2().browserVersions;
  var MATH2LOG = Math.log(2);
  module.exports = unpackFeature;
  module.exports.default = unpackFeature;
});

// node_modules/caniuse-lite/dist/unpacker/region.js
var require_region = __commonJS((exports, module) => {
  var unpackRegion = function(packed) {
    return Object.keys(packed).reduce((list, browser) => {
      let data = packed[browser];
      list[browsers[browser]] = Object.keys(data).reduce((memo, key2) => {
        let stats = data[key2];
        if (key2 === "_") {
          stats.split(" ").forEach((version2) => memo[version2] = null);
        } else {
          memo[key2] = stats;
        }
        return memo;
      }, {});
      return list;
    }, {});
  };
  var browsers = require_browsers2().browsers;
  module.exports = unpackRegion;
  module.exports.default = unpackRegion;
});

// node_modules/browserslist/node.js
var require_node = __commonJS((exports, module) => {
  var checkExtend = function(name2) {
    var use = " Use `dangerousExtend` option to disable.";
    if (!CONFIG_PATTERN.test(name2) && !SCOPED_CONFIG__PATTERN.test(name2)) {
      throw new BrowserslistError("Browserslist config needs `browserslist-config-` prefix. " + use);
    }
    if (name2.replace(/^@[^/]+\//, "").indexOf(".") !== -1) {
      throw new BrowserslistError("`.` not allowed in Browserslist config name. " + use);
    }
    if (name2.indexOf("node_modules") !== -1) {
      throw new BrowserslistError("`node_modules` not allowed in Browserslist config." + use);
    }
  };
  var isFile = function(file) {
    if (file in filenessCache) {
      return filenessCache[file];
    }
    var result = fs4.existsSync(file) && fs4.statSync(file).isFile();
    if (!process.env.BROWSERSLIST_DISABLE_CACHE) {
      filenessCache[file] = result;
    }
    return result;
  };
  var eachParent = function(file, callback) {
    var dir = isFile(file) ? path3.dirname(file) : file;
    var loc = path3.resolve(dir);
    do {
      if (!pathInRoot(loc))
        break;
      var result = callback(loc);
      if (typeof result !== "undefined")
        return result;
    } while (loc !== (loc = path3.dirname(loc)));
    return;
  };
  var pathInRoot = function(p) {
    if (!process.env.BROWSERSLIST_ROOT_PATH)
      return true;
    var rootPath = path3.resolve(process.env.BROWSERSLIST_ROOT_PATH);
    if (path3.relative(rootPath, p).substring(0, 2) === "..") {
      return false;
    }
    return true;
  };
  var check = function(section) {
    if (Array.isArray(section)) {
      for (var i2 = 0;i2 < section.length; i2++) {
        if (typeof section[i2] !== "string") {
          throw new BrowserslistError(FORMAT);
        }
      }
    } else if (typeof section !== "string") {
      throw new BrowserslistError(FORMAT);
    }
  };
  var pickEnv = function(config, opts) {
    if (typeof config !== "object")
      return config;
    var name2;
    if (typeof opts.env === "string") {
      name2 = opts.env;
    } else if (process.env.BROWSERSLIST_ENV) {
      name2 = process.env.BROWSERSLIST_ENV;
    } else if ("development") {
      name2 = "development";
    } else {
    }
    if (opts.throwOnMissing) {
      if (name2 && name2 !== "defaults" && !config[name2]) {
        throw new BrowserslistError("Missing config for Browserslist environment `" + name2 + "`");
      }
    }
    return config[name2] || config.defaults;
  };
  var parsePackage = function(file) {
    var config = JSON.parse(fs4.readFileSync(file).toString().replace(/^\uFEFF/m, ""));
    if (config.browserlist && !config.browserslist) {
      throw new BrowserslistError("`browserlist` key instead of `browserslist` in " + file);
    }
    var list = config.browserslist;
    if (Array.isArray(list) || typeof list === "string") {
      list = { defaults: list };
    }
    for (var i2 in list) {
      check(list[i2]);
    }
    return list;
  };
  var latestReleaseTime = function(agents) {
    var latest = 0;
    for (var name2 in agents) {
      var dates = agents[name2].releaseDate || {};
      for (var key2 in dates) {
        if (latest < dates[key2]) {
          latest = dates[key2];
        }
      }
    }
    return latest * 1000;
  };
  var normalizeStats = function(data, stats) {
    if (!data) {
      data = {};
    }
    if (stats && "dataByBrowser" in stats) {
      stats = stats.dataByBrowser;
    }
    if (typeof stats !== "object")
      return;
    var normalized = {};
    for (var i2 in stats) {
      var versions = Object.keys(stats[i2]);
      if (versions.length === 1 && data[i2] && data[i2].versions.length === 1) {
        var normal = data[i2].versions[0];
        normalized[i2] = {};
        normalized[i2][normal] = stats[i2][versions[0]];
      } else {
        normalized[i2] = stats[i2];
      }
    }
    return normalized;
  };
  var normalizeUsageData = function(usageData, data) {
    for (var browser in usageData) {
      var browserUsage = usageData[browser];
      if ("0" in browserUsage) {
        var versions = data[browser].versions;
        browserUsage[versions[versions.length - 1]] = browserUsage[0];
        delete browserUsage[0];
      }
    }
  };
  var feature = require_feature().default;
  var region = require_region().default;
  var path3 = import.meta.require("path");
  var fs4 = import.meta.require("fs");
  var BrowserslistError = require_error();
  var IS_SECTION = /^\s*\[(.+)]\s*$/;
  var CONFIG_PATTERN = /^browserslist-config-/;
  var SCOPED_CONFIG__PATTERN = /@[^/]+(?:\/[^/]+)?\/browserslist-config(?:-|$|\/)/;
  var TIME_TO_UPDATE_CANIUSE = 6 * 30 * 24 * 60 * 60 * 1000;
  var FORMAT = "Browserslist config should be a string or an array of strings with browser queries";
  var dataTimeChecked = false;
  var filenessCache = {};
  var configCache = {};
  module.exports = {
    loadQueries: function loadQueries(ctx, name2) {
      if (!ctx.dangerousExtend && !process.env.BROWSERSLIST_DANGEROUS_EXTEND) {
        checkExtend(name2);
      }
      var queries = import.meta.require(import.meta.require.resolve(name2, { paths: [".", ctx.path] }));
      if (queries) {
        if (Array.isArray(queries)) {
          return queries;
        } else if (typeof queries === "object") {
          if (!queries.defaults)
            queries.defaults = [];
          return pickEnv(queries, ctx, name2);
        }
      }
      throw new BrowserslistError("`" + name2 + "` config exports not an array of queries or an object of envs");
    },
    loadStat: function loadStat(ctx, name2, data) {
      if (!ctx.dangerousExtend && !process.env.BROWSERSLIST_DANGEROUS_EXTEND) {
        checkExtend(name2);
      }
      var stats = import.meta.require(import.meta.require.resolve(path3.join(name2, "browserslist-stats.json"), { paths: ["."] }));
      return normalizeStats(data, stats);
    },
    getStat: function getStat(opts, data) {
      var stats;
      if (opts.stats) {
        stats = opts.stats;
      } else if (process.env.BROWSERSLIST_STATS) {
        stats = process.env.BROWSERSLIST_STATS;
      } else if (opts.path && path3.resolve && fs4.existsSync) {
        stats = eachParent(opts.path, function(dir) {
          var file = path3.join(dir, "browserslist-stats.json");
          return isFile(file) ? file : undefined;
        });
      }
      if (typeof stats === "string") {
        try {
          stats = JSON.parse(fs4.readFileSync(stats));
        } catch (e) {
          throw new BrowserslistError("Can't read " + stats);
        }
      }
      return normalizeStats(data, stats);
    },
    loadConfig: function loadConfig(opts) {
      if (process.env.BROWSERSLIST) {
        return process.env.BROWSERSLIST;
      } else if (opts.config || process.env.BROWSERSLIST_CONFIG) {
        var file = opts.config || process.env.BROWSERSLIST_CONFIG;
        if (path3.basename(file) === "package.json") {
          return pickEnv(parsePackage(file), opts);
        } else {
          return pickEnv(module.exports.readConfig(file), opts);
        }
      } else if (opts.path) {
        return pickEnv(module.exports.findConfig(opts.path), opts);
      } else {
        return;
      }
    },
    loadCountry: function loadCountry(usage, country, data) {
      var code = country.replace(/[^\w-]/g, "");
      if (!usage[code]) {
        var compressed;
        try {
          compressed = import.meta.require("caniuse-lite/data/regions/" + code + ".js");
        } catch (e) {
          throw new BrowserslistError("Unknown region name `" + code + "`.");
        }
        var usageData = region(compressed);
        normalizeUsageData(usageData, data);
        usage[country] = {};
        for (var i2 in usageData) {
          for (var j in usageData[i2]) {
            usage[country][i2 + " " + j] = usageData[i2][j];
          }
        }
      }
    },
    loadFeature: function loadFeature(features, name2) {
      name2 = name2.replace(/[^\w-]/g, "");
      if (features[name2])
        return;
      var compressed;
      try {
        compressed = import.meta.require("caniuse-lite/data/features/" + name2 + ".js");
      } catch (e) {
        throw new BrowserslistError("Unknown feature name `" + name2 + "`.");
      }
      var stats = feature(compressed).stats;
      features[name2] = {};
      for (var i2 in stats) {
        features[name2][i2] = {};
        for (var j in stats[i2]) {
          features[name2][i2][j] = stats[i2][j];
        }
      }
    },
    parseConfig: function parseConfig(string) {
      var result = { defaults: [] };
      var sections = ["defaults"];
      string.toString().replace(/#[^\n]*/g, "").split(/\n|,/).map(function(line) {
        return line.trim();
      }).filter(function(line) {
        return line !== "";
      }).forEach(function(line) {
        if (IS_SECTION.test(line)) {
          sections = line.match(IS_SECTION)[1].trim().split(" ");
          sections.forEach(function(section) {
            if (result[section]) {
              throw new BrowserslistError("Duplicate section " + section + " in Browserslist config");
            }
            result[section] = [];
          });
        } else {
          sections.forEach(function(section) {
            result[section].push(line);
          });
        }
      });
      return result;
    },
    readConfig: function readConfig(file) {
      if (!isFile(file)) {
        throw new BrowserslistError("Can't read " + file + " config");
      }
      return module.exports.parseConfig(fs4.readFileSync(file));
    },
    findConfig: function findConfig(from2) {
      from2 = path3.resolve(from2);
      var passed = [];
      var resolved = eachParent(from2, function(dir) {
        if (dir in configCache) {
          return configCache[dir];
        }
        passed.push(dir);
        var config = path3.join(dir, "browserslist");
        var pkg = path3.join(dir, "package.json");
        var rc = path3.join(dir, ".browserslistrc");
        var pkgBrowserslist;
        if (isFile(pkg)) {
          try {
            pkgBrowserslist = parsePackage(pkg);
          } catch (e) {
            if (e.name === "BrowserslistError")
              throw e;
            console.warn("[Browserslist] Could not parse " + pkg + ". Ignoring it.");
          }
        }
        if (isFile(config) && pkgBrowserslist) {
          throw new BrowserslistError(dir + " contains both browserslist and package.json with browsers");
        } else if (isFile(rc) && pkgBrowserslist) {
          throw new BrowserslistError(dir + " contains both .browserslistrc and package.json with browsers");
        } else if (isFile(config) && isFile(rc)) {
          throw new BrowserslistError(dir + " contains both .browserslistrc and browserslist");
        } else if (isFile(config)) {
          return module.exports.readConfig(config);
        } else if (isFile(rc)) {
          return module.exports.readConfig(rc);
        } else {
          return pkgBrowserslist;
        }
      });
      if (!process.env.BROWSERSLIST_DISABLE_CACHE) {
        passed.forEach(function(dir) {
          configCache[dir] = resolved;
        });
      }
      return resolved;
    },
    clearCaches: function clearCaches() {
      dataTimeChecked = false;
      filenessCache = {};
      configCache = {};
      this.cache = {};
    },
    oldDataWarning: function oldDataWarning(agentsObj) {
      if (dataTimeChecked)
        return;
      dataTimeChecked = true;
      if (process.env.BROWSERSLIST_IGNORE_OLD_DATA)
        return;
      var latest = latestReleaseTime(agentsObj);
      var halfYearAgo = Date.now() - TIME_TO_UPDATE_CANIUSE;
      if (latest !== 0 && latest < halfYearAgo) {
        console.warn("Browserslist: caniuse-lite is outdated. Please run:\n  npx update-browserslist-db@latest\n  Why you should do it regularly: https://github.com/browserslist/update-db#readme");
      }
    },
    currentNode: function currentNode() {
      return "node " + process.versions.node;
    },
    env: process.env
  };
});

// node_modules/browserslist/index.js
var require_browserslist = __commonJS((exports, module) => {
  var isVersionsMatch = function(versionA, versionB) {
    return (versionA + ".").indexOf(versionB + ".") === 0;
  };
  var isEolReleased = function(name2) {
    var version2 = name2.slice(1);
    return browserslist.nodeVersions.some(function(i2) {
      return isVersionsMatch(i2, version2);
    });
  };
  var normalize = function(versions) {
    return versions.filter(function(version2) {
      return typeof version2 === "string";
    });
  };
  var normalizeElectron = function(version2) {
    var versionToUse = version2;
    if (version2.split(".").length === 3) {
      versionToUse = version2.split(".").slice(0, -1).join(".");
    }
    return versionToUse;
  };
  var nameMapper = function(name2) {
    return function mapName(version2) {
      return name2 + " " + version2;
    };
  };
  var getMajor = function(version2) {
    return parseInt(version2.split(".")[0]);
  };
  var getMajorVersions = function(released, number) {
    if (released.length === 0)
      return [];
    var majorVersions = uniq(released.map(getMajor));
    var minimum = majorVersions[majorVersions.length - number];
    if (!minimum) {
      return released;
    }
    var selected = [];
    for (var i2 = released.length - 1;i2 >= 0; i2--) {
      if (minimum > getMajor(released[i2]))
        break;
      selected.unshift(released[i2]);
    }
    return selected;
  };
  var uniq = function(array) {
    var filtered = [];
    for (var i2 = 0;i2 < array.length; i2++) {
      if (filtered.indexOf(array[i2]) === -1)
        filtered.push(array[i2]);
    }
    return filtered;
  };
  var fillUsage = function(result, name2, data) {
    for (var i2 in data) {
      result[name2 + " " + i2] = data[i2];
    }
  };
  var generateFilter = function(sign, version2) {
    version2 = parseFloat(version2);
    if (sign === ">") {
      return function(v) {
        return parseFloat(v) > version2;
      };
    } else if (sign === ">=") {
      return function(v) {
        return parseFloat(v) >= version2;
      };
    } else if (sign === "<") {
      return function(v) {
        return parseFloat(v) < version2;
      };
    } else {
      return function(v) {
        return parseFloat(v) <= version2;
      };
    }
  };
  var generateSemverFilter = function(sign, version2) {
    version2 = version2.split(".").map(parseSimpleInt);
    version2[1] = version2[1] || 0;
    version2[2] = version2[2] || 0;
    if (sign === ">") {
      return function(v) {
        v = v.split(".").map(parseSimpleInt);
        return compareSemver(v, version2) > 0;
      };
    } else if (sign === ">=") {
      return function(v) {
        v = v.split(".").map(parseSimpleInt);
        return compareSemver(v, version2) >= 0;
      };
    } else if (sign === "<") {
      return function(v) {
        v = v.split(".").map(parseSimpleInt);
        return compareSemver(version2, v) > 0;
      };
    } else {
      return function(v) {
        v = v.split(".").map(parseSimpleInt);
        return compareSemver(version2, v) >= 0;
      };
    }
  };
  var parseSimpleInt = function(x) {
    return parseInt(x);
  };
  var compare = function(a2, b) {
    if (a2 < b)
      return -1;
    if (a2 > b)
      return 1;
    return 0;
  };
  var compareSemver = function(a2, b) {
    return compare(parseInt(a2[0]), parseInt(b[0])) || compare(parseInt(a2[1] || "0"), parseInt(b[1] || "0")) || compare(parseInt(a2[2] || "0"), parseInt(b[2] || "0"));
  };
  var semverFilterLoose = function(operator, range) {
    range = range.split(".").map(parseSimpleInt);
    if (typeof range[1] === "undefined") {
      range[1] = "x";
    }
    switch (operator) {
      case "<=":
        return function(version2) {
          version2 = version2.split(".").map(parseSimpleInt);
          return compareSemverLoose(version2, range) <= 0;
        };
      case ">=":
      default:
        return function(version2) {
          version2 = version2.split(".").map(parseSimpleInt);
          return compareSemverLoose(version2, range) >= 0;
        };
    }
  };
  var compareSemverLoose = function(version2, range) {
    if (version2[0] !== range[0]) {
      return version2[0] < range[0] ? -1 : 1;
    }
    if (range[1] === "x") {
      return 0;
    }
    if (version2[1] !== range[1]) {
      return version2[1] < range[1] ? -1 : 1;
    }
    return 0;
  };
  var resolveVersion = function(data, version2) {
    if (data.versions.indexOf(version2) !== -1) {
      return version2;
    } else if (browserslist.versionAliases[data.name][version2]) {
      return browserslist.versionAliases[data.name][version2];
    } else {
      return false;
    }
  };
  var normalizeVersion = function(data, version2) {
    var resolved = resolveVersion(data, version2);
    if (resolved) {
      return resolved;
    } else if (data.versions.length === 1) {
      return data.versions[0];
    } else {
      return false;
    }
  };
  var filterByYear = function(since, context) {
    since = since / 1000;
    return Object.keys(agents).reduce(function(selected, name2) {
      var data = byName(name2, context);
      if (!data)
        return selected;
      var versions = Object.keys(data.releaseDate).filter(function(v) {
        var date = data.releaseDate[v];
        return date !== null && date >= since;
      });
      return selected.concat(versions.map(nameMapper(data.name)));
    }, []);
  };
  var cloneData = function(data) {
    return {
      name: data.name,
      versions: data.versions,
      released: data.released,
      releaseDate: data.releaseDate
    };
  };
  var byName = function(name2, context) {
    name2 = name2.toLowerCase();
    name2 = browserslist.aliases[name2] || name2;
    if (context.mobileToDesktop && browserslist.desktopNames[name2]) {
      var desktop = browserslist.data[browserslist.desktopNames[name2]];
      if (name2 === "android") {
        return normalizeAndroidData(cloneData(browserslist.data[name2]), desktop);
      } else {
        var cloned2 = cloneData(desktop);
        cloned2.name = name2;
        return cloned2;
      }
    }
    return browserslist.data[name2];
  };
  var normalizeAndroidVersions = function(androidVersions, chromeVersions) {
    var iFirstEvergreen = chromeVersions.indexOf(ANDROID_EVERGREEN_FIRST);
    return androidVersions.filter(function(version2) {
      return /^(?:[2-4]\.|[34]$)/.test(version2);
    }).concat(chromeVersions.slice(iFirstEvergreen));
  };
  var copyObject = function(obj) {
    var copy = {};
    for (var key2 in obj) {
      copy[key2] = obj[key2];
    }
    return copy;
  };
  var normalizeAndroidData = function(android, chrome) {
    android.released = normalizeAndroidVersions(android.released, chrome.released);
    android.versions = normalizeAndroidVersions(android.versions, chrome.versions);
    android.releaseDate = copyObject(android.releaseDate);
    android.released.forEach(function(v) {
      if (android.releaseDate[v] === undefined) {
        android.releaseDate[v] = chrome.releaseDate[v];
      }
    });
    return android;
  };
  var checkName = function(name2, context) {
    var data = byName(name2, context);
    if (!data)
      throw new BrowserslistError("Unknown browser " + name2);
    return data;
  };
  var unknownQuery = function(query) {
    return new BrowserslistError("Unknown browser query `" + query + "`. Maybe you are using old Browserslist or made typo in query.");
  };
  var filterJumps = function(list, name2, nVersions, context) {
    var jump = 1;
    switch (name2) {
      case "android":
        if (context.mobileToDesktop)
          return list;
        var released = browserslist.data.chrome.released;
        jump = released.length - released.indexOf(ANDROID_EVERGREEN_FIRST);
        break;
      case "op_mob":
        var latest = browserslist.data.op_mob.released.slice(-1)[0];
        jump = getMajor(latest) - OP_MOB_BLINK_FIRST + 1;
        break;
      default:
        return list;
    }
    if (nVersions <= jump) {
      return list.slice(-1);
    }
    return list.slice(jump - 1 - nVersions);
  };
  var isSupported = function(flags, withPartial) {
    return typeof flags === "string" && (flags.indexOf("y") >= 0 || withPartial && flags.indexOf("a") >= 0);
  };
  var resolve = function(queries, context) {
    return parse2(QUERIES, queries).reduce(function(result, node, index) {
      if (node.not && index === 0) {
        throw new BrowserslistError("Write any browsers query (for instance, `defaults`) before `" + node.query + "`");
      }
      var type = QUERIES[node.type];
      var array = type.select.call(browserslist, context, node).map(function(j) {
        var parts = j.split(" ");
        if (parts[1] === "0") {
          return parts[0] + " " + byName(parts[0], context).versions[0];
        } else {
          return j;
        }
      });
      if (node.compose === "and") {
        if (node.not) {
          return result.filter(function(j) {
            return array.indexOf(j) === -1;
          });
        } else {
          return result.filter(function(j) {
            return array.indexOf(j) !== -1;
          });
        }
      } else {
        if (node.not) {
          var filter2 = {};
          array.forEach(function(j) {
            filter2[j] = true;
          });
          return result.filter(function(j) {
            return !filter2[j];
          });
        }
        return result.concat(array);
      }
    }, []);
  };
  var prepareOpts = function(opts) {
    if (typeof opts === "undefined")
      opts = {};
    if (typeof opts.path === "undefined") {
      opts.path = path3.resolve ? path3.resolve(".") : ".";
    }
    return opts;
  };
  var prepareQueries = function(queries, opts) {
    if (typeof queries === "undefined" || queries === null) {
      var config = browserslist.loadConfig(opts);
      if (config) {
        queries = config;
      } else {
        queries = browserslist.defaults;
      }
    }
    return queries;
  };
  var checkQueries = function(queries) {
    if (!(typeof queries === "string" || Array.isArray(queries))) {
      throw new BrowserslistError("Browser queries must be an array or string. Got " + typeof queries + ".");
    }
  };
  var browserslist = function(queries, opts) {
    opts = prepareOpts(opts);
    queries = prepareQueries(queries, opts);
    checkQueries(queries);
    var context = {
      ignoreUnknownVersions: opts.ignoreUnknownVersions,
      dangerousExtend: opts.dangerousExtend,
      mobileToDesktop: opts.mobileToDesktop,
      path: opts.path,
      env: opts.env
    };
    env.oldDataWarning(browserslist.data);
    var stats = env.getStat(opts, browserslist.data);
    if (stats) {
      context.customUsage = {};
      for (var browser in stats) {
        fillUsage(context.customUsage, browser, stats[browser]);
      }
    }
    var cacheKey = JSON.stringify([queries, context]);
    if (cache[cacheKey])
      return cache[cacheKey];
    var result = uniq(resolve(queries, context)).sort(function(name1, name2) {
      name1 = name1.split(" ");
      name2 = name2.split(" ");
      if (name1[0] === name2[0]) {
        var version1 = name1[1].split("-")[0];
        var version2 = name2[1].split("-")[0];
        return compareSemver(version2.split("."), version1.split("."));
      } else {
        return compare(name1[0], name2[0]);
      }
    });
    if (!env.env.BROWSERSLIST_DISABLE_CACHE) {
      cache[cacheKey] = result;
    }
    return result;
  };
  var nodeQuery = function(context, node) {
    var matched = browserslist.nodeVersions.filter(function(i2) {
      return isVersionsMatch(i2, node.version);
    });
    if (matched.length === 0) {
      if (context.ignoreUnknownVersions) {
        return [];
      } else {
        throw new BrowserslistError("Unknown version " + node.version + " of Node.js");
      }
    }
    return ["node " + matched[matched.length - 1]];
  };
  var sinceQuery = function(context, node) {
    var year = parseInt(node.year);
    var month = parseInt(node.month || "01") - 1;
    var day = parseInt(node.day || "01");
    return filterByYear(Date.UTC(year, month, day, 0, 0, 0), context);
  };
  var coverQuery = function(context, node) {
    var coverage = parseFloat(node.coverage);
    var usage = browserslist.usage.global;
    if (node.place) {
      if (node.place.match(/^my\s+stats$/i)) {
        if (!context.customUsage) {
          throw new BrowserslistError("Custom usage statistics was not provided");
        }
        usage = context.customUsage;
      } else {
        var place;
        if (node.place.length === 2) {
          place = node.place.toUpperCase();
        } else {
          place = node.place.toLowerCase();
        }
        env.loadCountry(browserslist.usage, place, browserslist.data);
        usage = browserslist.usage[place];
      }
    }
    var versions = Object.keys(usage).sort(function(a2, b) {
      return usage[b] - usage[a2];
    });
    var coveraged = 0;
    var result = [];
    var version2;
    for (var i2 = 0;i2 < versions.length; i2++) {
      version2 = versions[i2];
      if (usage[version2] === 0)
        break;
      coveraged += usage[version2];
      result.push(version2);
      if (coveraged >= coverage)
        break;
    }
    return result;
  };
  var jsReleases = require_envs();
  var agents = require_agents2().agents;
  var jsEOL = require_release_schedule();
  var path3 = import.meta.require("path");
  var e2c = require_versions();
  var BrowserslistError = require_error();
  var parse2 = require_parse();
  var env = require_node();
  var YEAR = 365.259641 * 24 * 60 * 60 * 1000;
  var ANDROID_EVERGREEN_FIRST = "37";
  var OP_MOB_BLINK_FIRST = 14;
  var cache = {};
  browserslist.parse = function(queries, opts) {
    opts = prepareOpts(opts);
    queries = prepareQueries(queries, opts);
    checkQueries(queries);
    return parse2(QUERIES, queries);
  };
  browserslist.cache = {};
  browserslist.data = {};
  browserslist.usage = {
    global: {},
    custom: null
  };
  browserslist.defaults = ["> 0.5%", "last 2 versions", "Firefox ESR", "not dead"];
  browserslist.aliases = {
    fx: "firefox",
    ff: "firefox",
    ios: "ios_saf",
    explorer: "ie",
    blackberry: "bb",
    explorermobile: "ie_mob",
    operamini: "op_mini",
    operamobile: "op_mob",
    chromeandroid: "and_chr",
    firefoxandroid: "and_ff",
    ucandroid: "and_uc",
    qqandroid: "and_qq"
  };
  browserslist.desktopNames = {
    and_chr: "chrome",
    and_ff: "firefox",
    ie_mob: "ie",
    android: "chrome"
  };
  browserslist.versionAliases = {};
  browserslist.clearCaches = env.clearCaches;
  browserslist.parseConfig = env.parseConfig;
  browserslist.readConfig = env.readConfig;
  browserslist.findConfig = env.findConfig;
  browserslist.loadConfig = env.loadConfig;
  browserslist.coverage = function(browsers, stats) {
    var data;
    if (typeof stats === "undefined") {
      data = browserslist.usage.global;
    } else if (stats === "my stats") {
      var opts = {};
      opts.path = path3.resolve ? path3.resolve(".") : ".";
      var customStats = env.getStat(opts);
      if (!customStats) {
        throw new BrowserslistError("Custom usage statistics was not provided");
      }
      data = {};
      for (var browser in customStats) {
        fillUsage(data, browser, customStats[browser]);
      }
    } else if (typeof stats === "string") {
      if (stats.length > 2) {
        stats = stats.toLowerCase();
      } else {
        stats = stats.toUpperCase();
      }
      env.loadCountry(browserslist.usage, stats, browserslist.data);
      data = browserslist.usage[stats];
    } else {
      if ("dataByBrowser" in stats) {
        stats = stats.dataByBrowser;
      }
      data = {};
      for (var name2 in stats) {
        for (var version2 in stats[name2]) {
          data[name2 + " " + version2] = stats[name2][version2];
        }
      }
    }
    return browsers.reduce(function(all, i2) {
      var usage = data[i2];
      if (usage === undefined) {
        usage = data[i2.replace(/ \S+$/, " 0")];
      }
      return all + (usage || 0);
    }, 0);
  };
  var QUERIES = {
    last_major_versions: {
      matches: ["versions"],
      regexp: /^last\s+(\d+)\s+major\s+versions?$/i,
      select: function(context, node) {
        return Object.keys(agents).reduce(function(selected, name2) {
          var data = byName(name2, context);
          if (!data)
            return selected;
          var list = getMajorVersions(data.released, node.versions);
          list = list.map(nameMapper(data.name));
          list = filterJumps(list, data.name, node.versions, context);
          return selected.concat(list);
        }, []);
      }
    },
    last_versions: {
      matches: ["versions"],
      regexp: /^last\s+(\d+)\s+versions?$/i,
      select: function(context, node) {
        return Object.keys(agents).reduce(function(selected, name2) {
          var data = byName(name2, context);
          if (!data)
            return selected;
          var list = data.released.slice(-node.versions);
          list = list.map(nameMapper(data.name));
          list = filterJumps(list, data.name, node.versions, context);
          return selected.concat(list);
        }, []);
      }
    },
    last_electron_major_versions: {
      matches: ["versions"],
      regexp: /^last\s+(\d+)\s+electron\s+major\s+versions?$/i,
      select: function(context, node) {
        var validVersions = getMajorVersions(Object.keys(e2c), node.versions);
        return validVersions.map(function(i2) {
          return "chrome " + e2c[i2];
        });
      }
    },
    last_node_major_versions: {
      matches: ["versions"],
      regexp: /^last\s+(\d+)\s+node\s+major\s+versions?$/i,
      select: function(context, node) {
        return getMajorVersions(browserslist.nodeVersions, node.versions).map(function(version2) {
          return "node " + version2;
        });
      }
    },
    last_browser_major_versions: {
      matches: ["versions", "browser"],
      regexp: /^last\s+(\d+)\s+(\w+)\s+major\s+versions?$/i,
      select: function(context, node) {
        var data = checkName(node.browser, context);
        var validVersions = getMajorVersions(data.released, node.versions);
        var list = validVersions.map(nameMapper(data.name));
        list = filterJumps(list, data.name, node.versions, context);
        return list;
      }
    },
    last_electron_versions: {
      matches: ["versions"],
      regexp: /^last\s+(\d+)\s+electron\s+versions?$/i,
      select: function(context, node) {
        return Object.keys(e2c).slice(-node.versions).map(function(i2) {
          return "chrome " + e2c[i2];
        });
      }
    },
    last_node_versions: {
      matches: ["versions"],
      regexp: /^last\s+(\d+)\s+node\s+versions?$/i,
      select: function(context, node) {
        return browserslist.nodeVersions.slice(-node.versions).map(function(version2) {
          return "node " + version2;
        });
      }
    },
    last_browser_versions: {
      matches: ["versions", "browser"],
      regexp: /^last\s+(\d+)\s+(\w+)\s+versions?$/i,
      select: function(context, node) {
        var data = checkName(node.browser, context);
        var list = data.released.slice(-node.versions).map(nameMapper(data.name));
        list = filterJumps(list, data.name, node.versions, context);
        return list;
      }
    },
    unreleased_versions: {
      matches: [],
      regexp: /^unreleased\s+versions$/i,
      select: function(context) {
        return Object.keys(agents).reduce(function(selected, name2) {
          var data = byName(name2, context);
          if (!data)
            return selected;
          var list = data.versions.filter(function(v) {
            return data.released.indexOf(v) === -1;
          });
          list = list.map(nameMapper(data.name));
          return selected.concat(list);
        }, []);
      }
    },
    unreleased_electron_versions: {
      matches: [],
      regexp: /^unreleased\s+electron\s+versions?$/i,
      select: function() {
        return [];
      }
    },
    unreleased_browser_versions: {
      matches: ["browser"],
      regexp: /^unreleased\s+(\w+)\s+versions?$/i,
      select: function(context, node) {
        var data = checkName(node.browser, context);
        return data.versions.filter(function(v) {
          return data.released.indexOf(v) === -1;
        }).map(nameMapper(data.name));
      }
    },
    last_years: {
      matches: ["years"],
      regexp: /^last\s+(\d*.?\d+)\s+years?$/i,
      select: function(context, node) {
        return filterByYear(Date.now() - YEAR * node.years, context);
      }
    },
    since_y: {
      matches: ["year"],
      regexp: /^since (\d+)$/i,
      select: sinceQuery
    },
    since_y_m: {
      matches: ["year", "month"],
      regexp: /^since (\d+)-(\d+)$/i,
      select: sinceQuery
    },
    since_y_m_d: {
      matches: ["year", "month", "day"],
      regexp: /^since (\d+)-(\d+)-(\d+)$/i,
      select: sinceQuery
    },
    popularity: {
      matches: ["sign", "popularity"],
      regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%$/,
      select: function(context, node) {
        var popularity = parseFloat(node.popularity);
        var usage = browserslist.usage.global;
        return Object.keys(usage).reduce(function(result, version2) {
          if (node.sign === ">") {
            if (usage[version2] > popularity) {
              result.push(version2);
            }
          } else if (node.sign === "<") {
            if (usage[version2] < popularity) {
              result.push(version2);
            }
          } else if (node.sign === "<=") {
            if (usage[version2] <= popularity) {
              result.push(version2);
            }
          } else if (usage[version2] >= popularity) {
            result.push(version2);
          }
          return result;
        }, []);
      }
    },
    popularity_in_my_stats: {
      matches: ["sign", "popularity"],
      regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+my\s+stats$/,
      select: function(context, node) {
        var popularity = parseFloat(node.popularity);
        if (!context.customUsage) {
          throw new BrowserslistError("Custom usage statistics was not provided");
        }
        var usage = context.customUsage;
        return Object.keys(usage).reduce(function(result, version2) {
          var percentage = usage[version2];
          if (percentage == null) {
            return result;
          }
          if (node.sign === ">") {
            if (percentage > popularity) {
              result.push(version2);
            }
          } else if (node.sign === "<") {
            if (percentage < popularity) {
              result.push(version2);
            }
          } else if (node.sign === "<=") {
            if (percentage <= popularity) {
              result.push(version2);
            }
          } else if (percentage >= popularity) {
            result.push(version2);
          }
          return result;
        }, []);
      }
    },
    popularity_in_config_stats: {
      matches: ["sign", "popularity", "config"],
      regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+(\S+)\s+stats$/,
      select: function(context, node) {
        var popularity = parseFloat(node.popularity);
        var stats = env.loadStat(context, node.config, browserslist.data);
        if (stats) {
          context.customUsage = {};
          for (var browser in stats) {
            fillUsage(context.customUsage, browser, stats[browser]);
          }
        }
        if (!context.customUsage) {
          throw new BrowserslistError("Custom usage statistics was not provided");
        }
        var usage = context.customUsage;
        return Object.keys(usage).reduce(function(result, version2) {
          var percentage = usage[version2];
          if (percentage == null) {
            return result;
          }
          if (node.sign === ">") {
            if (percentage > popularity) {
              result.push(version2);
            }
          } else if (node.sign === "<") {
            if (percentage < popularity) {
              result.push(version2);
            }
          } else if (node.sign === "<=") {
            if (percentage <= popularity) {
              result.push(version2);
            }
          } else if (percentage >= popularity) {
            result.push(version2);
          }
          return result;
        }, []);
      }
    },
    popularity_in_place: {
      matches: ["sign", "popularity", "place"],
      regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+((alt-)?\w\w)$/,
      select: function(context, node) {
        var popularity = parseFloat(node.popularity);
        var place = node.place;
        if (place.length === 2) {
          place = place.toUpperCase();
        } else {
          place = place.toLowerCase();
        }
        env.loadCountry(browserslist.usage, place, browserslist.data);
        var usage = browserslist.usage[place];
        return Object.keys(usage).reduce(function(result, version2) {
          var percentage = usage[version2];
          if (percentage == null) {
            return result;
          }
          if (node.sign === ">") {
            if (percentage > popularity) {
              result.push(version2);
            }
          } else if (node.sign === "<") {
            if (percentage < popularity) {
              result.push(version2);
            }
          } else if (node.sign === "<=") {
            if (percentage <= popularity) {
              result.push(version2);
            }
          } else if (percentage >= popularity) {
            result.push(version2);
          }
          return result;
        }, []);
      }
    },
    cover: {
      matches: ["coverage"],
      regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%$/i,
      select: coverQuery
    },
    cover_in: {
      matches: ["coverage", "place"],
      regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%\s+in\s+(my\s+stats|(alt-)?\w\w)$/i,
      select: coverQuery
    },
    supports: {
      matches: ["supportType", "feature"],
      regexp: /^(?:(fully|partially)\s+)?supports\s+([\w-]+)$/,
      select: function(context, node) {
        env.loadFeature(browserslist.cache, node.feature);
        var withPartial = node.supportType !== "fully";
        var features = browserslist.cache[node.feature];
        var result = [];
        for (var name2 in features) {
          var data = byName(name2, context);
          var checkDesktop = context.mobileToDesktop && name2 in browserslist.desktopNames && isSupported(features[name2][data.released.slice(-1)[0]], withPartial);
          data.versions.forEach(function(version2) {
            var flags = features[name2][version2];
            if (flags === undefined && checkDesktop) {
              flags = features[browserslist.desktopNames[name2]][version2];
            }
            if (isSupported(flags, withPartial)) {
              result.push(name2 + " " + version2);
            }
          });
        }
        return result;
      }
    },
    electron_range: {
      matches: ["from", "to"],
      regexp: /^electron\s+([\d.]+)\s*-\s*([\d.]+)$/i,
      select: function(context, node) {
        var fromToUse = normalizeElectron(node.from);
        var toToUse = normalizeElectron(node.to);
        var from2 = parseFloat(node.from);
        var to = parseFloat(node.to);
        if (!e2c[fromToUse]) {
          throw new BrowserslistError("Unknown version " + from2 + " of electron");
        }
        if (!e2c[toToUse]) {
          throw new BrowserslistError("Unknown version " + to + " of electron");
        }
        return Object.keys(e2c).filter(function(i2) {
          var parsed = parseFloat(i2);
          return parsed >= from2 && parsed <= to;
        }).map(function(i2) {
          return "chrome " + e2c[i2];
        });
      }
    },
    node_range: {
      matches: ["from", "to"],
      regexp: /^node\s+([\d.]+)\s*-\s*([\d.]+)$/i,
      select: function(context, node) {
        return browserslist.nodeVersions.filter(semverFilterLoose(">=", node.from)).filter(semverFilterLoose("<=", node.to)).map(function(v) {
          return "node " + v;
        });
      }
    },
    browser_range: {
      matches: ["browser", "from", "to"],
      regexp: /^(\w+)\s+([\d.]+)\s*-\s*([\d.]+)$/i,
      select: function(context, node) {
        var data = checkName(node.browser, context);
        var from2 = parseFloat(normalizeVersion(data, node.from) || node.from);
        var to = parseFloat(normalizeVersion(data, node.to) || node.to);
        function filter2(v) {
          var parsed = parseFloat(v);
          return parsed >= from2 && parsed <= to;
        }
        return data.released.filter(filter2).map(nameMapper(data.name));
      }
    },
    electron_ray: {
      matches: ["sign", "version"],
      regexp: /^electron\s*(>=?|<=?)\s*([\d.]+)$/i,
      select: function(context, node) {
        var versionToUse = normalizeElectron(node.version);
        return Object.keys(e2c).filter(generateFilter(node.sign, versionToUse)).map(function(i2) {
          return "chrome " + e2c[i2];
        });
      }
    },
    node_ray: {
      matches: ["sign", "version"],
      regexp: /^node\s*(>=?|<=?)\s*([\d.]+)$/i,
      select: function(context, node) {
        return browserslist.nodeVersions.filter(generateSemverFilter(node.sign, node.version)).map(function(v) {
          return "node " + v;
        });
      }
    },
    browser_ray: {
      matches: ["browser", "sign", "version"],
      regexp: /^(\w+)\s*(>=?|<=?)\s*([\d.]+)$/,
      select: function(context, node) {
        var version2 = node.version;
        var data = checkName(node.browser, context);
        var alias = browserslist.versionAliases[data.name][version2];
        if (alias)
          version2 = alias;
        return data.released.filter(generateFilter(node.sign, version2)).map(function(v) {
          return data.name + " " + v;
        });
      }
    },
    firefox_esr: {
      matches: [],
      regexp: /^(firefox|ff|fx)\s+esr$/i,
      select: function() {
        return ["firefox 115"];
      }
    },
    opera_mini_all: {
      matches: [],
      regexp: /(operamini|op_mini)\s+all/i,
      select: function() {
        return ["op_mini all"];
      }
    },
    electron_version: {
      matches: ["version"],
      regexp: /^electron\s+([\d.]+)$/i,
      select: function(context, node) {
        var versionToUse = normalizeElectron(node.version);
        var chrome = e2c[versionToUse];
        if (!chrome) {
          throw new BrowserslistError("Unknown version " + node.version + " of electron");
        }
        return ["chrome " + chrome];
      }
    },
    node_major_version: {
      matches: ["version"],
      regexp: /^node\s+(\d+)$/i,
      select: nodeQuery
    },
    node_minor_version: {
      matches: ["version"],
      regexp: /^node\s+(\d+\.\d+)$/i,
      select: nodeQuery
    },
    node_patch_version: {
      matches: ["version"],
      regexp: /^node\s+(\d+\.\d+\.\d+)$/i,
      select: nodeQuery
    },
    current_node: {
      matches: [],
      regexp: /^current\s+node$/i,
      select: function(context) {
        return [env.currentNode(resolve, context)];
      }
    },
    maintained_node: {
      matches: [],
      regexp: /^maintained\s+node\s+versions$/i,
      select: function(context) {
        var now = Date.now();
        var queries = Object.keys(jsEOL).filter(function(key2) {
          return now < Date.parse(jsEOL[key2].end) && now > Date.parse(jsEOL[key2].start) && isEolReleased(key2);
        }).map(function(key2) {
          return "node " + key2.slice(1);
        });
        return resolve(queries, context);
      }
    },
    phantomjs_1_9: {
      matches: [],
      regexp: /^phantomjs\s+1.9$/i,
      select: function() {
        return ["safari 5"];
      }
    },
    phantomjs_2_1: {
      matches: [],
      regexp: /^phantomjs\s+2.1$/i,
      select: function() {
        return ["safari 6"];
      }
    },
    browser_version: {
      matches: ["browser", "version"],
      regexp: /^(\w+)\s+(tp|[\d.]+)$/i,
      select: function(context, node) {
        var version2 = node.version;
        if (/^tp$/i.test(version2))
          version2 = "TP";
        var data = checkName(node.browser, context);
        var alias = normalizeVersion(data, version2);
        if (alias) {
          version2 = alias;
        } else {
          if (version2.indexOf(".") === -1) {
            alias = version2 + ".0";
          } else {
            alias = version2.replace(/\.0$/, "");
          }
          alias = normalizeVersion(data, alias);
          if (alias) {
            version2 = alias;
          } else if (context.ignoreUnknownVersions) {
            return [];
          } else {
            throw new BrowserslistError("Unknown version " + version2 + " of " + node.browser);
          }
        }
        return [data.name + " " + version2];
      }
    },
    browserslist_config: {
      matches: [],
      regexp: /^browserslist config$/i,
      select: function(context) {
        return browserslist(undefined, context);
      }
    },
    extends: {
      matches: ["config"],
      regexp: /^extends (.+)$/i,
      select: function(context, node) {
        return resolve(env.loadQueries(context, node.config), context);
      }
    },
    defaults: {
      matches: [],
      regexp: /^defaults$/i,
      select: function(context) {
        return resolve(browserslist.defaults, context);
      }
    },
    dead: {
      matches: [],
      regexp: /^dead$/i,
      select: function(context) {
        var dead = [
          "Baidu >= 0",
          "ie <= 11",
          "ie_mob <= 11",
          "bb <= 10",
          "op_mob <= 12.1",
          "samsung 4"
        ];
        return resolve(dead, context);
      }
    },
    unknown: {
      matches: [],
      regexp: /^(\w+)$/i,
      select: function(context, node) {
        if (byName(node.query, context)) {
          throw new BrowserslistError("Specify versions in Browserslist query for browser " + node.query);
        } else {
          throw unknownQuery(node.query);
        }
      }
    }
  };
  (function() {
    for (var name2 in agents) {
      var browser = agents[name2];
      browserslist.data[name2] = {
        name: name2,
        versions: normalize(agents[name2].versions),
        released: normalize(agents[name2].versions.slice(0, -3)),
        releaseDate: agents[name2].release_date
      };
      fillUsage(browserslist.usage.global, name2, browser.usage_global);
      browserslist.versionAliases[name2] = {};
      for (var i2 = 0;i2 < browser.versions.length; i2++) {
        var full = browser.versions[i2];
        if (!full)
          continue;
        if (full.indexOf("-") !== -1) {
          var interval = full.split("-");
          for (var j = 0;j < interval.length; j++) {
            browserslist.versionAliases[name2][interval[j]] = full;
          }
        }
      }
    }
    browserslist.nodeVersions = jsReleases.map(function(release) {
      return release.version;
    });
  })();
  module.exports = browserslist;
});

// node_modules/lightningcss/node/browserslistToTargets.js
var require_browserslistToTargets = __commonJS((exports, module) => {
  var browserslistToTargets = function(browserslist) {
    let targets = {};
    for (let browser of browserslist) {
      let [name2, v] = browser.split(" ");
      if (BROWSER_MAPPING[name2] === null) {
        continue;
      }
      let version2 = parseVersion(v);
      if (version2 == null) {
        continue;
      }
      if (targets[name2] == null || version2 < targets[name2]) {
        targets[name2] = version2;
      }
    }
    return targets;
  };
  var parseVersion = function(version2) {
    let [major, minor = 0, patch = 0] = version2.split("-")[0].split(".").map((v) => parseInt(v, 10));
    if (isNaN(major) || isNaN(minor) || isNaN(patch)) {
      return null;
    }
    return major << 16 | minor << 8 | patch;
  };
  var BROWSER_MAPPING = {
    and_chr: "chrome",
    and_ff: "firefox",
    ie_mob: "ie",
    op_mob: "opera",
    and_qq: null,
    and_uc: null,
    baidu: null,
    bb: null,
    kaios: null,
    op_mini: null
  };
  module.exports = browserslistToTargets;
});

// node_modules/lightningcss/node/composeVisitors.js
var require_composeVisitors = __commonJS((exports, module) => {
  var composeVisitors = function(visitors) {
    if (visitors.length === 1) {
      return visitors[0];
    }
    let res = {};
    composeObjectVisitors(res, visitors, "Rule", ruleVisitor, wrapUnknownAtRule);
    composeObjectVisitors(res, visitors, "RuleExit", ruleVisitor, wrapUnknownAtRule);
    composeObjectVisitors(res, visitors, "Declaration", declarationVisitor, wrapCustomProperty);
    composeObjectVisitors(res, visitors, "DeclarationExit", declarationVisitor, wrapCustomProperty);
    composeSimpleVisitors(res, visitors, "Url");
    composeSimpleVisitors(res, visitors, "Color");
    composeSimpleVisitors(res, visitors, "Image");
    composeSimpleVisitors(res, visitors, "ImageExit");
    composeSimpleVisitors(res, visitors, "Length");
    composeSimpleVisitors(res, visitors, "Angle");
    composeSimpleVisitors(res, visitors, "Ratio");
    composeSimpleVisitors(res, visitors, "Resolution");
    composeSimpleVisitors(res, visitors, "Time");
    composeSimpleVisitors(res, visitors, "CustomIdent");
    composeSimpleVisitors(res, visitors, "DashedIdent");
    composeArrayFunctions(res, visitors, "MediaQuery");
    composeArrayFunctions(res, visitors, "MediaQueryExit");
    composeSimpleVisitors(res, visitors, "SupportsCondition");
    composeSimpleVisitors(res, visitors, "SupportsConditionExit");
    composeArrayFunctions(res, visitors, "Selector");
    composeTokenVisitors(res, visitors, "Token", "token", false);
    composeTokenVisitors(res, visitors, "Function", "function", false);
    composeTokenVisitors(res, visitors, "FunctionExit", "function", true);
    composeTokenVisitors(res, visitors, "Variable", "var", false);
    composeTokenVisitors(res, visitors, "VariableExit", "var", true);
    composeTokenVisitors(res, visitors, "EnvironmentVariable", "env", false);
    composeTokenVisitors(res, visitors, "EnvironmentVariableExit", "env", true);
    return res;
  };
  var wrapUnknownAtRule = function(k, f) {
    return k === "unknown" ? (value2) => f({ type: "unknown", value: value2 }) : f;
  };
  var wrapCustomProperty = function(k, f) {
    return k === "custom" ? (value2) => f({ property: "custom", value: value2 }) : f;
  };
  var ruleVisitor = function(f, item) {
    if (typeof f === "object") {
      if (item.type === "unknown") {
        let v = f.unknown;
        if (typeof v === "object") {
          v = v[item.value.name];
        }
        return v?.(item.value);
      }
      return f[item.type]?.(item);
    }
    return f?.(item);
  };
  var declarationVisitor = function(f, item) {
    if (typeof f === "object") {
      let name2 = item.property;
      if (item.property === "unparsed") {
        name2 = item.value.propertyId.property;
      } else if (item.property === "custom") {
        let v = f.custom;
        if (typeof v === "object") {
          v = v[item.value.name];
        }
        return v?.(item.value);
      }
      return f[name2]?.(item);
    }
    return f?.(item);
  };
  var extractObjectsOrFunctions = function(visitors, key2) {
    let values2 = [];
    let hasFunction = false;
    let allKeys = new Set;
    for (let visitor of visitors) {
      let v = visitor[key2];
      if (v) {
        if (typeof v === "function") {
          hasFunction = true;
        } else {
          for (let key3 in v) {
            allKeys.add(key3);
          }
        }
        values2.push(v);
      }
    }
    return [values2, hasFunction, allKeys];
  };
  var composeObjectVisitors = function(res, visitors, key2, apply, wrapKey) {
    let [values2, hasFunction, allKeys] = extractObjectsOrFunctions(visitors, key2);
    if (values2.length === 0) {
      return;
    }
    if (values2.length === 1) {
      res[key2] = values2[0];
      return;
    }
    let f = createArrayVisitor(visitors, (visitor, item) => apply(visitor[key2], item));
    if (hasFunction) {
      res[key2] = f;
    } else {
      let v = {};
      for (let k of allKeys) {
        v[k] = wrapKey(k, f);
      }
      res[key2] = v;
    }
  };
  var composeTokenVisitors = function(res, visitors, key2, type, isExit) {
    let [values2, hasFunction, allKeys] = extractObjectsOrFunctions(visitors, key2);
    if (values2.length === 0) {
      return;
    }
    if (values2.length === 1) {
      res[key2] = values2[0];
      return;
    }
    let f = createTokenVisitor(visitors, type, isExit);
    if (hasFunction) {
      res[key2] = f;
    } else {
      let v = {};
      for (let key3 of allKeys) {
        v[key3] = f;
      }
      res[key2] = v;
    }
  };
  var createTokenVisitor = function(visitors, type, isExit) {
    let v = createArrayVisitor(visitors, (visitor, item) => {
      let f;
      switch (item.type) {
        case "token":
          f = visitor.Token;
          if (typeof f === "object") {
            f = f[item.value.type];
          }
          break;
        case "function":
          f = isExit ? visitor.FunctionExit : visitor.Function;
          if (typeof f === "object") {
            f = f[item.value.name];
          }
          break;
        case "var":
          f = isExit ? visitor.VariableExit : visitor.Variable;
          break;
        case "env":
          f = isExit ? visitor.EnvironmentVariableExit : visitor.EnvironmentVariable;
          if (typeof f === "object") {
            let name2;
            switch (item.value.name.type) {
              case "ua":
              case "unknown":
                name2 = item.value.name.value;
                break;
              case "custom":
                name2 = item.value.name.ident;
                break;
            }
            f = f[name2];
          }
          break;
        case "color":
          f = visitor.Color;
          break;
        case "url":
          f = visitor.Url;
          break;
        case "length":
          f = visitor.Length;
          break;
        case "angle":
          f = visitor.Angle;
          break;
        case "time":
          f = visitor.Time;
          break;
        case "resolution":
          f = visitor.Resolution;
          break;
        case "dashed-ident":
          f = visitor.DashedIdent;
          break;
      }
      if (!f) {
        return;
      }
      let res = f(item.value);
      switch (item.type) {
        case "color":
        case "url":
        case "length":
        case "angle":
        case "time":
        case "resolution":
        case "dashed-ident":
          if (Array.isArray(res)) {
            res = res.map((value2) => ({ type: item.type, value: value2 }));
          } else if (res) {
            res = { type: item.type, value: res };
          }
          break;
      }
      return res;
    });
    return (value2) => v({ type, value: value2 });
  };
  var extractFunctions = function(visitors, key2) {
    let functions = [];
    for (let visitor of visitors) {
      let f = visitor[key2];
      if (f) {
        functions.push(f);
      }
    }
    return functions;
  };
  var composeSimpleVisitors = function(res, visitors, key2) {
    let functions = extractFunctions(visitors, key2);
    if (functions.length === 0) {
      return;
    }
    if (functions.length === 1) {
      res[key2] = functions[0];
      return;
    }
    res[key2] = (arg) => {
      let mutated = false;
      for (let f of functions) {
        let res2 = f(arg);
        if (res2) {
          arg = res2;
          mutated = true;
        }
      }
      return mutated ? arg : undefined;
    };
  };
  var composeArrayFunctions = function(res, visitors, key2) {
    let functions = extractFunctions(visitors, key2);
    if (functions.length === 0) {
      return;
    }
    if (functions.length === 1) {
      res[key2] = functions[0];
      return;
    }
    res[key2] = createArrayVisitor(functions, (f, item) => f(item));
  };
  var createArrayVisitor = function(visitors, apply) {
    let seen = new Bitset(visitors.length);
    return (arg) => {
      let arr = [arg];
      let mutated = false;
      seen.clear();
      for (let i2 = 0;i2 < arr.length; i2++) {
        for (let v = 0;v < visitors.length; ) {
          if (seen.get(v)) {
            v++;
            continue;
          }
          let item = arr[i2];
          let visitor = visitors[v];
          let res = apply(visitor, item);
          if (Array.isArray(res)) {
            if (res.length === 0) {
              arr.splice(i2, 1);
            } else if (res.length === 1) {
              arr[i2] = res[0];
            } else {
              arr.splice(i2, 1, ...res);
            }
            mutated = true;
            seen.set(v);
            v = 0;
          } else if (res) {
            arr[i2] = res;
            mutated = true;
            seen.set(v);
            v = 0;
          } else {
            v++;
          }
        }
      }
      if (!mutated) {
        return;
      }
      return arr.length === 1 ? arr[0] : arr;
    };
  };
  module.exports = composeVisitors;

  class Bitset {
    constructor(maxBits = 32) {
      this.bits = 0;
      this.more = maxBits > 32 ? new Uint32Array(Math.ceil((maxBits - 32) / 32)) : null;
    }
    get(bit) {
      if (bit >= 32 && this.more) {
        let i2 = Math.floor((bit - 32) / 32);
        let b = bit % 32;
        return Boolean(this.more[i2] & 1 << b);
      } else {
        return Boolean(this.bits & 1 << bit);
      }
    }
    set(bit) {
      if (bit >= 32 && this.more) {
        let i2 = Math.floor((bit - 32) / 32);
        let b = bit % 32;
        this.more[i2] |= 1 << b;
      } else {
        this.bits |= 1 << bit;
      }
    }
    clear() {
      this.bits = 0;
      if (this.more) {
        this.more.fill(0);
      }
    }
  }
});

// node_modules/lightningcss/node/flags.js
var require_flags = __commonJS((exports) => {
  exports.Features = {
    Nesting: 1,
    NotSelectorList: 2,
    DirSelector: 4,
    LangSelectorList: 8,
    IsSelector: 16,
    TextDecorationThicknessPercent: 32,
    MediaIntervalSyntax: 64,
    MediaRangeSyntax: 128,
    CustomMediaQueries: 256,
    ClampFunction: 512,
    ColorFunction: 1024,
    OklabColors: 2048,
    LabColors: 4096,
    P3Colors: 8192,
    HexAlphaColors: 16384,
    SpaceSeparatedColorNotation: 32768,
    FontFamilySystemUi: 65536,
    DoublePositionGradients: 131072,
    VendorPrefixes: 262144,
    LogicalProperties: 524288,
    Selectors: 31,
    MediaQueries: 448,
    Colors: 64512
  };
});

// node_modules/lightningcss/node/index.js
var require_node2 = __commonJS((exports, module) => {
  var parts = [process.platform, process.arch];
  if (process.platform === "linux") {
    const { MUSL, family } = import.meta.require("detect-libc");
    if (family === MUSL) {
      parts.push("musl");
    } else if (process.arch === "arm") {
      parts.push("gnueabihf");
    } else {
      parts.push("gnu");
    }
  } else if (process.platform === "win32") {
    parts.push("msvc");
  }
  if (false) {
  } else {
    try {
      module.exports = import.meta.require(`lightningcss-${parts.join("-")}`);
    } catch (err) {
      module.exports = import.meta.require(`../lightningcss.${parts.join("-")}.node`);
    }
  }
  module.exports.browserslistToTargets = require_browserslistToTargets();
  module.exports.composeVisitors = require_composeVisitors();
  module.exports.Features = require_flags().Features;
});

// node_modules/mri/lib/index.mjs
var toArr = function(any) {
  return any == null ? [] : Array.isArray(any) ? any : [any];
};
var toVal = function(out, key, val, opts) {
  var x, old = out[key], nxt = ~opts.string.indexOf(key) ? val == null || val === true ? "" : String(val) : typeof val === "boolean" ? val : ~opts.boolean.indexOf(key) ? val === "false" ? false : val === "true" || (out._.push((x = +val, x * 0 === 0) ? x : val), !!val) : (x = +val, x * 0 === 0) ? x : val;
  out[key] = old == null ? nxt : Array.isArray(old) ? old.concat(nxt) : [old, nxt];
};
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
var r = function(e) {
  if (!e.length)
    return "";
  let t = function(e2) {
    let t2 = 0, i = 0, s = 0, r2 = e2.length;
    if (r2)
      for (;r2--; )
        i = e2[r2].length, i > t2 && (s = r2, t2 = i);
    return e2[s].length;
  }(e.map((e2) => e2[0])) + 4;
  return e.map((e2) => e2[0] + " ".repeat(t - e2[0].length) + e2[1] + (e2[2] == null ? "" : `  (default ${e2[2]})`));
};
var n = function(e) {
  return e;
};
var l = function(e, t, i) {
  if (!t || !t.length)
    return "";
  let r2 = 0, n2 = "";
  for (n2 += "\n  " + e;r2 < t.length; r2++)
    n2 += "\n    " + i(t[r2]);
  return n2 + s;
};
var a = function(e, t, i = 1) {
  let s = l("ERROR", [t], n);
  s += `\n  Run \`\$ ${e} --help\` for more info.\n`, console.error(s), process.exit(i);
};
var t = "__all__";
var i = "__default__";
var s = "\n";

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
          typeof a2[e3] == "string" || t2.test(e3) || o3.push([e3, (a2[e3].describe || [""])[0]]) < 3 && (i2 += `\n    ${c} ${e3} --help`);
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

// node_modules/kleur/index.mjs
var run = function(arr, str) {
  let i2 = 0, tmp, beg = "", end = "";
  for (;i2 < arr.length; i2++) {
    tmp = arr[i2];
    beg += tmp.open;
    end += tmp.close;
    if (!!~str.indexOf(tmp.close)) {
      str = str.replace(tmp.rgx, tmp.close + tmp.open);
    }
  }
  return beg + str + end;
};
var chain = function(has, keys) {
  let ctx = { has, keys };
  ctx.reset = $.reset.bind(ctx);
  ctx.bold = $.bold.bind(ctx);
  ctx.dim = $.dim.bind(ctx);
  ctx.italic = $.italic.bind(ctx);
  ctx.underline = $.underline.bind(ctx);
  ctx.inverse = $.inverse.bind(ctx);
  ctx.hidden = $.hidden.bind(ctx);
  ctx.strikethrough = $.strikethrough.bind(ctx);
  ctx.black = $.black.bind(ctx);
  ctx.red = $.red.bind(ctx);
  ctx.green = $.green.bind(ctx);
  ctx.yellow = $.yellow.bind(ctx);
  ctx.blue = $.blue.bind(ctx);
  ctx.magenta = $.magenta.bind(ctx);
  ctx.cyan = $.cyan.bind(ctx);
  ctx.white = $.white.bind(ctx);
  ctx.gray = $.gray.bind(ctx);
  ctx.grey = $.grey.bind(ctx);
  ctx.bgBlack = $.bgBlack.bind(ctx);
  ctx.bgRed = $.bgRed.bind(ctx);
  ctx.bgGreen = $.bgGreen.bind(ctx);
  ctx.bgYellow = $.bgYellow.bind(ctx);
  ctx.bgBlue = $.bgBlue.bind(ctx);
  ctx.bgMagenta = $.bgMagenta.bind(ctx);
  ctx.bgCyan = $.bgCyan.bind(ctx);
  ctx.bgWhite = $.bgWhite.bind(ctx);
  return ctx;
};
var init = function(open, close) {
  let blk = {
    open: `\x1B[${open}m`,
    close: `\x1B[${close}m`,
    rgx: new RegExp(`\\x1b\\[${close}m`, "g")
  };
  return function(txt) {
    if (this !== undefined && this.has !== undefined) {
      !!~this.has.indexOf(open) || (this.has.push(open), this.keys.push(blk));
      return txt === undefined ? this : $.enabled ? run(this.keys, txt + "") : txt + "";
    }
    return txt === undefined ? chain([open], [blk]) : $.enabled ? run([blk], txt + "") : txt + "";
  };
};
var FORCE_COLOR;
var NODE_DISABLE_COLORS;
var NO_COLOR;
var TERM;
var isTTY = true;
if (typeof process !== "undefined") {
  ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
  isTTY = process.stdout && process.stdout.isTTY;
}
var $ = {
  enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY),
  reset: init(0, 0),
  bold: init(1, 22),
  dim: init(2, 22),
  italic: init(3, 23),
  underline: init(4, 24),
  inverse: init(7, 27),
  hidden: init(8, 28),
  strikethrough: init(9, 29),
  black: init(30, 39),
  red: init(31, 39),
  green: init(32, 39),
  yellow: init(33, 39),
  blue: init(34, 39),
  magenta: init(35, 39),
  cyan: init(36, 39),
  white: init(37, 39),
  gray: init(90, 39),
  grey: init(90, 39),
  bgBlack: init(40, 49),
  bgRed: init(41, 49),
  bgGreen: init(42, 49),
  bgYellow: init(43, 49),
  bgBlue: init(44, 49),
  bgMagenta: init(45, 49),
  bgCyan: init(46, 49),
  bgWhite: init(47, 49)
};
var kleur_default = $;

// src/cli/index.js
var import_prompts = __toESM(require_prompts3(), 1);

// package.json
var version = "0.0.2";

// src/cli/src/get_config.js
import fs3 from "fs";
import path2 from "path";

// /Users/marshall/code/stabilimentum/packages/zilker/node_modules/zilker/dist/files/index.js
function* yieldAttributes() {
  for (const attribute of this)
    yield attribute;
}
function* walk(parent3, accept) {
  for (const node7 of parent3[childNodes]) {
    switch (asType(accept, node7[nodeType])) {
      case ELEMENT_NODE:
        yield node7;
        yield* walk(node7, accept);
        break;
      case COMMENT_NODE:
        yield node7;
        break;
    }
  }
}
import fs from "fs";
import fs2 from "fs";
import path from "path";
var cloned = function(node) {
  return setParentNode.call(this, node.cloneNode(true));
};
var setParentNode = function(node) {
  node[parentNode] = this;
  return node;
};
var withNewParent = function(node) {
  return changeParentNode(node, this);
};
var replaceCodePoint = function(codePoint) {
  var _a;
  if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
    return 65533;
  }
  return (_a = decodeMap.get(codePoint)) !== null && _a !== undefined ? _a : codePoint;
};
var determineBranch = function(decodeTree, current, nodeIdx, char) {
  const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
  const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
  if (branchCount === 0) {
    return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
  }
  if (jumpOffset) {
    const value2 = char - jumpOffset;
    return value2 < 0 || value2 >= branchCount ? -1 : decodeTree[nodeIdx + value2] - 1;
  }
  let lo = nodeIdx;
  let hi = lo + branchCount - 1;
  while (lo <= hi) {
    const mid = lo + hi >>> 1;
    const midVal = decodeTree[mid];
    if (midVal < char) {
      lo = mid + 1;
    } else if (midVal > char) {
      hi = mid - 1;
    } else {
      return decodeTree[mid + branchCount];
    }
  }
  return -1;
};
var isTag = function(elem) {
  return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
};
var isTag2 = function(node5) {
  return isTag(node5);
};
var isCDATA = function(node5) {
  return node5.type === ElementType.CDATA;
};
var isText = function(node5) {
  return node5.type === ElementType.Text;
};
var isComment = function(node5) {
  return node5.type === ElementType.Comment;
};
var isDirective = function(node5) {
  return node5.type === ElementType.Directive;
};
var isDocument = function(node5) {
  return node5.type === ElementType.Root;
};
var hasChildren = function(node5) {
  return Object.prototype.hasOwnProperty.call(node5, "children");
};
var cloneNode = function(node5, recursive = false) {
  let result;
  if (isText(node5)) {
    result = new Text3(node5.data);
  } else if (isComment(node5)) {
    result = new Comment3(node5.data);
  } else if (isTag2(node5)) {
    const children = recursive ? cloneChildren(node5.children) : [];
    const clone = new Element(node5.name, { ...node5.attribs }, children);
    children.forEach((child) => child.parent = clone);
    if (node5.namespace != null) {
      clone.namespace = node5.namespace;
    }
    if (node5["x-attribsNamespace"]) {
      clone["x-attribsNamespace"] = { ...node5["x-attribsNamespace"] };
    }
    if (node5["x-attribsPrefix"]) {
      clone["x-attribsPrefix"] = { ...node5["x-attribsPrefix"] };
    }
    result = clone;
  } else if (isCDATA(node5)) {
    const children = recursive ? cloneChildren(node5.children) : [];
    const clone = new CDATA2(children);
    children.forEach((child) => child.parent = clone);
    result = clone;
  } else if (isDocument(node5)) {
    const children = recursive ? cloneChildren(node5.children) : [];
    const clone = new Document(children);
    children.forEach((child) => child.parent = clone);
    if (node5["x-mode"]) {
      clone["x-mode"] = node5["x-mode"];
    }
    result = clone;
  } else if (isDirective(node5)) {
    const instruction = new ProcessingInstruction(node5.name, node5.data);
    if (node5["x-name"] != null) {
      instruction["x-name"] = node5["x-name"];
      instruction["x-publicId"] = node5["x-publicId"];
      instruction["x-systemId"] = node5["x-systemId"];
    }
    result = instruction;
  } else {
    throw new Error(`Not implemented yet: ${node5.type}`);
  }
  result.startIndex = node5.startIndex;
  result.endIndex = node5.endIndex;
  if (node5.sourceCodeLocation != null) {
    result.sourceCodeLocation = node5.sourceCodeLocation;
  }
  return result;
};
var parseDocument = function(data, options) {
  const handler = new DomHandler(undefined, options);
  new Parser(handler, options).end(data);
  return handler.root;
};
var parseDOM = function(data, options) {
  return parseDocument(data, options).children;
};
var createDocumentStream = function(callback, options, elementCallback) {
  const handler = new DomHandler((error) => callback(error, handler.root), options, elementCallback);
  return new Parser(handler, options);
};
var createDomStream = function(callback, options, elementCallback) {
  const handler = new DomHandler(callback, options, elementCallback);
  return new Parser(handler, options);
};
var encodeXML = function(str) {
  let ret = "";
  let lastIdx = 0;
  let match;
  while ((match = xmlReplacer.exec(str)) !== null) {
    const i2 = match.index;
    const char = str.charCodeAt(i2);
    const next = xmlCodeMap.get(char);
    if (next !== undefined) {
      ret += str.substring(lastIdx, i2) + next;
      lastIdx = i2 + 1;
    } else {
      ret += `${str.substring(lastIdx, i2)}&#x${getCodePoint(str, i2).toString(16)};`;
      lastIdx = xmlReplacer.lastIndex += Number((char & 64512) === 55296);
    }
  }
  return ret + str.substr(lastIdx);
};
var render = function(node7, options = {}) {
  const nodes = "length" in node7 ? node7 : [node7];
  let output = "";
  for (let i2 = 0;i2 < nodes.length; i2++) {
    output += renderNode(nodes[i2], options);
  }
  return output;
};
var getOuterHTML = function(node7, options) {
  return esm_default(node7, options);
};
var getInnerHTML = function(node7, options) {
  return hasChildren(node7) ? node7.children.map((node8) => getOuterHTML(node8, options)).join("") : "";
};
var getText = function(node7) {
  if (Array.isArray(node7))
    return node7.map(getText).join("");
  if (isTag2(node7))
    return node7.name === "br" ? "\n" : getText(node7.children);
  if (isCDATA(node7))
    return getText(node7.children);
  if (isText(node7))
    return node7.data;
  return "";
};
var textContent = function(node7) {
  if (Array.isArray(node7))
    return node7.map(textContent).join("");
  if (hasChildren(node7) && !isComment(node7)) {
    return textContent(node7.children);
  }
  if (isText(node7))
    return node7.data;
  return "";
};
var innerText = function(node7) {
  if (Array.isArray(node7))
    return node7.map(innerText).join("");
  if (hasChildren(node7) && (node7.type === ElementType.Tag || isCDATA(node7))) {
    return innerText(node7.children);
  }
  if (isText(node7))
    return node7.data;
  return "";
};
var getChildren = function(elem) {
  return hasChildren(elem) ? elem.children : [];
};
var getParent = function(elem) {
  return elem.parent || null;
};
var getSiblings = function(elem) {
  const parent2 = getParent(elem);
  if (parent2 != null)
    return getChildren(parent2);
  const siblings = [elem];
  let { prev, next } = elem;
  while (prev != null) {
    siblings.unshift(prev);
    ({ prev } = prev);
  }
  while (next != null) {
    siblings.push(next);
    ({ next } = next);
  }
  return siblings;
};
var getAttributeValue = function(elem, name2) {
  var _a2;
  return (_a2 = elem.attribs) === null || _a2 === undefined ? undefined : _a2[name2];
};
var hasAttrib = function(elem, name2) {
  return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name2) && elem.attribs[name2] != null;
};
var getName = function(elem) {
  return elem.name;
};
var nextElementSibling = function(elem) {
  let { next } = elem;
  while (next !== null && !isTag2(next))
    ({ next } = next);
  return next;
};
var prevElementSibling = function(elem) {
  let { prev } = elem;
  while (prev !== null && !isTag2(prev))
    ({ prev } = prev);
  return prev;
};
var removeElement = function(elem) {
  if (elem.prev)
    elem.prev.next = elem.next;
  if (elem.next)
    elem.next.prev = elem.prev;
  if (elem.parent) {
    const childs = elem.parent.children;
    const childsIndex = childs.lastIndexOf(elem);
    if (childsIndex >= 0) {
      childs.splice(childsIndex, 1);
    }
  }
  elem.next = null;
  elem.prev = null;
  elem.parent = null;
};
var replaceElement = function(elem, replacement) {
  const prev = replacement.prev = elem.prev;
  if (prev) {
    prev.next = replacement;
  }
  const next = replacement.next = elem.next;
  if (next) {
    next.prev = replacement;
  }
  const parent2 = replacement.parent = elem.parent;
  if (parent2) {
    const childs = parent2.children;
    childs[childs.lastIndexOf(elem)] = replacement;
    elem.parent = null;
  }
};
var appendChild = function(parent2, child) {
  removeElement(child);
  child.next = null;
  child.parent = parent2;
  if (parent2.children.push(child) > 1) {
    const sibling = parent2.children[parent2.children.length - 2];
    sibling.next = child;
    child.prev = sibling;
  } else {
    child.prev = null;
  }
};
var append = function(elem, next) {
  removeElement(next);
  const { parent: parent2 } = elem;
  const currNext = elem.next;
  next.next = currNext;
  next.prev = elem;
  elem.next = next;
  next.parent = parent2;
  if (currNext) {
    currNext.prev = next;
    if (parent2) {
      const childs = parent2.children;
      childs.splice(childs.lastIndexOf(currNext), 0, next);
    }
  } else if (parent2) {
    parent2.children.push(next);
  }
};
var prependChild = function(parent2, child) {
  removeElement(child);
  child.parent = parent2;
  child.prev = null;
  if (parent2.children.unshift(child) !== 1) {
    const sibling = parent2.children[1];
    sibling.prev = child;
    child.next = sibling;
  } else {
    child.next = null;
  }
};
var prepend = function(elem, prev) {
  removeElement(prev);
  const { parent: parent2 } = elem;
  if (parent2) {
    const childs = parent2.children;
    childs.splice(childs.indexOf(elem), 0, prev);
  }
  if (elem.prev) {
    elem.prev.next = prev;
  }
  prev.parent = parent2;
  prev.prev = elem.prev;
  prev.next = elem;
  elem.prev = prev;
};
var filter = function(test, node7, recurse = true, limit = Infinity) {
  return find(test, Array.isArray(node7) ? node7 : [node7], recurse, limit);
};
var find = function(test, nodes, recurse, limit) {
  const result = [];
  const nodeStack = [nodes];
  const indexStack = [0];
  for (;; ) {
    if (indexStack[0] >= nodeStack[0].length) {
      if (indexStack.length === 1) {
        return result;
      }
      nodeStack.shift();
      indexStack.shift();
      continue;
    }
    const elem = nodeStack[0][indexStack[0]++];
    if (test(elem)) {
      result.push(elem);
      if (--limit <= 0)
        return result;
    }
    if (recurse && hasChildren(elem) && elem.children.length > 0) {
      indexStack.unshift(0);
      nodeStack.unshift(elem.children);
    }
  }
};
var findOneChild = function(test, nodes) {
  return nodes.find(test);
};
var findOne = function(test, nodes, recurse = true) {
  let elem = null;
  for (let i2 = 0;i2 < nodes.length && !elem; i2++) {
    const node7 = nodes[i2];
    if (!isTag2(node7)) {
      continue;
    } else if (test(node7)) {
      elem = node7;
    } else if (recurse && node7.children.length > 0) {
      elem = findOne(test, node7.children, true);
    }
  }
  return elem;
};
var existsOne = function(test, nodes) {
  return nodes.some((checked) => isTag2(checked) && (test(checked) || existsOne(test, checked.children)));
};
var findAll = function(test, nodes) {
  const result = [];
  const nodeStack = [nodes];
  const indexStack = [0];
  for (;; ) {
    if (indexStack[0] >= nodeStack[0].length) {
      if (nodeStack.length === 1) {
        return result;
      }
      nodeStack.shift();
      indexStack.shift();
      continue;
    }
    const elem = nodeStack[0][indexStack[0]++];
    if (!isTag2(elem))
      continue;
    if (test(elem))
      result.push(elem);
    if (elem.children.length > 0) {
      indexStack.unshift(0);
      nodeStack.unshift(elem.children);
    }
  }
};
var testElement = function(options, node7) {
  const test = compileTest(options);
  return test ? test(node7) : true;
};
var getElements = function(options, nodes, recurse, limit = Infinity) {
  const test = compileTest(options);
  return test ? filter(test, nodes, recurse, limit) : [];
};
var getElementById2 = function(id, nodes, recurse = true) {
  if (!Array.isArray(nodes))
    nodes = [nodes];
  return findOne(getAttribCheck("id", id), nodes, recurse);
};
var getElementsByTagName2 = function(tagName, nodes, recurse = true, limit = Infinity) {
  return filter(Checks["tag_name"](tagName), nodes, recurse, limit);
};
var getElementsByTagType = function(type, nodes, recurse = true, limit = Infinity) {
  return filter(Checks["tag_type"](type), nodes, recurse, limit);
};
var removeSubsets = function(nodes) {
  let idx = nodes.length;
  while (--idx >= 0) {
    const node7 = nodes[idx];
    if (idx > 0 && nodes.lastIndexOf(node7, idx - 1) >= 0) {
      nodes.splice(idx, 1);
      continue;
    }
    for (let ancestor = node7.parent;ancestor; ancestor = ancestor.parent) {
      if (nodes.includes(ancestor)) {
        nodes.splice(idx, 1);
        break;
      }
    }
  }
  return nodes;
};
var compareDocumentPosition = function(nodeA, nodeB) {
  const aParents = [];
  const bParents = [];
  if (nodeA === nodeB) {
    return 0;
  }
  let current = hasChildren(nodeA) ? nodeA : nodeA.parent;
  while (current) {
    aParents.unshift(current);
    current = current.parent;
  }
  current = hasChildren(nodeB) ? nodeB : nodeB.parent;
  while (current) {
    bParents.unshift(current);
    current = current.parent;
  }
  const maxIdx = Math.min(aParents.length, bParents.length);
  let idx = 0;
  while (idx < maxIdx && aParents[idx] === bParents[idx]) {
    idx++;
  }
  if (idx === 0) {
    return DocumentPosition.DISCONNECTED;
  }
  const sharedParent = aParents[idx - 1];
  const siblings = sharedParent.children;
  const aSibling = aParents[idx];
  const bSibling = bParents[idx];
  if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
    if (sharedParent === nodeB) {
      return DocumentPosition.FOLLOWING | DocumentPosition.CONTAINED_BY;
    }
    return DocumentPosition.FOLLOWING;
  }
  if (sharedParent === nodeA) {
    return DocumentPosition.PRECEDING | DocumentPosition.CONTAINS;
  }
  return DocumentPosition.PRECEDING;
};
var uniqueSort = function(nodes) {
  nodes = nodes.filter((node7, i2, arr) => !arr.includes(node7, i2 + 1));
  nodes.sort((a2, b) => {
    const relative = compareDocumentPosition(a2, b);
    if (relative & DocumentPosition.PRECEDING) {
      return -1;
    } else if (relative & DocumentPosition.FOLLOWING) {
      return 1;
    }
    return 0;
  });
  return nodes;
};
var getFeed = function(doc) {
  const feedRoot = getOneElement(isValidFeed, doc);
  return !feedRoot ? null : feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot);
};
var parseFeed = function(feed, options = parseFeedDefaultOptions) {
  return getFeed(parseDOM(feed, options));
};
var __defProp2 = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp2(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var ELEMENT_NODE = 1;
var ATTRIBUTE_NODE = 2;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var DOCUMENT_NODE = 9;
var DOCUMENT_TYPE_NODE = 10;
var DOCUMENT_FRAGMENT_NODE = 11;
var localName = Symbol("localName");
var nodeName = Symbol("nodeName");
var nodeType = Symbol("nodeType");
var documentElement = Symbol("documentElement");
var ownerDocument = Symbol("ownerDocument");
var ownerElement = Symbol("ownerElement");
var childNodes = Symbol("childNodes");
var parentNode = Symbol("parentNode");
var attributes = Symbol("attributes");
var name = Symbol("name");
var value = Symbol("value");
var SVG_NAMESPACE = "http://www.w3.org/2000/svg";
var empty = [];
var asElement = ({ [nodeType]: type }) => type === ELEMENT_NODE;
var changeParentNode = (node, parent) => {
  if (node[nodeType] === DOCUMENT_FRAGMENT_NODE)
    node[childNodes].forEach(setParentNode, parent);
  else {
    if (node[parentNode]) {
      const { [childNodes]: nodes } = node[parentNode];
      nodes.splice(nodes.indexOf(node), 1);
    }
    node[parentNode] = parent;
  }
  return node;
};
var getNodes = (element) => element[childNodes] === empty ? element[childNodes] = [] : element[childNodes];
var isSVG = (name2) => name2 === "svg" || name2 === "SVG";
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
var push = (array, nodes) => {
  array.push(...nodes.flatMap(withoutFragments));
};
var splice = (array, start, drop, nodes) => {
  array.splice(start, drop, ...nodes.flatMap(withoutFragments));
};
var unshift = (array, nodes) => {
  array.unshift(...nodes.flatMap(withoutFragments));
};
var withoutFragments = (node) => node[nodeType] === DOCUMENT_FRAGMENT_NODE ? node[childNodes].splice(0) : node;
var map = (values, parent) => values.map(withNewParent, parent);

class Node {
  static {
    this.ELEMENT_NODE = ELEMENT_NODE;
    this.ATTRIBUTE_NODE = ATTRIBUTE_NODE;
    this.TEXT_NODE = TEXT_NODE;
    this.COMMENT_NODE = COMMENT_NODE;
    this.DOCUMENT_NODE = DOCUMENT_NODE;
    this.DOCUMENT_FRAGMENT_NODE = DOCUMENT_FRAGMENT_NODE;
  }
  constructor(type, owner) {
    this[parentNode] = null;
    this[nodeType] = type;
    this[ownerDocument] = owner;
  }
  get parentNode() {
    return this[parentNode];
  }
  get nodeType() {
    return this[nodeType];
  }
  get ownerDocument() {
    return this[ownerDocument];
  }
  get isConnected() {
    let { [parentNode]: parent, [ownerDocument]: owner } = this;
    while (parent && parent !== owner)
      parent = parent[parentNode];
    return parent === owner;
  }
  get parentElement() {
    const { [parentNode]: parent } = this;
    return parent?.[nodeType] === ELEMENT_NODE ? parent : null;
  }
  get previousSibling() {
    const nodes = this[parentNode]?.[childNodes];
    if (nodes) {
      const i2 = nodes.indexOf(this);
      if (i2 > 0)
        return nodes[i2 - 1];
    }
    return null;
  }
  get previousElementSibling() {
    const nodes = this[parentNode]?.[childNodes];
    if (nodes) {
      let i2 = nodes.indexOf(this);
      while (i2-- && nodes[i2][nodeType] !== ELEMENT_NODE)
        ;
      return i2 < 0 ? null : nodes[i2];
    }
    return null;
  }
  get nextSibling() {
    const nodes = this[parentNode]?.[childNodes];
    return nodes && nodes.at(nodes.indexOf(this) + 1) || null;
  }
  get nextElementSibling() {
    const nodes = this[parentNode]?.[childNodes];
    if (nodes) {
      let i2 = nodes.indexOf(this);
      while (++i2 < nodes.length && nodes[i2][nodeType] !== ELEMENT_NODE)
        ;
      return i2 < nodes.length ? nodes[i2] : null;
    }
    return null;
  }
  get childNodes() {
    return [];
  }
  after(...values) {
    const { [parentNode]: parent } = this;
    const { [childNodes]: nodes } = parent;
    const i2 = nodes.indexOf(this) + 1;
    if (i2 === nodes.length)
      push(nodes, map(values, parent));
    else if (i2)
      splice(nodes, i2 - 1, 0, map(values, parent));
  }
  before(...values) {
    const { [parentNode]: parent } = this;
    const { [childNodes]: nodes } = parent;
    const i2 = nodes.indexOf(this);
    if (!i2)
      unshift(nodes, map(values, parent));
    else if (i2 > 0)
      splice(nodes, i2, 0, map(values, parent));
  }
  remove() {
    changeParentNode(this, null);
  }
  replaceWith(...values) {
    const { [parentNode]: parent } = this;
    if (parent) {
      const { [childNodes]: nodes } = parent;
      splice(nodes, nodes.indexOf(this), 1, values.map(withNewParent, parent));
      this[parentNode] = null;
    }
  }
}

class Attribute extends Node {
  constructor(nodeName2, nodeValue = "", owner = null) {
    super(ATTRIBUTE_NODE, owner?.[ownerDocument]);
    this[ownerElement] = owner;
    this[name] = nodeName2;
    this.value = nodeValue;
  }
  get ownerElement() {
    return this[ownerElement];
  }
  get name() {
    return this[name];
  }
  get localName() {
    return this[name];
  }
  get nodeName() {
    return this[name];
  }
  get value() {
    return this[value];
  }
  set value(any) {
    this[value] = String(any);
  }
  get nodeValue() {
    return this[value];
  }
  toString() {
    const { [name]: key, [value]: val } = this;
    return val === "" ? key : `${key}="${escape(val)}"`;
  }
}

class CharacterData extends Node {
  constructor(type, name2, data, owner) {
    super(type, owner)[nodeName] = name2;
    this.data = data;
  }
  get data() {
    return this[value];
  }
  set data(any) {
    this[value] = String(any);
  }
  get nodeName() {
    return this[nodeName];
  }
  get textContent() {
    return this.data;
  }
  set textContent(data) {
    this.data = data;
  }
}

class Comment extends CharacterData {
  constructor(data = "", owner = null) {
    super(COMMENT_NODE, "#comment", data, owner);
  }
  cloneNode() {
    return new Comment(this[value], this[ownerDocument]);
  }
  toString() {
    return `<!--${this[value]}-->`;
  }
}
var _type = Symbol("type");
var _bubbles = Symbol("bubbles");
var _cancelable = Symbol("cancelable");
var _defaultPrevented = Symbol("defaultPrevented");
var _target = Symbol("target");
var _currentTarget = Symbol("currentTarget");
var _stoppedPropagation = Symbol("stoppedPropagation");
var _stoppedImmediatePropagation = Symbol("stoppedImmediatePropagation");

class Event {
  constructor(type, { bubbles = false, cancelable = false } = {}) {
    this[_type] = type;
    this[_bubbles] = bubbles;
    this[_cancelable] = cancelable;
    this[_target] = null;
    this[_currentTarget] = null;
    this[_defaultPrevented] = false;
    this[_stoppedPropagation] = false;
    this[_stoppedImmediatePropagation] = false;
  }
  get type() {
    return this[_type];
  }
  get bubbles() {
    return this[_bubbles];
  }
  get cancelable() {
    return this[_cancelable];
  }
  get target() {
    return this[_target];
  }
  get currentTarget() {
    return this[_currentTarget];
  }
  get defaultPrevented() {
    return this[_defaultPrevented];
  }
  preventDefault() {
    if (this[_cancelable])
      this[_defaultPrevented] = true;
  }
  stopPropagation() {
    this[_stoppedPropagation] = true;
  }
  stopImmediatePropagation() {
    this.stopPropagation();
    this[_stoppedImmediatePropagation] = true;
  }
}
var TEXT_ELEMENTS = /^(?:plaintext|script|style|textarea|title|xmp)$/i;
var VOID_ELEMENTS = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;

class Text extends CharacterData {
  constructor(data = "", owner = null) {
    super(TEXT_NODE, "#text", data, owner);
  }
  cloneNode() {
    return new Text(this[value], this[ownerDocument]);
  }
  toString() {
    const { [parentNode]: parent, [value]: data } = this;
    return parent && TEXT_ELEMENTS.test(parent[localName]) ? data : escape(data);
  }
}
var withParent = function(node4) {
  return changeParentNode(typeof node4 === "string" ? new Text(node4, this[ownerDocument]) : node4, this);
};
var listeners = new WeakMap;
var listeners0 = new WeakMap;
var level0 = {
  get(self, name2) {
    return listeners0.get(self)?.get(name2) || null;
  },
  set(self, name2, value2) {
    let known = listeners0.get(self);
    if (!known)
      listeners0.set(self, known = new Map);
    if (value2 == null)
      known.delete(name2);
    else
      known.set(name2, value2);
  }
};

class Parent extends Node {
  constructor(type, owner) {
    super(type, owner)[childNodes] = empty;
  }
  get childNodes() {
    return this[childNodes] === empty ? [] : this[childNodes];
  }
  get children() {
    return this[childNodes].filter(asElement);
  }
  get firstChild() {
    return this[childNodes].at(0) || null;
  }
  get firstElementChild() {
    return this[childNodes].find(asElement) || null;
  }
  get lastChild() {
    return this[childNodes].at(-1) || null;
  }
  get lastElementChild() {
    return this[childNodes].findLast(asElement) || null;
  }
  get childElementCount() {
    return this.children.length;
  }
  get onabort() {
    return level0.get(this, "onabort");
  }
  set onabort(value2) {
    level0.set(this, "onabort", value2);
  }
  get onblur() {
    return level0.get(this, "onblur");
  }
  set onblur(value2) {
    level0.set(this, "onblur", value2);
  }
  get oncancel() {
    return level0.get(this, "oncancel");
  }
  set oncancel(value2) {
    level0.set(this, "oncancel", value2);
  }
  get oncanplay() {
    return level0.get(this, "oncanplay");
  }
  set oncanplay(value2) {
    level0.set(this, "oncanplay", value2);
  }
  get oncanplaythrough() {
    return level0.get(this, "oncanplaythrough");
  }
  set oncanplaythrough(value2) {
    level0.set(this, "oncanplaythrough", value2);
  }
  get onchange() {
    return level0.get(this, "onchange");
  }
  set onchange(value2) {
    level0.set(this, "onchange", value2);
  }
  get onclick() {
    return level0.get(this, "onclick");
  }
  set onclick(value2) {
    level0.set(this, "onclick", value2);
  }
  get onclose() {
    return level0.get(this, "onclose");
  }
  set onclose(value2) {
    level0.set(this, "onclose", value2);
  }
  get oncontextmenu() {
    return level0.get(this, "oncontextmenu");
  }
  set oncontextmenu(value2) {
    level0.set(this, "oncontextmenu", value2);
  }
  get oncuechange() {
    return level0.get(this, "oncuechange");
  }
  set oncuechange(value2) {
    level0.set(this, "oncuechange", value2);
  }
  get ondblclick() {
    return level0.get(this, "ondblclick");
  }
  set ondblclick(value2) {
    level0.set(this, "ondblclick", value2);
  }
  get ondrag() {
    return level0.get(this, "ondrag");
  }
  set ondrag(value2) {
    level0.set(this, "ondrag", value2);
  }
  get ondragend() {
    return level0.get(this, "ondragend");
  }
  set ondragend(value2) {
    level0.set(this, "ondragend", value2);
  }
  get ondragenter() {
    return level0.get(this, "ondragenter");
  }
  set ondragenter(value2) {
    level0.set(this, "ondragenter", value2);
  }
  get ondragleave() {
    return level0.get(this, "ondragleave");
  }
  set ondragleave(value2) {
    level0.set(this, "ondragleave", value2);
  }
  get ondragover() {
    return level0.get(this, "ondragover");
  }
  set ondragover(value2) {
    level0.set(this, "ondragover", value2);
  }
  get ondragstart() {
    return level0.get(this, "ondragstart");
  }
  set ondragstart(value2) {
    level0.set(this, "ondragstart", value2);
  }
  get ondrop() {
    return level0.get(this, "ondrop");
  }
  set ondrop(value2) {
    level0.set(this, "ondrop", value2);
  }
  get ondurationchange() {
    return level0.get(this, "ondurationchange");
  }
  set ondurationchange(value2) {
    level0.set(this, "ondurationchange", value2);
  }
  get onemptied() {
    return level0.get(this, "onemptied");
  }
  set onemptied(value2) {
    level0.set(this, "onemptied", value2);
  }
  get onended() {
    return level0.get(this, "onended");
  }
  set onended(value2) {
    level0.set(this, "onended", value2);
  }
  get onerror() {
    return level0.get(this, "onerror");
  }
  set onerror(value2) {
    level0.set(this, "onerror", value2);
  }
  get onfocus() {
    return level0.get(this, "onfocus");
  }
  set onfocus(value2) {
    level0.set(this, "onfocus", value2);
  }
  get oninput() {
    return level0.get(this, "oninput");
  }
  set oninput(value2) {
    level0.set(this, "oninput", value2);
  }
  get oninvalid() {
    return level0.get(this, "oninvalid");
  }
  set oninvalid(value2) {
    level0.set(this, "oninvalid", value2);
  }
  get onkeydown() {
    return level0.get(this, "onkeydown");
  }
  set onkeydown(value2) {
    level0.set(this, "onkeydown", value2);
  }
  get onkeypress() {
    return level0.get(this, "onkeypress");
  }
  set onkeypress(value2) {
    level0.set(this, "onkeypress", value2);
  }
  get onkeyup() {
    return level0.get(this, "onkeyup");
  }
  set onkeyup(value2) {
    level0.set(this, "onkeyup", value2);
  }
  get onload() {
    return level0.get(this, "onload");
  }
  set onload(value2) {
    level0.set(this, "onload", value2);
  }
  get onloadeddata() {
    return level0.get(this, "onloadeddata");
  }
  set onloadeddata(value2) {
    level0.set(this, "onloadeddata", value2);
  }
  get onloadedmetadata() {
    return level0.get(this, "onloadedmetadata");
  }
  set onloadedmetadata(value2) {
    level0.set(this, "onloadedmetadata", value2);
  }
  get onloadstart() {
    return level0.get(this, "onloadstart");
  }
  set onloadstart(value2) {
    level0.set(this, "onloadstart", value2);
  }
  get onmousedown() {
    return level0.get(this, "onmousedown");
  }
  set onmousedown(value2) {
    level0.set(this, "onmousedown", value2);
  }
  get onmouseenter() {
    return level0.get(this, "onmouseenter");
  }
  set onmouseenter(value2) {
    level0.set(this, "onmouseenter", value2);
  }
  get onmouseleave() {
    return level0.get(this, "onmouseleave");
  }
  set onmouseleave(value2) {
    level0.set(this, "onmouseleave", value2);
  }
  get onmousemove() {
    return level0.get(this, "onmousemove");
  }
  set onmousemove(value2) {
    level0.set(this, "onmousemove", value2);
  }
  get onmouseout() {
    return level0.get(this, "onmouseout");
  }
  set onmouseout(value2) {
    level0.set(this, "onmouseout", value2);
  }
  get onmouseover() {
    return level0.get(this, "onmouseover");
  }
  set onmouseover(value2) {
    level0.set(this, "onmouseover", value2);
  }
  get onmouseup() {
    return level0.get(this, "onmouseup");
  }
  set onmouseup(value2) {
    level0.set(this, "onmouseup", value2);
  }
  get onmousewheel() {
    return level0.get(this, "onmousewheel");
  }
  set onmousewheel(value2) {
    level0.set(this, "onmousewheel", value2);
  }
  get onpause() {
    return level0.get(this, "onpause");
  }
  set onpause(value2) {
    level0.set(this, "onpause", value2);
  }
  get onplay() {
    return level0.get(this, "onplay");
  }
  set onplay(value2) {
    level0.set(this, "onplay", value2);
  }
  get onplaying() {
    return level0.get(this, "onplaying");
  }
  set onplaying(value2) {
    level0.set(this, "onplaying", value2);
  }
  get onprogress() {
    return level0.get(this, "onprogress");
  }
  set onprogress(value2) {
    level0.set(this, "onprogress", value2);
  }
  get onratechange() {
    return level0.get(this, "onratechange");
  }
  set onratechange(value2) {
    level0.set(this, "onratechange", value2);
  }
  get onreset() {
    return level0.get(this, "onreset");
  }
  set onreset(value2) {
    level0.set(this, "onreset", value2);
  }
  get onresize() {
    return level0.get(this, "onresize");
  }
  set onresize(value2) {
    level0.set(this, "onresize", value2);
  }
  get onscroll() {
    return level0.get(this, "onscroll");
  }
  set onscroll(value2) {
    level0.set(this, "onscroll", value2);
  }
  get onseeked() {
    return level0.get(this, "onseeked");
  }
  set onseeked(value2) {
    level0.set(this, "onseeked", value2);
  }
  get onseeking() {
    return level0.get(this, "onseeking");
  }
  set onseeking(value2) {
    level0.set(this, "onseeking", value2);
  }
  get onselect() {
    return level0.get(this, "onselect");
  }
  set onselect(value2) {
    level0.set(this, "onselect", value2);
  }
  get onshow() {
    return level0.get(this, "onshow");
  }
  set onshow(value2) {
    level0.set(this, "onshow", value2);
  }
  get onstalled() {
    return level0.get(this, "onstalled");
  }
  set onstalled(value2) {
    level0.set(this, "onstalled", value2);
  }
  get onsubmit() {
    return level0.get(this, "onsubmit");
  }
  set onsubmit(value2) {
    level0.set(this, "onsubmit", value2);
  }
  get onsuspend() {
    return level0.get(this, "onsuspend");
  }
  set onsuspend(value2) {
    level0.set(this, "onsuspend", value2);
  }
  get ontimeupdate() {
    return level0.get(this, "ontimeupdate");
  }
  set ontimeupdate(value2) {
    level0.set(this, "ontimeupdate", value2);
  }
  get ontoggle() {
    return level0.get(this, "ontoggle");
  }
  set ontoggle(value2) {
    level0.set(this, "ontoggle", value2);
  }
  get onvolumechange() {
    return level0.get(this, "onvolumechange");
  }
  set onvolumechange(value2) {
    level0.set(this, "onvolumechange", value2);
  }
  get onwaiting() {
    return level0.get(this, "onwaiting");
  }
  set onwaiting(value2) {
    level0.set(this, "onwaiting", value2);
  }
  get onauxclick() {
    return level0.get(this, "onauxclick");
  }
  set onauxclick(value2) {
    level0.set(this, "onauxclick", value2);
  }
  get ongotpointercapture() {
    return level0.get(this, "ongotpointercapture");
  }
  set ongotpointercapture(value2) {
    level0.set(this, "ongotpointercapture", value2);
  }
  get onlostpointercapture() {
    return level0.get(this, "onlostpointercapture");
  }
  set onlostpointercapture(value2) {
    level0.set(this, "onlostpointercapture", value2);
  }
  get onpointercancel() {
    return level0.get(this, "onpointercancel");
  }
  set onpointercancel(value2) {
    level0.set(this, "onpointercancel", value2);
  }
  get onpointerdown() {
    return level0.get(this, "onpointerdown");
  }
  set onpointerdown(value2) {
    level0.set(this, "onpointerdown", value2);
  }
  get onpointerenter() {
    return level0.get(this, "onpointerenter");
  }
  set onpointerenter(value2) {
    level0.set(this, "onpointerenter", value2);
  }
  get onpointerleave() {
    return level0.get(this, "onpointerleave");
  }
  set onpointerleave(value2) {
    level0.set(this, "onpointerleave", value2);
  }
  get onpointermove() {
    return level0.get(this, "onpointermove");
  }
  set onpointermove(value2) {
    level0.set(this, "onpointermove", value2);
  }
  get onpointerout() {
    return level0.get(this, "onpointerout");
  }
  set onpointerout(value2) {
    level0.set(this, "onpointerout", value2);
  }
  get onpointerover() {
    return level0.get(this, "onpointerover");
  }
  set onpointerover(value2) {
    level0.set(this, "onpointerover", value2);
  }
  get onpointerup() {
    return level0.get(this, "onpointerup");
  }
  set onpointerup(value2) {
    level0.set(this, "onpointerup", value2);
  }
  prepend(...values) {
    unshift(getNodes(this), values.map(withParent, this));
  }
  append(...values) {
    push(getNodes(this), values.map(withParent, this));
  }
  replaceChildren(...values) {
    const nodes = getNodes(this);
    nodes.splice(0).forEach(setParentNode, null);
    push(nodes, values.map(withParent, this));
  }
  appendChild(node4) {
    push(getNodes(this), [changeParentNode(node4, this)]);
    return node4;
  }
  contains(node4) {
    let { [parentNode]: parent } = node4;
    while (parent && parent !== this)
      parent = parent[parentNode];
    return parent === this;
  }
  insertBefore(node4, pin) {
    const nodes = getNodes(this);
    changeParentNode(node4, this);
    if (pin)
      splice(nodes, nodes.indexOf(pin), 0, [node4]);
    else
      push(nodes, [node4]);
    return node4;
  }
  removeChild(node4) {
    node4.remove();
  }
  replaceChild(node4, replaced) {
    const i2 = getNodes(this).indexOf(replaced);
    splice(this[childNodes], i2, 1, [changeParentNode(node4, this)]);
    replaced[parentNode] = null;
    return replaced;
  }
  addEventListener(type, listener, options) {
    let entries = listeners.get(this);
    if (!entries)
      listeners.set(this, entries = new Map);
    let map2 = entries.get(type);
    if (!map2)
      entries.set(type, map2 = new Map);
    map2.set(listener, options);
  }
  removeEventListener(type, listener) {
    const entries = listeners.get(this);
    if (entries) {
      const map2 = entries.get(type);
      if (map2) {
        map2.delete(listener);
        if (!map2.size)
          entries.delete(type);
      }
    }
  }
  dispatchEvent(event2) {
    if (!event2[_target])
      event2[_target] = this;
    event2[_currentTarget] = this;
    const { type } = event2;
    this[`on${type}`]?.(event2);
    if (!event2[_stoppedImmediatePropagation]) {
      const entries = listeners.get(this);
      if (entries) {
        const list = entries.get(type);
        if (list) {
          for (const [listener, options] of list) {
            if (typeof listener === "function")
              listener.call(this, event2);
            else
              listener.handleEvent(event2);
            if (options?.once)
              this.removeEventListener(type, listener);
            if (event2[_stoppedImmediatePropagation])
              break;
          }
        }
      }
    }
    if (event2.bubbles && !event2[_stoppedPropagation])
      this[parentNode]?.dispatchEvent(event2);
  }
  getElementById(id) {
    return getElementById(this, new RegExp(`^${id}\$`));
  }
  getElementsByTagName(tagName) {
    return getElementsByTagName(this, new RegExp(`^${tagName}\$`, "i"));
  }
  getElementsByClassName(className) {
    return getElementsByClassName(this, new RegExp(`\\b${className}\\b`));
  }
  normalize() {
    const { [childNodes]: nodes } = this;
    for (let i2 = 0;i2 < nodes.length; i2++) {
      const node4 = nodes[i2];
      switch (node4[nodeType]) {
        case ELEMENT_NODE:
          node4.normalize();
          break;
        case TEXT_NODE: {
          const { data } = node4;
          let drop = false;
          if (!data)
            drop = true;
          else if (i2 > 0 && nodes[i2 - 1][nodeType] === TEXT_NODE) {
            drop = true;
            nodes[i2 - 1].data += data;
          }
          if (drop) {
            node4[parentNode] = null;
            nodes.splice(i2--, 1);
          }
          break;
        }
      }
    }
  }
}
var getElementById = ({ [childNodes]: nodes }, re2) => {
  for (const node4 of nodes) {
    if (node4[nodeType] === ELEMENT_NODE) {
      if (re2.test(node4.id))
        return node4;
      const element = getElementById(node4, re2);
      if (element)
        return element;
    }
  }
  return null;
};
var getElementsByTagName = ({ [childNodes]: nodes }, re2) => {
  const elements = [];
  for (const node4 of nodes) {
    if (node4[nodeType] === ELEMENT_NODE) {
      if (re2.test(node4[localName]))
        elements.push(node4);
      elements.push(...getElementsByTagName(node4, re2));
    }
  }
  return elements;
};
var getElementsByClassName = ({ [childNodes]: nodes }, re2) => {
  const elements = [];
  for (const node4 of nodes) {
    if (node4[nodeType] === ELEMENT_NODE) {
      if (re2.test(node4.className))
        elements.push(node4);
      elements.push(...getElementsByClassName(node4, re2));
    }
  }
  return elements;
};

class DocumentFragment extends Parent {
  constructor(owner = null) {
    super(DOCUMENT_FRAGMENT_NODE, owner)[nodeName] = "#document-fragment";
  }
  get nodeName() {
    return this[nodeName];
  }
  cloneNode(deep = false) {
    const fragment = new DocumentFragment(this[ownerDocument]);
    const { [childNodes]: nodes } = this;
    if (deep && nodes.length)
      fragment[childNodes] = nodes.map(cloned, fragment);
    return fragment;
  }
  toString() {
    return this[childNodes].join("");
  }
}

class DocumentType extends Node {
  constructor(name2, owner = null) {
    super(DOCUMENT_TYPE_NODE, owner)[nodeName] = name2;
  }
  get nodeName() {
    return this[nodeName];
  }
  get name() {
    return this[nodeName];
  }
  toString() {
    const { [nodeName]: value2 } = this;
    return value2 ? `<!DOCTYPE ${value2}>` : "";
  }
}
var { from } = Array;
var { iterator } = Symbol;
var asString = (_, i2) => String(i2);
var isIndex = ({ size }, name2) => /^\d+$/.test(name2) && name2 < size;
var namedNodeMapHandler = {
  get: (map2, name2) => {
    if (name2 === "length")
      return map2.size;
    if (name2 === iterator)
      return yieldAttributes.bind(map2.values());
    return map2.get(name2) || (isIndex(map2, name2) ? [...map2.values()][name2] : undefined);
  },
  has: (map2, name2) => name2 === "length" || name2 === iterator || map2.has(name2) || isIndex(map2, name2),
  ownKeys: (map2) => [
    ...from({ length: map2.size }, asString),
    ...map2.keys()
  ]
};
var named_node_map_default = (attributes2) => new Proxy(attributes2, namedNodeMapHandler);
var key = (name2) => `data-${name2.replace(/[A-Z]/g, (U) => `-${U.toLowerCase()}`)}`;
var prop = (name2) => name2.slice(5).replace(/-([a-z])/g, (_, $1) => $1.toUpperCase());
var byData = (name2) => name2.startsWith("data-");
var stringMapHandler = {
  deleteProperty(element, name2) {
    name2 = key(name2);
    if (element.hasAttribute(name2))
      element.removeAttribute(name2);
    return true;
  },
  get(element, name2) {
    return element.getAttribute(key(name2));
  },
  has(element, name2) {
    return element.hasAttribute(key(name2));
  },
  ownKeys(element) {
    return element.getAttributeNames().filter(byData).map(prop);
  },
  set(element, name2, value2) {
    element.setAttribute(key(name2), value2);
    return true;
  }
};
var string_map_default = (element) => new Proxy(element, stringMapHandler);
var add = function(...tokens) {
  update(this, new Set(classes(this).concat(tokens)));
};
var contains = function(token) {
  return classes(this).includes(token);
};
var remove = function(...tokens) {
  const previous = new Set(classes(this));
  for (const token of tokens)
    previous.delete(token);
  update(this, previous);
};
var replace2 = function(oldToken, newToken) {
  const tokens = new Set(classes(this));
  if (tokens.has(oldToken)) {
    tokens.delete(oldToken);
    tokens.add(newToken);
    return !update(this, tokens);
  }
  return false;
};
var toggle = function(token, force) {
  const tokens = new Set(classes(this));
  if (tokens.has(token)) {
    if (force)
      return true;
    tokens.delete(token);
    update(this, tokens);
  } else if (force || arguments.length === 1) {
    tokens.add(token);
    return !update(this, tokens);
  }
  return false;
};
var { entries, keys, values } = Object;
var { forEach } = empty;
var classes = (element) => {
  const { className } = element;
  return className ? className.split(/\s+/) : [];
};
var update = (element, tokens) => {
  element.className = [...tokens].join(" ");
};
var tokenListHandler = {
  get(element, name2) {
    switch (name2) {
      case "length":
        return classes(element).length;
      case "value":
        return element.className;
      case "add":
        return add.bind(element);
      case "contains":
        return contains.bind(element);
      case "entries":
        return entries.bind(null, classes(element));
      case "forEach":
        return forEach.bind(classes(element));
      case "keys":
        return keys.bind(null, classes(element));
      case "remove":
        return remove.bind(element);
      case "replace":
        return replace2.bind(element);
      case "toggle":
        return toggle.bind(element);
      case "values":
        return values.bind(null, classes(element));
    }
  }
};
var token_list_default = (element) => new Proxy(element, tokenListHandler);
var exports_esm3 = {};
__export(exports_esm3, {
  parseFeed: () => {
    {
      return parseFeed;
    }
  },
  parseDocument: () => {
    {
      return parseDocument;
    }
  },
  parseDOM: () => {
    {
      return parseDOM;
    }
  },
  getFeed: () => {
    {
      return getFeed;
    }
  },
  createDomStream: () => {
    {
      return createDomStream;
    }
  },
  createDocumentStream: () => {
    {
      return createDocumentStream;
    }
  },
  Tokenizer: () => {
    {
      return Tokenizer;
    }
  },
  QuoteType: () => {
    {
      return QuoteType;
    }
  },
  Parser: () => {
    {
      return Parser;
    }
  },
  ElementType: () => {
    {
      return exports_esm;
    }
  },
  DomUtils: () => {
    {
      return exports_esm2;
    }
  },
  DomHandler: () => {
    {
      return DomHandler;
    }
  },
  DefaultHandler: () => {
    {
      return DomHandler;
    }
  }
});
var decode_data_html_default = new Uint16Array('\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\uD835\uDD04rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\uD835\uDD38plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\uD835\uDC9Cign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\uD835\uDD05pf;\uC000\uD835\uDD39eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\uD835\uDC9Ep\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\uD835\uDD07\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\uD835\uDD3B\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\uD835\uDC9Frok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\uD835\uDD08rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\uD835\uDD3Csilon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\uD835\uDD09lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\uD835\uDD3DAll;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\uD835\uDD0A;\u62D9pf;\uC000\uD835\uDD3Eeater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\uD835\uDCA2;\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\uD835\uDD40a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\uD835\uDD0Dpf;\uC000\uD835\uDD41\u01E3\u07C7\0\u07CCr;\uC000\uD835\uDCA5rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\uD835\uDD0Epf;\uC000\uD835\uDD42cr;\uC000\uD835\uDCA6\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\uD835\uDD0F\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\uD835\uDD43er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\uD835\uDD10nusPlus;\u6213pf;\uC000\uD835\uDD44c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\uD835\uDD11\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\uD835\uDCA9ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\uD835\uDD12rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\uD835\uDD46enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\uD835\uDCAAash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\uD835\uDD13i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\uD835\uDCAB;\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\uD835\uDD14pf;\u611Acr;\uC000\uD835\uDCAC\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\uD835\uDD16ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\uD835\uDD4A\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\uD835\uDCAEar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\uD835\uDD17\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\uD835\uDD4BipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\uD835\uDCAFrok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\uD835\uDD18rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\uD835\uDD4C\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\uD835\uDCB0ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\uD835\uDD19pf;\uC000\uD835\uDD4Dcr;\uC000\uD835\uDCB1dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\uD835\uDD1Apf;\uC000\uD835\uDD4Ecr;\uC000\uD835\uDCB2\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\uD835\uDD1B;\u439Epf;\uC000\uD835\uDD4Fcr;\uC000\uD835\uDCB3\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\uD835\uDD1Cpf;\uC000\uD835\uDD50cr;\uC000\uD835\uDCB4ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\uD835\uDCB5\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\uD835\uDD1Erave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\uD835\uDD52\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\uD835\uDCB6;\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\uD835\uDD1Fg\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\uD835\uDD53\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\uD835\uDCB7mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\uD835\uDD20\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\uD835\uDD54o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\uD835\uDCB8\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\uD835\uDD21ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\uD835\uDD55\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\uD835\uDCB9;\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\uD835\uDD22\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\uD835\uDD56\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\uD835\uDD23lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\uD835\uDD57\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\uD835\uDCBB\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\uD835\uDD24\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\uD835\uDD58\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\uD835\uDD25s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\uD835\uDD59bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\uD835\uDCBDas\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\uD835\uDD26rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\uD835\uDD5Aa;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\uD835\uDCBEn\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\uD835\uDD27ath;\u4237pf;\uC000\uD835\uDD5B\u01E3\u23EC\0\u23F1r;\uC000\uD835\uDCBFrcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\uD835\uDD28reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\uD835\uDD5Ccr;\uC000\uD835\uDCC0\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\uD835\uDD29\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\uD835\uDD5Dus;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\uD835\uDCC1m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\uD835\uDD2Ao;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\uD835\uDD5E\u0100ct\u28F8\u28FDr;\uC000\uD835\uDCC2pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\uD835\uDD2B\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\uD835\uDD5F\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\uD835\uDCC3ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\uD835\uDD2C\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\uD835\uDD60\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\uD835\uDD2D\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\uD835\uDD61nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\uD835\uDCC5;\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\uD835\uDD2Epf;\uC000\uD835\uDD62rime;\u6057cr;\uC000\uD835\uDCC6\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\uD835\uDD2F\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\uD835\uDD63us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\uD835\uDCC7\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\uD835\uDD30\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\uD835\uDD64a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\uD835\uDCC8tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\uD835\uDD31\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\uD835\uDD65rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\uD835\uDCC9;\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\uD835\uDD32rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\uD835\uDD66\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\uD835\uDCCA\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\uD835\uDD33tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\uD835\uDD67ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\uD835\uDCCB\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\uD835\uDD34pf;\uC000\uD835\uDD68\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\uD835\uDCCC\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\uD835\uDD35\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\uD835\uDD69im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\uD835\uDCCD\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\uD835\uDD36cy;\u4457pf;\uC000\uD835\uDD6Acr;\uC000\uD835\uDCCE\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\uD835\uDD37cy;\u4436grarr;\u61DDpf;\uC000\uD835\uDD6Bcr;\uC000\uD835\uDCCF\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map((c) => c.charCodeAt(0)));
var decode_data_xml_default = new Uint16Array("\u0200aglq\t\x15\x18\x1B\u026D\x0F\0\0\x12p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map((c) => c.charCodeAt(0)));
var _a;
var decodeMap = new Map([
  [0, 65533],
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]);
var fromCodePoint = (_a = String.fromCodePoint) !== null && _a !== undefined ? _a : function(codePoint) {
  let output = "";
  if (codePoint > 65535) {
    codePoint -= 65536;
    output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
    codePoint = 56320 | codePoint & 1023;
  }
  output += String.fromCharCode(codePoint);
  return output;
};
var isNumber = function(code) {
  return code >= CharCodes.ZERO && code <= CharCodes.NINE;
};
var isHexadecimalCharacter = function(code) {
  return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_F || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_F;
};
var isAsciiAlphaNumeric = function(code) {
  return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_Z || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_Z || isNumber(code);
};
var isEntityInAttributeInvalidEnd = function(code) {
  return code === CharCodes.EQUALS || isAsciiAlphaNumeric(code);
};
var getDecoder = function(decodeTree) {
  let ret = "";
  const decoder = new EntityDecoder(decodeTree, (str) => ret += fromCodePoint(str));
  return function decodeWithTrie(str, decodeMode) {
    let lastIndex = 0;
    let offset = 0;
    while ((offset = str.indexOf("&", offset)) >= 0) {
      ret += str.slice(lastIndex, offset);
      decoder.startEntity(decodeMode);
      const len = decoder.write(str, offset + 1);
      if (len < 0) {
        lastIndex = offset + decoder.end();
        break;
      }
      lastIndex = offset + len;
      offset = len === 0 ? lastIndex + 1 : lastIndex;
    }
    const result = ret + str.slice(lastIndex);
    ret = "";
    return result;
  };
};
var CharCodes;
(function(CharCodes2) {
  CharCodes2[CharCodes2["NUM"] = 35] = "NUM";
  CharCodes2[CharCodes2["SEMI"] = 59] = "SEMI";
  CharCodes2[CharCodes2["EQUALS"] = 61] = "EQUALS";
  CharCodes2[CharCodes2["ZERO"] = 48] = "ZERO";
  CharCodes2[CharCodes2["NINE"] = 57] = "NINE";
  CharCodes2[CharCodes2["LOWER_A"] = 97] = "LOWER_A";
  CharCodes2[CharCodes2["LOWER_F"] = 102] = "LOWER_F";
  CharCodes2[CharCodes2["LOWER_X"] = 120] = "LOWER_X";
  CharCodes2[CharCodes2["LOWER_Z"] = 122] = "LOWER_Z";
  CharCodes2[CharCodes2["UPPER_A"] = 65] = "UPPER_A";
  CharCodes2[CharCodes2["UPPER_F"] = 70] = "UPPER_F";
  CharCodes2[CharCodes2["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes || (CharCodes = {}));
var TO_LOWER_BIT = 32;
var BinTrieFlags;
(function(BinTrieFlags2) {
  BinTrieFlags2[BinTrieFlags2["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
  BinTrieFlags2[BinTrieFlags2["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
  BinTrieFlags2[BinTrieFlags2["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));
var EntityDecoderState;
(function(EntityDecoderState2) {
  EntityDecoderState2[EntityDecoderState2["EntityStart"] = 0] = "EntityStart";
  EntityDecoderState2[EntityDecoderState2["NumericStart"] = 1] = "NumericStart";
  EntityDecoderState2[EntityDecoderState2["NumericDecimal"] = 2] = "NumericDecimal";
  EntityDecoderState2[EntityDecoderState2["NumericHex"] = 3] = "NumericHex";
  EntityDecoderState2[EntityDecoderState2["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function(DecodingMode2) {
  DecodingMode2[DecodingMode2["Legacy"] = 0] = "Legacy";
  DecodingMode2[DecodingMode2["Strict"] = 1] = "Strict";
  DecodingMode2[DecodingMode2["Attribute"] = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));

class EntityDecoder {
  constructor(decodeTree, emitCodePoint, errors) {
    this.decodeTree = decodeTree;
    this.emitCodePoint = emitCodePoint;
    this.errors = errors;
    this.state = EntityDecoderState.EntityStart;
    this.consumed = 1;
    this.result = 0;
    this.treeIndex = 0;
    this.excess = 1;
    this.decodeMode = DecodingMode.Strict;
  }
  startEntity(decodeMode) {
    this.decodeMode = decodeMode;
    this.state = EntityDecoderState.EntityStart;
    this.result = 0;
    this.treeIndex = 0;
    this.excess = 1;
    this.consumed = 1;
  }
  write(str, offset) {
    switch (this.state) {
      case EntityDecoderState.EntityStart: {
        if (str.charCodeAt(offset) === CharCodes.NUM) {
          this.state = EntityDecoderState.NumericStart;
          this.consumed += 1;
          return this.stateNumericStart(str, offset + 1);
        }
        this.state = EntityDecoderState.NamedEntity;
        return this.stateNamedEntity(str, offset);
      }
      case EntityDecoderState.NumericStart: {
        return this.stateNumericStart(str, offset);
      }
      case EntityDecoderState.NumericDecimal: {
        return this.stateNumericDecimal(str, offset);
      }
      case EntityDecoderState.NumericHex: {
        return this.stateNumericHex(str, offset);
      }
      case EntityDecoderState.NamedEntity: {
        return this.stateNamedEntity(str, offset);
      }
    }
  }
  stateNumericStart(str, offset) {
    if (offset >= str.length) {
      return -1;
    }
    if ((str.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
      this.state = EntityDecoderState.NumericHex;
      this.consumed += 1;
      return this.stateNumericHex(str, offset + 1);
    }
    this.state = EntityDecoderState.NumericDecimal;
    return this.stateNumericDecimal(str, offset);
  }
  addToNumericResult(str, start, end, base) {
    if (start !== end) {
      const digitCount = end - start;
      this.result = this.result * Math.pow(base, digitCount) + parseInt(str.substr(start, digitCount), base);
      this.consumed += digitCount;
    }
  }
  stateNumericHex(str, offset) {
    const startIdx = offset;
    while (offset < str.length) {
      const char = str.charCodeAt(offset);
      if (isNumber(char) || isHexadecimalCharacter(char)) {
        offset += 1;
      } else {
        this.addToNumericResult(str, startIdx, offset, 16);
        return this.emitNumericEntity(char, 3);
      }
    }
    this.addToNumericResult(str, startIdx, offset, 16);
    return -1;
  }
  stateNumericDecimal(str, offset) {
    const startIdx = offset;
    while (offset < str.length) {
      const char = str.charCodeAt(offset);
      if (isNumber(char)) {
        offset += 1;
      } else {
        this.addToNumericResult(str, startIdx, offset, 10);
        return this.emitNumericEntity(char, 2);
      }
    }
    this.addToNumericResult(str, startIdx, offset, 10);
    return -1;
  }
  emitNumericEntity(lastCp, expectedLength) {
    var _a2;
    if (this.consumed <= expectedLength) {
      (_a2 = this.errors) === null || _a2 === undefined || _a2.absenceOfDigitsInNumericCharacterReference(this.consumed);
      return 0;
    }
    if (lastCp === CharCodes.SEMI) {
      this.consumed += 1;
    } else if (this.decodeMode === DecodingMode.Strict) {
      return 0;
    }
    this.emitCodePoint(replaceCodePoint(this.result), this.consumed);
    if (this.errors) {
      if (lastCp !== CharCodes.SEMI) {
        this.errors.missingSemicolonAfterCharacterReference();
      }
      this.errors.validateNumericCharacterReference(this.result);
    }
    return this.consumed;
  }
  stateNamedEntity(str, offset) {
    const { decodeTree } = this;
    let current = decodeTree[this.treeIndex];
    let valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
    for (;offset < str.length; offset++, this.excess++) {
      const char = str.charCodeAt(offset);
      this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
      if (this.treeIndex < 0) {
        return this.result === 0 || this.decodeMode === DecodingMode.Attribute && (valueLength === 0 || isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
      }
      current = decodeTree[this.treeIndex];
      valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
      if (valueLength !== 0) {
        if (char === CharCodes.SEMI) {
          return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
        }
        if (this.decodeMode !== DecodingMode.Strict) {
          this.result = this.treeIndex;
          this.consumed += this.excess;
          this.excess = 0;
        }
      }
    }
    return -1;
  }
  emitNotTerminatedNamedEntity() {
    var _a2;
    const { result, decodeTree } = this;
    const valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
    this.emitNamedEntityData(result, valueLength, this.consumed);
    (_a2 = this.errors) === null || _a2 === undefined || _a2.missingSemicolonAfterCharacterReference();
    return this.consumed;
  }
  emitNamedEntityData(result, valueLength, consumed) {
    const { decodeTree } = this;
    this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH : decodeTree[result + 1], consumed);
    if (valueLength === 3) {
      this.emitCodePoint(decodeTree[result + 2], consumed);
    }
    return consumed;
  }
  end() {
    var _a2;
    switch (this.state) {
      case EntityDecoderState.NamedEntity: {
        return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      }
      case EntityDecoderState.NumericDecimal: {
        return this.emitNumericEntity(0, 2);
      }
      case EntityDecoderState.NumericHex: {
        return this.emitNumericEntity(0, 3);
      }
      case EntityDecoderState.NumericStart: {
        (_a2 = this.errors) === null || _a2 === undefined || _a2.absenceOfDigitsInNumericCharacterReference(this.consumed);
        return 0;
      }
      case EntityDecoderState.EntityStart: {
        return 0;
      }
    }
  }
}
var htmlDecoder = getDecoder(decode_data_html_default);
var xmlDecoder = getDecoder(decode_data_xml_default);
var isWhitespace = function(c) {
  return c === CharCodes2.Space || c === CharCodes2.NewLine || c === CharCodes2.Tab || c === CharCodes2.FormFeed || c === CharCodes2.CarriageReturn;
};
var isEndOfTagSection = function(c) {
  return c === CharCodes2.Slash || c === CharCodes2.Gt || isWhitespace(c);
};
var isASCIIAlpha = function(c) {
  return c >= CharCodes2.LowerA && c <= CharCodes2.LowerZ || c >= CharCodes2.UpperA && c <= CharCodes2.UpperZ;
};
var CharCodes2;
(function(CharCodes3) {
  CharCodes3[CharCodes3["Tab"] = 9] = "Tab";
  CharCodes3[CharCodes3["NewLine"] = 10] = "NewLine";
  CharCodes3[CharCodes3["FormFeed"] = 12] = "FormFeed";
  CharCodes3[CharCodes3["CarriageReturn"] = 13] = "CarriageReturn";
  CharCodes3[CharCodes3["Space"] = 32] = "Space";
  CharCodes3[CharCodes3["ExclamationMark"] = 33] = "ExclamationMark";
  CharCodes3[CharCodes3["Number"] = 35] = "Number";
  CharCodes3[CharCodes3["Amp"] = 38] = "Amp";
  CharCodes3[CharCodes3["SingleQuote"] = 39] = "SingleQuote";
  CharCodes3[CharCodes3["DoubleQuote"] = 34] = "DoubleQuote";
  CharCodes3[CharCodes3["Dash"] = 45] = "Dash";
  CharCodes3[CharCodes3["Slash"] = 47] = "Slash";
  CharCodes3[CharCodes3["Zero"] = 48] = "Zero";
  CharCodes3[CharCodes3["Nine"] = 57] = "Nine";
  CharCodes3[CharCodes3["Semi"] = 59] = "Semi";
  CharCodes3[CharCodes3["Lt"] = 60] = "Lt";
  CharCodes3[CharCodes3["Eq"] = 61] = "Eq";
  CharCodes3[CharCodes3["Gt"] = 62] = "Gt";
  CharCodes3[CharCodes3["Questionmark"] = 63] = "Questionmark";
  CharCodes3[CharCodes3["UpperA"] = 65] = "UpperA";
  CharCodes3[CharCodes3["LowerA"] = 97] = "LowerA";
  CharCodes3[CharCodes3["UpperF"] = 70] = "UpperF";
  CharCodes3[CharCodes3["LowerF"] = 102] = "LowerF";
  CharCodes3[CharCodes3["UpperZ"] = 90] = "UpperZ";
  CharCodes3[CharCodes3["LowerZ"] = 122] = "LowerZ";
  CharCodes3[CharCodes3["LowerX"] = 120] = "LowerX";
  CharCodes3[CharCodes3["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
})(CharCodes2 || (CharCodes2 = {}));
var State;
(function(State2) {
  State2[State2["Text"] = 1] = "Text";
  State2[State2["BeforeTagName"] = 2] = "BeforeTagName";
  State2[State2["InTagName"] = 3] = "InTagName";
  State2[State2["InSelfClosingTag"] = 4] = "InSelfClosingTag";
  State2[State2["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
  State2[State2["InClosingTagName"] = 6] = "InClosingTagName";
  State2[State2["AfterClosingTagName"] = 7] = "AfterClosingTagName";
  State2[State2["BeforeAttributeName"] = 8] = "BeforeAttributeName";
  State2[State2["InAttributeName"] = 9] = "InAttributeName";
  State2[State2["AfterAttributeName"] = 10] = "AfterAttributeName";
  State2[State2["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
  State2[State2["InAttributeValueDq"] = 12] = "InAttributeValueDq";
  State2[State2["InAttributeValueSq"] = 13] = "InAttributeValueSq";
  State2[State2["InAttributeValueNq"] = 14] = "InAttributeValueNq";
  State2[State2["BeforeDeclaration"] = 15] = "BeforeDeclaration";
  State2[State2["InDeclaration"] = 16] = "InDeclaration";
  State2[State2["InProcessingInstruction"] = 17] = "InProcessingInstruction";
  State2[State2["BeforeComment"] = 18] = "BeforeComment";
  State2[State2["CDATASequence"] = 19] = "CDATASequence";
  State2[State2["InSpecialComment"] = 20] = "InSpecialComment";
  State2[State2["InCommentLike"] = 21] = "InCommentLike";
  State2[State2["BeforeSpecialS"] = 22] = "BeforeSpecialS";
  State2[State2["BeforeSpecialT"] = 23] = "BeforeSpecialT";
  State2[State2["SpecialStartSequence"] = 24] = "SpecialStartSequence";
  State2[State2["InSpecialTag"] = 25] = "InSpecialTag";
  State2[State2["InEntity"] = 26] = "InEntity";
})(State || (State = {}));
var QuoteType;
(function(QuoteType2) {
  QuoteType2[QuoteType2["NoValue"] = 0] = "NoValue";
  QuoteType2[QuoteType2["Unquoted"] = 1] = "Unquoted";
  QuoteType2[QuoteType2["Single"] = 2] = "Single";
  QuoteType2[QuoteType2["Double"] = 3] = "Double";
})(QuoteType || (QuoteType = {}));
var Sequences = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  CdataEnd: new Uint8Array([93, 93, 62]),
  CommentEnd: new Uint8Array([45, 45, 62]),
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  TextareaEnd: new Uint8Array([
    60,
    47,
    116,
    101,
    120,
    116,
    97,
    114,
    101,
    97
  ])
};

class Tokenizer {
  constructor({ xmlMode = false, decodeEntities = true }, cbs) {
    this.cbs = cbs;
    this.state = State.Text;
    this.buffer = "";
    this.sectionStart = 0;
    this.index = 0;
    this.entityStart = 0;
    this.baseState = State.Text;
    this.isSpecial = false;
    this.running = true;
    this.offset = 0;
    this.currentSequence = undefined;
    this.sequenceIndex = 0;
    this.xmlMode = xmlMode;
    this.decodeEntities = decodeEntities;
    this.entityDecoder = new EntityDecoder(xmlMode ? decode_data_xml_default : decode_data_html_default, (cp, consumed) => this.emitCodePoint(cp, consumed));
  }
  reset() {
    this.state = State.Text;
    this.buffer = "";
    this.sectionStart = 0;
    this.index = 0;
    this.baseState = State.Text;
    this.currentSequence = undefined;
    this.running = true;
    this.offset = 0;
  }
  write(chunk) {
    this.offset += this.buffer.length;
    this.buffer = chunk;
    this.parse();
  }
  end() {
    if (this.running)
      this.finish();
  }
  pause() {
    this.running = false;
  }
  resume() {
    this.running = true;
    if (this.index < this.buffer.length + this.offset) {
      this.parse();
    }
  }
  stateText(c) {
    if (c === CharCodes2.Lt || !this.decodeEntities && this.fastForwardTo(CharCodes2.Lt)) {
      if (this.index > this.sectionStart) {
        this.cbs.ontext(this.sectionStart, this.index);
      }
      this.state = State.BeforeTagName;
      this.sectionStart = this.index;
    } else if (this.decodeEntities && c === CharCodes2.Amp) {
      this.startEntity();
    }
  }
  stateSpecialStartSequence(c) {
    const isEnd = this.sequenceIndex === this.currentSequence.length;
    const isMatch = isEnd ? isEndOfTagSection(c) : (c | 32) === this.currentSequence[this.sequenceIndex];
    if (!isMatch) {
      this.isSpecial = false;
    } else if (!isEnd) {
      this.sequenceIndex++;
      return;
    }
    this.sequenceIndex = 0;
    this.state = State.InTagName;
    this.stateInTagName(c);
  }
  stateInSpecialTag(c) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (c === CharCodes2.Gt || isWhitespace(c)) {
        const endOfText = this.index - this.currentSequence.length;
        if (this.sectionStart < endOfText) {
          const actualIndex = this.index;
          this.index = endOfText;
          this.cbs.ontext(this.sectionStart, endOfText);
          this.index = actualIndex;
        }
        this.isSpecial = false;
        this.sectionStart = endOfText + 2;
        this.stateInClosingTagName(c);
        return;
      }
      this.sequenceIndex = 0;
    }
    if ((c | 32) === this.currentSequence[this.sequenceIndex]) {
      this.sequenceIndex += 1;
    } else if (this.sequenceIndex === 0) {
      if (this.currentSequence === Sequences.TitleEnd) {
        if (this.decodeEntities && c === CharCodes2.Amp) {
          this.startEntity();
        }
      } else if (this.fastForwardTo(CharCodes2.Lt)) {
        this.sequenceIndex = 1;
      }
    } else {
      this.sequenceIndex = Number(c === CharCodes2.Lt);
    }
  }
  stateCDATASequence(c) {
    if (c === Sequences.Cdata[this.sequenceIndex]) {
      if (++this.sequenceIndex === Sequences.Cdata.length) {
        this.state = State.InCommentLike;
        this.currentSequence = Sequences.CdataEnd;
        this.sequenceIndex = 0;
        this.sectionStart = this.index + 1;
      }
    } else {
      this.sequenceIndex = 0;
      this.state = State.InDeclaration;
      this.stateInDeclaration(c);
    }
  }
  fastForwardTo(c) {
    while (++this.index < this.buffer.length + this.offset) {
      if (this.buffer.charCodeAt(this.index - this.offset) === c) {
        return true;
      }
    }
    this.index = this.buffer.length + this.offset - 1;
    return false;
  }
  stateInCommentLike(c) {
    if (c === this.currentSequence[this.sequenceIndex]) {
      if (++this.sequenceIndex === this.currentSequence.length) {
        if (this.currentSequence === Sequences.CdataEnd) {
          this.cbs.oncdata(this.sectionStart, this.index, 2);
        } else {
          this.cbs.oncomment(this.sectionStart, this.index, 2);
        }
        this.sequenceIndex = 0;
        this.sectionStart = this.index + 1;
        this.state = State.Text;
      }
    } else if (this.sequenceIndex === 0) {
      if (this.fastForwardTo(this.currentSequence[0])) {
        this.sequenceIndex = 1;
      }
    } else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
      this.sequenceIndex = 0;
    }
  }
  isTagStartChar(c) {
    return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
  }
  startSpecial(sequence, offset) {
    this.isSpecial = true;
    this.currentSequence = sequence;
    this.sequenceIndex = offset;
    this.state = State.SpecialStartSequence;
  }
  stateBeforeTagName(c) {
    if (c === CharCodes2.ExclamationMark) {
      this.state = State.BeforeDeclaration;
      this.sectionStart = this.index + 1;
    } else if (c === CharCodes2.Questionmark) {
      this.state = State.InProcessingInstruction;
      this.sectionStart = this.index + 1;
    } else if (this.isTagStartChar(c)) {
      const lower = c | 32;
      this.sectionStart = this.index;
      if (this.xmlMode) {
        this.state = State.InTagName;
      } else if (lower === Sequences.ScriptEnd[2]) {
        this.state = State.BeforeSpecialS;
      } else if (lower === Sequences.TitleEnd[2]) {
        this.state = State.BeforeSpecialT;
      } else {
        this.state = State.InTagName;
      }
    } else if (c === CharCodes2.Slash) {
      this.state = State.BeforeClosingTagName;
    } else {
      this.state = State.Text;
      this.stateText(c);
    }
  }
  stateInTagName(c) {
    if (isEndOfTagSection(c)) {
      this.cbs.onopentagname(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.state = State.BeforeAttributeName;
      this.stateBeforeAttributeName(c);
    }
  }
  stateBeforeClosingTagName(c) {
    if (isWhitespace(c)) {
    } else if (c === CharCodes2.Gt) {
      this.state = State.Text;
    } else {
      this.state = this.isTagStartChar(c) ? State.InClosingTagName : State.InSpecialComment;
      this.sectionStart = this.index;
    }
  }
  stateInClosingTagName(c) {
    if (c === CharCodes2.Gt || isWhitespace(c)) {
      this.cbs.onclosetag(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.state = State.AfterClosingTagName;
      this.stateAfterClosingTagName(c);
    }
  }
  stateAfterClosingTagName(c) {
    if (c === CharCodes2.Gt || this.fastForwardTo(CharCodes2.Gt)) {
      this.state = State.Text;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeAttributeName(c) {
    if (c === CharCodes2.Gt) {
      this.cbs.onopentagend(this.index);
      if (this.isSpecial) {
        this.state = State.InSpecialTag;
        this.sequenceIndex = 0;
      } else {
        this.state = State.Text;
      }
      this.sectionStart = this.index + 1;
    } else if (c === CharCodes2.Slash) {
      this.state = State.InSelfClosingTag;
    } else if (!isWhitespace(c)) {
      this.state = State.InAttributeName;
      this.sectionStart = this.index;
    }
  }
  stateInSelfClosingTag(c) {
    if (c === CharCodes2.Gt) {
      this.cbs.onselfclosingtag(this.index);
      this.state = State.Text;
      this.sectionStart = this.index + 1;
      this.isSpecial = false;
    } else if (!isWhitespace(c)) {
      this.state = State.BeforeAttributeName;
      this.stateBeforeAttributeName(c);
    }
  }
  stateInAttributeName(c) {
    if (c === CharCodes2.Eq || isEndOfTagSection(c)) {
      this.cbs.onattribname(this.sectionStart, this.index);
      this.sectionStart = this.index;
      this.state = State.AfterAttributeName;
      this.stateAfterAttributeName(c);
    }
  }
  stateAfterAttributeName(c) {
    if (c === CharCodes2.Eq) {
      this.state = State.BeforeAttributeValue;
    } else if (c === CharCodes2.Slash || c === CharCodes2.Gt) {
      this.cbs.onattribend(QuoteType.NoValue, this.sectionStart);
      this.sectionStart = -1;
      this.state = State.BeforeAttributeName;
      this.stateBeforeAttributeName(c);
    } else if (!isWhitespace(c)) {
      this.cbs.onattribend(QuoteType.NoValue, this.sectionStart);
      this.state = State.InAttributeName;
      this.sectionStart = this.index;
    }
  }
  stateBeforeAttributeValue(c) {
    if (c === CharCodes2.DoubleQuote) {
      this.state = State.InAttributeValueDq;
      this.sectionStart = this.index + 1;
    } else if (c === CharCodes2.SingleQuote) {
      this.state = State.InAttributeValueSq;
      this.sectionStart = this.index + 1;
    } else if (!isWhitespace(c)) {
      this.sectionStart = this.index;
      this.state = State.InAttributeValueNq;
      this.stateInAttributeValueNoQuotes(c);
    }
  }
  handleInAttributeValue(c, quote) {
    if (c === quote || !this.decodeEntities && this.fastForwardTo(quote)) {
      this.cbs.onattribdata(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.cbs.onattribend(quote === CharCodes2.DoubleQuote ? QuoteType.Double : QuoteType.Single, this.index + 1);
      this.state = State.BeforeAttributeName;
    } else if (this.decodeEntities && c === CharCodes2.Amp) {
      this.startEntity();
    }
  }
  stateInAttributeValueDoubleQuotes(c) {
    this.handleInAttributeValue(c, CharCodes2.DoubleQuote);
  }
  stateInAttributeValueSingleQuotes(c) {
    this.handleInAttributeValue(c, CharCodes2.SingleQuote);
  }
  stateInAttributeValueNoQuotes(c) {
    if (isWhitespace(c) || c === CharCodes2.Gt) {
      this.cbs.onattribdata(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.cbs.onattribend(QuoteType.Unquoted, this.index);
      this.state = State.BeforeAttributeName;
      this.stateBeforeAttributeName(c);
    } else if (this.decodeEntities && c === CharCodes2.Amp) {
      this.startEntity();
    }
  }
  stateBeforeDeclaration(c) {
    if (c === CharCodes2.OpeningSquareBracket) {
      this.state = State.CDATASequence;
      this.sequenceIndex = 0;
    } else {
      this.state = c === CharCodes2.Dash ? State.BeforeComment : State.InDeclaration;
    }
  }
  stateInDeclaration(c) {
    if (c === CharCodes2.Gt || this.fastForwardTo(CharCodes2.Gt)) {
      this.cbs.ondeclaration(this.sectionStart, this.index);
      this.state = State.Text;
      this.sectionStart = this.index + 1;
    }
  }
  stateInProcessingInstruction(c) {
    if (c === CharCodes2.Gt || this.fastForwardTo(CharCodes2.Gt)) {
      this.cbs.onprocessinginstruction(this.sectionStart, this.index);
      this.state = State.Text;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeComment(c) {
    if (c === CharCodes2.Dash) {
      this.state = State.InCommentLike;
      this.currentSequence = Sequences.CommentEnd;
      this.sequenceIndex = 2;
      this.sectionStart = this.index + 1;
    } else {
      this.state = State.InDeclaration;
    }
  }
  stateInSpecialComment(c) {
    if (c === CharCodes2.Gt || this.fastForwardTo(CharCodes2.Gt)) {
      this.cbs.oncomment(this.sectionStart, this.index, 0);
      this.state = State.Text;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeSpecialS(c) {
    const lower = c | 32;
    if (lower === Sequences.ScriptEnd[3]) {
      this.startSpecial(Sequences.ScriptEnd, 4);
    } else if (lower === Sequences.StyleEnd[3]) {
      this.startSpecial(Sequences.StyleEnd, 4);
    } else {
      this.state = State.InTagName;
      this.stateInTagName(c);
    }
  }
  stateBeforeSpecialT(c) {
    const lower = c | 32;
    if (lower === Sequences.TitleEnd[3]) {
      this.startSpecial(Sequences.TitleEnd, 4);
    } else if (lower === Sequences.TextareaEnd[3]) {
      this.startSpecial(Sequences.TextareaEnd, 4);
    } else {
      this.state = State.InTagName;
      this.stateInTagName(c);
    }
  }
  startEntity() {
    this.baseState = this.state;
    this.state = State.InEntity;
    this.entityStart = this.index;
    this.entityDecoder.startEntity(this.xmlMode ? DecodingMode.Strict : this.baseState === State.Text || this.baseState === State.InSpecialTag ? DecodingMode.Legacy : DecodingMode.Attribute);
  }
  stateInEntity() {
    const length = this.entityDecoder.write(this.buffer, this.index - this.offset);
    if (length >= 0) {
      this.state = this.baseState;
      if (length === 0) {
        this.index = this.entityStart;
      }
    } else {
      this.index = this.offset + this.buffer.length - 1;
    }
  }
  cleanup() {
    if (this.running && this.sectionStart !== this.index) {
      if (this.state === State.Text || this.state === State.InSpecialTag && this.sequenceIndex === 0) {
        this.cbs.ontext(this.sectionStart, this.index);
        this.sectionStart = this.index;
      } else if (this.state === State.InAttributeValueDq || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueNq) {
        this.cbs.onattribdata(this.sectionStart, this.index);
        this.sectionStart = this.index;
      }
    }
  }
  shouldContinue() {
    return this.index < this.buffer.length + this.offset && this.running;
  }
  parse() {
    while (this.shouldContinue()) {
      const c = this.buffer.charCodeAt(this.index - this.offset);
      switch (this.state) {
        case State.Text: {
          this.stateText(c);
          break;
        }
        case State.SpecialStartSequence: {
          this.stateSpecialStartSequence(c);
          break;
        }
        case State.InSpecialTag: {
          this.stateInSpecialTag(c);
          break;
        }
        case State.CDATASequence: {
          this.stateCDATASequence(c);
          break;
        }
        case State.InAttributeValueDq: {
          this.stateInAttributeValueDoubleQuotes(c);
          break;
        }
        case State.InAttributeName: {
          this.stateInAttributeName(c);
          break;
        }
        case State.InCommentLike: {
          this.stateInCommentLike(c);
          break;
        }
        case State.InSpecialComment: {
          this.stateInSpecialComment(c);
          break;
        }
        case State.BeforeAttributeName: {
          this.stateBeforeAttributeName(c);
          break;
        }
        case State.InTagName: {
          this.stateInTagName(c);
          break;
        }
        case State.InClosingTagName: {
          this.stateInClosingTagName(c);
          break;
        }
        case State.BeforeTagName: {
          this.stateBeforeTagName(c);
          break;
        }
        case State.AfterAttributeName: {
          this.stateAfterAttributeName(c);
          break;
        }
        case State.InAttributeValueSq: {
          this.stateInAttributeValueSingleQuotes(c);
          break;
        }
        case State.BeforeAttributeValue: {
          this.stateBeforeAttributeValue(c);
          break;
        }
        case State.BeforeClosingTagName: {
          this.stateBeforeClosingTagName(c);
          break;
        }
        case State.AfterClosingTagName: {
          this.stateAfterClosingTagName(c);
          break;
        }
        case State.BeforeSpecialS: {
          this.stateBeforeSpecialS(c);
          break;
        }
        case State.BeforeSpecialT: {
          this.stateBeforeSpecialT(c);
          break;
        }
        case State.InAttributeValueNq: {
          this.stateInAttributeValueNoQuotes(c);
          break;
        }
        case State.InSelfClosingTag: {
          this.stateInSelfClosingTag(c);
          break;
        }
        case State.InDeclaration: {
          this.stateInDeclaration(c);
          break;
        }
        case State.BeforeDeclaration: {
          this.stateBeforeDeclaration(c);
          break;
        }
        case State.BeforeComment: {
          this.stateBeforeComment(c);
          break;
        }
        case State.InProcessingInstruction: {
          this.stateInProcessingInstruction(c);
          break;
        }
        case State.InEntity: {
          this.stateInEntity();
          break;
        }
      }
      this.index++;
    }
    this.cleanup();
  }
  finish() {
    if (this.state === State.InEntity) {
      this.entityDecoder.end();
      this.state = this.baseState;
    }
    this.handleTrailingData();
    this.cbs.onend();
  }
  handleTrailingData() {
    const endIndex = this.buffer.length + this.offset;
    if (this.sectionStart >= endIndex) {
      return;
    }
    if (this.state === State.InCommentLike) {
      if (this.currentSequence === Sequences.CdataEnd) {
        this.cbs.oncdata(this.sectionStart, endIndex, 0);
      } else {
        this.cbs.oncomment(this.sectionStart, endIndex, 0);
      }
    } else if (this.state === State.InTagName || this.state === State.BeforeAttributeName || this.state === State.BeforeAttributeValue || this.state === State.AfterAttributeName || this.state === State.InAttributeName || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueDq || this.state === State.InAttributeValueNq || this.state === State.InClosingTagName) {
    } else {
      this.cbs.ontext(this.sectionStart, endIndex);
    }
  }
  emitCodePoint(cp, consumed) {
    if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) {
      if (this.sectionStart < this.entityStart) {
        this.cbs.onattribdata(this.sectionStart, this.entityStart);
      }
      this.sectionStart = this.entityStart + consumed;
      this.index = this.sectionStart - 1;
      this.cbs.onattribentity(cp);
    } else {
      if (this.sectionStart < this.entityStart) {
        this.cbs.ontext(this.sectionStart, this.entityStart);
      }
      this.sectionStart = this.entityStart + consumed;
      this.index = this.sectionStart - 1;
      this.cbs.ontextentity(cp, this.sectionStart);
    }
  }
}
var formTags = new Set([
  "input",
  "option",
  "optgroup",
  "select",
  "button",
  "datalist",
  "textarea"
]);
var pTag = new Set(["p"]);
var tableSectionTags = new Set(["thead", "tbody"]);
var ddtTags = new Set(["dd", "dt"]);
var rtpTags = new Set(["rt", "rp"]);
var openImpliesClose = new Map([
  ["tr", new Set(["tr", "th", "td"])],
  ["th", new Set(["th"])],
  ["td", new Set(["thead", "th", "td"])],
  ["body", new Set(["head", "link", "script"])],
  ["li", new Set(["li"])],
  ["p", pTag],
  ["h1", pTag],
  ["h2", pTag],
  ["h3", pTag],
  ["h4", pTag],
  ["h5", pTag],
  ["h6", pTag],
  ["select", formTags],
  ["input", formTags],
  ["output", formTags],
  ["button", formTags],
  ["datalist", formTags],
  ["textarea", formTags],
  ["option", new Set(["option"])],
  ["optgroup", new Set(["optgroup", "option"])],
  ["dd", ddtTags],
  ["dt", ddtTags],
  ["address", pTag],
  ["article", pTag],
  ["aside", pTag],
  ["blockquote", pTag],
  ["details", pTag],
  ["div", pTag],
  ["dl", pTag],
  ["fieldset", pTag],
  ["figcaption", pTag],
  ["figure", pTag],
  ["footer", pTag],
  ["form", pTag],
  ["header", pTag],
  ["hr", pTag],
  ["main", pTag],
  ["nav", pTag],
  ["ol", pTag],
  ["pre", pTag],
  ["section", pTag],
  ["table", pTag],
  ["ul", pTag],
  ["rt", rtpTags],
  ["rp", rtpTags],
  ["tbody", tableSectionTags],
  ["tfoot", tableSectionTags]
]);
var voidElements = new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
var foreignContextElements = new Set(["math", "svg"]);
var htmlIntegrationElements = new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignobject",
  "desc",
  "title"
]);
var reNameEnd = /\s|\//;

class Parser {
  constructor(cbs, options = {}) {
    var _a2, _b, _c, _d, _e, _f;
    this.options = options;
    this.startIndex = 0;
    this.endIndex = 0;
    this.openTagStart = 0;
    this.tagname = "";
    this.attribname = "";
    this.attribvalue = "";
    this.attribs = null;
    this.stack = [];
    this.buffers = [];
    this.bufferOffset = 0;
    this.writeIndex = 0;
    this.ended = false;
    this.cbs = cbs !== null && cbs !== undefined ? cbs : {};
    this.htmlMode = !this.options.xmlMode;
    this.lowerCaseTagNames = (_a2 = options.lowerCaseTags) !== null && _a2 !== undefined ? _a2 : this.htmlMode;
    this.lowerCaseAttributeNames = (_b = options.lowerCaseAttributeNames) !== null && _b !== undefined ? _b : this.htmlMode;
    this.recognizeSelfClosing = (_c = options.recognizeSelfClosing) !== null && _c !== undefined ? _c : !this.htmlMode;
    this.tokenizer = new ((_d = options.Tokenizer) !== null && _d !== undefined ? _d : Tokenizer)(this.options, this);
    this.foreignContext = [!this.htmlMode];
    (_f = (_e = this.cbs).onparserinit) === null || _f === undefined || _f.call(_e, this);
  }
  ontext(start, endIndex) {
    var _a2, _b;
    const data = this.getSlice(start, endIndex);
    this.endIndex = endIndex - 1;
    (_b = (_a2 = this.cbs).ontext) === null || _b === undefined || _b.call(_a2, data);
    this.startIndex = endIndex;
  }
  ontextentity(cp, endIndex) {
    var _a2, _b;
    this.endIndex = endIndex - 1;
    (_b = (_a2 = this.cbs).ontext) === null || _b === undefined || _b.call(_a2, fromCodePoint(cp));
    this.startIndex = endIndex;
  }
  isVoidElement(name2) {
    return this.htmlMode && voidElements.has(name2);
  }
  onopentagname(start, endIndex) {
    this.endIndex = endIndex;
    let name2 = this.getSlice(start, endIndex);
    if (this.lowerCaseTagNames) {
      name2 = name2.toLowerCase();
    }
    this.emitOpenTag(name2);
  }
  emitOpenTag(name2) {
    var _a2, _b, _c, _d;
    this.openTagStart = this.startIndex;
    this.tagname = name2;
    const impliesClose = this.htmlMode && openImpliesClose.get(name2);
    if (impliesClose) {
      while (this.stack.length > 0 && impliesClose.has(this.stack[0])) {
        const element = this.stack.shift();
        (_b = (_a2 = this.cbs).onclosetag) === null || _b === undefined || _b.call(_a2, element, true);
      }
    }
    if (!this.isVoidElement(name2)) {
      this.stack.unshift(name2);
      if (this.htmlMode) {
        if (foreignContextElements.has(name2)) {
          this.foreignContext.unshift(true);
        } else if (htmlIntegrationElements.has(name2)) {
          this.foreignContext.unshift(false);
        }
      }
    }
    (_d = (_c = this.cbs).onopentagname) === null || _d === undefined || _d.call(_c, name2);
    if (this.cbs.onopentag)
      this.attribs = {};
  }
  endOpenTag(isImplied) {
    var _a2, _b;
    this.startIndex = this.openTagStart;
    if (this.attribs) {
      (_b = (_a2 = this.cbs).onopentag) === null || _b === undefined || _b.call(_a2, this.tagname, this.attribs, isImplied);
      this.attribs = null;
    }
    if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
      this.cbs.onclosetag(this.tagname, true);
    }
    this.tagname = "";
  }
  onopentagend(endIndex) {
    this.endIndex = endIndex;
    this.endOpenTag(false);
    this.startIndex = endIndex + 1;
  }
  onclosetag(start, endIndex) {
    var _a2, _b, _c, _d, _e, _f, _g, _h;
    this.endIndex = endIndex;
    let name2 = this.getSlice(start, endIndex);
    if (this.lowerCaseTagNames) {
      name2 = name2.toLowerCase();
    }
    if (this.htmlMode && (foreignContextElements.has(name2) || htmlIntegrationElements.has(name2))) {
      this.foreignContext.shift();
    }
    if (!this.isVoidElement(name2)) {
      const pos = this.stack.indexOf(name2);
      if (pos !== -1) {
        for (let index = 0;index <= pos; index++) {
          const element = this.stack.shift();
          (_b = (_a2 = this.cbs).onclosetag) === null || _b === undefined || _b.call(_a2, element, index !== pos);
        }
      } else if (this.htmlMode && name2 === "p") {
        this.emitOpenTag("p");
        this.closeCurrentTag(true);
      }
    } else if (this.htmlMode && name2 === "br") {
      (_d = (_c = this.cbs).onopentagname) === null || _d === undefined || _d.call(_c, "br");
      (_f = (_e = this.cbs).onopentag) === null || _f === undefined || _f.call(_e, "br", {}, true);
      (_h = (_g = this.cbs).onclosetag) === null || _h === undefined || _h.call(_g, "br", false);
    }
    this.startIndex = endIndex + 1;
  }
  onselfclosingtag(endIndex) {
    this.endIndex = endIndex;
    if (this.recognizeSelfClosing || this.foreignContext[0]) {
      this.closeCurrentTag(false);
      this.startIndex = endIndex + 1;
    } else {
      this.onopentagend(endIndex);
    }
  }
  closeCurrentTag(isOpenImplied) {
    var _a2, _b;
    const name2 = this.tagname;
    this.endOpenTag(isOpenImplied);
    if (this.stack[0] === name2) {
      (_b = (_a2 = this.cbs).onclosetag) === null || _b === undefined || _b.call(_a2, name2, !isOpenImplied);
      this.stack.shift();
    }
  }
  onattribname(start, endIndex) {
    this.startIndex = start;
    const name2 = this.getSlice(start, endIndex);
    this.attribname = this.lowerCaseAttributeNames ? name2.toLowerCase() : name2;
  }
  onattribdata(start, endIndex) {
    this.attribvalue += this.getSlice(start, endIndex);
  }
  onattribentity(cp) {
    this.attribvalue += fromCodePoint(cp);
  }
  onattribend(quote, endIndex) {
    var _a2, _b;
    this.endIndex = endIndex;
    (_b = (_a2 = this.cbs).onattribute) === null || _b === undefined || _b.call(_a2, this.attribname, this.attribvalue, quote === QuoteType.Double ? '"' : quote === QuoteType.Single ? "'" : quote === QuoteType.NoValue ? undefined : null);
    if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
      this.attribs[this.attribname] = this.attribvalue;
    }
    this.attribvalue = "";
  }
  getInstructionName(value2) {
    const index = value2.search(reNameEnd);
    let name2 = index < 0 ? value2 : value2.substr(0, index);
    if (this.lowerCaseTagNames) {
      name2 = name2.toLowerCase();
    }
    return name2;
  }
  ondeclaration(start, endIndex) {
    this.endIndex = endIndex;
    const value2 = this.getSlice(start, endIndex);
    if (this.cbs.onprocessinginstruction) {
      const name2 = this.getInstructionName(value2);
      this.cbs.onprocessinginstruction(`!${name2}`, `!${value2}`);
    }
    this.startIndex = endIndex + 1;
  }
  onprocessinginstruction(start, endIndex) {
    this.endIndex = endIndex;
    const value2 = this.getSlice(start, endIndex);
    if (this.cbs.onprocessinginstruction) {
      const name2 = this.getInstructionName(value2);
      this.cbs.onprocessinginstruction(`?${name2}`, `?${value2}`);
    }
    this.startIndex = endIndex + 1;
  }
  oncomment(start, endIndex, offset) {
    var _a2, _b, _c, _d;
    this.endIndex = endIndex;
    (_b = (_a2 = this.cbs).oncomment) === null || _b === undefined || _b.call(_a2, this.getSlice(start, endIndex - offset));
    (_d = (_c = this.cbs).oncommentend) === null || _d === undefined || _d.call(_c);
    this.startIndex = endIndex + 1;
  }
  oncdata(start, endIndex, offset) {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    this.endIndex = endIndex;
    const value2 = this.getSlice(start, endIndex - offset);
    if (!this.htmlMode || this.options.recognizeCDATA) {
      (_b = (_a2 = this.cbs).oncdatastart) === null || _b === undefined || _b.call(_a2);
      (_d = (_c = this.cbs).ontext) === null || _d === undefined || _d.call(_c, value2);
      (_f = (_e = this.cbs).oncdataend) === null || _f === undefined || _f.call(_e);
    } else {
      (_h = (_g = this.cbs).oncomment) === null || _h === undefined || _h.call(_g, `[CDATA[${value2}]]`);
      (_k = (_j = this.cbs).oncommentend) === null || _k === undefined || _k.call(_j);
    }
    this.startIndex = endIndex + 1;
  }
  onend() {
    var _a2, _b;
    if (this.cbs.onclosetag) {
      this.endIndex = this.startIndex;
      for (let index = 0;index < this.stack.length; index++) {
        this.cbs.onclosetag(this.stack[index], true);
      }
    }
    (_b = (_a2 = this.cbs).onend) === null || _b === undefined || _b.call(_a2);
  }
  reset() {
    var _a2, _b, _c, _d;
    (_b = (_a2 = this.cbs).onreset) === null || _b === undefined || _b.call(_a2);
    this.tokenizer.reset();
    this.tagname = "";
    this.attribname = "";
    this.attribs = null;
    this.stack.length = 0;
    this.startIndex = 0;
    this.endIndex = 0;
    (_d = (_c = this.cbs).onparserinit) === null || _d === undefined || _d.call(_c, this);
    this.buffers.length = 0;
    this.foreignContext.length = 0;
    this.foreignContext.unshift(!this.htmlMode);
    this.bufferOffset = 0;
    this.writeIndex = 0;
    this.ended = false;
  }
  parseComplete(data) {
    this.reset();
    this.end(data);
  }
  getSlice(start, end) {
    while (start - this.bufferOffset >= this.buffers[0].length) {
      this.shiftBuffer();
    }
    let slice = this.buffers[0].slice(start - this.bufferOffset, end - this.bufferOffset);
    while (end - this.bufferOffset > this.buffers[0].length) {
      this.shiftBuffer();
      slice += this.buffers[0].slice(0, end - this.bufferOffset);
    }
    return slice;
  }
  shiftBuffer() {
    this.bufferOffset += this.buffers[0].length;
    this.writeIndex--;
    this.buffers.shift();
  }
  write(chunk) {
    var _a2, _b;
    if (this.ended) {
      (_b = (_a2 = this.cbs).onerror) === null || _b === undefined || _b.call(_a2, new Error(".write() after done!"));
      return;
    }
    this.buffers.push(chunk);
    if (this.tokenizer.running) {
      this.tokenizer.write(chunk);
      this.writeIndex++;
    }
  }
  end(chunk) {
    var _a2, _b;
    if (this.ended) {
      (_b = (_a2 = this.cbs).onerror) === null || _b === undefined || _b.call(_a2, new Error(".end() after done!"));
      return;
    }
    if (chunk)
      this.write(chunk);
    this.ended = true;
    this.tokenizer.end();
  }
  pause() {
    this.tokenizer.pause();
  }
  resume() {
    this.tokenizer.resume();
    while (this.tokenizer.running && this.writeIndex < this.buffers.length) {
      this.tokenizer.write(this.buffers[this.writeIndex++]);
    }
    if (this.ended)
      this.tokenizer.end();
  }
  parseChunk(chunk) {
    this.write(chunk);
  }
  done(chunk) {
    this.end(chunk);
  }
}
var exports_esm = {};
__export(exports_esm, {
  isTag: () => {
    {
      return isTag;
    }
  },
  Text: () => {
    {
      return Text2;
    }
  },
  Tag: () => {
    {
      return Tag;
    }
  },
  Style: () => {
    {
      return Style;
    }
  },
  Script: () => {
    {
      return Script;
    }
  },
  Root: () => {
    {
      return Root;
    }
  },
  ElementType: () => {
    {
      return ElementType;
    }
  },
  Doctype: () => {
    {
      return Doctype;
    }
  },
  Directive: () => {
    {
      return Directive;
    }
  },
  Comment: () => {
    {
      return Comment2;
    }
  },
  CDATA: () => {
    {
      return CDATA;
    }
  }
});
var ElementType;
(function(ElementType2) {
  ElementType2["Root"] = "root";
  ElementType2["Text"] = "text";
  ElementType2["Directive"] = "directive";
  ElementType2["Comment"] = "comment";
  ElementType2["Script"] = "script";
  ElementType2["Style"] = "style";
  ElementType2["Tag"] = "tag";
  ElementType2["CDATA"] = "cdata";
  ElementType2["Doctype"] = "doctype";
})(ElementType || (ElementType = {}));
var Root = ElementType.Root;
var Text2 = ElementType.Text;
var Directive = ElementType.Directive;
var Comment2 = ElementType.Comment;
var Script = ElementType.Script;
var Style = ElementType.Style;
var Tag = ElementType.Tag;
var CDATA = ElementType.CDATA;
var Doctype = ElementType.Doctype;
var cloneChildren = function(childs) {
  const children = childs.map((child) => cloneNode(child, true));
  for (let i2 = 1;i2 < children.length; i2++) {
    children[i2].prev = children[i2 - 1];
    children[i2 - 1].next = children[i2];
  }
  return children;
};

class Node2 {
  constructor() {
    this.parent = null;
    this.prev = null;
    this.next = null;
    this.startIndex = null;
    this.endIndex = null;
  }
  get parentNode() {
    return this.parent;
  }
  set parentNode(parent2) {
    this.parent = parent2;
  }
  get previousSibling() {
    return this.prev;
  }
  set previousSibling(prev) {
    this.prev = prev;
  }
  get nextSibling() {
    return this.next;
  }
  set nextSibling(next) {
    this.next = next;
  }
  cloneNode(recursive = false) {
    return cloneNode(this, recursive);
  }
}

class DataNode extends Node2 {
  constructor(data) {
    super();
    this.data = data;
  }
  get nodeValue() {
    return this.data;
  }
  set nodeValue(data) {
    this.data = data;
  }
}

class Text3 extends DataNode {
  constructor() {
    super(...arguments);
    this.type = ElementType.Text;
  }
  get nodeType() {
    return 3;
  }
}

class Comment3 extends DataNode {
  constructor() {
    super(...arguments);
    this.type = ElementType.Comment;
  }
  get nodeType() {
    return 8;
  }
}

class ProcessingInstruction extends DataNode {
  constructor(name2, data) {
    super(data);
    this.name = name2;
    this.type = ElementType.Directive;
  }
  get nodeType() {
    return 1;
  }
}

class NodeWithChildren extends Node2 {
  constructor(children) {
    super();
    this.children = children;
  }
  get firstChild() {
    var _a2;
    return (_a2 = this.children[0]) !== null && _a2 !== undefined ? _a2 : null;
  }
  get lastChild() {
    return this.children.length > 0 ? this.children[this.children.length - 1] : null;
  }
  get childNodes() {
    return this.children;
  }
  set childNodes(children) {
    this.children = children;
  }
}

class CDATA2 extends NodeWithChildren {
  constructor() {
    super(...arguments);
    this.type = ElementType.CDATA;
  }
  get nodeType() {
    return 4;
  }
}

class Document extends NodeWithChildren {
  constructor() {
    super(...arguments);
    this.type = ElementType.Root;
  }
  get nodeType() {
    return 9;
  }
}

class Element extends NodeWithChildren {
  constructor(name2, attribs, children = [], type = name2 === "script" ? ElementType.Script : name2 === "style" ? ElementType.Style : ElementType.Tag) {
    super(children);
    this.name = name2;
    this.attribs = attribs;
    this.type = type;
  }
  get nodeType() {
    return 1;
  }
  get tagName() {
    return this.name;
  }
  set tagName(name2) {
    this.name = name2;
  }
  get attributes() {
    return Object.keys(this.attribs).map((name2) => {
      var _a2, _b;
      return {
        name: name2,
        value: this.attribs[name2],
        namespace: (_a2 = this["x-attribsNamespace"]) === null || _a2 === undefined ? undefined : _a2[name2],
        prefix: (_b = this["x-attribsPrefix"]) === null || _b === undefined ? undefined : _b[name2]
      };
    });
  }
}
var defaultOpts = {
  withStartIndices: false,
  withEndIndices: false,
  xmlMode: false
};

class DomHandler {
  constructor(callback, options, elementCB) {
    this.dom = [];
    this.root = new Document(this.dom);
    this.done = false;
    this.tagStack = [this.root];
    this.lastNode = null;
    this.parser = null;
    if (typeof options === "function") {
      elementCB = options;
      options = defaultOpts;
    }
    if (typeof callback === "object") {
      options = callback;
      callback = undefined;
    }
    this.callback = callback !== null && callback !== undefined ? callback : null;
    this.options = options !== null && options !== undefined ? options : defaultOpts;
    this.elementCB = elementCB !== null && elementCB !== undefined ? elementCB : null;
  }
  onparserinit(parser) {
    this.parser = parser;
  }
  onreset() {
    this.dom = [];
    this.root = new Document(this.dom);
    this.done = false;
    this.tagStack = [this.root];
    this.lastNode = null;
    this.parser = null;
  }
  onend() {
    if (this.done)
      return;
    this.done = true;
    this.parser = null;
    this.handleCallback(null);
  }
  onerror(error) {
    this.handleCallback(error);
  }
  onclosetag() {
    this.lastNode = null;
    const elem = this.tagStack.pop();
    if (this.options.withEndIndices) {
      elem.endIndex = this.parser.endIndex;
    }
    if (this.elementCB)
      this.elementCB(elem);
  }
  onopentag(name2, attribs) {
    const type = this.options.xmlMode ? ElementType.Tag : undefined;
    const element = new Element(name2, attribs, undefined, type);
    this.addNode(element);
    this.tagStack.push(element);
  }
  ontext(data) {
    const { lastNode } = this;
    if (lastNode && lastNode.type === ElementType.Text) {
      lastNode.data += data;
      if (this.options.withEndIndices) {
        lastNode.endIndex = this.parser.endIndex;
      }
    } else {
      const node7 = new Text3(data);
      this.addNode(node7);
      this.lastNode = node7;
    }
  }
  oncomment(data) {
    if (this.lastNode && this.lastNode.type === ElementType.Comment) {
      this.lastNode.data += data;
      return;
    }
    const node7 = new Comment3(data);
    this.addNode(node7);
    this.lastNode = node7;
  }
  oncommentend() {
    this.lastNode = null;
  }
  oncdatastart() {
    const text2 = new Text3("");
    const node7 = new CDATA2([text2]);
    this.addNode(node7);
    text2.parent = node7;
    this.lastNode = text2;
  }
  oncdataend() {
    this.lastNode = null;
  }
  onprocessinginstruction(name2, data) {
    const node7 = new ProcessingInstruction(name2, data);
    this.addNode(node7);
  }
  handleCallback(error) {
    if (typeof this.callback === "function") {
      this.callback(error, this.dom);
    } else if (error) {
      throw error;
    }
  }
  addNode(node7) {
    const parent2 = this.tagStack[this.tagStack.length - 1];
    const previousSibling = parent2.children[parent2.children.length - 1];
    if (this.options.withStartIndices) {
      node7.startIndex = this.parser.startIndex;
    }
    if (this.options.withEndIndices) {
      node7.endIndex = this.parser.endIndex;
    }
    parent2.children.push(node7);
    if (previousSibling) {
      node7.prev = previousSibling;
      previousSibling.next = node7;
    }
    node7.parent = parent2;
    this.lastNode = null;
  }
}
var exports_esm2 = {};
__export(exports_esm2, {
  uniqueSort: () => {
    {
      return uniqueSort;
    }
  },
  textContent: () => {
    {
      return textContent;
    }
  },
  testElement: () => {
    {
      return testElement;
    }
  },
  replaceElement: () => {
    {
      return replaceElement;
    }
  },
  removeSubsets: () => {
    {
      return removeSubsets;
    }
  },
  removeElement: () => {
    {
      return removeElement;
    }
  },
  prevElementSibling: () => {
    {
      return prevElementSibling;
    }
  },
  prependChild: () => {
    {
      return prependChild;
    }
  },
  prepend: () => {
    {
      return prepend;
    }
  },
  nextElementSibling: () => {
    {
      return nextElementSibling;
    }
  },
  isText: () => {
    {
      return isText;
    }
  },
  isTag: () => {
    {
      return isTag2;
    }
  },
  isDocument: () => {
    {
      return isDocument;
    }
  },
  isComment: () => {
    {
      return isComment;
    }
  },
  isCDATA: () => {
    {
      return isCDATA;
    }
  },
  innerText: () => {
    {
      return innerText;
    }
  },
  hasChildren: () => {
    {
      return hasChildren;
    }
  },
  hasAttrib: () => {
    {
      return hasAttrib;
    }
  },
  getText: () => {
    {
      return getText;
    }
  },
  getSiblings: () => {
    {
      return getSiblings;
    }
  },
  getParent: () => {
    {
      return getParent;
    }
  },
  getOuterHTML: () => {
    {
      return getOuterHTML;
    }
  },
  getName: () => {
    {
      return getName;
    }
  },
  getInnerHTML: () => {
    {
      return getInnerHTML;
    }
  },
  getFeed: () => {
    {
      return getFeed;
    }
  },
  getElementsByTagType: () => {
    {
      return getElementsByTagType;
    }
  },
  getElementsByTagName: () => {
    {
      return getElementsByTagName2;
    }
  },
  getElements: () => {
    {
      return getElements;
    }
  },
  getElementById: () => {
    {
      return getElementById2;
    }
  },
  getChildren: () => {
    {
      return getChildren;
    }
  },
  getAttributeValue: () => {
    {
      return getAttributeValue;
    }
  },
  findOneChild: () => {
    {
      return findOneChild;
    }
  },
  findOne: () => {
    {
      return findOne;
    }
  },
  findAll: () => {
    {
      return findAll;
    }
  },
  find: () => {
    {
      return find;
    }
  },
  filter: () => {
    {
      return filter;
    }
  },
  existsOne: () => {
    {
      return existsOne;
    }
  },
  compareDocumentPosition: () => {
    {
      return compareDocumentPosition;
    }
  },
  appendChild: () => {
    {
      return appendChild;
    }
  },
  append: () => {
    {
      return append;
    }
  },
  DocumentPosition: () => {
    {
      return DocumentPosition;
    }
  }
});
var getEscaper = function(regex, map2) {
  return function escape(data) {
    let match;
    let lastIdx = 0;
    let result = "";
    while (match = regex.exec(data)) {
      if (lastIdx !== match.index) {
        result += data.substring(lastIdx, match.index);
      }
      result += map2.get(match[0].charCodeAt(0));
      lastIdx = match.index + 1;
    }
    return result + data.substring(lastIdx);
  };
};
var xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
var xmlCodeMap = new Map([
  [34, "&quot;"],
  [38, "&amp;"],
  [39, "&apos;"],
  [60, "&lt;"],
  [62, "&gt;"]
]);
var getCodePoint = String.prototype.codePointAt != null ? (str, index) => str.codePointAt(index) : (c, index) => (c.charCodeAt(index) & 64512) === 55296 ? (c.charCodeAt(index) - 55296) * 1024 + c.charCodeAt(index + 1) - 56320 + 65536 : c.charCodeAt(index);
var escapeUTF8 = getEscaper(/[&<>'"]/g, xmlCodeMap);
var escapeAttribute = getEscaper(/["&\u00A0]/g, new Map([
  [34, "&quot;"],
  [38, "&amp;"],
  [160, "&nbsp;"]
]));
var escapeText = getEscaper(/[&<>\u00A0]/g, new Map([
  [38, "&amp;"],
  [60, "&lt;"],
  [62, "&gt;"],
  [160, "&nbsp;"]
]));
var EntityLevel;
(function(EntityLevel2) {
  EntityLevel2[EntityLevel2["XML"] = 0] = "XML";
  EntityLevel2[EntityLevel2["HTML"] = 1] = "HTML";
})(EntityLevel || (EntityLevel = {}));
var EncodingMode;
(function(EncodingMode2) {
  EncodingMode2[EncodingMode2["UTF8"] = 0] = "UTF8";
  EncodingMode2[EncodingMode2["ASCII"] = 1] = "ASCII";
  EncodingMode2[EncodingMode2["Extensive"] = 2] = "Extensive";
  EncodingMode2[EncodingMode2["Attribute"] = 3] = "Attribute";
  EncodingMode2[EncodingMode2["Text"] = 4] = "Text";
})(EncodingMode || (EncodingMode = {}));
var elementNames = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map((val) => [val.toLowerCase(), val]));
var attributeNames = new Map([
  "definitionURL",
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map((val) => [val.toLowerCase(), val]));
var replaceQuotes = function(value2) {
  return value2.replace(/"/g, "&quot;");
};
var formatAttributes = function(attributes2, opts) {
  var _a2;
  if (!attributes2)
    return;
  const encode = ((_a2 = opts.encodeEntities) !== null && _a2 !== undefined ? _a2 : opts.decodeEntities) === false ? replaceQuotes : opts.xmlMode || opts.encodeEntities !== "utf8" ? encodeXML : escapeAttribute;
  return Object.keys(attributes2).map((key2) => {
    var _a3, _b;
    const value2 = (_a3 = attributes2[key2]) !== null && _a3 !== undefined ? _a3 : "";
    if (opts.xmlMode === "foreign") {
      key2 = (_b = attributeNames.get(key2)) !== null && _b !== undefined ? _b : key2;
    }
    if (!opts.emptyAttrs && !opts.xmlMode && value2 === "") {
      return key2;
    }
    return `${key2}="${encode(value2)}"`;
  }).join(" ");
};
var renderNode = function(node7, options) {
  switch (node7.type) {
    case Root:
      return render(node7.children, options);
    case Doctype:
    case Directive:
      return renderDirective(node7);
    case Comment2:
      return renderComment(node7);
    case CDATA:
      return renderCdata(node7);
    case Script:
    case Style:
    case Tag:
      return renderTag(node7, options);
    case Text2:
      return renderText(node7, options);
  }
};
var renderTag = function(elem, opts) {
  var _a2;
  if (opts.xmlMode === "foreign") {
    elem.name = (_a2 = elementNames.get(elem.name)) !== null && _a2 !== undefined ? _a2 : elem.name;
    if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
      opts = { ...opts, xmlMode: false };
    }
  }
  if (!opts.xmlMode && foreignElements.has(elem.name)) {
    opts = { ...opts, xmlMode: "foreign" };
  }
  let tag = `<${elem.name}`;
  const attribs = formatAttributes(elem.attribs, opts);
  if (attribs) {
    tag += ` ${attribs}`;
  }
  if (elem.children.length === 0 && (opts.xmlMode ? opts.selfClosingTags !== false : opts.selfClosingTags && singleTag.has(elem.name))) {
    if (!opts.xmlMode)
      tag += " ";
    tag += "/>";
  } else {
    tag += ">";
    if (elem.children.length > 0) {
      tag += render(elem.children, opts);
    }
    if (opts.xmlMode || !singleTag.has(elem.name)) {
      tag += `</${elem.name}>`;
    }
  }
  return tag;
};
var renderDirective = function(elem) {
  return `<${elem.data}>`;
};
var renderText = function(elem, opts) {
  var _a2;
  let data = elem.data || "";
  if (((_a2 = opts.encodeEntities) !== null && _a2 !== undefined ? _a2 : opts.decodeEntities) !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
    data = opts.xmlMode || opts.encodeEntities !== "utf8" ? encodeXML(data) : escapeText(data);
  }
  return data;
};
var renderCdata = function(elem) {
  return `<![CDATA[${elem.children[0].data}]]>`;
};
var renderComment = function(elem) {
  return `<!--${elem.data}-->`;
};
var unencodedElements = new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
var singleTag = new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
var esm_default = render;
var foreignModeIntegrationPoints = new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]);
var foreignElements = new Set(["svg", "math"]);
var getAttribCheck = function(attrib, value2) {
  if (typeof value2 === "function") {
    return (elem) => isTag2(elem) && value2(elem.attribs[attrib]);
  }
  return (elem) => isTag2(elem) && elem.attribs[attrib] === value2;
};
var combineFuncs = function(a2, b) {
  return (elem) => a2(elem) || b(elem);
};
var compileTest = function(options) {
  const funcs = Object.keys(options).map((key2) => {
    const value2 = options[key2];
    return Object.prototype.hasOwnProperty.call(Checks, key2) ? Checks[key2](value2) : getAttribCheck(key2, value2);
  });
  return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
};
var Checks = {
  tag_name(name2) {
    if (typeof name2 === "function") {
      return (elem) => isTag2(elem) && name2(elem.name);
    } else if (name2 === "*") {
      return isTag2;
    }
    return (elem) => isTag2(elem) && elem.name === name2;
  },
  tag_type(type) {
    if (typeof type === "function") {
      return (elem) => type(elem.type);
    }
    return (elem) => elem.type === type;
  },
  tag_contains(data) {
    if (typeof data === "function") {
      return (elem) => isText(elem) && data(elem.data);
    }
    return (elem) => isText(elem) && elem.data === data;
  }
};
var DocumentPosition;
(function(DocumentPosition2) {
  DocumentPosition2[DocumentPosition2["DISCONNECTED"] = 1] = "DISCONNECTED";
  DocumentPosition2[DocumentPosition2["PRECEDING"] = 2] = "PRECEDING";
  DocumentPosition2[DocumentPosition2["FOLLOWING"] = 4] = "FOLLOWING";
  DocumentPosition2[DocumentPosition2["CONTAINS"] = 8] = "CONTAINS";
  DocumentPosition2[DocumentPosition2["CONTAINED_BY"] = 16] = "CONTAINED_BY";
})(DocumentPosition || (DocumentPosition = {}));
var getAtomFeed = function(feedRoot) {
  var _a2;
  const childs = feedRoot.children;
  const feed = {
    type: "atom",
    items: getElementsByTagName2("entry", childs).map((item) => {
      var _a3;
      const { children } = item;
      const entry = { media: getMediaElements(children) };
      addConditionally(entry, "id", "id", children);
      addConditionally(entry, "title", "title", children);
      const href2 = (_a3 = getOneElement("link", children)) === null || _a3 === undefined ? undefined : _a3.attribs["href"];
      if (href2) {
        entry.link = href2;
      }
      const description = fetch("summary", children) || fetch("content", children);
      if (description) {
        entry.description = description;
      }
      const pubDate = fetch("updated", children);
      if (pubDate) {
        entry.pubDate = new Date(pubDate);
      }
      return entry;
    })
  };
  addConditionally(feed, "id", "id", childs);
  addConditionally(feed, "title", "title", childs);
  const href = (_a2 = getOneElement("link", childs)) === null || _a2 === undefined ? undefined : _a2.attribs["href"];
  if (href) {
    feed.link = href;
  }
  addConditionally(feed, "description", "subtitle", childs);
  const updated = fetch("updated", childs);
  if (updated) {
    feed.updated = new Date(updated);
  }
  addConditionally(feed, "author", "email", childs, true);
  return feed;
};
var getRssFeed = function(feedRoot) {
  var _a2, _b;
  const childs = (_b = (_a2 = getOneElement("channel", feedRoot.children)) === null || _a2 === undefined ? undefined : _a2.children) !== null && _b !== undefined ? _b : [];
  const feed = {
    type: feedRoot.name.substr(0, 3),
    id: "",
    items: getElementsByTagName2("item", feedRoot.children).map((item) => {
      const { children } = item;
      const entry = { media: getMediaElements(children) };
      addConditionally(entry, "id", "guid", children);
      addConditionally(entry, "title", "title", children);
      addConditionally(entry, "link", "link", children);
      addConditionally(entry, "description", "description", children);
      const pubDate = fetch("pubDate", children) || fetch("dc:date", children);
      if (pubDate)
        entry.pubDate = new Date(pubDate);
      return entry;
    })
  };
  addConditionally(feed, "title", "title", childs);
  addConditionally(feed, "link", "link", childs);
  addConditionally(feed, "description", "description", childs);
  const updated = fetch("lastBuildDate", childs);
  if (updated) {
    feed.updated = new Date(updated);
  }
  addConditionally(feed, "author", "managingEditor", childs, true);
  return feed;
};
var getMediaElements = function(where) {
  return getElementsByTagName2("media:content", where).map((elem) => {
    const { attribs } = elem;
    const media = {
      medium: attribs["medium"],
      isDefault: !!attribs["isDefault"]
    };
    for (const attrib of MEDIA_KEYS_STRING) {
      if (attribs[attrib]) {
        media[attrib] = attribs[attrib];
      }
    }
    for (const attrib of MEDIA_KEYS_INT) {
      if (attribs[attrib]) {
        media[attrib] = parseInt(attribs[attrib], 10);
      }
    }
    if (attribs["expression"]) {
      media.expression = attribs["expression"];
    }
    return media;
  });
};
var getOneElement = function(tagName, node7) {
  return getElementsByTagName2(tagName, node7, true, 1)[0];
};
var fetch = function(tagName, where, recurse = false) {
  return textContent(getElementsByTagName2(tagName, where, recurse, 1)).trim();
};
var addConditionally = function(obj, prop2, tagName, where, recurse = false) {
  const val = fetch(tagName, where, recurse);
  if (val)
    obj[prop2] = val;
};
var isValidFeed = function(value2) {
  return value2 === "rss" || value2 === "feed" || value2 === "rdf:RDF";
};
var MEDIA_KEYS_STRING = ["url", "type", "lang"];
var MEDIA_KEYS_INT = [
  "fileSize",
  "bitrate",
  "framerate",
  "samplingrate",
  "channels",
  "duration",
  "height",
  "width"
];
var parseFeedDefaultOptions = { xmlMode: true };
var { Parser: Parser3 } = exports_esm3;
var { entries: entries2 } = Object;
var setAttributes = (child, attributes2) => {
  for (const [name2, value2] of entries2(attributes2))
    child.setAttribute(name2, value2);
};
var setChild = (parent2, child) => {
  child[parentNode] = parent2;
  getNodes(parent2).push(child);
  return child;
};

class Node3 {
  constructor(node7, svg) {
    this.D = node7[ownerDocument];
    this.n = node7;
    this.s = svg;
    this.d = true;
  }
  onopentag(name2, attributes2) {
    const { D: document2, n: node7, s: svg } = this;
    const asSVG = svg || isSVG(name2);
    this.n = setChild(node7, asSVG ? document2.createElementNS(SVG_NAMESPACE, name2) : document2.createElement(name2));
    if (asSVG)
      this.s = true;
    setAttributes(this.n, attributes2);
  }
  onclosetag() {
    const { n: node7, s: svg } = this;
    this.n = node7[parentNode];
    if (svg && isSVG(this.n[localName]))
      this.s = false;
  }
  oncomment(text3) {
    const { D: document2, n: node7 } = this;
    node7.appendChild(new Comment(text3, document2));
  }
  ontext(text3) {
    const { D: document2, n: node7, d: data } = this;
    if (data)
      node7.appendChild(new Text(text3, document2));
  }
  oncdatastart() {
    this.d = false;
  }
  oncdataend() {
    this.d = true;
  }
}
var parse = (handler, xmlMode, text3) => {
  const content = new Parser3(handler, {
    lowerCaseAttributeNames: false,
    decodeEntities: true,
    recognizeCDATA: true,
    xmlMode
  });
  content.write(text3);
  content.end();
};
var parseString = (node7, xmlMode, text3) => {
  parse(new Node3(node7, xmlMode), xmlMode, text3);
  return node7;
};
var getAttributes = (element) => element[attributes] || (element[attributes] = new Map);

class Element2 extends Parent {
  constructor(name2, owner = null) {
    super(ELEMENT_NODE, owner)[localName] = name2;
    this[attributes] = null;
  }
  get attributes() {
    return named_node_map_default(getAttributes(this));
  }
  get dataset() {
    return string_map_default(this);
  }
  get classList() {
    return token_list_default(this);
  }
  get content() {
    const fragment = new DocumentFragment(this[ownerDocument]);
    const { [childNodes]: nodes } = this;
    if (nodes.length)
      fragment[childNodes] = nodes.map(cloned, fragment);
    return fragment;
  }
  get localName() {
    return this[localName];
  }
  get nodeName() {
    return this[localName].toUpperCase();
  }
  get tagName() {
    return this[localName].toUpperCase();
  }
  get outerHTML() {
    return this.toString();
  }
  get style() {
    const self = this;
    return {
      get cssText() {
        return self.getAttribute("style") || "";
      },
      set cssText(value2) {
        self.setAttribute("style", value2);
      }
    };
  }
  get innerHTML() {
    return this[childNodes].join("");
  }
  set innerHTML(text3) {
    const fragment = parseString(this[ownerDocument].createDocumentFragment(), "ownerSVGElement" in this, text3);
    this[childNodes] = fragment[childNodes].map(setParentNode, this);
  }
  get textContent() {
    const data = [];
    for (const node7 of this[childNodes]) {
      switch (node7[nodeType]) {
        case TEXT_NODE:
          data.push(node7.data);
          break;
        case ELEMENT_NODE:
          data.push(node7.textContent);
          break;
      }
    }
    return data.join("");
  }
  set textContent(data) {
    this[childNodes].forEach(setParentNode, null);
    const text3 = this[ownerDocument].createTextNode(data);
    this[childNodes] = [setParentNode.call(this, text3)];
  }
  get id() {
    return this.getAttribute("id") || "";
  }
  set id(value2) {
    this.setAttribute("id", value2);
  }
  get className() {
    return this.getAttribute("class") || "";
  }
  set className(value2) {
    this.setAttribute("class", value2);
  }
  cloneNode(deep = false) {
    const element = new Element2(this[localName], this[ownerDocument]);
    const { [attributes]: attrs, [childNodes]: nodes } = this;
    if (attrs) {
      const map2 = element[attributes] = new Map;
      for (const { [name]: key2, [value]: val } of this[attributes].values())
        map2.set(key2, new Attribute(key2, val, element));
    }
    if (deep && nodes.length)
      element[childNodes] = nodes.map(cloned, element);
    return element;
  }
  getAttribute(name2) {
    const attribute2 = this[attributes]?.get(name2);
    return attribute2 ? attribute2.value : null;
  }
  getAttributeNode(name2) {
    return this[attributes]?.get(name2) || null;
  }
  getAttributeNames() {
    const { [attributes]: attrs } = this;
    return attrs ? [...attrs.keys()] : [];
  }
  hasAttribute(name2) {
    return !!this[attributes]?.has(name2);
  }
  hasAttributes() {
    return !!this[attributes]?.size;
  }
  removeAttribute(name2) {
    const attribute2 = this[attributes]?.get(name2);
    if (attribute2) {
      attribute2[ownerElement] = null;
      this[attributes].delete(name2);
    }
  }
  removeAttributeNode(attribute2) {
    this[attributes]?.delete(attribute2[name]);
    attribute2[ownerElement] = null;
  }
  setAttribute(name2, value2) {
    const attributes2 = getAttributes(this);
    const attribute2 = attributes2.get(name2);
    if (attribute2)
      attribute2.value = value2;
    else {
      const attribute3 = new Attribute(name2, value2, this);
      attributes2.set(name2, attribute3);
    }
  }
  setAttributeNode(attribute2) {
    attribute2[ownerElement]?.removeAttributeNode(attribute2);
    attribute2[ownerElement] = this;
    getAttributes(this).set(attribute2[name], attribute2);
  }
  toggleAttribute(name2, ...rest) {
    if (this.hasAttribute(name2)) {
      if (!rest.at(0)) {
        this.removeAttribute(name2);
        return false;
      }
      return true;
    } else if (rest.length < 1 || rest.at(0)) {
      this.setAttribute(name2, "");
      return true;
    }
    return false;
  }
  toString() {
    const { [localName]: name2, [childNodes]: nodes, [attributes]: attrs } = this;
    const html = ["<", name2];
    if (attrs?.size) {
      for (const attribute2 of attrs.values())
        html.push(" ", attribute2);
    }
    html.push(">", ...nodes);
    if (!VOID_ELEMENTS.test(name2))
      html.push("</", name2, ">");
    return html.join("");
  }
}

class SVGElement extends Element2 {
  constructor(name2, owner = null) {
    super(ELEMENT_NODE, owner)[localName] = name2;
  }
  get ownerSVGElement() {
    let { [parentNode]: parent3 } = this;
    while (parent3 && !isSVG(parent3[localName]))
      parent3 = parent3[parentNode];
    return parent3;
  }
  cloneNode(deep = false) {
    const svg = new SVGElement(this[localName], this[ownerDocument]);
    const { [attributes]: attrs, [childNodes]: nodes } = this;
    if (attrs) {
      const map2 = svg[attributes] = new Map;
      for (const { [name]: key2, [value]: val } of this[attributes].values())
        map2.set(key2, new Attribute(key2, val, svg));
    }
    if (deep && nodes.length)
      svg[childNodes] = nodes.map(cloned, svg);
    return svg;
  }
  toString() {
    const { [localName]: name2, [childNodes]: nodes, [attributes]: attrs } = this;
    const svg = ["<", name2];
    if (attrs?.size) {
      for (const attribute3 of attrs.values())
        svg.push(" ", attribute3);
    }
    if (nodes.length || isSVG(name2))
      svg.push(">", ...nodes, "</", name2, ">");
    else
      svg.push(" />");
    return svg.join("");
  }
}
var start = Symbol("start");
var end = Symbol("end");

class Range {
  constructor() {
    this[ownerElement] = null;
    this[start] = null;
    this[end] = null;
  }
  setStartAfter(node7) {
    this[start] = node7.nextSibling;
  }
  setStartBefore(node7) {
    this[start] = node7;
  }
  setEndAfter(node7) {
    this[end] = node7;
  }
  deleteContents() {
    const { [start]: s2, [end]: e } = this;
    const { [childNodes]: nodes } = s2[parentNode];
    const si = nodes.indexOf(s2);
    this[start] = null;
    this[end] = null;
    nodes.splice(si, nodes.indexOf(e) + 1 - si).forEach(setParentNode, null);
  }
  selectNodeContents(node7) {
    this[ownerElement] = node7;
  }
  createContextualFragment(text3) {
    const { [ownerElement]: context } = this;
    return parseString(context[ownerDocument].createDocumentFragment(), "ownerSVGElement" in context, text3);
  }
}
var asType = (accept, type) => type === ELEMENT_NODE && accept & 1 ? ELEMENT_NODE : type === COMMENT_NODE && accept & 128 ? COMMENT_NODE : 0;

class TreeWalker {
  constructor(parent3, accept) {
    this[childNodes] = walk(parent3, accept);
  }
  nextNode() {
    const { value: value2, done } = this[childNodes].next();
    return done ? null : value2;
  }
}
var doctype = Symbol("doctype");
var head = Symbol("head");
var body = Symbol("body");
var defaultView = Object.create(globalThis, {
  Event: { value: Event }
});

class Document2 extends Parent {
  constructor(type = "html") {
    super(DOCUMENT_NODE, null)[nodeName] = "#document";
    this[documentElement] = null;
    this[doctype] = null;
    this[head] = null;
    this[body] = null;
    if (type === "html") {
      const html = this[documentElement] = new Element2(type, this);
      this[childNodes] = [
        this[doctype] = new DocumentType(type, this),
        html
      ].map(setParentNode, this);
      html[childNodes] = [
        this[head] = new Element2("head", this),
        this[body] = new Element2("body", this)
      ].map(setParentNode, html);
    }
  }
  get defaultView() {
    return defaultView;
  }
  get doctype() {
    return this[doctype];
  }
  get documentElement() {
    return this[documentElement];
  }
  get head() {
    return this[head];
  }
  get body() {
    return this[body];
  }
  createAttribute(name2) {
    const attribute4 = new Attribute(name2);
    attribute4[ownerDocument] = this;
    return attribute4;
  }
  createComment(data) {
    return new Comment(data, this);
  }
  createDocumentFragment() {
    return new DocumentFragment(this);
  }
  createElement(name2, options = null) {
    const element3 = new Element2(name2, this);
    if (options?.is)
      element3.setAttribute("is", options.is);
    return element3;
  }
  createElementNS(_, name2) {
    return new SVGElement(name2, this);
  }
  createRange() {
    return new Range;
  }
  createTextNode(data) {
    return new Text(data, this);
  }
  createTreeWalker(parent4, accept) {
    return new TreeWalker(parent4, accept);
  }
  importNode(externalNode, deep = false) {
    return externalNode.cloneNode(deep);
  }
  toString() {
    return this[childNodes].join("");
  }
}
/*! (c) Andrea Giammarchi - MIT */
var init_default = (document4) => function(exports) {
  const { constructor: DocumentFragment2 } = document4.createDocumentFragment();
  var udomdiff = (parentNode2, a2, b, get, before) => {
    const bLength = b.length;
    let aEnd = a2.length;
    let bEnd = bLength;
    let aStart = 0;
    let bStart = 0;
    let map2 = null;
    while (aStart < aEnd || bStart < bEnd) {
      if (aEnd === aStart) {
        const node7 = bEnd < bLength ? bStart ? get(b[bStart - 1], -0).nextSibling : get(b[bEnd - bStart], 0) : before;
        while (bStart < bEnd)
          parentNode2.insertBefore(get(b[bStart++], 1), node7);
      } else if (bEnd === bStart) {
        while (aStart < aEnd) {
          if (!map2 || !map2.has(a2[aStart]))
            parentNode2.removeChild(get(a2[aStart], -1));
          aStart++;
        }
      } else if (a2[aStart] === b[bStart]) {
        aStart++;
        bStart++;
      } else if (a2[aEnd - 1] === b[bEnd - 1]) {
        aEnd--;
        bEnd--;
      } else if (a2[aStart] === b[bEnd - 1] && b[bStart] === a2[aEnd - 1]) {
        const node7 = get(a2[--aEnd], -1).nextSibling;
        parentNode2.insertBefore(get(b[bStart++], 1), get(a2[aStart++], -1).nextSibling);
        parentNode2.insertBefore(get(b[--bEnd], 1), node7);
        a2[aEnd] = b[bEnd];
      } else {
        if (!map2) {
          map2 = new Map;
          let i2 = bStart;
          while (i2 < bEnd)
            map2.set(b[i2], i2++);
        }
        if (map2.has(a2[aStart])) {
          const index = map2.get(a2[aStart]);
          if (bStart < index && index < bEnd) {
            let i2 = aStart;
            let sequence = 1;
            while (++i2 < aEnd && i2 < bEnd && map2.get(a2[i2]) === index + sequence)
              sequence++;
            if (sequence > index - bStart) {
              const node7 = get(a2[aStart], 0);
              while (bStart < index)
                parentNode2.insertBefore(get(b[bStart++], 1), node7);
            } else {
              parentNode2.replaceChild(get(b[bStart++], 1), get(a2[aStart++], -1));
            }
          } else
            aStart++;
        } else
          parentNode2.removeChild(get(a2[aStart++], -1));
      }
    }
    return b;
  };
  const { isArray } = Array;
  const { getPrototypeOf, getOwnPropertyDescriptor } = Object;
  const SVG_NAMESPACE2 = "http://www.w3.org/2000/svg";
  const empty2 = [];
  const newRange = () => document4.createRange();
  const set = (map2, key2, value2) => {
    map2.set(key2, value2);
    return value2;
  };
  const gPD = (ref2, prop2) => {
    let desc;
    do {
      desc = getOwnPropertyDescriptor(ref2, prop2);
    } while (!desc && (ref2 = getPrototypeOf(ref2)));
    return desc;
  };
  const ELEMENT_NODE2 = 1;
  const COMMENT_NODE2 = 8;
  const DOCUMENT_FRAGMENT_NODE2 = 11;
  /*! (c) Andrea Giammarchi - ISC */
  const { setPrototypeOf } = Object;
  var custom = (Class) => {
    function Custom(target) {
      return setPrototypeOf(target, new.target.prototype);
    }
    Custom.prototype = Class.prototype;
    return Custom;
  };
  let range$1;
  var drop = (firstChild, lastChild, preserve) => {
    if (!range$1)
      range$1 = newRange();
    if (preserve)
      range$1.setStartAfter(firstChild);
    else
      range$1.setStartBefore(firstChild);
    range$1.setEndAfter(lastChild);
    range$1.deleteContents();
    return firstChild;
  };
  const remove2 = ({ firstChild, lastChild }, preserve) => drop(firstChild, lastChild, preserve);
  let checkType = false;
  const diffFragment = (node7, operation) => checkType && node7.nodeType === DOCUMENT_FRAGMENT_NODE2 ? 1 / operation < 0 ? operation ? remove2(node7, true) : node7.lastChild : operation ? node7.valueOf() : node7.firstChild : node7;
  const comment3 = (value2) => document4.createComment(value2);

  class PersistentFragment extends custom(DocumentFragment2) {
    #firstChild = comment3("<>");
    #lastChild = comment3("</>");
    #nodes = empty2;
    constructor(fragment) {
      super(fragment);
      this.replaceChildren(...[
        this.#firstChild,
        ...fragment.childNodes,
        this.#lastChild
      ]);
      checkType = true;
    }
    get firstChild() {
      return this.#firstChild;
    }
    get lastChild() {
      return this.#lastChild;
    }
    get parentNode() {
      return this.#firstChild.parentNode;
    }
    remove() {
      remove2(this, false);
    }
    replaceWith(node7) {
      remove2(this, true).replaceWith(node7);
    }
    valueOf() {
      let { firstChild, lastChild, parentNode: parentNode2 } = this;
      if (parentNode2 === this) {
        if (this.#nodes === empty2)
          this.#nodes = [...this.childNodes];
      } else {
        if (parentNode2) {
          this.#nodes = [firstChild];
          while (firstChild !== lastChild)
            this.#nodes.push(firstChild = firstChild.nextSibling);
        }
        this.replaceChildren(...this.#nodes);
      }
      return this;
    }
  }
  const setAttribute = (element5, name2, value2) => element5.setAttribute(name2, value2);
  const removeAttribute = (element5, name2) => element5.removeAttribute(name2);
  const aria = (element5, value2) => {
    for (const key2 in value2) {
      const $2 = value2[key2];
      const name2 = key2 === "role" ? key2 : `aria-${key2}`;
      if ($2 == null)
        removeAttribute(element5, name2);
      else
        setAttribute(element5, name2, $2);
    }
    return value2;
  };
  let listeners2;
  const at = (element5, value2, name2) => {
    name2 = name2.slice(1);
    if (!listeners2)
      listeners2 = new WeakMap;
    const known2 = listeners2.get(element5) || set(listeners2, element5, {});
    let current = known2[name2];
    if (current && current[0])
      element5.removeEventListener(name2, ...current);
    current = isArray(value2) ? value2 : [value2, false];
    known2[name2] = current;
    if (current[0])
      element5.addEventListener(name2, ...current);
    return value2;
  };
  const hole = (detail2, value2) => {
    const { t: node7, n: hole2 } = detail2;
    let nullish = false;
    switch (typeof value2) {
      case "object":
        if (value2 !== null) {
          (hole2 || node7).replaceWith(detail2.n = value2.valueOf());
          break;
        }
      case "undefined":
        nullish = true;
      default:
        node7.data = nullish ? "" : value2;
        if (hole2) {
          detail2.n = null;
          hole2.replaceWith(node7);
        }
        break;
    }
    return value2;
  };
  const className = (element5, value2) => maybeDirect(element5, value2, value2 == null ? "class" : "className");
  const data = (element5, value2) => {
    const { dataset } = element5;
    for (const key2 in value2) {
      if (value2[key2] == null)
        delete dataset[key2];
      else
        dataset[key2] = value2[key2];
    }
    return value2;
  };
  const direct = (ref2, value2, name2) => ref2[name2] = value2;
  const dot = (element5, value2, name2) => direct(element5, value2, name2.slice(1));
  const maybeDirect = (element5, value2, name2) => value2 == null ? (removeAttribute(element5, name2), value2) : direct(element5, value2, name2);
  const ref = (element5, value2) => (typeof value2 === "function" ? value2(element5) : value2.current = element5, value2);
  const regular = (element5, value2, name2) => (value2 == null ? removeAttribute(element5, name2) : setAttribute(element5, name2, value2), value2);
  const style = (element5, value2) => value2 == null ? maybeDirect(element5, value2, "style") : direct(element5.style, value2, "cssText");
  const toggle2 = (element5, value2, name2) => (element5.toggleAttribute(name2.slice(1), value2), value2);
  const array3 = (node7, value2, prev) => {
    const { length } = value2;
    node7.data = `[${length}]`;
    if (length)
      return udomdiff(node7.parentNode, prev, value2, diffFragment, node7);
    switch (prev.length) {
      case 1:
        prev[0].remove();
      case 0:
        break;
      default:
        drop(diffFragment(prev[0], 0), diffFragment(prev.at(-1), -0), false);
        break;
    }
    return empty2;
  };
  const attr = new Map([
    ["aria", aria],
    ["class", className],
    ["data", data],
    ["ref", ref],
    ["style", style]
  ]);
  const attribute4 = (element5, name2, svg2) => {
    switch (name2[0]) {
      case ".":
        return dot;
      case "?":
        return toggle2;
      case "@":
        return at;
      default:
        return svg2 || "ownerSVGElement" in element5 ? name2 === "ref" ? ref : regular : attr.get(name2) || (name2 in element5 ? name2.startsWith("on") ? direct : gPD(element5, name2)?.set ? maybeDirect : regular : regular);
    }
  };
  const text4 = (element5, value2) => (element5.textContent = value2 == null ? "" : value2, value2);
  const abc = (a2, b, c) => ({ a: a2, b, c });
  const bc = (b, c) => ({ b, c });
  const detail = (u, t2, n2, c) => ({ v: empty2, u, t: t2, n: n2, c });
  const cache$1 = () => abc(null, null, empty2);
  const find2 = (content, path2) => path2.reduceRight(childNodesIndex, content);
  const childNodesIndex = (node7, i2) => node7.childNodes[i2];
  var create = (parse2) => (template2, values2) => {
    const { a: fragment, b: entries3, c: direct2 } = parse2(template2, values2);
    const root = document4.importNode(fragment, true);
    let details = empty2;
    if (entries3 !== empty2) {
      details = [];
      for (let current, prev, i2 = 0;i2 < entries3.length; i2++) {
        const { a: path2, b: update2, c: name2 } = entries3[i2];
        const node7 = path2 === prev ? current : current = find2(root, prev = path2);
        details[i2] = detail(update2, node7, name2, update2 === array3 ? [] : update2 === hole ? cache$1() : null);
      }
    }
    return bc(direct2 ? root.firstChild : new PersistentFragment(root), details);
  };
  const TEXT_ELEMENTS2 = /^(?:plaintext|script|style|textarea|title|xmp)$/i;
  const VOID_ELEMENTS2 = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
  /*! (c) Andrea Giammarchi - ISC */
  const elements = /<([a-zA-Z0-9]+[a-zA-Z0-9:._-]*)([^>]*?)(\/?)>/g;
  const attributes2 = /([^\s\\>"'=]+)\s*=\s*(['"]?)\x01/g;
  const holes = /[\x01\x02]/g;
  var parser$1 = (template2, prefix2, xml) => {
    let i2 = 0;
    return template2.join("\x01").trim().replace(elements, (_, name2, attrs, selfClosing) => `<${name2}${attrs.replace(attributes2, "\x02=$2$1").trimEnd()}${selfClosing ? xml || VOID_ELEMENTS2.test(name2) ? " /" : `></${name2}` : ""}>`).replace(holes, (hole2) => hole2 === "\x01" ? `<!--${prefix2 + i2++}-->` : prefix2 + i2++);
  };
  let template = document4.createElement("template"), svg$1, range2;
  var createContent = (text5, xml) => {
    if (xml) {
      if (!svg$1) {
        svg$1 = document4.createElementNS(SVG_NAMESPACE2, "svg");
        range2 = newRange();
        range2.selectNodeContents(svg$1);
      }
      return range2.createContextualFragment(text5);
    }
    template.innerHTML = text5;
    const { content } = template;
    template = template.cloneNode(false);
    return content;
  };
  const createPath = (node7) => {
    const path2 = [];
    let parentNode2;
    while (parentNode2 = node7.parentNode) {
      path2.push(path2.indexOf.call(parentNode2.childNodes, node7));
      node7 = parentNode2;
    }
    return path2;
  };
  const textNode = () => document4.createTextNode("");
  const resolve = (template2, values2, xml) => {
    const content = createContent(parser$1(template2, prefix, xml), xml);
    const { length } = template2;
    let entries3 = empty2;
    if (length > 1) {
      const replace3 = [];
      const tw = document4.createTreeWalker(content, 1 | 128);
      let i2 = 0, search = `${prefix}${i2++}`;
      entries3 = [];
      while (i2 < length) {
        const node7 = tw.nextNode();
        if (node7.nodeType === COMMENT_NODE2) {
          if (node7.data === search) {
            const update2 = isArray(values2[i2 - 1]) ? array3 : hole;
            if (update2 === hole)
              replace3.push(node7);
            entries3.push(abc(createPath(node7), update2, null));
            search = `${prefix}${i2++}`;
          }
        } else {
          let path2;
          while (node7.hasAttribute(search)) {
            if (!path2)
              path2 = createPath(node7);
            const name2 = node7.getAttribute(search);
            entries3.push(abc(path2, attribute4(node7, name2, xml), name2));
            removeAttribute(node7, search);
            search = `${prefix}${i2++}`;
          }
          if (!xml && TEXT_ELEMENTS2.test(node7.localName) && node7.textContent.trim() === `<!--${search}-->`) {
            entries3.push(abc(path2 || createPath(node7), text4, null));
            search = `${prefix}${i2++}`;
          }
        }
      }
      for (i2 = 0;i2 < replace3.length; i2++)
        replace3[i2].replaceWith(textNode());
    }
    const { childNodes: childNodes2 } = content;
    let { length: len } = childNodes2;
    if (len < 1) {
      len = 1;
      content.appendChild(textNode());
    } else if (len === 1 && length !== 1 && childNodes2[0].nodeType !== ELEMENT_NODE2) {
      len = 0;
    }
    return set(cache, template2, abc(content, entries3, len === 1));
  };
  const cache = new WeakMap;
  const prefix = "is\xB5";
  var parser = (xml) => (template2, values2) => cache.get(template2) || resolve(template2, values2, xml);
  const parseHTML = create(parser(false));
  const parseSVG = create(parser(true));
  const unroll = (info, { s: s2, t: t2, v }) => {
    if (info.a !== t2) {
      const { b, c } = (s2 ? parseSVG : parseHTML)(t2, v);
      info.a = t2;
      info.b = b;
      info.c = c;
    }
    for (let { c } = info, i2 = 0;i2 < c.length; i2++) {
      const value2 = v[i2];
      const detail2 = c[i2];
      switch (detail2.u) {
        case array3:
          detail2.v = array3(detail2.t, unrollValues(detail2.c, value2), detail2.v);
          break;
        case hole:
          const current = value2 instanceof Hole ? unroll(detail2.c || (detail2.c = cache$1()), value2) : (detail2.c = null, value2);
          if (current !== detail2.v)
            detail2.v = hole(detail2, current);
          break;
        default:
          if (value2 !== detail2.v)
            detail2.v = detail2.u(detail2.t, value2, detail2.n, detail2.v);
          break;
      }
    }
    return info.b;
  };
  const unrollValues = (stack, values2) => {
    let i2 = 0, { length } = values2;
    if (length < stack.length)
      stack.splice(length);
    for (;i2 < length; i2++) {
      const value2 = values2[i2];
      if (value2 instanceof Hole)
        values2[i2] = unroll(stack[i2] || (stack[i2] = cache$1()), value2);
      else
        stack[i2] = null;
    }
    return values2;
  };

  class Hole {
    constructor(svg2, template2, values2) {
      this.s = svg2;
      this.t = template2;
      this.v = values2;
    }
    toDOM(info = cache$1()) {
      return unroll(info, this);
    }
  }
  /*! (c) Andrea Giammarchi - MIT */
  const tag = (svg2) => (template2, ...values2) => new Hole(svg2, template2, values2);
  const html = tag(false);
  const svg = tag(true);
  const known = new WeakMap;
  var render2 = (where, what, check) => {
    const info = known.get(where) || set(known, where, cache$1());
    const { b } = info;
    const hole2 = check && typeof what === "function" ? what() : what;
    const node7 = hole2 instanceof Hole ? hole2.toDOM(info) : hole2;
    if (b !== node7)
      where.replaceChildren((info.b = node7).valueOf());
    return where;
  };
  var keyed$1 = (where, what) => render2(where, what, true);
  /*! (c) Andrea Giammarchi - MIT */
  const keyed = new WeakMap;
  const createRef = (svg2) => (ref2, key2) => {
    function tag2(template2, ...values2) {
      return new Hole(svg2, template2, values2).toDOM(this);
    }
    const memo = keyed.get(ref2) || set(keyed, ref2, new Map);
    return memo.get(key2) || set(memo, key2, tag2.bind(cache$1()));
  };
  const htmlFor = createRef(false);
  const svgFor = createRef(true);
  exports.Hole = Hole;
  exports.attr = attr;
  exports.html = html;
  exports.htmlFor = htmlFor;
  exports.render = keyed$1;
  exports.svg = svg;
  exports.svgFor = svgFor;
  return exports;
}({});
var plain = function(t2) {
  if (typeof t2 === "string") {
    return t2;
  }
  for (var s2 = t2[0], i2 = 1, l2 = arguments.length;i2 < l2; i2++)
    s2 += arguments[i2] + t2[i2];
  return s2;
};
var raw = new Proxy(plain, {
  get(_, k) {
    let f = plain.bind(null);
    f.lang = k;
    return f;
  }
});
var css = raw.css;
var doc = new Document2;
var { Hole, render: render2, html, svg, htmlFor, svgFor, attr } = init_default(doc);
var stringifyModel = function({ state, derived, entry, orbs, getset, async }) {
  let str = `{\n`;
  str += Object.keys(state).map((k) => `${k}:${parseValue(state[k], k)}`).join(",\n");
  str += ",\n";
  str += Object.keys(derived).map((k) => `${derived[k]}`).join(",\n");
  str += ",\n";
  str += Object.keys(entry).map((k) => `${entry[k]}`).join(",\n");
  str += ",\n";
  str += "}";
  return str;
};
var diff_acc = function(before, after) {
  let toRemove = new Set([...before].filter((x) => !after.has(x)));
  let toAdd = new Set([...after].filter((x) => !before.has(x)));
  let orb_keys = {};
  Array.from([...after]).forEach((key2) => {
    if (key2.indexOf(".") > 0) {
      let o_k = key2.substring(0, key2.indexOf("."));
      let o_v = key2.substring(key2.indexOf(".") + 1);
      if (orb_keys[o_k]) {
        orb_keys[o_k].add(o_v);
      } else {
        orb_keys[o_k] = new Set([o_v]);
      }
      toAdd.delete(key2);
    }
  });
  let toSub = Object.keys(orb_keys).map((k) => [k, orb_keys[k]]);
  return [toRemove, toAdd, toSub];
};
var entry_count = 0;
var get_stack = [];
var curr_get = null;
var prefix = "";
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
  #init_done = false;
  constructor(defs, state, this_orb) {
    this.#this_orb = this_orb;
    this.#models = defs.orbs;
    for (const key2 in defs.state) {
      this.#dep_graph[key2] = new Set;
      this.set_state(key2, key2 in state ? state[key2] : structuredClone(defs.state[key2]));
    }
    for (const key2 in defs.orbs) {
      this.#dep_graph[key2] = new Set;
      this.set_orb(key2, state[key2]);
    }
    for (const key2 in defs.entry) {
      this.#entrypoints[key2] = defs.entry[key2].bind(this.#this_orb);
    }
    for (const key2 in defs.async) {
      this.#entrypoints[key2] = defs.async[key2].bind(this.#this_orb);
    }
    for (const key2 in defs.derived) {
      this.#dep_graph[key2] = new Set;
      this.#get_watchlists[key2] = new Set;
      this.#getters[key2] = defs.derived[key2].bind(this.#this_orb);
    }
    for (const key2 in defs.getset) {
      this.#dep_graph[key2] = new Set;
      this.#get_watchlists[key2] = new Set;
      this.#getters[key2] = defs.getset[key2].get.bind(this.#this_orb);
      this.#entrypoints[key2] = defs.getset[key2].set.bind(this.#this_orb);
    }
    this.#init_done = true;
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
      let res;
      const prev = curr_get;
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
        let res;
        const prev = curr_get;
        if (!async) {
          curr_get = this;
          entry_count++;
        }
        try {
          res = this.#entrypoints[k](...args);
        } finally {
          curr_get = prev;
        }
        if (async) {
          return res.then((ans) => {
            this.#flush();
            return ans;
          });
        } else {
          entry_count--;
          this.#flush();
          return res;
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
    this.#watch_get(k);
    return this.#orbs[k];
  }
  #isLocal() {
    return curr_get == this || !this.#init_done;
  }
  #watch_get(key2) {
    let len = get_stack.length;
    if (len != 0) {
      get_stack[len - 1].add(prefix + key2);
      prefix = "";
    }
  }
  #get_stack_push() {
    get_stack.push(new Set);
  }
  #get_stack_pop() {
    let accessed = get_stack.splice(get_stack.length - 1, 1)[0];
    return accessed;
  }
  #derived_value(key2) {
    if (this.#valid[key2]) {
      return this.#cache[key2];
    } else {
      this.#get_stack_push();
      let watchlist = this.#get_watchlists[key2];
      let v = this.#getters[key2]();
      let accessed = this.#get_stack_pop();
      let [toRemove, toAdd, toSub] = diff_acc(watchlist, accessed);
      toRemove.forEach((r_k) => {
        this.#dep_graph[r_k].delete(key2);
        this.#get_watchlists[key2].delete(r_k);
      });
      toAdd.forEach((a_k) => {
        if (this.#dep_graph[a_k]) {
          this.#dep_graph[a_k].add(key2);
        }
        this.#get_watchlists[key2].add(a_k);
      });
      toSub.forEach(([orb, acc_keys]) => {
        this.#orbs[orb].$((o2) => {
        });
      });
      this.#cache[key2] = v;
      this.#valid[key2] = true;
      return v;
    }
  }
  #invalidate(key2, is_state = false) {
    if (this.#init_done) {
      if (is_state || this.#valid[key2]) {
        this.#changed.add(key2);
        if (!is_state) {
          this.#valid[key2] = false;
        }
        this.#dep_graph[key2].forEach((k) => this.#invalidate(k));
      }
    }
  }
  #flush() {
    if (entry_count == 0 && this.#changed.size > 0) {
      this.#subs.forEach((watchlist, cb) => {
        if (watchlist == null || [...watchlist].some((k) => this.#changed.has(k))) {
          watchlist = new Set;
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
          } else {
            this.#subs.set(cb, watchlist);
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
  for (let i2 = arguments.length - 2;i2 >= 0; i2--) {
    defs = deepMerge(arguments[i2][Z_DEFS], defs);
    ids.push(...arguments[i2][Z_MODEL_IDS]);
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
    value: function(o2) {
      return o2 && o2[MODEL_IMPLEMENTS] && o2[MODEL_IMPLEMENTS].includes(model_id);
    }
  });
  ModelConstructor[Z_DEFS] = defs;
  ModelConstructor[Z_MODEL_IDS] = ids;
  ModelConstructor.toString = function() {
    return stringifyModel(defs);
  };
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
  Object.keys(prop_descs).forEach((key2) => {
    let type, def;
    let { value: value2, get, set } = prop_descs[key2];
    if (get && set) {
      type = "getset";
      def = { get, set };
    } else if (get) {
      def = get;
      type = "derived";
    } else if (set) {
      console.log("TODO: lone setter");
    } else {
      def = value2;
      if (typeof value2 == "function") {
        if (value2 instanceof Model) {
          type = "orbs";
        } else if (value2.constructor.name == "AsyncFunction") {
          type = "async";
        } else {
          type = "entry";
        }
      } else {
        if (value2 == MODEL_SELF) {
          type = "orbs";
        } else {
          type = "state";
        }
      }
    }
    types[key2] = type;
    defs[type][key2] = def;
  });
  return { types, defs };
};
var deepMerge = function(target, source) {
  const result = { ...target, ...source };
  for (const key2 of Object.keys(result)) {
    result[key2] = typeof target[key2] == "object" && typeof source[key2] == "object" ? deepMerge(target[key2], source[key2]) : result[key2];
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
  } }
};
Model.self = () => MODEL_SELF;
Model.stringify = function(ModelConstructor) {
  return stringifyModel(ModelConstructor[Z_DEFS]);
};
Object.defineProperty(Model, Symbol.hasInstance, {
  value(o2) {
    return o2 && Object.hasOwn(o2, Z_MODEL_IDS);
  }
});
Object.defineProperty(Model, "toString", {
  value(o2) {
    return o2 && Object.hasOwn(o2, Z_MODEL_IDS);
  }
});
/*! (c) Andrea Giammarchi - ISC */
var stringifyObject = (handler) => "{" + Object.keys(handler).map((key2) => {
  const { get, set, value: value2 } = Object.getOwnPropertyDescriptor(handler, key2);
  if (get && set)
    key2 = get + "," + set;
  else if (get)
    key2 = "" + get;
  else if (set)
    key2 = "" + set;
  else
    key2 = JSON.stringify(key2) + ":" + parseValue(value2, key2);
  return key2;
}).join(",") + "}";
var parseValue = (value2, key2) => {
  const type = typeof value2;
  if (type === "function")
    return value2.toString().replace(new RegExp("^(\\*|async )?\\s*" + key2 + "[^(]*?\\("), (_, $1) => $1 === "*" ? "function* (" : ($1 || "") + "function (");
  if (type === "object" && value2)
    return Array.isArray(value2) ? parseArray(value2) : stringifyObject(value2);
  return JSON.stringify(value2);
};
var parseArray = (array3) => "[" + array3.map(parseValue).join(",") + "]";
var Orb = function(def) {
  return Model(def)();
};
Object.defineProperty(Orb, Symbol.hasInstance, {
  value(o2) {
    return o2 && o2[$Z2] && o2[$Z2] instanceof OrbCore;
  }
});
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
var transpiler3 = new Bun.Transpiler({
  loader: "js"
});
var Script2 = Model(File, {
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
var { Glob } = globalThis.Bun;
var Build = Model({
  filter: "",
  input_dir: ".",
  get glob() {
    let { input_dir, filter: filter2 } = this;
    return `${input_dir}/${filter2}`;
  },
  get globber() {
    let { glob } = this;
    return new Glob(glob);
  },
  files: {},
  get all_files() {
    let { files } = this;
    return Object.values(files);
  },
  FileModelCallback() {
    return File;
  },
  async create_file(route) {
    if (!this.files[route]) {
      let FileModel = this.FileModelCallback();
      let name2 = route.replace(this.input_dir + "/", "");
      name2 = name2.substring(0, name2.lastIndexOf("."));
      let forb = FileModel({
        route: path.join(process.cwd(), route),
        name: name2
      });
      await forb.update();
      this.files[route] = forb;
      this.files = this.files;
    } else {
      console.log("file already exists!");
    }
  },
  async init() {
    await this.update({ skip_delete: true });
  },
  async update({ skip_delete = false } = {}) {
    let { files, globber } = this;
    let path_arr = [...globber.scanSync(".")];
    if (!skip_delete) {
      Object.keys(files).forEach((prev_path) => {
        if (path_arr.indexOf(prev_path) == -1) {
          console.log("DELETE " + prev_path);
          delete files[prev_path];
        }
      });
    }
    for (let i2 = 0;i2 < path_arr.length; i2++) {
      let cur_path = path_arr[i2];
      if (files[cur_path]) {
        await files[cur_path].update();
      } else {
        await this.create_file(cur_path);
      }
    }
  }
});
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

// src/cli/src/get_config.js
async function get_config(config_filename = "zilker.js") {
  let config_path = path2.join(process.cwd(), config_filename);
  if (!fs3.existsSync(config_path)) {
    throw Error("No config file");
  }
  let config = await import(config_path);
  return await parseConfig(config);
}
async function parseConfig(config) {
  let { localhost, folders, ...rest } = config;
  localhost = { ...default_localhost, ...localhost };
  if (Object.keys(rest).length > 0) {
    console.log(`Unsupported exports in config: ${Object.keys(rest)}`);
  }
  let builds = [];
  await Promise.all(Object.keys(folders).map(async (dirname) => {
    let build_orb = (await folders[dirname])({ input_dir: dirname });
    await build_orb.init();
    builds.push(build_orb);
  }));
  return { localhost, folders, builds };
}
var default_localhost = {
  port: 3000,
  hostname: "0.0.0.0"
};

// src/cli/commands/build.js
var import_browserslist = __toESM(require_browserslist(), 1);
var {Glob: Glob2, $: $2 } = globalThis.Bun;

// node_modules/lightningcss/node/index.mjs
var import_ = __toESM(require_node2(), 1);
var { transform, transformStyleAttribute, bundle, bundleAsync, browserslistToTargets, composeVisitors, Features } = import_.default;

// src/cli/commands/build.js
import fs5 from "fs";
import path3 from "path";
async function writeOutputObject(out = {}) {
  await Promise.all(Object.keys(out).map(async (output_path) => {
    let val = out[output_path];
    if (typeof val == "function") {
      throw "Build functions not supported yet";
    }
    if (val.then && typeof val.then == "function") {
      val = await Promise.resolve(val);
    }
    if (typeof val == "object" && !Buffer.isBuffer(val)) {
      if (val.toString) {
        val = val.toString();
      } else {
        throw "Build objects not supported yet";
      }
    }
    await Bun.write(output_path, val);
  }));
}
async function executeBuild(build) {
  await Promise.all(build.all_files.map(async (buildfile) => {
    await buildfile.update();
    await writeOutputObject(build.build_each(buildfile));
  }));
  await writeOutputObject(build.build_all(build.all_files));
}
async function browser_bundle() {
  let browser_input_glob = new Glob2("**.js");
  let browser_input_arr = Array.from(browser_input_glob.scanSync({
    cwd: path3.join(process.cwd(), "./.zilk/browser/")
  })).map((p) => path3.join(`./.zilk/browser/`, p));
  await bundleCSS();
  let res = await Bun.build({
    entrypoints: browser_input_arr,
    outdir: "public/~z",
    minify: false,
    splitting: true,
    target: "browser",
    plugins: [
      {
        name: "zilker-import-remapping",
        setup(build) {
          build.onResolve({ filter: /views\/.+\.js$/ }, (args) => {
            if (args.importer.endsWith("hydration.js")) {
              return;
            }
            let out = path3.join(args.importer, "../../", args.path.substring(0, args.path.length - 3) + "/render.js");
            return { path: out };
          });
          build.onResolve({ filter: /^\./ }, (args) => {
            let input_file = fs5.readFileSync(args.importer, "utf8");
            let matches = /^\/\/[\s]*src:([^\n]+)\n/.exec(input_file);
            if (matches) {
              let src_route = matches[1];
              return { path: path3.join(src_route, "../", args.path) };
            }
          });
        }
      }
    ]
  });
  if (!res.success) {
    console.log(res);
  }
}
async function bundleCSS() {
  let browser_input_glob = new Glob2("**.css");
  let browser_input_arr = Array.from(browser_input_glob.scanSync({
    cwd: path3.join(process.cwd(), "./.zilk/css/")
  }));
  let outdir = "public/";
  await Promise.all(browser_input_arr.map(async (input) => {
    let file_contents = await Bun.file(path3.join(`./.zilk/css/`, input)).arrayBuffer();
    let file_dest = path3.join(outdir, input);
    let { code } = transform({
      filename: file_dest,
      minify: true,
      code: file_contents,
      targets: browserslistToTargets(import_browserslist.default(">= 0.25%"))
    });
    await Bun.write(file_dest, code);
  }));
}
async function build() {
  let { builds } = await get_config();
  await Promise.all(builds.map((build2) => executeBuild(build2)));
  await browser_bundle();
}

// node_modules/hono/dist/utils/url.js
var splitPath = (path4) => {
  const paths = path4.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
};
var splitRoutingPath = (path4) => {
  const groups = [];
  for (let i2 = 0;; ) {
    let replaced = false;
    path4 = path4.replace(/\{[^}]+\}/g, (m) => {
      const mark = `@\\${i2}`;
      groups[i2] = [mark, m];
      i2++;
      replaced = true;
      return mark;
    });
    if (!replaced) {
      break;
    }
  }
  const paths = path4.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  for (let i2 = groups.length - 1;i2 >= 0; i2--) {
    const [mark] = groups[i2];
    for (let j = paths.length - 1;j >= 0; j--) {
      if (paths[j].indexOf(mark) !== -1) {
        paths[j] = paths[j].replace(mark, groups[i2][1]);
        break;
      }
    }
  }
  return paths;
};
var patternCache = {};
var getPattern = (label) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    if (!patternCache[label]) {
      if (match[2]) {
        patternCache[label] = [label, match[1], new RegExp("^" + match[2] + "$")];
      } else {
        patternCache[label] = [label, match[1], true];
      }
    }
    return patternCache[label];
  }
  return null;
};
var getPath = (request) => {
  const match = request.url.match(/^https?:\/\/[^/]+(\/[^?]*)/);
  return match ? match[1] : "";
};
var getQueryStrings = (url) => {
  const queryIndex = url.indexOf("?", 8);
  return queryIndex === -1 ? "" : "?" + url.slice(queryIndex + 1);
};
var getPathNoStrict = (request) => {
  const result = getPath(request);
  return result.length > 1 && result[result.length - 1] === "/" ? result.slice(0, -1) : result;
};
var mergePath = (...paths) => {
  let p = "";
  let endsWithSlash = false;
  for (let path4 of paths) {
    if (p[p.length - 1] === "/") {
      p = p.slice(0, -1);
      endsWithSlash = true;
    }
    if (path4[0] !== "/") {
      path4 = `/${path4}`;
    }
    if (path4 === "/" && endsWithSlash) {
      p = `${p}/`;
    } else if (path4 !== "/") {
      p = `${p}${path4}`;
    }
    if (path4 === "/" && p === "") {
      p = "/";
    }
  }
  return p;
};
var checkOptionalParameter = (path4) => {
  if (!path4.match(/\:.+\?$/))
    return null;
  const segments = path4.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i2, a2) => a2.indexOf(v) === i2);
};
var _decodeURI = (value2) => {
  if (!/[%+]/.test(value2)) {
    return value2;
  }
  if (value2.indexOf("+") !== -1) {
    value2 = value2.replace(/\+/g, " ");
  }
  return /%/.test(value2) ? decodeURIComponent_(value2) : value2;
};
var _getQueryParam = (url, key2, multiple) => {
  let encoded;
  if (!multiple && key2 && !/[%+]/.test(key2)) {
    let keyIndex2 = url.indexOf(`?${key2}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key2}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key2.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key2.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? undefined : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key2}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return;
    }
  }
  const results = {};
  encoded ?? (encoded = /[%+]/.test(url));
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name2 = url.slice(keyIndex + 1, valueIndex === -1 ? nextKeyIndex === -1 ? undefined : nextKeyIndex : valueIndex);
    if (encoded) {
      name2 = _decodeURI(name2);
    }
    keyIndex = nextKeyIndex;
    if (name2 === "") {
      continue;
    }
    let value2;
    if (valueIndex === -1) {
      value2 = "";
    } else {
      value2 = url.slice(valueIndex + 1, nextKeyIndex === -1 ? undefined : nextKeyIndex);
      if (encoded) {
        value2 = _decodeURI(value2);
      }
    }
    if (multiple) {
      if (!(results[name2] && Array.isArray(results[name2]))) {
        results[name2] = [];
      }
      results[name2].push(value2);
    } else {
      results[name2] ?? (results[name2] = value2);
    }
  }
  return key2 ? results[key2] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url, key2) => {
  return _getQueryParam(url, key2, true);
};
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/utils/cookie.js
var validCookieNameRegEx = /^[\w!#$%&'*.^`|~+-]+$/;
var validCookieValueRegEx = /^[ !#-:<-[\]-~]*$/;
var parse2 = (cookie, name2) => {
  const pairs = cookie.trim().split(";");
  return pairs.reduce((parsedCookie, pairStr) => {
    pairStr = pairStr.trim();
    const valueStartPos = pairStr.indexOf("=");
    if (valueStartPos === -1)
      return parsedCookie;
    const cookieName = pairStr.substring(0, valueStartPos).trim();
    if (name2 && name2 !== cookieName || !validCookieNameRegEx.test(cookieName))
      return parsedCookie;
    let cookieValue = pairStr.substring(valueStartPos + 1).trim();
    if (cookieValue.startsWith('"') && cookieValue.endsWith('"'))
      cookieValue = cookieValue.slice(1, -1);
    if (validCookieValueRegEx.test(cookieValue))
      parsedCookie[cookieName] = decodeURIComponent_(cookieValue);
    return parsedCookie;
  }, {});
};
var _serialize = (name2, value2, opt = {}) => {
  let cookie = `${name2}=${value2}`;
  if (opt && typeof opt.maxAge === "number" && opt.maxAge >= 0) {
    cookie += `; Max-Age=${Math.floor(opt.maxAge)}`;
  }
  if (opt.domain) {
    cookie += `; Domain=${opt.domain}`;
  }
  if (opt.path) {
    cookie += `; Path=${opt.path}`;
  }
  if (opt.expires) {
    cookie += `; Expires=${opt.expires.toUTCString()}`;
  }
  if (opt.httpOnly) {
    cookie += "; HttpOnly";
  }
  if (opt.secure) {
    cookie += "; Secure";
  }
  if (opt.sameSite) {
    cookie += `; SameSite=${opt.sameSite}`;
  }
  if (opt.partitioned) {
    cookie += "; Partitioned";
  }
  return cookie;
};
var serialize = (name2, value2, opt = {}) => {
  value2 = encodeURIComponent(value2);
  return _serialize(name2, value2, opt);
};

// node_modules/hono/dist/helper/html/index.js
var raw2 = (value2, callbacks) => {
  const escapedString = new String(value2);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
};

// node_modules/hono/dist/utils/html.js
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var resolveCallback = async (str, phase, preserveCallbacks, context, buffer) => {
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then((res) => Promise.all(res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))).then(() => buffer[0]));
  if (preserveCallbacks) {
    return raw2(await resStr, callbacks);
  } else {
    return resStr;
  }
};

// node_modules/hono/dist/utils/stream.js
var StreamingApi = class {
  constructor(writable, _readable) {
    this.abortSubscribers = [];
    this.writable = writable;
    this.writer = writable.getWriter();
    this.encoder = new TextEncoder;
    const reader = _readable.getReader();
    this.responseReadable = new ReadableStream({
      async pull(controller) {
        const { done, value: value2 } = await reader.read();
        if (done) {
          controller.close();
        } else {
          controller.enqueue(value2);
        }
      },
      cancel: () => {
        this.abortSubscribers.forEach((subscriber) => subscriber());
      }
    });
  }
  async write(input) {
    try {
      if (typeof input === "string") {
        input = this.encoder.encode(input);
      }
      await this.writer.write(input);
    } catch (e) {
    }
    return this;
  }
  async writeln(input) {
    await this.write(input + "\n");
    return this;
  }
  sleep(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }
  async close() {
    try {
      await this.writer.close();
    } catch (e) {
    }
  }
  async pipe(body2) {
    this.writer.releaseLock();
    await body2.pipeTo(this.writable, { preventClose: true });
    this.writer = this.writable.getWriter();
  }
  async onAbort(listener) {
    this.abortSubscribers.push(listener);
  }
};

// node_modules/hono/dist/context.js
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value2) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value2);
};
var __privateSet = (obj, member, value2, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value2) : member.set(obj, value2);
  return value2;
};
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = (headers, map2 = {}) => {
  Object.entries(map2).forEach(([key2, value2]) => headers.set(key2, value2));
  return headers;
};
var _status;
var _executionCtx;
var _headers;
var _preparedHeaders;
var _res;
var _isFresh;
var Context = class {
  constructor(req, options) {
    this.env = {};
    this._var = {};
    this.finalized = false;
    this.error = undefined;
    __privateAdd(this, _status, 200);
    __privateAdd(this, _executionCtx, undefined);
    __privateAdd(this, _headers, undefined);
    __privateAdd(this, _preparedHeaders, undefined);
    __privateAdd(this, _res, undefined);
    __privateAdd(this, _isFresh, true);
    this.renderer = (content) => this.html(content);
    this.notFoundHandler = () => new Response;
    this.render = (...args) => this.renderer(...args);
    this.setRenderer = (renderer) => {
      this.renderer = renderer;
    };
    this.header = (name2, value2, options2) => {
      if (value2 === undefined) {
        if (__privateGet(this, _headers)) {
          __privateGet(this, _headers).delete(name2);
        } else if (__privateGet(this, _preparedHeaders)) {
          delete __privateGet(this, _preparedHeaders)[name2.toLocaleLowerCase()];
        }
        if (this.finalized) {
          this.res.headers.delete(name2);
        }
        return;
      }
      if (options2?.append) {
        if (!__privateGet(this, _headers)) {
          __privateSet(this, _isFresh, false);
          __privateSet(this, _headers, new Headers(__privateGet(this, _preparedHeaders)));
          __privateSet(this, _preparedHeaders, {});
        }
        __privateGet(this, _headers).append(name2, value2);
      } else {
        if (__privateGet(this, _headers)) {
          __privateGet(this, _headers).set(name2, value2);
        } else {
          __privateGet(this, _preparedHeaders) ?? __privateSet(this, _preparedHeaders, {});
          __privateGet(this, _preparedHeaders)[name2.toLowerCase()] = value2;
        }
      }
      if (this.finalized) {
        if (options2?.append) {
          this.res.headers.append(name2, value2);
        } else {
          this.res.headers.set(name2, value2);
        }
      }
    };
    this.status = (status) => {
      __privateSet(this, _isFresh, false);
      __privateSet(this, _status, status);
    };
    this.set = (key2, value2) => {
      this._var ?? (this._var = {});
      this._var[key2] = value2;
    };
    this.get = (key2) => {
      return this._var ? this._var[key2] : undefined;
    };
    this.newResponse = (data, arg, headers) => {
      if (__privateGet(this, _isFresh) && !headers && !arg && __privateGet(this, _status) === 200) {
        return new Response(data, {
          headers: __privateGet(this, _preparedHeaders)
        });
      }
      if (arg && typeof arg !== "number") {
        const headers2 = setHeaders(new Headers(arg.headers), __privateGet(this, _preparedHeaders));
        return new Response(data, {
          headers: headers2,
          status: arg.status
        });
      }
      const status = typeof arg === "number" ? arg : __privateGet(this, _status);
      __privateGet(this, _preparedHeaders) ?? __privateSet(this, _preparedHeaders, {});
      __privateGet(this, _headers) ?? __privateSet(this, _headers, new Headers);
      setHeaders(__privateGet(this, _headers), __privateGet(this, _preparedHeaders));
      if (__privateGet(this, _res)) {
        __privateGet(this, _res).headers.forEach((v, k) => {
          __privateGet(this, _headers)?.set(k, v);
        });
        setHeaders(__privateGet(this, _headers), __privateGet(this, _preparedHeaders));
      }
      headers ?? (headers = {});
      for (const [k, v] of Object.entries(headers)) {
        if (typeof v === "string") {
          __privateGet(this, _headers).set(k, v);
        } else {
          __privateGet(this, _headers).delete(k);
          for (const v2 of v) {
            __privateGet(this, _headers).append(k, v2);
          }
        }
      }
      return new Response(data, {
        status,
        headers: __privateGet(this, _headers)
      });
    };
    this.body = (data, arg, headers) => {
      return typeof arg === "number" ? this.newResponse(data, arg, headers) : this.newResponse(data, arg);
    };
    this.text = (text, arg, headers) => {
      if (!__privateGet(this, _preparedHeaders)) {
        if (__privateGet(this, _isFresh) && !headers && !arg) {
          return new Response(text);
        }
        __privateSet(this, _preparedHeaders, {});
      }
      __privateGet(this, _preparedHeaders)["content-type"] = TEXT_PLAIN;
      return typeof arg === "number" ? this.newResponse(text, arg, headers) : this.newResponse(text, arg);
    };
    this.json = (object, arg, headers) => {
      const body2 = JSON.stringify(object);
      __privateGet(this, _preparedHeaders) ?? __privateSet(this, _preparedHeaders, {});
      __privateGet(this, _preparedHeaders)["content-type"] = "application/json; charset=UTF-8";
      return typeof arg === "number" ? this.newResponse(body2, arg, headers) : this.newResponse(body2, arg);
    };
    this.jsonT = (object, arg, headers) => {
      return this.json(object, arg, headers);
    };
    this.html = (html5, arg, headers) => {
      __privateGet(this, _preparedHeaders) ?? __privateSet(this, _preparedHeaders, {});
      __privateGet(this, _preparedHeaders)["content-type"] = "text/html; charset=UTF-8";
      if (typeof html5 === "object") {
        if (!(html5 instanceof Promise)) {
          html5 = html5.toString();
        }
        if (html5 instanceof Promise) {
          return html5.then((html22) => resolveCallback(html22, HtmlEscapedCallbackPhase.Stringify, false, {})).then((html22) => {
            return typeof arg === "number" ? this.newResponse(html22, arg, headers) : this.newResponse(html22, arg);
          });
        }
      }
      return typeof arg === "number" ? this.newResponse(html5, arg, headers) : this.newResponse(html5, arg);
    };
    this.redirect = (location, status = 302) => {
      __privateGet(this, _headers) ?? __privateSet(this, _headers, new Headers);
      __privateGet(this, _headers).set("Location", location);
      return this.newResponse(null, status);
    };
    this.streamText = (cb, arg, headers) => {
      headers ?? (headers = {});
      this.header("content-type", TEXT_PLAIN);
      this.header("x-content-type-options", "nosniff");
      this.header("transfer-encoding", "chunked");
      return this.stream(cb, arg, headers);
    };
    this.stream = (cb, arg, headers) => {
      const { readable, writable } = new TransformStream;
      const stream2 = new StreamingApi(writable, readable);
      cb(stream2).finally(() => stream2.close());
      return typeof arg === "number" ? this.newResponse(stream2.responseReadable, arg, headers) : this.newResponse(stream2.responseReadable, arg);
    };
    this.cookie = (name2, value2, opt) => {
      const cookie2 = serialize(name2, value2, opt);
      this.header("set-cookie", cookie2, { append: true });
    };
    this.notFound = () => {
      return this.notFoundHandler(this);
    };
    this.req = req;
    if (options) {
      __privateSet(this, _executionCtx, options.executionCtx);
      this.env = options.env;
      if (options.notFoundHandler) {
        this.notFoundHandler = options.notFoundHandler;
      }
    }
  }
  get event() {
    if (__privateGet(this, _executionCtx) && "respondWith" in __privateGet(this, _executionCtx)) {
      return __privateGet(this, _executionCtx);
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (__privateGet(this, _executionCtx)) {
      return __privateGet(this, _executionCtx);
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    __privateSet(this, _isFresh, false);
    return __privateGet(this, _res) || __privateSet(this, _res, new Response("404 Not Found", { status: 404 }));
  }
  set res(_res2) {
    __privateSet(this, _isFresh, false);
    if (__privateGet(this, _res) && _res2) {
      __privateGet(this, _res).headers.delete("content-type");
      for (const [k, v] of __privateGet(this, _res).headers.entries()) {
        if (k === "set-cookie") {
          const cookies = __privateGet(this, _res).headers.getSetCookie();
          _res2.headers.delete("set-cookie");
          for (const cookie2 of cookies) {
            _res2.headers.append("set-cookie", cookie2);
          }
        } else {
          _res2.headers.set(k, v);
        }
      }
    }
    __privateSet(this, _res, _res2);
    this.finalized = true;
  }
  get var() {
    return { ...this._var };
  }
  get runtime() {
    const global = globalThis;
    if (global?.Deno !== undefined) {
      return "deno";
    }
    if (global?.Bun !== undefined) {
      return "bun";
    }
    if (typeof global?.WebSocketPair === "function") {
      return "workerd";
    }
    if (typeof global?.EdgeRuntime === "string") {
      return "edge-light";
    }
    if (global?.fastly !== undefined) {
      return "fastly";
    }
    if (global?.__lagon__ !== undefined) {
      return "lagon";
    }
    if (global?.process?.release?.name === "node") {
      return "node";
    }
    return "other";
  }
};
_status = new WeakMap;
_executionCtx = new WeakMap;
_headers = new WeakMap;
_preparedHeaders = new WeakMap;
_res = new WeakMap;
_isFresh = new WeakMap;

// node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => {
  return (context2, next) => {
    let index2 = -1;
    return dispatch(0);
    async function dispatch(i2) {
      if (i2 <= index2) {
        throw new Error("next() called multiple times");
      }
      index2 = i2;
      let res;
      let isError = false;
      let handler;
      if (middleware[i2]) {
        handler = middleware[i2][0][0];
        if (context2 instanceof Context) {
          context2.req.routeIndex = i2;
        }
      } else {
        handler = i2 === middleware.length && next || undefined;
      }
      if (!handler) {
        if (context2 instanceof Context && context2.finalized === false && onNotFound) {
          res = await onNotFound(context2);
        }
      } else {
        try {
          res = await handler(context2, () => {
            return dispatch(i2 + 1);
          });
        } catch (err) {
          if (err instanceof Error && context2 instanceof Context && onError) {
            context2.error = err;
            res = await onError(err, context2);
            isError = true;
          } else {
            throw err;
          }
        }
      }
      if (res && (context2.finalized === false || isError)) {
        context2.res = res;
      }
      return context2;
    }
  };
};

// node_modules/hono/dist/http-exception.js
var HTTPException = class extends Error {
  constructor(status = 500, options) {
    super(options?.message);
    this.res = options?.res;
    this.status = status;
  }
  getResponse() {
    if (this.res) {
      return this.res;
    }
    return new Response(this.message, {
      status: this.status
    });
  }
};

// node_modules/hono/dist/utils/body.js
var isArrayField = (value2) => {
  return Array.isArray(value2);
};
var parseBody = async (request, options = {
  all: false
}) => {
  let body2 = {};
  const contentType = request.headers.get("Content-Type");
  if (contentType && (contentType.startsWith("multipart/form-data") || contentType.startsWith("application/x-www-form-urlencoded"))) {
    const formData = await request.formData();
    if (formData) {
      const form = {};
      formData.forEach((value2, key2) => {
        const shouldParseAllValues = options.all || key2.slice(-2) === "[]";
        if (!shouldParseAllValues) {
          form[key2] = value2;
          return;
        }
        if (form[key2] && isArrayField(form[key2])) {
          form[key2].push(value2);
          return;
        }
        if (form[key2]) {
          form[key2] = [form[key2], value2];
          return;
        }
        form[key2] = value2;
      });
      body2 = form;
    }
  }
  return body2;
};

// node_modules/hono/dist/request.js
var __accessCheck2 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet2 = (obj, member, getter) => {
  __accessCheck2(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd2 = (obj, member, value2) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value2);
};
var __privateSet2 = (obj, member, value2, setter) => {
  __accessCheck2(obj, member, "write to private field");
  setter ? setter.call(obj, value2) : member.set(obj, value2);
  return value2;
};
var _validatedData;
var _matchResult;
var HonoRequest = class {
  constructor(request, path4 = "/", matchResult = [[]]) {
    __privateAdd2(this, _validatedData, undefined);
    __privateAdd2(this, _matchResult, undefined);
    this.routeIndex = 0;
    this.bodyCache = {};
    this.cachedBody = (key2) => {
      const { bodyCache, raw: raw3 } = this;
      const cachedBody = bodyCache[key2];
      if (cachedBody)
        return cachedBody;
      if (bodyCache.arrayBuffer) {
        return (async () => {
          return await new Response(bodyCache.arrayBuffer)[key2]();
        })();
      }
      return bodyCache[key2] = raw3[key2]();
    };
    this.raw = request;
    this.path = path4;
    __privateSet2(this, _matchResult, matchResult);
    __privateSet2(this, _validatedData, {});
  }
  param(key2) {
    if (key2) {
      const param = __privateGet2(this, _matchResult)[1] ? __privateGet2(this, _matchResult)[1][__privateGet2(this, _matchResult)[0][this.routeIndex][1][key2]] : __privateGet2(this, _matchResult)[0][this.routeIndex][1][key2];
      return param ? /\%/.test(param) ? decodeURIComponent_(param) : param : undefined;
    } else {
      const decoded = {};
      const keys2 = Object.keys(__privateGet2(this, _matchResult)[0][this.routeIndex][1]);
      for (let i2 = 0, len = keys2.length;i2 < len; i2++) {
        const key22 = keys2[i2];
        const value2 = __privateGet2(this, _matchResult)[1] ? __privateGet2(this, _matchResult)[1][__privateGet2(this, _matchResult)[0][this.routeIndex][1][key22]] : __privateGet2(this, _matchResult)[0][this.routeIndex][1][key22];
        if (value2 && typeof value2 === "string") {
          decoded[key22] = /\%/.test(value2) ? decodeURIComponent_(value2) : value2;
        }
      }
      return decoded;
    }
  }
  query(key2) {
    return getQueryParam(this.url, key2);
  }
  queries(key2) {
    return getQueryParams(this.url, key2);
  }
  header(name2) {
    if (name2)
      return this.raw.headers.get(name2.toLowerCase()) ?? undefined;
    const headerData = {};
    this.raw.headers.forEach((value2, key2) => {
      headerData[key2] = value2;
    });
    return headerData;
  }
  cookie(key2) {
    const cookie3 = this.raw.headers.get("Cookie");
    if (!cookie3)
      return;
    const obj = parse2(cookie3);
    if (key2) {
      const value2 = obj[key2];
      return value2;
    } else {
      return obj;
    }
  }
  async parseBody(options) {
    if (this.bodyCache.parsedBody)
      return this.bodyCache.parsedBody;
    const parsedBody = await parseBody(this, options);
    this.bodyCache.parsedBody = parsedBody;
    return parsedBody;
  }
  json() {
    return this.cachedBody("json");
  }
  text() {
    return this.cachedBody("text");
  }
  arrayBuffer() {
    return this.cachedBody("arrayBuffer");
  }
  blob() {
    return this.cachedBody("blob");
  }
  formData() {
    return this.cachedBody("formData");
  }
  addValidatedData(target, data) {
    __privateGet2(this, _validatedData)[target] = data;
  }
  valid(target) {
    return __privateGet2(this, _validatedData)[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return __privateGet2(this, _matchResult)[0].map(([[, route]]) => route);
  }
  get routePath() {
    return __privateGet2(this, _matchResult)[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
  get headers() {
    return this.raw.headers;
  }
  get body() {
    return this.raw.body;
  }
  get bodyUsed() {
    return this.raw.bodyUsed;
  }
  get integrity() {
    return this.raw.integrity;
  }
  get keepalive() {
    return this.raw.keepalive;
  }
  get referrer() {
    return this.raw.referrer;
  }
  get signal() {
    return this.raw.signal;
  }
};
_validatedData = new WeakMap;
_matchResult = new WeakMap;

// node_modules/hono/dist/router.js
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
};

// node_modules/hono/dist/hono-base.js
var defineDynamicClass = function() {
  return class {
  };
};
var __accessCheck3 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet3 = (obj, member, getter) => {
  __accessCheck3(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd3 = (obj, member, value2) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value2);
};
var __privateSet3 = (obj, member, value2, setter) => {
  __accessCheck3(obj, member, "write to private field");
  setter ? setter.call(obj, value2) : member.set(obj, value2);
  return value2;
};
var COMPOSED_HANDLER = Symbol("composedHandler");
var notFoundHandler = (c) => {
  return c.text("404 Not Found", 404);
};
var errorHandler = (err, c) => {
  if (err instanceof HTTPException) {
    return err.getResponse();
  }
  console.error(err);
  const message = "Internal Server Error";
  return c.text(message, 500);
};
var _path;
var _Hono = class extends defineDynamicClass() {
  constructor(options = {}) {
    super();
    this._basePath = "/";
    __privateAdd3(this, _path, "/");
    this.routes = [];
    this.notFoundHandler = notFoundHandler;
    this.errorHandler = errorHandler;
    this.onError = (handler) => {
      this.errorHandler = handler;
      return this;
    };
    this.notFound = (handler) => {
      this.notFoundHandler = handler;
      return this;
    };
    this.head = () => {
      console.warn("`app.head()` is no longer used. `app.get()` implicitly handles the HEAD method.");
      return this;
    };
    this.handleEvent = (event) => {
      return this.dispatch(event.request, event, undefined, event.request.method);
    };
    this.fetch = (request2, Env, executionCtx) => {
      return this.dispatch(request2, executionCtx, Env, request2.method);
    };
    this.request = (input, requestInit, Env, executionCtx) => {
      if (input instanceof Request) {
        if (requestInit !== undefined) {
          input = new Request(input, requestInit);
        }
        return this.fetch(input, Env, executionCtx);
      }
      input = input.toString();
      const path4 = /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`;
      const req = new Request(path4, requestInit);
      return this.fetch(req, Env, executionCtx);
    };
    this.fire = () => {
      addEventListener("fetch", (event) => {
        event.respondWith(this.dispatch(event.request, event, undefined, event.request.method));
      });
    };
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.map((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          __privateSet3(this, _path, args1);
        } else {
          this.addRoute(method, __privateGet3(this, _path), args1);
        }
        args.map((handler) => {
          if (typeof handler !== "string") {
            this.addRoute(method, __privateGet3(this, _path), handler);
          }
        });
        return this;
      };
    });
    this.on = (method, path4, ...handlers) => {
      if (!method)
        return this;
      __privateSet3(this, _path, path4);
      for (const m of [method].flat()) {
        handlers.map((handler) => {
          this.addRoute(m.toUpperCase(), __privateGet3(this, _path), handler);
        });
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        __privateSet3(this, _path, arg1);
      } else {
        handlers.unshift(arg1);
      }
      handlers.map((handler) => {
        this.addRoute(METHOD_NAME_ALL, __privateGet3(this, _path), handler);
      });
      return this;
    };
    const strict = options.strict ?? true;
    delete options.strict;
    Object.assign(this, options);
    this.getPath = strict ? options.getPath ?? getPath : getPathNoStrict;
  }
  clone() {
    const clone = new _Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.routes = this.routes;
    return clone;
  }
  route(path4, app) {
    const subApp = this.basePath(path4);
    if (!app) {
      return subApp;
    }
    app.routes.map((r2) => {
      let handler;
      if (app.errorHandler === errorHandler) {
        handler = r2.handler;
      } else {
        handler = async (c, next) => (await compose([], app.errorHandler)(c, () => r2.handler(c, next))).res;
        handler[COMPOSED_HANDLER] = r2.handler;
      }
      subApp.addRoute(r2.method, r2.path, handler);
    });
    return this;
  }
  basePath(path4) {
    const subApp = this.clone();
    subApp._basePath = mergePath(this._basePath, path4);
    return subApp;
  }
  showRoutes() {
    const length = 8;
    this.routes.map((route) => {
      console.log(`\x1B[32m${route.method}\x1B[0m ${" ".repeat(length - route.method.length)} ${route.path}`);
    });
  }
  mount(path4, applicationHandler, optionHandler) {
    const mergedPath = mergePath(this._basePath, path4);
    const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
    const handler = async (c, next) => {
      let executionContext = undefined;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      const options = optionHandler ? optionHandler(c) : [c.env, executionContext];
      const optionsArray = Array.isArray(options) ? options : [options];
      const queryStrings = getQueryStrings(c.req.url);
      const res = await applicationHandler(new Request(new URL((c.req.path.slice(pathPrefixLength) || "/") + queryStrings, c.req.url), c.req.raw), ...optionsArray);
      if (res)
        return res;
      await next();
    };
    this.addRoute(METHOD_NAME_ALL, mergePath(path4, "*"), handler);
    return this;
  }
  get routerName() {
    this.matchRoute("GET", "/");
    return this.router.name;
  }
  addRoute(method, path4, handler) {
    method = method.toUpperCase();
    path4 = mergePath(this._basePath, path4);
    const r2 = { path: path4, method, handler };
    this.router.add(method, path4, [handler, r2]);
    this.routes.push(r2);
  }
  matchRoute(method, path4) {
    return this.router.match(method, path4);
  }
  handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  dispatch(request2, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.dispatch(request2, executionCtx, env, "GET")))();
    }
    const path4 = this.getPath(request2, { env });
    const matchResult = this.matchRoute(method, path4);
    const c = new Context(new HonoRequest(request2, path4, matchResult), {
      env,
      executionCtx,
      notFoundHandler: this.notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
        });
        if (!res) {
          return this.notFoundHandler(c);
        }
      } catch (err) {
        return this.handleError(err, c);
      }
      if (res instanceof Response)
        return res;
      return (async () => {
        let awaited;
        try {
          awaited = await res;
          if (!awaited) {
            return this.notFoundHandler(c);
          }
        } catch (err) {
          return this.handleError(err, c);
        }
        return awaited;
      })();
    }
    const composed = compose(matchResult[0], this.errorHandler, this.notFoundHandler);
    return (async () => {
      try {
        const context3 = await composed(c);
        if (!context3.finalized) {
          throw new Error("Context is not finalized. You may forget returning Response object or `await next()`");
        }
        return context3.res;
      } catch (err) {
        return this.handleError(err, c);
      }
    })();
  }
};
var Hono = _Hono;
_path = new WeakMap;

// node_modules/hono/dist/router/reg-exp-router/node.js
var compareKey = function(a2, b) {
  if (a2.length === 1) {
    return b.length === 1 ? a2 < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a2 === ONLY_WILDCARD_REG_EXP_STR || a2 === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a2 === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a2.length === b.length ? a2 < b ? -1 : 1 : b.length - a2.length;
};
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var Node4 = class {
  constructor() {
    this.children = {};
  }
  insert(tokens, index2, paramMap, context3, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.index !== undefined) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.index = index2;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name2 = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name2 && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.children[regexpStr];
      if (!node) {
        if (Object.keys(this.children).some((k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR)) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[regexpStr] = new Node4;
        if (name2 !== "") {
          node.varIndex = context3.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name2 !== "") {
        paramMap.push([name2, node.varIndex]);
      }
    } else {
      node = this.children[token];
      if (!node) {
        if (Object.keys(this.children).some((k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR)) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[token] = new Node4;
      }
    }
    node.insert(restTokens, index2, paramMap, context3, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.children[k];
      return (typeof c.varIndex === "number" ? `(${k})@${c.varIndex}` : k) + c.buildRegExpStr();
    });
    if (typeof this.index === "number") {
      strList.unshift(`#${this.index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// node_modules/hono/dist/router/reg-exp-router/trie.js
var Trie = class {
  constructor() {
    this.context = { varIndex: 0 };
    this.root = new Node4;
  }
  insert(path4, index2, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i2 = 0;; ) {
      let replaced = false;
      path4 = path4.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i2}`;
        groups[i2] = [mark, m];
        i2++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path4.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i2 = groups.length - 1;i2 >= 0; i2--) {
      const [mark] = groups[i2];
      for (let j = tokens.length - 1;j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i2][1]);
          break;
        }
      }
    }
    this.root.insert(tokens, index2, paramAssoc, this.context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (typeof handlerIndex !== "undefined") {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (typeof paramIndex !== "undefined") {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// node_modules/hono/dist/router/reg-exp-router/router.js
var buildWildcardRegExp = function(path4) {
  return wildcardRegExpCache[path4] ?? (wildcardRegExpCache[path4] = new RegExp(path4 === "*" ? "" : `^${path4.replace(/\/\*/, "(?:|/.*)")}\$`));
};
var clearWildcardRegExpCache = function() {
  wildcardRegExpCache = {};
};
var buildMatcherFromPreprocessedRoutes = function(routes) {
  const trie2 = new Trie;
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map((route) => [!/\*|\/:/.test(route[0]), ...route]).sort(([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length);
  const staticMap = {};
  for (let i2 = 0, j = -1, len = routesWithStaticPathFlag.length;i2 < len; i2++) {
    const [pathErrorCheckOnly, path4, handlers] = routesWithStaticPathFlag[i2];
    if (pathErrorCheckOnly) {
      staticMap[path4] = [handlers.map(([h]) => [h, {}]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie2.insert(path4, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path4) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = {};
      paramCount -= 1;
      for (;paramCount >= 0; paramCount--) {
        const [key2, value2] = paramAssoc[paramCount];
        paramIndexMap[key2] = value2;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie2.buildRegExp();
  for (let i2 = 0, len = handlerData.length;i2 < len; i2++) {
    for (let j = 0, len2 = handlerData[i2].length;j < len2; j++) {
      const map2 = handlerData[i2][j]?.[1];
      if (!map2) {
        continue;
      }
      const keys2 = Object.keys(map2);
      for (let k = 0, len3 = keys2.length;k < len3; k++) {
        map2[keys2[k]] = paramReplacementMap[map2[keys2[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i2 in indexReplacementMap) {
    handlerMap[i2] = handlerData[indexReplacementMap[i2]];
  }
  return [regexp, handlerMap, staticMap];
};
var findMiddleware = function(middleware, path4) {
  if (!middleware) {
    return;
  }
  for (const k of Object.keys(middleware).sort((a2, b) => b.length - a2.length)) {
    if (buildWildcardRegExp(k).test(path4)) {
      return [...middleware[k]];
    }
  }
  return;
};
var methodNames = [METHOD_NAME_ALL, ...METHODS].map((method) => method.toUpperCase());
var emptyParam = [];
var nullMatcher = [/^$/, [], {}];
var wildcardRegExpCache = {};
var RegExpRouter = class {
  constructor() {
    this.name = "RegExpRouter";
    this.middleware = { [METHOD_NAME_ALL]: {} };
    this.routes = { [METHOD_NAME_ALL]: {} };
  }
  add(method, path4, handler) {
    var _a2;
    const { middleware, routes } = this;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (methodNames.indexOf(method) === -1)
      methodNames.push(method);
    if (!middleware[method]) {
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = {};
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path4 === "/*") {
      path4 = "*";
    }
    const paramCount = (path4.match(/\/:/g) || []).length;
    if (/\*$/.test(path4)) {
      const re = buildWildcardRegExp(path4);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          var _a22;
          (_a22 = middleware[m])[path4] || (_a22[path4] = findMiddleware(middleware[m], path4) || findMiddleware(middleware[METHOD_NAME_ALL], path4) || []);
        });
      } else {
        (_a2 = middleware[method])[path4] || (_a2[path4] = findMiddleware(middleware[method], path4) || findMiddleware(middleware[METHOD_NAME_ALL], path4) || []);
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach((p) => re.test(p) && routes[m][p].push([handler, paramCount]));
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path4) || [path4];
    for (let i2 = 0, len = paths.length;i2 < len; i2++) {
      const path22 = paths[i2];
      Object.keys(routes).forEach((m) => {
        var _a22;
        if (method === METHOD_NAME_ALL || method === m) {
          (_a22 = routes[m])[path22] || (_a22[path22] = [
            ...findMiddleware(middleware[m], path22) || findMiddleware(middleware[METHOD_NAME_ALL], path22) || []
          ]);
          routes[m][path22].push([handler, paramCount - len + i2 + 1]);
        }
      });
    }
  }
  match(method, path4) {
    clearWildcardRegExpCache();
    const matchers = this.buildAllMatchers();
    this.match = (method2, path22) => {
      const matcher = matchers[method2];
      const staticMatch = matcher[2][path22];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path22.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index2 = match.indexOf("", 1);
      return [matcher[1][index2], match];
    };
    return this.match(method, path4);
  }
  buildAllMatchers() {
    const matchers = {};
    methodNames.forEach((method) => {
      matchers[method] = this.buildMatcher(method) || matchers[METHOD_NAME_ALL];
    });
    this.middleware = this.routes = undefined;
    return matchers;
  }
  buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.middleware, this.routes].forEach((r2) => {
      const ownRoute = r2[method] ? Object.keys(r2[method]).map((path4) => [path4, r2[method][path4]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute || (hasOwnRoute = true);
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(...Object.keys(r2[METHOD_NAME_ALL]).map((path4) => [path4, r2[METHOD_NAME_ALL][path4]]));
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// node_modules/hono/dist/router/smart-router/router.js
var SmartRouter = class {
  constructor(init2) {
    this.name = "SmartRouter";
    this.routers = [];
    this.routes = [];
    Object.assign(this, init2);
  }
  add(method, path4, handler) {
    if (!this.routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.routes.push([method, path4, handler]);
  }
  match(method, path4) {
    if (!this.routes) {
      throw new Error("Fatal error");
    }
    const { routers, routes } = this;
    const len = routers.length;
    let i2 = 0;
    let res;
    for (;i2 < len; i2++) {
      const router5 = routers[i2];
      try {
        routes.forEach((args) => {
          router5.add(...args);
        });
        res = router5.match(method, path4);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router5.match.bind(router5);
      this.routers = [router5];
      this.routes = undefined;
      break;
    }
    if (i2 === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.routes || this.routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.routers[0];
  }
};

// node_modules/hono/dist/router/trie-router/node.js
var Node6 = class {
  constructor(method, handler, children) {
    this.order = 0;
    this.params = {};
    this.children = children || {};
    this.methods = [];
    this.name = "";
    if (method && handler) {
      const m = {};
      m[method] = { handler, possibleKeys: [], score: 0, name: this.name };
      this.methods = [m];
    }
    this.patterns = [];
  }
  insert(method, path4, handler) {
    this.name = `${method} ${path4}`;
    this.order = ++this.order;
    let curNode = this;
    const parts = splitRoutingPath(path4);
    const possibleKeys = [];
    const parentPatterns = [];
    for (let i2 = 0, len = parts.length;i2 < len; i2++) {
      const p = parts[i2];
      if (Object.keys(curNode.children).includes(p)) {
        parentPatterns.push(...curNode.patterns);
        curNode = curNode.children[p];
        const pattern2 = getPattern(p);
        if (pattern2)
          possibleKeys.push(pattern2[1]);
        continue;
      }
      curNode.children[p] = new Node6;
      const pattern = getPattern(p);
      if (pattern) {
        curNode.patterns.push(pattern);
        parentPatterns.push(...curNode.patterns);
        possibleKeys.push(pattern[1]);
      }
      parentPatterns.push(...curNode.patterns);
      curNode = curNode.children[p];
    }
    if (!curNode.methods.length) {
      curNode.methods = [];
    }
    const m = {};
    const handlerSet = {
      handler,
      possibleKeys: possibleKeys.filter((v, i2, a2) => a2.indexOf(v) === i2),
      name: this.name,
      score: this.order
    };
    m[method] = handlerSet;
    curNode.methods.push(m);
    return curNode;
  }
  gHSets(node3, method, nodeParams, params) {
    const handlerSets = [];
    for (let i2 = 0, len = node3.methods.length;i2 < len; i2++) {
      const m = node3.methods[i2];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== undefined) {
        handlerSet.params = {};
        handlerSet.possibleKeys.forEach((key2) => {
          const processed = processedSet[handlerSet.name];
          handlerSet.params[key2] = params[key2] && !processed ? params[key2] : nodeParams[key2] ?? params[key2];
          processedSet[handlerSet.name] = true;
        });
        handlerSets.push(handlerSet);
      }
    }
    return handlerSets;
  }
  search(method, path4) {
    const handlerSets = [];
    this.params = {};
    const params = {};
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path4);
    for (let i2 = 0, len = parts.length;i2 < len; i2++) {
      const part = parts[i2];
      const isLast = i2 === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length;j < len2; j++) {
        const node3 = curNodes[j];
        const nextNode = node3.children[part];
        if (nextNode) {
          nextNode.params = node3.params;
          if (isLast === true) {
            if (nextNode.children["*"]) {
              handlerSets.push(...this.gHSets(nextNode.children["*"], method, node3.params, {}));
            }
            handlerSets.push(...this.gHSets(nextNode, method, node3.params, {}));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node3.patterns.length;k < len3; k++) {
          const pattern = node3.patterns[k];
          if (pattern === "*") {
            const astNode = node3.children["*"];
            if (astNode) {
              handlerSets.push(...this.gHSets(astNode, method, node3.params, {}));
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "")
            continue;
          const [key2, name2, matcher] = pattern;
          const child = node3.children[key2];
          const restPathString = parts.slice(i2).join("/");
          if (matcher instanceof RegExp && matcher.test(restPathString)) {
            params[name2] = restPathString;
            handlerSets.push(...this.gHSets(child, method, node3.params, params));
            continue;
          }
          if (matcher === true || matcher instanceof RegExp && matcher.test(part)) {
            if (typeof key2 === "string") {
              params[name2] = part;
              if (isLast === true) {
                handlerSets.push(...this.gHSets(child, method, params, node3.params));
                if (child.children["*"]) {
                  handlerSets.push(...this.gHSets(child.children["*"], method, node3.params, params));
                }
              } else {
                child.params = { ...params };
                tempNodes.push(child);
              }
            }
          }
        }
      }
      curNodes = tempNodes;
    }
    const results = handlerSets.sort((a2, b) => {
      return a2.score - b.score;
    });
    return [results.map(({ handler, params: params2 }) => [handler, params2])];
  }
};

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  constructor() {
    this.name = "TrieRouter";
    this.node = new Node6;
  }
  add(method, path4, handler) {
    const results = checkOptionalParameter(path4);
    if (results) {
      for (const p of results) {
        this.node.insert(method, p, handler);
      }
      return;
    }
    this.node.insert(method, path4, handler);
  }
  match(method, path4) {
    return this.node.search(method, path4);
  }
};

// node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter, new TrieRouter]
    });
  }
};

// node_modules/hono/dist/adapter/bun/serve-static.js
import {existsSync} from "fs";

// node_modules/hono/dist/utils/filepath.js
var getFilePath = (options) => {
  let filename = options.filename;
  if (/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(filename))
    return;
  let root = options.root || "";
  const defaultDocument = options.defaultDocument || "index.html";
  if (filename.endsWith("/")) {
    filename = filename.concat(defaultDocument);
  } else if (!filename.match(/\.[a-zA-Z0-9]+$/)) {
    filename = filename.concat("/" + defaultDocument);
  }
  filename = filename.replace(/^\.?[\/\\]/, "");
  filename = filename.replace(/\\/, "/");
  root = root.replace(/\/$/, "");
  let path4 = root ? root + "/" + filename : filename;
  path4 = path4.replace(/^\.?\//, "");
  return path4;
};

// node_modules/hono/dist/utils/mime.js
var getMimeType = (filename) => {
  const regexp = /\.([a-zA-Z0-9]+?)$/;
  const match = filename.match(regexp);
  if (!match)
    return;
  let mimeType = mimes[match[1]];
  if (mimeType && mimeType.startsWith("text") || mimeType === "application/json") {
    mimeType += "; charset=utf-8";
  }
  return mimeType;
};
var mimes = {
  aac: "audio/aac",
  abw: "application/x-abiword",
  arc: "application/x-freearc",
  avi: "video/x-msvideo",
  avif: "image/avif",
  av1: "video/av1",
  azw: "application/vnd.amazon.ebook",
  bin: "application/octet-stream",
  bmp: "image/bmp",
  bz: "application/x-bzip",
  bz2: "application/x-bzip2",
  csh: "application/x-csh",
  css: "text/css",
  csv: "text/csv",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  eot: "application/vnd.ms-fontobject",
  epub: "application/epub+zip",
  gif: "image/gif",
  gz: "application/gzip",
  htm: "text/html",
  html: "text/html",
  ico: "image/x-icon",
  ics: "text/calendar",
  jar: "application/java-archive",
  jpeg: "image/jpeg",
  jpg: "image/jpeg",
  js: "text/javascript",
  json: "application/json",
  jsonld: "application/ld+json",
  map: "application/json",
  mid: "audio/x-midi",
  midi: "audio/x-midi",
  mjs: "text/javascript",
  mp3: "audio/mpeg",
  mp4: "video/mp4",
  mpeg: "video/mpeg",
  mpkg: "application/vnd.apple.installer+xml",
  odp: "application/vnd.oasis.opendocument.presentation",
  ods: "application/vnd.oasis.opendocument.spreadsheet",
  odt: "application/vnd.oasis.opendocument.text",
  oga: "audio/ogg",
  ogv: "video/ogg",
  ogx: "application/ogg",
  opus: "audio/opus",
  otf: "font/otf",
  pdf: "application/pdf",
  php: "application/php",
  png: "image/png",
  ppt: "application/vnd.ms-powerpoint",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  rtf: "application/rtf",
  sh: "application/x-sh",
  svg: "image/svg+xml",
  swf: "application/x-shockwave-flash",
  tar: "application/x-tar",
  tif: "image/tiff",
  tiff: "image/tiff",
  ts: "video/mp2t",
  ttf: "font/ttf",
  txt: "text/plain",
  vsd: "application/vnd.visio",
  wasm: "application/wasm",
  webm: "video/webm",
  weba: "audio/webm",
  webp: "image/webp",
  woff: "font/woff",
  woff2: "font/woff2",
  xhtml: "application/xhtml+xml",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  xml: "application/xml",
  xul: "application/vnd.mozilla.xul+xml",
  zip: "application/zip",
  "3gp": "video/3gpp",
  "3g2": "video/3gpp2",
  "7z": "application/x-7z-compressed",
  gltf: "model/gltf+json",
  glb: "model/gltf-binary"
};

// node_modules/hono/dist/adapter/bun/serve-static.js
var { file } = Bun;
var DEFAULT_DOCUMENT = "index.html";
var serveStatic = (options = { root: "" }) => {
  return async (c, next) => {
    if (c.finalized) {
      await next();
      return;
    }
    const url7 = new URL(c.req.url);
    const filename = options.path ?? decodeURI(url7.pathname);
    let path4 = getFilePath({
      filename: options.rewriteRequestPath ? options.rewriteRequestPath(filename) : filename,
      root: options.root,
      defaultDocument: DEFAULT_DOCUMENT
    });
    if (!path4)
      return await next();
    path4 = `./${path4}`;
    if (existsSync(path4)) {
      const content = file(path4);
      if (content) {
        const mimeType = getMimeType(path4);
        if (mimeType) {
          c.header("Content-Type", mimeType);
        }
        return c.body(content);
      }
    }
    await options.onNotFound?.(path4, c);
    await next();
    return;
  };
};

// src/cli/src/server.js
function simple_server({
  root = "./public",
  port = 3000,
  hostname = "0.0.0.0"
} = {}) {
  const app = new Hono2;
  app.get("*", serveStatic({ root }));
  return Bun.serve({
    fetch(req) {
      return app.fetch(req);
    },
    error(e) {
      console.log("Error from Bun.serve");
      console.log(e);
    },
    port
  });
}

// src/cli/commands/dev.js
import fs6 from "fs";
import {networkInterfaces as getNetworkInteraces} from "os";
async function dev() {
  let { builds, localhost } = await get_config();
  await Promise.all(builds.map((build3) => executeBuild(build3)));
  await browser_bundle();
  let watcher = fs6.watch(process.cwd(), { recursive: true }, async (event, filename) => {
    for (let i2 = 0;i2 < builds.length; i2++) {
      let build3 = builds[i2];
      if (build3.globber.match(filename)) {
        console.log("update " + build3.input_dir);
        await executeBuild(build3);
        await browser_bundle();
      }
    }
  });
  let server2 = simple_server({
    root: "public",
    ...localhost
  });
  let network_hint = server2.hostname == "localhost" ? ` (${getNetworkAddress()}:${server2.port})` : "";
  console.log(`server listening on ${server2.hostname}:${server2.port}${network_hint}`);
}
var getNetworkAddress = function() {
  for (const interfaceDetails of Object.values(networkInterfaces)) {
    if (!interfaceDetails)
      continue;
    for (const details of interfaceDetails) {
      const { address, family, internal } = details;
      if (family == "IPv4" && !internal)
        return address;
    }
  }
};
var networkInterfaces = getNetworkInteraces();

// src/cli/index.js
var prog = lib_default2("zilker");
prog.version(version).option("-c, --config", "Provide path to custom config", "zilker.js").action((opts) => {
  console.log("here");
});
prog.command("init").describe(`Create a new project`).example("init").action(async (opts) => {
  console.log(kleur_default.white().bgRed().bold("TODO: scaffold project"));
});
prog.command("build").describe(`Build project files according to config`).example("build").action(async (opts) => {
  await build();
});
prog.command("dev").describe(`Start a dev session`).example("dev").action(async (opts) => {
  await dev();
});
prog.parse(process.argv);

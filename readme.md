# zilker

CLI and build system for [zilk](https://github.com/m4r-sh/zilk) projects

---

> **Note**: zilker is actively being built out. It's functional for static websites, but most planned features are still in development.

---

# Overview

- **File-based**: Intuitive project organization
- **Powered by [Bun](https://bun.sh/)**: Fast by default
- **Plugin-friendly**: Custom dev experience and build settings

# API

## CLI

### `zilker init`

Scaffold project from scratch

### `zilker build`

Build project based on settings in `zilker.js`

### `zilker dev`

Build project, watch files for changes, and run a local webserver based on settings in `zilker.js`

## zilker.js

### Example config

```js
import { Pages, Views, Assets } from 'zilker/files'

export let localhost = {
  port: 3000,
  hostname: 'local',
}

export let folders = {
  pages: Pages({
    _document: 'pages/_document.js',
    debug: true,
    output: {
      static_pages: true,
      sitemap: 'public/sitemap.xml',
      sync_router: true
    }
  }),
  views: Views({
    output: {
      global_css: './public/~z/styles.css',
      global_hydration: true
    }
  }),
  assets: Assets()
}

```

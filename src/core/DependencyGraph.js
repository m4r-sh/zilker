let transpiler = new Bun.Transpiler({ loader: 'js' })

export class DependencyGraph {
  constructor(debounceInterval = 69) {
    this.children = new Map(); // file => Set of dependencies
    this.parents = new Map();  // file => Set of dependents
    this.sources = new Set();
    this.sourcesChangedCallbacks = [];
    this.debounceInterval = debounceInterval;
    this.debounceTimeout = null;
    this.staleSources = new Set();
  }

  async addSource(file) {
    this.sources.add(file);
    await this.updateSource(file);
  }

  async updateSource(file) {
    this.sources.add(file);
    await this._updateFile(file, true, new Set());
    const affectedSources = this._collectSourceAncestors(file);
    for (let src of affectedSources) {
      this.staleSources.add(src);
    }
    this._scheduleSourcesChanged();
  }

  async updateDependency(file) {
    await this._updateFile(file, false, new Set());
    const affectedSources = this._collectSourceAncestors(file);
    for (let src of affectedSources) {
      this.staleSources.add(src);
    }
    this._scheduleSourcesChanged();
  }

  checkIfTracked(file) {
    if (this.sources.has(file)) return 'source';
    if (this.children.has(file)) return 'dependency';
    return false;
  }

  removeFile(file) {
    this._removeFile(file);
  }

  onSourcesChanged(callback) {
    this.sourcesChangedCallbacks.push(callback);
  }

  _scheduleSourcesChanged() {
    if (this.debounceTimeout) clearTimeout(this.debounceTimeout);
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

  async tick(){
  //   const changedSources = Array.from(this.staleSources);
  //   for (let cb of this.sourcesChangedCallbacks) {
  //     try {
  //       cb(changedSources);
  //     } catch (err) {
  //       console.error("Error in sourcesChanged callback:", err);
  //     }
  //   }
  }

  async _updateFile(file, isSource, visited) {
    if (visited.has(file)) return;
    visited.add(file);

    if (!this.children.has(file)) {
      this.children.set(file, new Set());
    }
    if (isSource) {
      this.sources.add(file);
    }

    let scannedImports = [];
    if(file.endsWith('.js' || '.ts' || '.jsx' || '.tsx' || '.mjs')){
      try {
        let contents = await Bun.file(file).text();
        scannedImports = transpiler.scanImports(contents);
      } catch (e) { }
    }

    const fileDir = file.substring(0, file.lastIndexOf('/'));
    const newDeps = new Set();
    for (let imp of scannedImports) {
      // TODO: use custom resolvers for <input>:name
      if (imp.path.startsWith('.')) {
        try {
          let resolved = Bun.resolveSync(imp.path, fileDir);
          newDeps.add(resolved);
        } catch (err) {
          console.log(err)
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
          this.parents.set(dep, new Set());
        }
        this.parents.get(dep).add(file);
        await this._updateFile(dep, false, visited);
      }
    }
  }

  _collectSourceAncestors(file) {
    const sources = new Set();
    const visited = new Set();
    const stack = [file];
    while (stack.length) {
      const current = stack.pop();
      if (visited.has(current)) continue;
      visited.add(current);
      if (this.sources.has(current)) sources.add(current);
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

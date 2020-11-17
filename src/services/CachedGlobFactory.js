import { Glob } from "glob";

export class CachedGlobFactory {
  store = {};

  create(cwd) {
    if (this.store[cwd]) {
      return this.store[cwd];
    }
    return (this.store[cwd] = new Glob("*/", {
      root: cwd,
      cwd,
      silent: true,
      strict: false,
      symlinks: false,
      follow: false,
      realpath: true,
    }));
  }
}

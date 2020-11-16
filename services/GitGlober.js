import { EventEmitter } from "events";

export class GitGlober extends EventEmitter {
  constructor(dirYielder, gitChecker, cachedGlobFactory, ...args) {
    super(...args);
    this.dirYielder = dirYielder;
    this.gitChecker = gitChecker;
    this.cachedGlobFactory = cachedGlobFactory;
  }

  async *glob(cwd) {
    this.emit("cwd", cwd);
    const dirs = [];
    for await (const dir of this.dirYielder.glob(cwd)) {
      if (this.gitChecker.check(dir)) {
        yield dir;
      } else {
        dirs.push(dir);
      }
    }
    for (const nextDir of dirs) {
      yield* this.glob(nextDir.path);
      if (this.cachedGlobFactory.create(cwd).aborted) {
        break;
      }
    }
    this.emit("endCwd", cwd);
  }
}

import { EventEmitter } from "events";

export class GitGlober extends EventEmitter {
  constructor(dirYielder, gitChecker, ...args) {
    super(...args);
    this.dirYielder = dirYielder;
    this.gitChecker = gitChecker;
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
    }
    this.emit("endCwd", cwd);
  }
}

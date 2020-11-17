import { on, once } from "events";
import { Glob } from "glob";
import path from "path";
import { Dir } from "../models/Dir";

export class DirYielder {
  constructor(globFactory) {
    this.globFactory = globFactory;
  }

  getNextDirName(promiseMatch) {
    return promiseMatch.next().then(
      ({ value }) => value[0].replace(/\/?$/, ""),
      () => {}
    );
  }

  async *glob(cwd) {
    const glob = this.globFactory.create(cwd);

    glob.on("error", () => {});
    const promiseEnd = once(glob, "end").then(
      () => {},
      () => {}
    );
    const promiseAbort = once(glob, "abort").then(() => {});
    const promiseMatch = on(glob, "match");
    while (true) {
      const dirName = await Promise.race([
        this.getNextDirName(promiseMatch),
        promiseEnd,
        promiseAbort,
      ]);
      if (glob.aborted || !dirName) {
        break;
      }
      yield new Dir(dirName, path.resolve(cwd, dirName));
    }
  }
}

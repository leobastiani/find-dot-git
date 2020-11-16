import { on, once } from "events";
import { Glob } from "glob";
import path from "path";
import { Dir } from "../models/Dir";

export class DirYielder {
  getNextDirName(promiseMatch) {
    return promiseMatch.next().then(
      ({ value }) => value[0].replace(/\/?$/, ""),
      () => {}
    );
  }

  async *glob(cwd) {
    const glob = new Glob("*/", {
      root: cwd,
      cwd,
      silent: true,
      strict: false,
      symlinks: false,
      follow: false,
      realpath: true,
    });

    glob.on("error", () => {});
    const promiseEnd = once(glob, "end").then(
      () => {},
      () => {}
    );
    const promiseMatch = on(glob, "match");
    while (true) {
      const dirName = await Promise.race([
        this.getNextDirName(promiseMatch),
        promiseEnd,
      ]);
      if (!dirName) {
        break;
      }
      yield new Dir(dirName, path.resolve(cwd, dirName));
    }
  }
}

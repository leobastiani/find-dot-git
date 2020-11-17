import path from "path";
import fs from "fs";

export class GitChecker {
  check(dir) {
    return fs.existsSync(path.resolve(dir.path, ".git"));
  }
}

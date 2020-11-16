export class DirSkipper {
  constructor(
    skipDir = new Set(["node_modules", "$Recycle.Bin"]),
    skipCwd = new Set()
  ) {
    this.skipDir = new Set(skipDir);
    this.skipCwd = new Set(skipCwd);
  }

  shouldSkip(dir) {
    return (
      this.skipDir.has(dir.dirName.replace("/", "")) || this.skipCwd.has(dir)
    );
  }
}

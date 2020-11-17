export class DirSkipYielder {
  constructor(dirYielder, dirSkiper) {
    this.dirYielder = dirYielder;
    this.dirSkiper = dirSkiper;
  }

  async *glob(cwd) {
    for await (const dir of this.dirYielder.glob(cwd)) {
      if (this.dirSkiper.shouldSkip(dir)) {
        continue;
      }
      yield dir;
    }
  }
}

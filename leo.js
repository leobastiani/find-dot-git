const path = require("path");

const kk = "C:/Windows/system32/kk/jk/xd".split(path.sep);
const selected = 3
const pieces = kk.slice(0, selected)
console.log("pieces:", path.join(...pieces))

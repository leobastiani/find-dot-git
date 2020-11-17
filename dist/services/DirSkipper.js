"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DirSkipper = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DirSkipper = /*#__PURE__*/function () {
  function DirSkipper() {
    var skipDir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set(["node_modules", "$Recycle.Bin"]);
    var skipCwd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();

    _classCallCheck(this, DirSkipper);

    this.skipDir = new Set(skipDir);
    this.skipCwd = new Set(skipCwd);
  }

  _createClass(DirSkipper, [{
    key: "shouldSkip",
    value: function shouldSkip(dir) {
      return this.skipDir.has(dir.dirName.replace("/", "")) || this.skipCwd.has(dir);
    }
  }]);

  return DirSkipper;
}();

exports.DirSkipper = DirSkipper;
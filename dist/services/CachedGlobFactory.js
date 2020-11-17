"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CachedGlobFactory = void 0;

var _glob = require("glob");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CachedGlobFactory = /*#__PURE__*/function () {
  function CachedGlobFactory() {
    _classCallCheck(this, CachedGlobFactory);

    _defineProperty(this, "store", {});
  }

  _createClass(CachedGlobFactory, [{
    key: "create",
    value: function create(cwd) {
      if (this.store[cwd]) {
        return this.store[cwd];
      }

      return this.store[cwd] = new _glob.Glob("*/", {
        root: cwd,
        cwd: cwd,
        silent: true,
        strict: false,
        symlinks: false,
        follow: false,
        realpath: true
      });
    }
  }]);

  return CachedGlobFactory;
}();

exports.CachedGlobFactory = CachedGlobFactory;
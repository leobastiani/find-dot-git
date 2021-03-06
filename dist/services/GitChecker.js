"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GitChecker = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GitChecker = /*#__PURE__*/function () {
  function GitChecker() {
    _classCallCheck(this, GitChecker);
  }

  _createClass(GitChecker, [{
    key: "check",
    value: function check(dir) {
      return _fs["default"].existsSync(_path["default"].resolve(dir.path, ".git"));
    }
  }]);

  return GitChecker;
}();

exports.GitChecker = GitChecker;
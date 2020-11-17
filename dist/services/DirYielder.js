"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DirYielder = void 0;

var _events = require("events");

var _glob = require("glob");

var _path = _interopRequireDefault(require("path"));

var _Dir = require("../models/Dir");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume(key === "return" ? "return" : "next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen["return"] !== "function") { this["return"] = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype["throw"] = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype["return"] = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

var DirYielder = /*#__PURE__*/function () {
  function DirYielder(globFactory) {
    _classCallCheck(this, DirYielder);

    this.globFactory = globFactory;
  }

  _createClass(DirYielder, [{
    key: "getNextDirName",
    value: function getNextDirName(promiseMatch) {
      return promiseMatch.next().then(function (_ref) {
        var value = _ref.value;
        return value[0].replace(/\/?$/, "");
      }, function () {});
    }
  }, {
    key: "glob",
    value: function glob(cwd) {
      var _this = this;

      return _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var glob, promiseEnd, promiseAbort, promiseMatch, dirName;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                glob = _this.globFactory.create(cwd);
                glob.on("error", function () {});
                promiseEnd = (0, _events.once)(glob, "end").then(function () {}, function () {});
                promiseAbort = (0, _events.once)(glob, "abort").then(function () {});
                promiseMatch = (0, _events.on)(glob, "match");

              case 5:
                if (!true) {
                  _context.next = 15;
                  break;
                }

                _context.next = 8;
                return _awaitAsyncGenerator(Promise.race([_this.getNextDirName(promiseMatch), promiseEnd, promiseAbort]));

              case 8:
                dirName = _context.sent;

                if (!(glob.aborted || !dirName)) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("break", 15);

              case 11:
                _context.next = 13;
                return new _Dir.Dir(dirName, _path["default"].resolve(cwd, dirName));

              case 13:
                _context.next = 5;
                break;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }]);

  return DirYielder;
}();

exports.DirYielder = DirYielder;
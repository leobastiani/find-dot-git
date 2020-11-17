"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DirSkipYielder = void 0;

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

function _asyncIterator(iterable) { var method; if (typeof Symbol !== "undefined") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

var DirSkipYielder = /*#__PURE__*/function () {
  function DirSkipYielder(dirYielder, dirSkiper) {
    _classCallCheck(this, DirSkipYielder);

    this.dirYielder = dirYielder;
    this.dirSkiper = dirSkiper;
  }

  _createClass(DirSkipYielder, [{
    key: "glob",
    value: function glob(cwd) {
      var _this = this;

      return _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, dir;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _context.prev = 2;
                _iterator = _asyncIterator(_this.dirYielder.glob(cwd));

              case 4:
                _context.next = 6;
                return _awaitAsyncGenerator(_iterator.next());

              case 6:
                _step = _context.sent;
                _iteratorNormalCompletion = _step.done;
                _context.next = 10;
                return _awaitAsyncGenerator(_step.value);

              case 10:
                _value = _context.sent;

                if (_iteratorNormalCompletion) {
                  _context.next = 20;
                  break;
                }

                dir = _value;

                if (!_this.dirSkiper.shouldSkip(dir)) {
                  _context.next = 15;
                  break;
                }

                return _context.abrupt("continue", 17);

              case 15:
                _context.next = 17;
                return dir;

              case 17:
                _iteratorNormalCompletion = true;
                _context.next = 4;
                break;

              case 20:
                _context.next = 26;
                break;

              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](2);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 26:
                _context.prev = 26;
                _context.prev = 27;

                if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
                  _context.next = 31;
                  break;
                }

                _context.next = 31;
                return _awaitAsyncGenerator(_iterator["return"]());

              case 31:
                _context.prev = 31;

                if (!_didIteratorError) {
                  _context.next = 34;
                  break;
                }

                throw _iteratorError;

              case 34:
                return _context.finish(31);

              case 35:
                return _context.finish(26);

              case 36:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 22, 26, 36], [27,, 31, 35]]);
      }))();
    }
  }]);

  return DirSkipYielder;
}();

exports.DirSkipYielder = DirSkipYielder;
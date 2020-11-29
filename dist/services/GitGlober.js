"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GitGlober = void 0;

var _events = require("events");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume(key === "return" ? "return" : "next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen["return"] !== "function") { this["return"] = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype["throw"] = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype["return"] = function (arg) { return this._invoke("return", arg); };

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _AwaitValue(value) { this.wrapped = value; }

function _asyncGeneratorDelegate(inner, awaitWrap) { var iter = {}, waiting = false; function pump(key, value) { waiting = true; value = new Promise(function (resolve) { resolve(inner[key](value)); }); return { done: false, value: awaitWrap(value) }; } ; if (typeof Symbol === "function" && Symbol.iterator) { iter[Symbol.iterator] = function () { return this; }; } iter.next = function (value) { if (waiting) { waiting = false; return value; } return pump("next", value); }; if (typeof inner["throw"] === "function") { iter["throw"] = function (value) { if (waiting) { waiting = false; throw value; } return pump("throw", value); }; } if (typeof inner["return"] === "function") { iter["return"] = function (value) { if (waiting) { waiting = false; return value; } return pump("return", value); }; } return iter; }

function _asyncIterator(iterable) { var method; if (typeof Symbol !== "undefined") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

var GitGlober = /*#__PURE__*/function (_EventEmitter) {
  _inherits(GitGlober, _EventEmitter);

  var _super = _createSuper(GitGlober);

  function GitGlober(dirYielder, gitChecker, cachedGlobFactory) {
    var _this2;

    _classCallCheck(this, GitGlober);

    for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      args[_key - 3] = arguments[_key];
    }

    _this2 = _super.call.apply(_super, [this].concat(args));
    _this2.dirYielder = dirYielder;
    _this2.gitChecker = gitChecker;
    _this2.cachedGlobFactory = cachedGlobFactory;
    return _this2;
  }

  _createClass(GitGlober, [{
    key: "glob",
    value: function glob(cwd) {
      var _this = this;

      return _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var dirs, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, dir, _i, _dirs, nextDir;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.emit("cwd", cwd);

                dirs = [];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _context.prev = 4;
                _iterator = _asyncIterator(_this.dirYielder.glob(cwd));

              case 6:
                _context.next = 8;
                return _awaitAsyncGenerator(_iterator.next());

              case 8:
                _step = _context.sent;
                _iteratorNormalCompletion = _step.done;
                _context.next = 12;
                return _awaitAsyncGenerator(_step.value);

              case 12:
                _value = _context.sent;

                if (_iteratorNormalCompletion) {
                  _context.next = 24;
                  break;
                }

                dir = _value;

                if (!_this.gitChecker.check(dir)) {
                  _context.next = 20;
                  break;
                }

                _context.next = 18;
                return dir;

              case 18:
                _context.next = 21;
                break;

              case 20:
                dirs.push(dir);

              case 21:
                _iteratorNormalCompletion = true;
                _context.next = 6;
                break;

              case 24:
                _context.next = 30;
                break;

              case 26:
                _context.prev = 26;
                _context.t0 = _context["catch"](4);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 30:
                _context.prev = 30;
                _context.prev = 31;

                if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
                  _context.next = 35;
                  break;
                }

                _context.next = 35;
                return _awaitAsyncGenerator(_iterator["return"]());

              case 35:
                _context.prev = 35;

                if (!_didIteratorError) {
                  _context.next = 38;
                  break;
                }

                throw _iteratorError;

              case 38:
                return _context.finish(35);

              case 39:
                return _context.finish(30);

              case 40:
                _i = 0, _dirs = dirs;

              case 41:
                if (!(_i < _dirs.length)) {
                  _context.next = 49;
                  break;
                }

                nextDir = _dirs[_i];
                return _context.delegateYield(_asyncGeneratorDelegate(_asyncIterator(_this.glob(nextDir.path)), _awaitAsyncGenerator), "t1", 44);

              case 44:
                if (!_this.cachedGlobFactory.create(cwd).aborted) {
                  _context.next = 46;
                  break;
                }

                return _context.abrupt("break", 49);

              case 46:
                _i++;
                _context.next = 41;
                break;

              case 49:
                _this.emit("endCwd", cwd);

              case 50:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 26, 30, 40], [31,, 35, 39]]);
      }))();
    }
  }]);

  return GitGlober;
}(_events.EventEmitter);

exports.GitGlober = GitGlober;
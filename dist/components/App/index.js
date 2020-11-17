"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;

var _figures = _interopRequireDefault(require("figures"));

var _ink = require("ink");

var _react = _interopRequireWildcard(require("react"));

var _DirSkipper = require("../../services/DirSkipper");

var _DirSkipYielder = require("../../services/DirSkipYielder");

var _DirYielder = require("../../services/DirYielder");

var _GitChecker = require("../../services/GitChecker");

var _GitGlober = require("../../services/GitGlober");

var _path = _interopRequireDefault(require("path"));

var _CachedGlobFactory = require("../../services/CachedGlobFactory");

var _Timer = _interopRequireWildcard(require("./Timer"));

var _jsxFileName = "C:\\Users\\Leonardo\\Desktop\\find-dot-git\\src\\components\\App\\index.js";

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _asyncIterator(iterable) { var method; if (typeof Symbol !== "undefined") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

var root = _path["default"].resolve("/");

var cachedGlobFactory = new _CachedGlobFactory.CachedGlobFactory();
var gitGlobber = new _GitGlober.GitGlober(new _DirSkipYielder.DirSkipYielder(new _DirYielder.DirYielder(cachedGlobFactory), new _DirSkipper.DirSkipper()), new _GitChecker.GitChecker(), cachedGlobFactory);

function App() {
  var _this = this;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      output = _useState2[0],
      setOutput = _useState2[1];

  var _useState3 = (0, _react.useState)(function () {
    return root;
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      cwd = _useState4[0],
      setCwd = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      finished = _useState6[0],
      setFinished = _useState6[1];

  var resetNow = (0, _Timer.useNowStore)(function (state) {
    return state.resetNow;
  });
  (0, _react.useEffect)(function () {
    setInterval(resetNow, 1000);
    gitGlobber.on("cwd", function (cwd) {
      return setCwd(cwd);
    });

    _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step, _value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _context.prev = 2;

              _loop = function _loop() {
                var gitDir = _value;
                setOutput(function (output) {
                  return [].concat(_toConsumableArray(output), [gitDir.path]);
                });
              };

              _iterator = _asyncIterator(gitGlobber.glob(root));

            case 5:
              _context.next = 7;
              return _iterator.next();

            case 7:
              _step = _context.sent;
              _iteratorNormalCompletion = _step.done;
              _context.next = 11;
              return _step.value;

            case 11:
              _value = _context.sent;

              if (_iteratorNormalCompletion) {
                _context.next = 17;
                break;
              }

              _loop();

            case 14:
              _iteratorNormalCompletion = true;
              _context.next = 5;
              break;

            case 17:
              _context.next = 23;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](2);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 23:
              _context.prev = 23;
              _context.prev = 24;

              if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
                _context.next = 28;
                break;
              }

              _context.next = 28;
              return _iterator["return"]();

            case 28:
              _context.prev = 28;

              if (!_didIteratorError) {
                _context.next = 31;
                break;
              }

              throw _iteratorError;

            case 31:
              return _context.finish(28);

            case 32:
              return _context.finish(23);

            case 33:
              setFinished(true);

            case 34:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 19, 23, 33], [24,, 28, 32]]);
    }))();
  }, []);
  var parts = (0, _react.useMemo)(function () {
    return _toConsumableArray(new Set(cwd.split(_path["default"].sep)));
  }, [cwd]);

  var _useState7 = (0, _react.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      selected = _useState8[0],
      setSelected = _useState8[1];

  var _useApp = (0, _ink.useApp)(),
      exit = _useApp.exit;

  (0, _ink.useInput)(function (input, key) {
    if (key.downArrow || key.rightArrow) {
      setSelected(function (selected) {
        return Math.min(selected + 1, parts.length - 1);
      });
    } else if (key.leftArrow || key.upArrow) {
      setSelected(function (selected) {
        return Math.max(selected - 1, 0);
      });
    } else if (input == "q") {
      setFinished(true);
    }
  });
  (0, _react.useEffect)(function () {
    if (finished) {
      process.nextTick(function () {
        exit();
        process.nextTick(function () {
          return process.exit(0);
        });
      });
    }
  }, [finished]);
  (0, _react.useEffect)(function () {
    setSelected(function (selected) {
      return Math.min(selected, parts.length - 1);
    });
  }, [parts]);

  if (finished) {
    return /*#__PURE__*/_react["default"].createElement(_ink.Text, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 12
      }
    }, output.join("\n"));
  }

  return /*#__PURE__*/_react["default"].createElement(_ink.Box, {
    flexDirection: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement(_ink.Box, {
    borderStyle: "round",
    paddingLeft: 1,
    paddingRight: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement(_ink.Box, {
    flexGrow: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react["default"].createElement(_ink.Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, "find-dot-git: ", selected)), /*#__PURE__*/_react["default"].createElement(_ink.Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, "Status: "), /*#__PURE__*/_react["default"].createElement(_ink.Text, {
    color: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, "Running ", _figures["default"].circleFilled)), /*#__PURE__*/_react["default"].createElement(_ink.Box, {
    borderStyle: "round",
    paddingLeft: 1,
    paddingRight: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement(_ink.Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, "Output:"), /*#__PURE__*/_react["default"].createElement(_ink.Box, {
    flexDirection: "column",
    paddingLeft: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, output.map(function (path) {
    return /*#__PURE__*/_react["default"].createElement(_ink.Text, {
      key: path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }
    }, path);
  }))), /*#__PURE__*/_react["default"].createElement(RenderPath, {
    selected: selected,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, parts));
}

function RenderPath(_ref2) {
  var _this2 = this;

  var selected = _ref2.selected,
      parts = _ref2.children;
  (0, _ink.useInput)(function (input, key) {
    if (key["return"]) {
      var p = _path["default"].join.apply(_path["default"], _toConsumableArray(parts.slice(0, selected + 1)));

      for (var storedPath in cachedGlobFactory.store) {
        if (storedPath.startsWith(p)) {
          cachedGlobFactory.store[storedPath].abort();
        }
      }
    }
  });
  return /*#__PURE__*/_react["default"].createElement(_ink.Box, {
    borderStyle: "round",
    paddingLeft: 1,
    paddingRight: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement(_ink.Box, {
    flexDirection: "column",
    flexGrow: 1,
    marginRight: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, parts.map(function (part, i) {
    return /*#__PURE__*/_react["default"].createElement(_ink.Text, {
      key: "".concat(part, "-").concat(i),
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 11
      }
    }, part);
  })), /*#__PURE__*/_react["default"].createElement(_ink.Box, {
    flexDirection: "column",
    marginRight: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, parts.map(function (part, i) {
    return /*#__PURE__*/_react["default"].createElement(_ink.Text, {
      key: "".concat(part, "-").concat(i),
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }
    }, selected == i ? _figures["default"].circleFilled : _figures["default"].circle);
  })), /*#__PURE__*/_react["default"].createElement(_ink.Box, {
    flexDirection: "column",
    marginRight: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, parts.map(function (part, i) {
    return /*#__PURE__*/_react["default"].createElement(_Timer["default"], {
      key: "".concat(part, "-").concat(i),
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 11
      }
    });
  })));
}
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Timer;
exports.useNowStore = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ink = require("ink");

var _zustand = _interopRequireDefault(require("zustand"));

var _TimeDiff = _interopRequireDefault(require("../TimeDiff"));

var _jsxFileName = "C:\\Users\\Leonardo\\Desktop\\find-dot-git\\src\\components\\App\\Timer.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useNowStore = (0, _zustand["default"])(function (set) {
  return {
    now: new Date(),
    resetNow: function resetNow() {
      set({
        now: new Date()
      });
    }
  };
});
exports.useNowStore = useNowStore;

function Timer() {
  var now = useNowStore(function (state) {
    return state.now;
  });
  var start = (0, _react.useMemo)(function () {
    return new Date();
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_TimeDiff["default"], {
    start: start,
    end: now,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 10
    }
  });
}
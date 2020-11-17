#!/usr/bin/env node
"use strict";

var _dayjs = _interopRequireDefault(require("dayjs"));

var _relativeTime = _interopRequireDefault(require("dayjs/plugin/relativeTime"));

var _duration = _interopRequireDefault(require("dayjs/plugin/duration"));

var _javascriptTimeAgo = _interopRequireDefault(require("javascript-time-ago"));

var _en = _interopRequireDefault(require("javascript-time-ago/locale/en"));

var _react = _interopRequireDefault(require("react"));

var _ink = require("ink");

var _App = _interopRequireDefault(require("./components/App"));

var _jsxFileName = "C:\\Users\\Leonardo\\Desktop\\find-dot-git\\src\\index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dayjs["default"].extend(_duration["default"]);

_dayjs["default"].extend(_relativeTime["default"]);

_javascriptTimeAgo["default"].addDefaultLocale(_en["default"]);

(0, _ink.render)( /*#__PURE__*/_react["default"].createElement(_App["default"], {
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 8
  }
}));
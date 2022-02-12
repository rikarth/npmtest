"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MyGreenButton = require("./MyGreenButton");

Object.keys(_MyGreenButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _MyGreenButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _MyGreenButton[key];
    }
  });
});
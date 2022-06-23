webpackHotUpdate_N_E("pages/map",{

/***/ "./components/Mapbox.js":
/*!******************************!*\
  !*** ./components/Mapbox.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-map-gl */ \"./node_modules/react-map-gl/dist/esm/index.js\");\n/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl/dist/mapbox-gl.css */ \"./node_modules/mapbox-gl/dist/mapbox-gl.css\");\n/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/junhyeong/Desktop/reactProj/prepare/petritt/components/Mapbox.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Mapbox = function Mapbox() {\n  var MAP_TOKEN = \"pk.eyJ1Ijoiamp6eXJhIiwiYSI6ImNsNG5xamJ3MjAwOGszaXF2MGRjZ3I4c2wifQ.r2rrgIXlly_-PjgE9G8bCA\";\n  return __jsx(\"div\", {\n    className: \"Mapbox\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    mapboxAccessToken: MAP_TOKEN,\n    initialViewState: {\n      longitude: 127.044395,\n      latitude: 37.5083095,\n      zoom: 30\n    },\n    style: {\n      width: \"50vh\",\n      height: \"50vh\"\n    },\n    mapStyle: \"mapbox://styles/mapbox/streets-v9\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_1__[\"Marker\"], {\n    longitude: 127.044395,\n    latitude: 37.5083095,\n    anchor: \"bottom\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"AliwangwangFilled\"], {\n    style: {\n      fontSize: \"20px\",\n      color: \"#FF7F00\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  })), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_1__[\"Marker\"], {\n    longitude: 127.044248,\n    latitude: 37.5082285,\n    anchor: \"bottom\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"AliwangwangOutlined\"], {\n    style: {\n      fontSize: \"20px\",\n      color: \"#FF7F00\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  })), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_1__[\"Marker\"], {\n    longitude: 127.044316,\n    latitude: 37.5081564,\n    anchor: \"bottom\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"AliwangwangFilled\"], {\n    style: {\n      fontSize: \"20px\",\n      color: \"#FF7F00\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_c = Mapbox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mapbox);\n\nvar _c;\n\n$RefreshReg$(_c, \"Mapbox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXBib3guanM/M2JjNiJdLCJuYW1lcyI6WyJNYXBib3giLCJNQVBfVE9LRU4iLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsInpvb20iLCJ3aWR0aCIsImhlaWdodCIsImZvbnRTaXplIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtFQUNuQixJQUFNQyxTQUFTLEdBQ2IsMEZBREY7RUFHQSxPQUNFO0lBQUssU0FBUyxFQUFDLFFBQWY7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsb0RBQUQ7SUFDRSxpQkFBaUIsRUFBRUEsU0FEckI7SUFFRSxnQkFBZ0IsRUFBRTtNQUNoQkMsU0FBUyxFQUFFLFVBREs7TUFFaEJDLFFBQVEsRUFBRSxVQUZNO01BR2hCQyxJQUFJLEVBQUU7SUFIVSxDQUZwQjtJQU9FLEtBQUssRUFBRTtNQUFFQyxLQUFLLEVBQUUsTUFBVDtNQUFpQkMsTUFBTSxFQUFFO0lBQXpCLENBUFQ7SUFRRSxRQUFRLEVBQUMsbUNBUlg7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQVVFLE1BQUMsbURBQUQ7SUFBUSxTQUFTLEVBQUUsVUFBbkI7SUFBK0IsUUFBUSxFQUFFLFVBQXpDO0lBQXFELE1BQU0sRUFBQyxRQUE1RDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxtRUFBRDtJQUFtQixLQUFLLEVBQUU7TUFBRUMsUUFBUSxFQUFFLE1BQVo7TUFBb0JDLEtBQUssRUFBRTtJQUEzQixDQUExQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsQ0FWRixFQWNFLE1BQUMsbURBQUQ7SUFBUSxTQUFTLEVBQUUsVUFBbkI7SUFBK0IsUUFBUSxFQUFFLFVBQXpDO0lBQXFELE1BQU0sRUFBQyxRQUE1RDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxxRUFBRDtJQUFxQixLQUFLLEVBQUU7TUFBRUQsUUFBUSxFQUFFLE1BQVo7TUFBb0JDLEtBQUssRUFBRTtJQUEzQixDQUE1QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsQ0FkRixFQWtCRSxNQUFDLG1EQUFEO0lBQVEsU0FBUyxFQUFFLFVBQW5CO0lBQStCLFFBQVEsRUFBRSxVQUF6QztJQUFxRCxNQUFNLEVBQUMsUUFBNUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsbUVBQUQ7SUFBbUIsS0FBSyxFQUFFO01BQUVELFFBQVEsRUFBRSxNQUFaO01BQW9CQyxLQUFLLEVBQUU7SUFBM0IsQ0FBMUI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURGLENBbEJGLENBREYsQ0FERjtBQTBCRCxDQTlCRDs7S0FBTVIsTTtBQStCU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcGJveC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTWFwLCB7IE1hcmtlciB9IGZyb20gXCJyZWFjdC1tYXAtZ2xcIjtcbmltcG9ydCBcIm1hcGJveC1nbC9kaXN0L21hcGJveC1nbC5jc3NcIjtcbmltcG9ydCB7IEFsaXdhbmd3YW5nRmlsbGVkLCBBbGl3YW5nd2FuZ091dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5cbmNvbnN0IE1hcGJveCA9ICgpID0+IHtcbiAgY29uc3QgTUFQX1RPS0VOID1cbiAgICBcInBrLmV5SjFJam9pYW1wNmVYSmhJaXdpWVNJNkltTnNORzV4YW1KM01qQXdPR3N6YVhGMk1HUmpaM0k0YzJ3aWZRLnIycnJnSVhsbHlfLVBqZ0U5RzhiQ0FcIjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiTWFwYm94XCI+XG4gICAgICA8TWFwXG4gICAgICAgIG1hcGJveEFjY2Vzc1Rva2VuPXtNQVBfVE9LRU59XG4gICAgICAgIGluaXRpYWxWaWV3U3RhdGU9e3tcbiAgICAgICAgICBsb25naXR1ZGU6IDEyNy4wNDQzOTUsXG4gICAgICAgICAgbGF0aXR1ZGU6IDM3LjUwODMwOTUsXG4gICAgICAgICAgem9vbTogMzAsXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjUwdmhcIiwgaGVpZ2h0OiBcIjUwdmhcIiB9fVxuICAgICAgICBtYXBTdHlsZT1cIm1hcGJveDovL3N0eWxlcy9tYXBib3gvc3RyZWV0cy12OVwiXG4gICAgICA+XG4gICAgICAgIDxNYXJrZXIgbG9uZ2l0dWRlPXsxMjcuMDQ0Mzk1fSBsYXRpdHVkZT17MzcuNTA4MzA5NX0gYW5jaG9yPVwiYm90dG9tXCI+XG4gICAgICAgICAgPEFsaXdhbmd3YW5nRmlsbGVkIHN0eWxlPXt7IGZvbnRTaXplOiBcIjIwcHhcIiwgY29sb3I6IFwiI0ZGN0YwMFwiIH19IC8+XG4gICAgICAgIDwvTWFya2VyPlxuXG4gICAgICAgIDxNYXJrZXIgbG9uZ2l0dWRlPXsxMjcuMDQ0MjQ4fSBsYXRpdHVkZT17MzcuNTA4MjI4NX0gYW5jaG9yPVwiYm90dG9tXCI+XG4gICAgICAgICAgPEFsaXdhbmd3YW5nT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IFwiMjBweFwiLCBjb2xvcjogXCIjRkY3RjAwXCIgfX0gLz5cbiAgICAgICAgPC9NYXJrZXI+XG5cbiAgICAgICAgPE1hcmtlciBsb25naXR1ZGU9ezEyNy4wNDQzMTZ9IGxhdGl0dWRlPXszNy41MDgxNTY0fSBhbmNob3I9XCJib3R0b21cIj5cbiAgICAgICAgICA8QWxpd2FuZ3dhbmdGaWxsZWQgc3R5bGU9e3sgZm9udFNpemU6IFwiMjBweFwiLCBjb2xvcjogXCIjRkY3RjAwXCIgfX0gLz5cbiAgICAgICAgPC9NYXJrZXI+XG4gICAgICA8L01hcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNYXBib3g7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Mapbox.js\n");

/***/ })

})
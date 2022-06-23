webpackHotUpdate_N_E("pages/map",{

/***/ "./components/Mapbox.js":
/*!******************************!*\
  !*** ./components/Mapbox.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-map-gl */ \"./node_modules/react-map-gl/dist/esm/index.js\");\n/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl/dist/mapbox-gl.css */ \"./node_modules/mapbox-gl/dist/mapbox-gl.css\");\n/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/junhyeong/Desktop/reactProj/prepare/petritt/components/Mapbox.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Mapbox = function Mapbox() {\n  var MAP_TOKEN = \"pk.eyJ1Ijoiamp6eXJhIiwiYSI6ImNsNG5xamJ3MjAwOGszaXF2MGRjZ3I4c2wifQ.r2rrgIXlly_-PjgE9G8bCA\";\n  return __jsx(\"div\", {\n    className: \"Mapbox\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    mapboxAccessToken: MAP_TOKEN,\n    initialViewState: {\n      longitude: 127.044395,\n      latitude: 37.5083095,\n      zoom: 14\n    },\n    style: {\n      width: \"50vh\",\n      height: \"50vh\"\n    },\n    mapStyle: \"mapbox://styles/mapbox/streets-v9\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_1__[\"Marker\"], {\n    longitude: 127.044395,\n    latitude: 37.5083095,\n    anchor: \"bottom\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"https://img.favpng.com/19/3/16/pok-mon-go-pok-mon-yellow-psyduck-icon-png-favpng-HQp2SmSZ0eRfEFtPDgm7vJpCx_t.jpg\",\n    alt: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"AliwangwangFilled\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_c = Mapbox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mapbox);\n\nvar _c;\n\n$RefreshReg$(_c, \"Mapbox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXBib3guanM/M2JjNiJdLCJuYW1lcyI6WyJNYXBib3giLCJNQVBfVE9LRU4iLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsInpvb20iLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0VBQ25CLElBQU1DLFNBQVMsR0FDYiwwRkFERjtFQUdBLE9BQ0U7SUFBSyxTQUFTLEVBQUMsUUFBZjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxvREFBRDtJQUNFLGlCQUFpQixFQUFFQSxTQURyQjtJQUVFLGdCQUFnQixFQUFFO01BQ2hCQyxTQUFTLEVBQUUsVUFESztNQUVoQkMsUUFBUSxFQUFFLFVBRk07TUFHaEJDLElBQUksRUFBRTtJQUhVLENBRnBCO0lBT0UsS0FBSyxFQUFFO01BQUVDLEtBQUssRUFBRSxNQUFUO01BQWlCQyxNQUFNLEVBQUU7SUFBekIsQ0FQVDtJQVFFLFFBQVEsRUFBQyxtQ0FSWDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBVUUsTUFBQyxtREFBRDtJQUFRLFNBQVMsRUFBRSxVQUFuQjtJQUErQixRQUFRLEVBQUUsVUFBekM7SUFBcUQsTUFBTSxFQUFDLFFBQTVEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRTtJQUNFLEdBQUcsRUFBQyxrSEFETjtJQUVFLEdBQUcsRUFBQyxFQUZOO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixFQUtFLE1BQUMsbUVBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUxGLENBVkYsQ0FERixDQURGO0FBc0JELENBMUJEOztLQUFNTixNO0FBMkJTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWFwYm94LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNYXAsIHsgTWFya2VyIH0gZnJvbSBcInJlYWN0LW1hcC1nbFwiO1xuaW1wb3J0IFwibWFwYm94LWdsL2Rpc3QvbWFwYm94LWdsLmNzc1wiO1xuaW1wb3J0IHsgQWxpd2FuZ3dhbmdGaWxsZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcblxuY29uc3QgTWFwYm94ID0gKCkgPT4ge1xuICBjb25zdCBNQVBfVE9LRU4gPVxuICAgIFwicGsuZXlKMUlqb2lhbXA2ZVhKaElpd2lZU0k2SW1Oc05HNXhhbUozTWpBd09Hc3phWEYyTUdSalozSTRjMndpZlEucjJycmdJWGxseV8tUGpnRTlHOGJDQVwiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJNYXBib3hcIj5cbiAgICAgIDxNYXBcbiAgICAgICAgbWFwYm94QWNjZXNzVG9rZW49e01BUF9UT0tFTn1cbiAgICAgICAgaW5pdGlhbFZpZXdTdGF0ZT17e1xuICAgICAgICAgIGxvbmdpdHVkZTogMTI3LjA0NDM5NSxcbiAgICAgICAgICBsYXRpdHVkZTogMzcuNTA4MzA5NSxcbiAgICAgICAgICB6b29tOiAxNCxcbiAgICAgICAgfX1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTB2aFwiLCBoZWlnaHQ6IFwiNTB2aFwiIH19XG4gICAgICAgIG1hcFN0eWxlPVwibWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXY5XCJcbiAgICAgID5cbiAgICAgICAgPE1hcmtlciBsb25naXR1ZGU9ezEyNy4wNDQzOTV9IGxhdGl0dWRlPXszNy41MDgzMDk1fSBhbmNob3I9XCJib3R0b21cIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2ltZy5mYXZwbmcuY29tLzE5LzMvMTYvcG9rLW1vbi1nby1wb2stbW9uLXllbGxvdy1wc3lkdWNrLWljb24tcG5nLWZhdnBuZy1IUXAyU21TWjBlUmZFRnRQRGdtN3ZKcEN4X3QuanBnXCJcbiAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QWxpd2FuZ3dhbmdGaWxsZWQgLz5cbiAgICAgICAgPC9NYXJrZXI+XG4gICAgICA8L01hcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNYXBib3g7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Mapbox.js\n");

/***/ })

})
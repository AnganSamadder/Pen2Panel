"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction index() {\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Loading...\");\n    const [people, setPeople] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"http://127.0.0.1:8080/api/home\").then((response)=>response.json()).then((data)=>{\n            setMessage(data.message);\n            setPeople(data.people);\n            console.log(data.people);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            people.map((person, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: person\n                }, index, false, {\n                    fileName: \"/Users/angansamadder/Pen2Panel/client/src/pages/index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: message\n            }, void 0, false, {\n                fileName: \"/Users/angansamadder/Pen2Panel/client/src/pages/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/angansamadder/Pen2Panel/client/src/pages/index.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(index, \"dsCZmQrnxn7dPrHsH/3PxAbSaQI=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUQ7QUFFbkQsU0FBU0c7O0lBQ1AsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ0ksUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXZDRCxnREFBU0EsQ0FBQztRQUNSTyxNQUFNLGtDQUNIQyxJQUFJLENBQUMsQ0FBQ0MsV0FBYUEsU0FBU0MsSUFBSSxJQUNoQ0YsSUFBSSxDQUFDLENBQUNHO1lBQ0xQLFdBQVdPLEtBQUtSLE9BQU87WUFDdkJHLFVBQVVLLEtBQUtOLE1BQU07WUFDckJPLFFBQVFDLEdBQUcsQ0FBQ0YsS0FBS04sTUFBTTtRQUN6QjtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDUzs7WUFDRVQsT0FBT1UsR0FBRyxDQUFDLENBQUNDLFFBQVFkLHNCQUNuQiw4REFBQ1k7OEJBQWlCRTttQkFBUmQ7Ozs7OzBCQUVaLDhEQUFDWTswQkFBS1g7Ozs7Ozs7Ozs7OztBQUdaO0dBdEJTRDtBQXdCVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gaW5kZXgoKSB7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiTG9hZGluZy4uLlwiKTtcbiAgY29uc3QgW3Blb3BsZSwgc2V0UGVvcGxlXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKFwiaHR0cDovLzEyNy4wLjAuMTo4MDgwL2FwaS9ob21lXCIpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldE1lc3NhZ2UoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgc2V0UGVvcGxlKGRhdGEucGVvcGxlKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5wZW9wbGUpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7cGVvcGxlLm1hcCgocGVyc29uLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PntwZXJzb259PC9kaXY+XG4gICAgICApKX1cbiAgICAgIDxkaXY+e21lc3NhZ2V9PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbmRleCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwicGVvcGxlIiwic2V0UGVvcGxlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJtYXAiLCJwZXJzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});
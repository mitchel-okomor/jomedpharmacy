(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\account.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Faccount&absolutePagePath=C%3A%5CUsers%5CUser%20PC%5Cworkspace%5Cjomed%5Cjomed-pharmacy%5Cpages%5Caccount.js&hotRouterUpdates=true!./":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Faccount&absolutePagePath=C%3A%5CUsers%5CUser%20PC%5Cworkspace%5Cjomed%5Cjomed-pharmacy%5Cpages%5Caccount.js&hotRouterUpdates=true ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/account",
      function () {
        var mod = __webpack_require__(/*! ./pages/account.js */ "./pages/account.js");
        if (true) {
          module.hot.accept(/*! ./pages/account.js */ "./pages/account.js", function () {
            if (!next.router.components["/account"]) return;
            var updatedPage = __webpack_require__(/*! ./pages/account.js */ "./pages/account.js");
            next.router.update("/account", updatedPage);
          });
        }
        return mod;
      }
    ]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/account.js":
/*!**************************!*\
  !*** ./pages/account.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _account_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.module.scss */ "./pages/account.module.scss");
/* harmony import */ var _account_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_account_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\User PC\\workspace\\jomed\\jomed-pharmacy\\pages\\account.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Account = function Account(props) {
  return __jsx("div", {
    className: _account_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.account,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: _account_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.heading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 1
    }
  }, "Account"), __jsx("div", {
    className: _account_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.form,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 1
    }
  }, __jsx("form", {
    className: _account_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.signup,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 1
    }
  }, __jsx("fieldset", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 2
    }
  }, __jsx("legend", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 3
    }
  }, "Create Account:"), __jsx("label", {
    "for": "fname",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }
  }, "First name:"), __jsx("input", {
    type: "text",
    id: "fname",
    name: "fname",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 3
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 3
    }
  }), __jsx("label", {
    "for": "lname",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 3
    }
  }, "Last name:"), __jsx("input", {
    type: "text",
    id: "lname",
    name: "lname",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 3
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 3
    }
  }), __jsx("label", {
    "for": "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 3
    }
  }, "Email:"), __jsx("input", {
    type: "email",
    id: "email",
    name: "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 3
    }
  }), __jsx("label", {
    "for": "number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 3
    }
  }, "phone number:"), __jsx("input", {
    type: "number",
    id: "number",
    name: "number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 3
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 3
    }
  }), __jsx("label", {
    "for": "number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 3
    }
  }, "phone number:"), __jsx("input", {
    type: "number",
    id: "number",
    name: "number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 3
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 3
    }
  }), __jsx("input", {
    type: "submit",
    value: "Submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 3
    }
  }))), __jsx("form", {
    className: _account_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.login,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 1
    }
  }, __jsx("fieldset", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 2
    }
  }, __jsx("legend", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 3
    }
  }, "Create Account:"), __jsx("label", {
    "for": "fname",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 3
    }
  }, "First name:"), __jsx("input", {
    type: "text",
    id: "fname",
    name: "fname",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 3
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 3
    }
  }), __jsx("label", {
    "for": "lname",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 3
    }
  }, "Last name:"), __jsx("input", {
    type: "text",
    id: "lname",
    name: "lname",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 3
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 3
    }
  }), __jsx("label", {
    "for": "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 3
    }
  }, "Email:"), __jsx("input", {
    type: "email",
    id: "email",
    name: "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 3
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 3
    }
  }), __jsx("label", {
    "for": "number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 3
    }
  }, "phone number:"), __jsx("input", {
    type: "number",
    id: "number",
    name: "number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 3
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 3
    }
  }), __jsx("label", {
    "for": "number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 3
    }
  }, "phone number:"), __jsx("input", {
    type: "number",
    id: "number",
    name: "number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 3
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 3
    }
  }), __jsx("input", {
    type: "submit",
    value: "Submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 3
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Account);

/***/ }),

/***/ 8:
/*!********************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Faccount&absolutePagePath=C%3A%5CUsers%5CUser%20PC%5Cworkspace%5Cjomed%5Cjomed-pharmacy%5Cpages%5Caccount.js&hotRouterUpdates=true ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Faccount&absolutePagePath=C%3A%5CUsers%5CUser%20PC%5Cworkspace%5Cjomed%5Cjomed-pharmacy%5Cpages%5Caccount.js&hotRouterUpdates=true! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Faccount&absolutePagePath=C%3A%5CUsers%5CUser%20PC%5Cworkspace%5Cjomed%5Cjomed-pharmacy%5Cpages%5Caccount.js&hotRouterUpdates=true!./");


/***/ }),

/***/ "dll-reference dll_c2e10d183b950a67d9e7":
/*!*******************************************!*\
  !*** external "dll_c2e10d183b950a67d9e7" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_c2e10d183b950a67d9e7;

/***/ })

},[[8,"static/runtime/webpack.js","styles"]]]);
//# sourceMappingURL=account.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\cart.js"],{

/***/ "./components/cartcontext.js":
/*!***********************************!*\
  !*** ./components/cartcontext.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var CartContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (CartContext);

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcart&absolutePagePath=C%3A%5CUsers%5CUser%20PC%5Cworkspace%5Cjomed%5Cjomed-pharmacy%5Cpages%5Ccart.js&hotRouterUpdates=true!./":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcart&absolutePagePath=C%3A%5CUsers%5CUser%20PC%5Cworkspace%5Cjomed%5Cjomed-pharmacy%5Cpages%5Ccart.js&hotRouterUpdates=true ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/cart",
      function () {
        var mod = __webpack_require__(/*! ./pages/cart.js */ "./pages/cart.js");
        if (true) {
          module.hot.accept(/*! ./pages/cart.js */ "./pages/cart.js", function () {
            if (!next.router.components["/cart"]) return;
            var updatedPage = __webpack_require__(/*! ./pages/cart.js */ "./pages/cart.js");
            next.router.update("/cart", updatedPage);
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

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_cartcontext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cartcontext */ "./components/cartcontext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\User PC\\workspace\\jomed\\jomed-pharmacy\\pages\\cart.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Cart = function Cart() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_cartcontext__WEBPACK_IMPORTED_MODULE_1__["default"]),
      cart = _useContext.cart,
      carttotal = _useContext.carttotal;

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 10
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, "Cart Items"), __jsx("div", {
    className: "pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-12 p-5 bg-white rounded shadow-sm mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "table-responsive",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 19
    }
  }, __jsx("table", {
    className: "table",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 23
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, __jsx("th", {
    scope: "col",
    className: "border-0 bg-light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "p-2 px-3 text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 29
    }
  }, "Product")), __jsx("th", {
    scope: "col",
    className: "border-0 bg-light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "py-2 text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }, "Price")))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 23
    }
  }, cart.map(function (item) {
    return __jsx("tr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 25
      }
    }, __jsx("th", {
      scope: "row",
      className: "border-0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "p-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: item.image,
      alt: "product",
      width: "70",
      className: "img-fluid rounded shadow-sm",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 31
      }
    }), __jsx("div", {
      className: "ml-3 d-inline-block align-middle",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 31
      }
    }, __jsx("h5", {
      className: "mb-0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 31
      }
    }, " ", __jsx("a", {
      href: "#",
      className: "text-dark d-inline-block align-middle",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 53
      }
    }, item.description))))), __jsx("td", {
      className: "border-0 align-middle",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 27
      }
    }, __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 65
      }
    }, "$ ", item.price)));
  })))), __jsx("ul", {
    className: "list-unstyled mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 18
    }
  }, __jsx("li", {
    className: "d-flex justify-content-between py-3 border-bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, __jsx("strong", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 87
    }
  }, "Total"), __jsx("h5", {
    className: "font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 23
    }
  }, "$ ", carttotal))), __jsx("a", {
    href: "#",
    className: "btn btn-dark rounded-pill py-2 btn-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }
  }, "Procceed to checkout"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ 11:
/*!**************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fcart&absolutePagePath=C%3A%5CUsers%5CUser%20PC%5Cworkspace%5Cjomed%5Cjomed-pharmacy%5Cpages%5Ccart.js&hotRouterUpdates=true ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fcart&absolutePagePath=C%3A%5CUsers%5CUser%20PC%5Cworkspace%5Cjomed%5Cjomed-pharmacy%5Cpages%5Ccart.js&hotRouterUpdates=true! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcart&absolutePagePath=C%3A%5CUsers%5CUser%20PC%5Cworkspace%5Cjomed%5Cjomed-pharmacy%5Cpages%5Ccart.js&hotRouterUpdates=true!./");


/***/ }),

/***/ "dll-reference dll_c2e10d183b950a67d9e7":
/*!*******************************************!*\
  !*** external "dll_c2e10d183b950a67d9e7" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_c2e10d183b950a67d9e7;

/***/ })

},[[11,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=cart.js.map
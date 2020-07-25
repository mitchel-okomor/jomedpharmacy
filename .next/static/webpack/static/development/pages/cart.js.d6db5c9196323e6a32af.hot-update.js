webpackHotUpdate("static\\development\\pages\\cart.js",{

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
/* harmony import */ var _components_appcontext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/appcontext */ "./components/appcontext.js");
/* harmony import */ var _cart_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.module.scss */ "./pages/cart.module.scss");
/* harmony import */ var _cart_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cart_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\User PC\\workspace\\jomed\\jomed-pharmacy\\pages\\cart.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Cart = function Cart() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_appcontext__WEBPACK_IMPORTED_MODULE_1__["default"]),
      cart = _useContext.cart,
      carttotal = _useContext.carttotal;

  return __jsx("div", {
    className: _cart_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.cart,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "Cart Items"), __jsx("table", {
    className: _cart_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.table,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, "Product")), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, "Price")), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, "Quantity")))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, cart.map(function (item) {
    return __jsx("tr", {
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 15
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: item.image,
      alt: "item",
      width: "70",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 19
      }
    }), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 19
      }
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/products/[id]",
      as: "/products/".concat(item.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 19
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 1
      }
    }, " ", item.name)))), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }
    }, __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }
    }, "\u20A6 ", item.price)), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 15
      }
    }, item.quantity));
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 6
    }
  }, " ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 12
    }
  }, "Total: \u20A6", carttotal)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/checkout",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: _cart_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.checkout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 8
    }
  }, "Procceed to checkout")));
};

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ })

})
//# sourceMappingURL=cart.js.d6db5c9196323e6a32af.hot-update.js.map
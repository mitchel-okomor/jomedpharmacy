webpackHotUpdate("static\\development\\pages\\products\\[id].js",{

/***/ "./components/productItem.js":
/*!***********************************!*\
  !*** ./components/productItem.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _productItem_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productItem.module.scss */ "./components/productItem.module.scss");
/* harmony import */ var _productItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_productItem_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _appcontext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appcontext */ "./components/appcontext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\User PC\\workspace\\jomed\\jomed-pharmacy\\components\\productItem.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var ProductItem = function ProductItem(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_appcontext__WEBPACK_IMPORTED_MODULE_2__["default"]),
      cart = _useContext.cart,
      addToCart = _useContext.addToCart,
      removeFromCart = _useContext.removeFromCart,
      removeFromTotal = _useContext.removeFromTotal,
      total = _useContext.total;

  return __jsx("div", {
    className: _productItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.productItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: _productItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 14
    }
  }, __jsx("img", {
    src: props.product.image_url || "/product.png",
    className: "card-img-top",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 16
    }
  }), __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 16
    }
  }, props.product.name), __jsx("h6", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 18
    }
  }, "\u20A6 ", props.product.price))), __jsx("div", {
    className: _productItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.item,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 16
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, " ", __jsx("u", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 22
    }
  }, "Product Description:")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 18
    }
  }, props.product.description)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 18
    }
  }, "   ", __jsx("button", {
    className: _productItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.add,
    onClick: function onClick() {
      addToCart(props.product);
      total(props.product.price);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 26
    }
  }, "Add to Cart"), presentInCart ? __jsx("button", {
    className: _productItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.remove,
    onClick: function onClick() {
      removeFromCart(props.product);
      removeFromTotal(props.product);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 31
    }
  }, "remove from cart") : ""), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, "Qty in cart:")));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductItem);

/***/ })

})
//# sourceMappingURL=[id].js.0738d9695be59d37d8f7.hot-update.js.map
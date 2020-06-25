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
/* harmony import */ var _cartcontext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cartcontext */ "./components/cartcontext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\User PC\\workspace\\jomed\\jomed-pharmacy\\components\\productItem.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var ProductItem = function ProductItem(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_cartcontext__WEBPACK_IMPORTED_MODULE_2__["default"]),
      addToCart = _useContext.addToCart,
      removeFromCart = _useContext.removeFromCart,
      total = _useContext.total;

  return __jsx("div", {
    className: _productItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.productItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: _productItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "card",
    style: {
      width: "18rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 14
    }
  }, __jsx("img", {
    src: props.product.image_url,
    className: "card-img-top",
    alt: "shirt",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 16
    }
  }))), __jsx("div", {
    className: _productItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.item,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "card-body",
    style: {
      marginTop: "135px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 16
    }
  }, __jsx("h5", {
    className: "card-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 18
    }
  }, props.product.name), __jsx("h6", {
    className: "card-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 18
    }
  }, "$ ", props.product.price), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 18
    }
  }, props.product.description), __jsx("button", {
    className: "btn btn-large btn-primary",
    onClick: function onClick() {
      addToCart(props.product);
      total(props.product.price);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 18
    }
  }, "Add to Cart"), __jsx("button", {
    className: "btn btn-large btn-primary",
    onClick: function onClick() {
      removeFromCart(props.product.id);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, "remove"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductItem);

/***/ })

})
//# sourceMappingURL=[id].js.aec463771afb2cbdfad3.hot-update.js.map
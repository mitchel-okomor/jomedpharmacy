webpackHotUpdate("static\\development\\pages\\checkout.js",{

/***/ "./components/helper/withauth.js":
false,

/***/ "./pages/checkout.js":
/*!***************************!*\
  !*** ./pages/checkout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _checkout_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.module.scss */ "./pages/checkout.module.scss");
/* harmony import */ var _checkout_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_checkout_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_appcontext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/appcontext */ "./components/appcontext.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\User PC\\workspace\\jomed\\jomed-pharmacy\\pages\\checkout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Checkout = function Checkout() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_appcontext__WEBPACK_IMPORTED_MODULE_2__["default"]),
      customer = _useContext.customer;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!customer) {
      router.push("/account");
    }
  }, []);
  return __jsx("div", {
    className: _checkout_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.checkout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "checkout page");
};

/* harmony default export */ __webpack_exports__["default"] = (Checkout);

/***/ })

})
//# sourceMappingURL=checkout.js.bd5781a7a937d26bc40a.hot-update.js.map
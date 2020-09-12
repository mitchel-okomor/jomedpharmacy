webpackHotUpdate("static\\development\\pages\\products\\[id].js",{

/***/ "./pages/products/[id].js":
/*!********************************!*\
  !*** ./pages/products/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_productItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/productItem */ "./components/productItem.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\User PC\\workspace\\jomed\\jomed-pharmacy\\pages\\products\\[id].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Productitem = function Productitem(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var test = function test() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function test$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("from context: " + JSON.stringify(router.query));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  test();
  return __jsx(_components_productItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    product: props.product,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  });
};

Productitem.getInitialProps = function _callee(context) {
  var id, res, result, product;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = context.query.id;
          _context2.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()("http://localhost:4000/product/".concat(id)));

        case 3:
          res = _context2.sent;
          _context2.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 6:
          result = _context2.sent;
          console.log(result.data);
          product = result.data;
          return _context2.abrupt("return", {
            product: product
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Productitem);

/***/ })

})
//# sourceMappingURL=[id].js.7f6dca82d495c18b6d4c.hot-update.js.map
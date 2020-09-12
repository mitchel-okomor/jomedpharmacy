webpackHotUpdate("static\\development\\pages\\products\\[id].js",{

/***/ "./node_modules/next/dist/build/polyfills/fetch/index.js":
false,

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
/* harmony import */ var _components_productItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/productItem */ "./components/productItem.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\User PC\\workspace\\jomed\\jomed-pharmacy\\pages\\products\\[id].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Productitem = function Productitem(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      product = _useState[0],
      setProdcut = _useState[1];

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
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function _callee() {
    var id, res, result, product;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = router.query.id;
            console.log(id);
            _context2.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("http://localhost:4000/product/".concat(id)));

          case 4:
            res = _context2.sent;
            _context2.next = 7;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

          case 7:
            result = _context2.sent;
            console.log(result.data);
            product = result.data;
            setProdcut(product);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  });
  return __jsx(_components_productItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    product: product,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  });
}; // Productitem.getInitialProps = async function(context) {
// };


/* harmony default export */ __webpack_exports__["default"] = (Productitem);

/***/ })

})
//# sourceMappingURL=[id].js.4b51f440e82ecd4d5eb0.hot-update.js.map
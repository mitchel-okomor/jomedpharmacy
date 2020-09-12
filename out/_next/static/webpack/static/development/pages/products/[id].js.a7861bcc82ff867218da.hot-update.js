webpackHotUpdate("static\\development\\pages\\products\\[id].js",{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/native-url/dist/index.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/querystring-es3/decode.js":
false,

/***/ "./node_modules/querystring-es3/encode.js":
false,

/***/ "./node_modules/querystring-es3/index.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
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


var _this = undefined,
    _jsxFileName = "C:\\Users\\User PC\\workspace\\jomed\\jomed-pharmacy\\pages\\products\\[id].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Productitem = function Productitem(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      product = _useState[0],
      setProdcut = _useState[1];

  var id = props.router.query.id;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function _callee() {
    var res, result, product;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(id);
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("http://localhost:4000/product/".concat(id)));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

          case 6:
            result = _context.sent;
            console.log(result.data);
            product = result.data;
            setProdcut(product);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }, []);
  return __jsx(_components_productItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    product: product,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  });
}; // Productitem.getInitialProps = async function(context) {
// };


/* harmony default export */ __webpack_exports__["default"] = (Productitem);

/***/ })

})
//# sourceMappingURL=[id].js.a7861bcc82ff867218da.hot-update.js.map
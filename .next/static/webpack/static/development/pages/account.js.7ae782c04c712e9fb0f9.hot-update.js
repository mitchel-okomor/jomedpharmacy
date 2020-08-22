webpackHotUpdate("static\\development\\pages\\account.js",{

/***/ "./components/standingorder.js":
/*!*************************************!*\
  !*** ./components/standingorder.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _standingorder_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./standingorder.module.scss */ "./components/standingorder.module.scss");
/* harmony import */ var _standingorder_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_standingorder_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\User PC\\workspace\\jomed\\jomed-pharmacy\\components\\standingorder.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var StandingOrder = function StandingOrder() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      data = _useState.data,
      setData = _useState.setData;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(setData(fetchData()));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  });

  var fetchData = function fetchData() {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("http://localhost:4000/standingorders/1", {
              method: "GET",
              headers: {
                'Content-Type': 'application/json'
              }
            }));

          case 2:
            res = _context2.sent;
            _context2.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

          case 5:
            data = _context2.sent;
            return _context2.abrupt("return", data);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };

  console.log("stand: " + data);

  if (data) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }
    }, __jsx("ul", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }, data.map(function (item) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 22
        }
      }, item.productId);
    })));
  }

  return data.message;
};

/* harmony default export */ __webpack_exports__["default"] = (StandingOrder);

/***/ })

})
//# sourceMappingURL=account.js.7ae782c04c712e9fb0f9.hot-update.js.map
webpackHotUpdate("static\\development\\pages\\account.js",{

/***/ "./components/standingprescription.js":
/*!********************************************!*\
  !*** ./components/standingprescription.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _standingprescription_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./standingprescription.module.scss */ "./components/standingprescription.module.scss");
/* harmony import */ var _standingprescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_standingprescription_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\User PC\\workspace\\jomed\\jomed-pharmacy\\components\\standingprescription.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var StandingPrescription = function StandingPrescription() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      data = _useState[0],
      setData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetchData();
  }, []);

  var fetchData = function fetchData() {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("http://localhost:4000/standingprescriptions/1", {
              method: "GET",
              headers: {
                'Content-Type': 'application/json'
              }
            }));

          case 2:
            res = _context.sent;
            _context.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

          case 5:
            data = _context.sent;
            console.log(data);
            setData(data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  if (data.data) {
    return __jsx("div", {
      className: _standingprescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.standingprescription,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }
    }, __jsx("ul", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    }, data.data.map(function (item) {
      return __jsx("li", {
        key: item.prescription_id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 22
        }
      }, __jsx("span", {
        className: _standingprescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.prescription,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 53
        }
      }, item.d_id), " ", __jsx("span", {
        className: _standingprescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.prescription_date,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 107
        }
      }, item.date_created.split("T")));
    })));
  }

  return __jsx("div", {
    className: _standingprescription_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.standingprescription,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 8
    }
  }, data.message);
};

/* harmony default export */ __webpack_exports__["default"] = (StandingPrescription);

/***/ })

})
//# sourceMappingURL=account.js.6da9fed0b80c00c097b2.hot-update.js.map
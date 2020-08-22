webpackHotUpdate("static\\development\\pages\\account.js",{

/***/ "./pages/account.js":
/*!**************************!*\
  !*** ./pages/account.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _account_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.module.scss */ "./pages/account.module.scss");
/* harmony import */ var _account_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_account_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/login */ "./components/login.js");
/* harmony import */ var _components_signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/signup */ "./components/signup.js");
/* harmony import */ var _components_helper_logout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/helper/logout */ "./components/helper/logout.js");
/* harmony import */ var _components_appcontext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/appcontext */ "./components/appcontext.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_standingorder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/standingorder */ "./components/standingorder.js");
/* harmony import */ var _components_standingprescription__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/standingprescription */ "./components/standingprescription.js");
/* harmony import */ var _components_prescriptionhistory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/prescriptionhistory */ "./components/prescriptionhistory.js");
/* harmony import */ var _components_orderhistory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/orderhistory */ "./components/orderhistory.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\User PC\\workspace\\jomed\\jomed-pharmacy\\pages\\account.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













var Account = function Account(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_appcontext__WEBPACK_IMPORTED_MODULE_5__["default"]),
      customer = _useContext.customer;

  if (customer) {
    return __jsx("div", {
      className: _account_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: _account_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.account,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: _account_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.myaccount,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 1
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 1
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }
    }, "My Account")), __jsx("ul", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 1
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 3
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, "Orders"), " "), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 3
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }
    }, "Order history")), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 3
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }, "Prescriptions"), " "), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 3
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }
    }, "Prescription history"), " "), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 3
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }
    }, "Saved items"), " "), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 3
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }
    }, "Address Book"), " "), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 3
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }
    }, "Personal information"), " ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      onClick: function onClick() {
        return Object(_components_helper_logout__WEBPACK_IMPORTED_MODULE_4__["default"])();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 1
      }
    }, "Logout")), __jsx("div", {
      className: _account_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.overview,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 1
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 1
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }
    }, "Account overview")), __jsx("div", {
      className: _account_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.overviewdiv,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 1
      }
    }, __jsx("div", {
      className: _account_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.orderoverview,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 2
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 1
      }
    }, "Standing Orders"), __jsx(_components_standingorder__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 1
      }
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 1
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 6
      }
    }, "Order history"), __jsx(_components_orderhistory__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 1
      }
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 1
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 6
      }
    }, "Standing Prescription"), __jsx(_components_standingprescription__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 1
      }
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 1
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 6
      }
    }, "Prescription history"), __jsx(_components_prescriptionhistory__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 1
      }
    }))))));
  }

  return __jsx("div", {
    className: _account_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 1
    }
  }, __jsx("h1", {
    className: _account_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.heading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 3
    }
  }, "Account"), __jsx("div", {
    className: _account_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.account,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: _account_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.form,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx(_components_signup__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }), __jsx(_components_login__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Account);

/***/ })

})
//# sourceMappingURL=account.js.e772a02dbf9a85965331.hot-update.js.map
webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navigation_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation.module.scss */ "./components/navigation.module.scss");
/* harmony import */ var _navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_navigation_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\User PC\\workspace\\jomed\\jomed-pharmacy\\components\\navigation.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Navigation = function Navigation() {
  var _jsx, _jsx2;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var list, i;
    list = document.querySelectorAll("i.icon");
    console.log(list);

    for (i = 0; i < list.length; i++) {
      list[i].classList.add('fa');
      list[i].classList.add('fa-bar');
    }
  }, []);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  function togleNav() {
    console.log("togle");
    var elem = document.querySelectorAll("togle_nav")[0];
    elem.style.display === "block" ? elem.style.display = "none" : elem.style.display = "block";
  }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("i", {
    className: _navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
    "aria-hidden": "true",
    onClick: togleNav,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }), __jsx("nav", {
    className: "".concat(_navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nav, " togle_nav"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: router.pathname == "/" ? _navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.active : "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Home")), __jsx("li", (_jsx = {
    className: _navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.dropdown
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", router.pathname == "/products" ? _navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.active : ""), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 13
  }), _jsx), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/products",
    className: _navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.dropbtn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, " Products  "), __jsx("div", {
    className: _navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.dropdown_content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, "Antibiotics"), __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, "Haematinics"), __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, "Suppliments"))), __jsx("li", (_jsx2 = {
    className: _navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.dropdown
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "className", router.pathname == "/services" ? _navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.active : ""), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__source", {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 13
  }), _jsx2), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/services",
    className: _navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.dropbtn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, " Services  "), __jsx("div", {
    className: _navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.dropdown_content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/bpc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, "Blood Pressure Check"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/bgt",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, "Blood Glucose Test"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/wmc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, "Weigth Management Care"))), __jsx("li", {
    className: router.pathname == "/locations" ? _navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.active : "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/locations",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, " Locations")), __jsx("li", {
    className: router.pathname == "/about" ? _navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.active : "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, "  About")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ })

})
//# sourceMappingURL=_app.js.b5f437dcfbab50ddfa8a.hot-update.js.map
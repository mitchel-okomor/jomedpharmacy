webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/search.js":
/*!******************************!*\
  !*** ./components/search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _search_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.module.scss */ "./components/search.module.scss");
/* harmony import */ var _search_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_search_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\User PC\\workspace\\jomed\\jomed-pharmacy\\components\\search.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Search = function Search() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      query = _useState[0],
      setQuery = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      searchResult = _useState2[0],
      setSearchResult = _useState2[1];

  var handleChange = function handleChange(e) {
    setQuery(e.target.value);
    console.log(query);
  }; //submit form data to backend server


  var handleSubmit = function handleSubmit(e) {
    var url, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault(); //dispatch({field:"loading", value:true});

            url = 'http://localhost:4000/search?value=' + query;
            console.log(query);
            _context.prev = 3;
            _context.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url, {
              timeout: 30000
            }));

          case 6:
            response = _context.sent;

            if (response.status == 200) {
              setSearchResult(response.data.data);
              console.log(searchResult);
            }

            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[3, 10]], Promise);
  };

  return __jsx("div", {
    className: _search_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.search,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 1
    }
  }, __jsx("input", {
    type: "text",
    id: "search",
    name: "search",
    value: query,
    placeholder: "Search Products & Services",
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 3
    }
  }), __jsx("button", {
    onClick: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 3
    }
  }, __jsx("i", {
    "class": "fa fa-search",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 34
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

})
//# sourceMappingURL=_app.js.a562faeed8f2699a8edf.hot-update.js.map
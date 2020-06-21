webpackHotUpdate("static\\development\\pages\\account.js",{

/***/ "./components/signup.js":
/*!******************************!*\
  !*** ./components/signup.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _signup_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.module.scss */ "./components/signup.module.scss");
/* harmony import */ var _signup_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_signup_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading */ "./components/loading.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\User PC\\workspace\\jomed\\jomed-pharmacy\\components\\signup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var initialState = {
  fname: "",
  lname: "",
  email: "",
  number: "",
  address: "",
  password: "",
  loading: false
}; //handle state changes with reducer

var reducer = function reducer(state, _ref) {
  var field = _ref.field,
      value = _ref.value;
  return _objectSpread({}, state, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, field, value));
};

var Signup = function Signup(props) {
  //use reducer hook to dispatch change action
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(reducer, initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var handleChange = function handleChange(e) {
    dispatch({
      field: e.target.name,
      value: e.target.value
    });
  }; //submit form data to backend server


  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var fd = new FormData();
    fd.append('fName', state.fname);
    fd.append('lName', state.lname);
    fd.append('email', state.email);
    fd.append('number', state.number);
    fd.append('address', state.address);
    fd.append('password', state.password);
    var url = 'http://localhost:4000/customer';
    console.log(state);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(url, fd).then(function (res) {
      return console.log(res);
    })["catch"](console.log(error));
  };

  var fname = state.fname,
      lname = state.lname,
      email = state.email,
      number = state.number,
      address = state.address,
      password = state.password;
  return __jsx("form", {
    className: _signup_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.signup,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("fieldset", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("legend", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "Create Account:"), __jsx("label", {
    "for": "fname",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "First name:"), " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 52
    }
  }), __jsx("input", {
    type: "text",
    id: "fname",
    name: "fname",
    value: fname,
    placeholder: "First Name",
    required: true,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }), __jsx("label", {
    "for": "lname",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "Last name:"), " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 51
    }
  }), __jsx("input", {
    type: "text",
    id: "lname",
    name: "lname",
    value: lname,
    placeholder: "Last Name",
    required: true,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }), __jsx("label", {
    "for": "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "Email:"), " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 47
    }
  }), __jsx("input", {
    type: "email",
    id: "email",
    name: "email",
    value: email,
    placeholder: "johndoe@gmail.com",
    required: true,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }), __jsx("label", {
    "for": "number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, "phone number:"), " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 55
    }
  }), __jsx("input", {
    type: "number",
    id: "number",
    name: "number",
    value: number,
    placeholder: "+2348090213567",
    required: true,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }), __jsx("label", {
    "for": "address",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, "address:"), " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 51
    }
  }), __jsx("input", {
    type: "text",
    id: "address",
    name: "address",
    value: address,
    placeholder: "4, johnson Street, balogun, Lagos",
    required: true,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }), __jsx("label", {
    "for": "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, "password:"), " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 53
    }
  }), __jsx("input", {
    type: "password",
    id: "password",
    name: "password",
    value: password,
    required: true,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }), __jsx("button", {
    onClick: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, "Submit")));
};

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ })

})
//# sourceMappingURL=account.js.c5fd91032c15628dd4a6.hot-update.js.map
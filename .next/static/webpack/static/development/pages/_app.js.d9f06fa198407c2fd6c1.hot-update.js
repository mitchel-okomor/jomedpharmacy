webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/prescription.js":
/*!************************************!*\
  !*** ./components/prescription.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _prescription_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prescription.module.scss */ "./components/prescription.module.scss");
/* harmony import */ var _prescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prescription_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading */ "./components/loading.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\User PC\\workspace\\jomed\\jomed-pharmacy\\components\\prescription.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var initialState = {
  name: "",
  email: "",
  number: "",
  description: "",
  loading: false,
  chat: _prescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.chatclosed,
  chatbutton: _prescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.openbutton
}; //handle state changes with reducer

var reducer = function reducer(state, _ref) {
  var field = _ref.field,
      value = _ref.value;
  return _objectSpread({}, state, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, field, value));
};

var Signup = function Signup(props) {
  //use reducer hook to dispatch change action
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(reducer, initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var handleChange = function handleChange(e) {
    dispatch({
      field: e.target.name,
      value: e.target.value
    });
  }; //submit form data to backend server


  var handleSubmit = function handleSubmit(e) {
    var url, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            dispatch({
              field: "loading",
              value: true
            });
            url = 'http://localhost:4000/prescription';
            console.log(state);
            _context.prev = 4;
            _context.next = 7;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(url, state, {
              timeout: 30000
            }));

          case 7:
            response = _context.sent;

            if (response.status == 200) {
              console.log(response);
              localStorage.setItem("customerId", response);
              dispatch({
                field: "loading",
                value: false
              });
            }

            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](4);
            console.log(_context.t0);
            dispatch({
              field: "loading",
              value: false
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[4, 11]], Promise);
  };

  var toggleChat = function toggleChat() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function toggleChat$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(state.chat === _prescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.chatclosed)) {
              _context2.next = 6;
              break;
            }

            _context2.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(dispatch({
              field: "chat",
              value: _prescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.chatopen
            }, {
              field: "chatbutton",
              value: _prescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.openbutton
            }));

          case 3:
            dispatch({
              field: "chatbutton",
              value: _prescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.openbutton
            });
            _context2.next = 9;
            break;

          case 6:
            _context2.next = 8;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(dispatch({
              field: "chat",
              value: _prescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.chatclosed
            }));

          case 8:
            dispatch({
              field: "chatbutton",
              value: _prescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.closedbutton
            });

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var name = state.name,
      email = state.email,
      number = state.number,
      loading = state.loading,
      chat = state.chat,
      chatbutton = state.chatbutton;

  if (loading) {
    return __jsx(_loading__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 8
      }
    });
  }

  return __jsx("div", {
    className: _prescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.prescription,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx("button", {
    className: chatbutton,
    onClick: toggleChat,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, "Chat"), __jsx("div", {
    className: chat,
    id: _prescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.myForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("fieldset", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx("legend", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, "Sensd us your prescription:"), __jsx("label", {
    "for": "fname",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "Full Name:"), " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 51
    }
  }), __jsx("input", {
    type: "text",
    id: "name",
    name: "name",
    value: name,
    placeholder: "First Name",
    required: true,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }), __jsx("label", {
    "for": "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, "Email:"), " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
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
      lineNumber: 89,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }), __jsx("label", {
    "for": "number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, "phone number:"), " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
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
      lineNumber: 100,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }), __jsx("label", {
    "for": "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, "password:"), " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 53
    }
  }), __jsx("input", {
    type: "password",
    id: "password",
    name: "password",
    required: true,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }), __jsx("button", {
    onClick: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, "Submit"))), __jsx("button", {
    className: _prescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.openbutton,
    onClick: toggleChat,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, "Chat")));
};

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ })

})
//# sourceMappingURL=_app.js.d9f06fa198407c2fd6c1.hot-update.js.map
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
  chat: _prescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.chatclosed
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
    if (state.chat === _prescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.chatclosed) {
      dispatch({
        field: "chat",
        value: _prescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.chatopen
      });
    } else {
      dispatch({
        field: "chat",
        value: _prescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.chatclosed
      });
    }
  };

  var name = state.name,
      email = state.email,
      number = state.number,
      loading = state.loading,
      chat = state.chat;

  if (loading) {
    return __jsx(_loading__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 8
      }
    });
  }

  return __jsx("div", {
    className: _prescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.prescription,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx("button", {
    className: _prescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.openbutton,
    onClick: toggleChat,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, "Chat"), __jsx("div", {
    className: chat,
    id: _prescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.myForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx("form", {
    action: "/action_page.php",
    "class": "form-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, "Chat"), __jsx("label", {
    "for": "msg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 22
    }
  }, "Message")), __jsx("textarea", {
    placeholder: "Type message..",
    name: "msg",
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }), __jsx("button", {
    type: "submit",
    "class": "btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, "Send"), __jsx("button", {
    type: "button",
    "class": "btn cancel",
    onclick: "closeForm()",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, "Close")), __jsx("button", {
    className: _prescription_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.openbutton,
    onClick: toggleChat,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, "Chat")));
};

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ })

})
//# sourceMappingURL=_app.js.9aca5847303f28f00c74.hot-update.js.map
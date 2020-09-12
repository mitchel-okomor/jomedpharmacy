module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fIl9");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5qA4":
/***/ (function(module, exports) {

module.exports = {
	"reset": "reset___37v3i",
	"message": "message___1m_6j",
	"set_password_button": "set_password_button___2ZjWI"
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fIl9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reset_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5qA4");
/* harmony import */ var _reset_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reset_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ResetPassword = ({
  valid,
  token
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: confirmPassword,
    1: setConfirmPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: message,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const handleSubmit = async event => {
    event.preventDefault();

    if (password == confirmPassword) {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("http://localhost:4000/resetpassword/" + token, {
          "password": password
        }, {
          timeout: 30000
        });
        console.log(response);

        if (response.status === 200) {
          alert("Password changed successfully");
          router.push("/account");
        } else {
          alert("Something went wrong, please try again");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      setMessage("Password did not match, please check again");
    }
  };

  return __jsx("div", {
    className: _reset_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.reset
  }, __jsx("br", null), __jsx("br", null), __jsx("h2", {
    style: style
  }, "Forget password"), __jsx("br", null), valid ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
    style: style
  }, "Enter your new password."), __jsx("br", null), __jsx("form", {
    onSubmit: handleSubmit
  }, __jsx("div", null, __jsx("input", {
    type: "password",
    placeholder: "New password",
    id: "password",
    value: password,
    onChange: e => setPassword(e.target.value)
  }), __jsx("br", null), __jsx("input", {
    type: "password",
    id: "confirm_password",
    placeholder: "Confirm password",
    value: confirmPassword,
    onChange: e => setConfirmPassword(e.target.value)
  })), __jsx("div", {
    className: _reset_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.message
  }, message), __jsx("button", {
    className: _reset_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.set_password_button,
    type: "submit"
  }, "Set new password"))) : __jsx("p", {
    className: message
  }, "This link may have been expired"));
};

const style = {
  "margin": "auto",
  "text-align": "center"
};

ResetPassword.getInitialProps = async ctx => {
  const {
    token
  } = ctx.query;

  try {
    const res = await fetch(`http://localhost:4000/verifytoken/${token}`, {
      method: 'GET'
    });
    console.log(res);

    if (res.status === 200) {
      return {
        token,
        valid: true
      };
    } else {
      return {
        valid: false
      };
    }
  } catch (err) {
    console.log(err);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ResetPassword);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });
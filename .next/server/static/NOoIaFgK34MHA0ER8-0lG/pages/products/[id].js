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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wXvK");


/***/ }),

/***/ "JRi1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _productItem_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YJee");
/* harmony import */ var _productItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_productItem_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _appcontext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bcQz");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ProductItem = props => {
  const {
    cart,
    addToCart,
    removeFromCart,
    removeFromTotal,
    total
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_appcontext__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
  let qtyInCart = "";
  let presentInCart = false;

  for (let i = 0; i <= cart.length; i++) {
    let id = props.product.product_id;
    console.log[i];

    if (cart[i] && cart[i].product_id === id) {
      presentInCart = true;
      qtyInCart = cart[i].quantity;
    }
  }

  console.log(presentInCart);
  return __jsx("div", {
    className: _productItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.productItem
  }, __jsx("div", {
    className: _productItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image
  }, __jsx("div", {
    className: "card"
  }, __jsx("img", {
    src: props.product.image_url || "/product.png",
    className: "card-img-top",
    alt: ""
  }), __jsx("h5", null, props.product.name), __jsx("h6", null, "\u20A6 ", props.product.price))), __jsx("div", {
    className: _productItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.item
  }, __jsx("div", null, __jsx("h2", null, " ", __jsx("u", null, "Product Description:")), __jsx("p", null, props.product.description)), __jsx("div", null, "   ", __jsx("button", {
    className: _productItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.add,
    onClick: () => {
      addToCart(props.product);
      total(props.product.price);
    }
  }, "Add to Cart"), presentInCart ? __jsx("button", {
    className: _productItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.remove,
    onClick: () => {
      removeFromCart(props.product);
      removeFromTotal(props.product);
    }
  }, "remove from cart") : ""), __jsx("div", null, "Qty in cart: ", qtyInCart)));
};

/* harmony default export */ __webpack_exports__["a"] = (ProductItem);

/***/ }),

/***/ "YJee":
/***/ (function(module, exports) {

module.exports = {
	"pagelink": "pagelink___1l65_",
	"productItem": "productItem___3zsw_",
	"image": "image___A6YxT",
	"item": "item___2lEaX",
	"remove": "remove___2T0y-",
	"add": "add___1GbcU"
};

/***/ }),

/***/ "bcQz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CartContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["a"] = (CartContext);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "wXvK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_productItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JRi1");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Productitem = props => {
  return __jsx(_components_productItem__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    product: props.product
  });
};

Productitem.getInitialProps = async function (context) {
  const {
    id
  } = context.query;
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`http://localhost:4000/product/${id}`);
  const result = await res.json();
  console.log(result.data);
  const product = result.data;
  return {
    product
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Productitem);

/***/ })

/******/ });
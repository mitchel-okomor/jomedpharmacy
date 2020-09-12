module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: ./pages/styles.scss
var styles = __webpack_require__("rJRk");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/helper/chat.js
var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
/* harmony default export */ var helper_chat = (function () {
  var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/5f12fe287258dc118bee7be8/default';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
});
;
// CONCATENATED MODULE: ./components/head.js
var __jsx = external_react_default.a.createElement;




const Head = () => __jsx(head_default.a, null, __jsx("meta", {
  charSet: "UTF-8"
}), __jsx("title", null, "Jomed Pharmacy"), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1"
}), __jsx("meta", {
  name: "description",
  content: "Jomed pharmacy is one of the top providers of pharmaceutical products and health care service in Agege, Lagos, Nigeria"
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
}), __jsx("link", {
  rel: "stylesheet",
  href: "path/to/font-awesome/css/font-awesome.min.css"
}), __jsx("link", {
  rel: "icon",
  href: "/favicon.jpg",
  sizes: "16x16",
  type: "image/png"
}));

/* harmony default export */ var head = (Head);
// EXTERNAL MODULE: ./components/header/header.module.scss
var header_module = __webpack_require__("pWeJ");
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/search.module.scss
var search_module = __webpack_require__("SwJl");
var search_module_default = /*#__PURE__*/__webpack_require__.n(search_module);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./components/search.js

var search_jsx = external_react_default.a.createElement;




const Search = () => {
  const {
    0: query,
    1: setQuery
  } = Object(external_react_["useState"])();
  const {
    0: searchResult,
    1: setSearchResult
  } = Object(external_react_["useState"])('');

  const handleChange = e => {
    setQuery(e.target.value);
    console.log(query);
  }; //submit form data to backend server


  const handleSubmit = async e => {
    e.preventDefault(); //dispatch({field:"loading", value:true});

    const url = 'http://localhost:4000/search?value=' + query;
    console.log(query);

    try {
      const response = await external_axios_default.a.get(url, {
        timeout: 30000
      });

      if (response.status == 200) {
        setSearchResult(response.data.data);
        console.log(searchResult);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return search_jsx("div", {
    className: search_module_default.a.search
  }, search_jsx("form", null, search_jsx("input", {
    type: "text",
    id: "search",
    name: "search",
    value: query,
    placeholder: "Search Products & Services",
    onChange: handleChange
  }), search_jsx("button", {
    onClick: handleSubmit
  }, search_jsx("i", {
    className: "fa fa-search"
  }))));
};

/* harmony default export */ var search = (Search);
// EXTERNAL MODULE: ./components/appcontext.js
var appcontext = __webpack_require__("bcQz");

// EXTERNAL MODULE: ./components/helper/logout.js
var logout = __webpack_require__("oOGZ");

// CONCATENATED MODULE: ./components/header/header.js

var header_jsx = external_react_default.a.createElement;







const Header = () => {
  const {
    cart,
    customer
  } = Object(external_react_["useContext"])(appcontext["a" /* default */]);
  let {
    0: userDropdown,
    1: ToggleUserDropdown
  } = Object(external_react_["useState"])(header_module_default.a.hide);
  return header_jsx("header", {
    className: header_module_default.a.header
  }, header_jsx("div", {
    className: header_module_default.a.logo
  }, header_jsx("a", {
    href: "/"
  }, header_jsx("img", {
    src: "/jomed11.png"
  }), " ")), header_jsx(search, null), header_jsx("div", {
    className: header_module_default.a.activity
  }, header_jsx("div", {
    className: header_module_default.a.user,
    onMouseEnter: () => ToggleUserDropdown(userDropdown = header_module_default.a.show ? header_module_default.a.hide : header_module_default.a.show)
  }, header_jsx("img", {
    src: "/user.png"
  }), header_jsx(link_default.a, {
    href: "/account"
  }, header_jsx("a", null, customer ? customer.name : "Login/Signup")), customer && !Boolean(Number(customer.is_admin)) ? header_jsx("div", {
    class: header_module_default.a.dropdown_content
  }, header_jsx("ul", null, header_jsx("li", null, header_jsx(link_default.a, {
    href: "/account"
  }, "My account"), " "), header_jsx("li", null, header_jsx(link_default.a, {
    href: ""
  }, "Personal information"), " "), header_jsx("li", null, header_jsx(link_default.a, {
    href: "/orderhistory"
  }, "Order history"), " "), header_jsx("li", {
    onClick: () => Object(logout["a" /* default */])()
  }, header_jsx(link_default.a, {
    href: ""
  }, "Log Out"), " "))) : customer && Boolean(Number(customer.is_admin)) ? header_jsx("div", {
    class: header_module_default.a.dropdown_content
  }, " ", header_jsx("ul", null, " ", header_jsx("li", {
    onClick: () => Object(logout["a" /* default */])()
  }, header_jsx(link_default.a, {
    href: ""
  }, "Log Out"), " "))) : ""), //check if user is admin
  !customer || !Boolean(Number(customer.is_admin)) ? header_jsx("div", {
    className: header_module_default.a.cart
  }, header_jsx(link_default.a, {
    href: "/cart"
  }, header_jsx("a", null, header_jsx("img", {
    src: "/cart.png"
  }), " ")), cart.length) : header_jsx(link_default.a, {
    href: "/account"
  }, header_jsx("a", {
    className: header_module_default.a.admin_link
  }, "Admin Panel"))));
};

/* harmony default export */ var header = (Header);
// EXTERNAL MODULE: ./components/navigation.module.scss
var navigation_module = __webpack_require__("dqGp");
var navigation_module_default = /*#__PURE__*/__webpack_require__.n(navigation_module);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/navigation.js

var navigation_jsx = external_react_default.a.createElement;





const Navigation = () => {
  Object(external_react_["useEffect"])(() => {
    let list, i;
    list = document.querySelectorAll("i.icon");
    console.log(list);

    for (i = 0; i < list.length; i++) {
      list[i].classList.add('fa');
      list[i].classList.add('fa-bar');
    }
  }, []);
  const router = Object(router_["useRouter"])();

  function togleNav() {
    let elem = document.getElementsByClassName("togle_nav")[0];
    elem.style.display === "block" ? elem.style.display = "none" : elem.style.display = "block";
  }

  function myFunction(x) {
    togleNav();
    x.target.classList.toggle(navigation_module_default.a.change);
  }

  return navigation_jsx("div", {
    className: navigation_module_default.a.nav_container
  }, navigation_jsx("div", {
    class: navigation_module_default.a.container,
    onClick: myFunction
  }, navigation_jsx("div", {
    class: navigation_module_default.a.bar1
  }), navigation_jsx("div", {
    class: navigation_module_default.a.bar2
  }), navigation_jsx("div", {
    class: navigation_module_default.a.bar3
  })), navigation_jsx("nav", {
    className: `${navigation_module_default.a.nav} togle_nav`
  }, navigation_jsx("ul", null, navigation_jsx("li", {
    className: router.pathname == "/" ? navigation_module_default.a.active : ""
  }, navigation_jsx(link_default.a, {
    href: "/"
  }, "Home")), navigation_jsx("li", {
    className: navigation_module_default.a.dropdown,
    className: router.pathname == "/products" ? navigation_module_default.a.active : ""
  }, navigation_jsx(link_default.a, {
    href: "/products",
    className: navigation_module_default.a.dropbtn
  }, " Products  "), navigation_jsx("div", {
    className: navigation_module_default.a.dropdown_content
  }, navigation_jsx("a", {
    href: "#"
  }, "Antibiotics"), navigation_jsx("a", {
    href: "#"
  }, "Haematinics"), navigation_jsx("a", {
    href: "#"
  }, "Suppliments"))), navigation_jsx("li", {
    className: navigation_module_default.a.dropdown,
    className: router.pathname == "/services" ? navigation_module_default.a.active : ""
  }, navigation_jsx(link_default.a, {
    href: "/services",
    className: navigation_module_default.a.dropbtn
  }, " Services  "), navigation_jsx("div", {
    className: navigation_module_default.a.dropdown_content
  }, navigation_jsx(link_default.a, {
    href: "/bpc"
  }, "Blood Pressure Check"), navigation_jsx(link_default.a, {
    href: "/bgt"
  }, "Blood Glucose Test"), navigation_jsx(link_default.a, {
    href: "/wmc"
  }, "Weigth Management Care"))), navigation_jsx("li", {
    className: router.pathname == "/locations" ? navigation_module_default.a.active : ""
  }, navigation_jsx(link_default.a, {
    href: "/locations"
  }, " Locations")), navigation_jsx("li", {
    className: router.pathname == "/about" ? navigation_module_default.a.active : ""
  }, navigation_jsx(link_default.a, {
    href: "/about"
  }, "  About")))));
};

/* harmony default export */ var navigation = (Navigation);
// EXTERNAL MODULE: ./components/footer/footer.module.scss
var footer_module = __webpack_require__("n5M9");
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);

// CONCATENATED MODULE: ./components/footer/footer.js

var footer_jsx = external_react_default.a.createElement;



const Footer = () => {
  return footer_jsx("footer", null, footer_jsx("div", {
    className: footer_module_default.a.footer
  }, footer_jsx("div", null, footer_jsx("h3", null, "Shopping With Us"), footer_jsx(link_default.a, {
    href: "/products"
  }, "Brands A - Z"), footer_jsx("br", null), footer_jsx(link_default.a, {
    href: "/locations"
  }, "Shops location"), footer_jsx("br", null)), footer_jsx("div", null, footer_jsx("h3", null, "Customer Services"), footer_jsx(link_default.a, {
    href: ""
  }, "Help & FAQs"), footer_jsx("br", null), footer_jsx(link_default.a, {
    href: ""
  }, " Store survey"), footer_jsx("br", null), footer_jsx(link_default.a, {
    href: ""
  }, " Tel: (+234) 80"), footer_jsx("br", null), footer_jsx(link_default.a, {
    href: ""
  }, "Email: info@jomedpharmacy.com.ng")), footer_jsx("div", {
    className: footer_module_default.a.stayintouch
  }, footer_jsx("h3", null, "Stay in Touch"), footer_jsx("i", {
    className: "fa fa-twitter-square",
    "aria-hidden": "true"
  }), footer_jsx("i", {
    className: "fa fa-facebook-square",
    "aria-hidden": "true"
  }), footer_jsx("i", {
    className: "fa fa-linkedin-square",
    "aria-hidden": "true"
  }), footer_jsx("i", {
    className: "fa fa-whatsapp",
    "aria-hidden": "true"
  }), footer_jsx("i", {
    className: "fa fa-instagram",
    "aria-hidden": "true"
  }), footer_jsx("div", null))));
};

/* harmony default export */ var footer = (Footer);
// EXTERNAL MODULE: ./components/prescription.module.scss
var prescription_module = __webpack_require__("eF0E");
var prescription_module_default = /*#__PURE__*/__webpack_require__.n(prescription_module);

// EXTERNAL MODULE: ./components/loading.js
var components_loading = __webpack_require__("PLZj");

// CONCATENATED MODULE: ./components/prescription.js
var prescription_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const initialState = {
  customerId: "",
  name: "",
  email: "",
  number: "",
  description: "",
  loading: false,
  chat: prescription_module_default.a.chatclosed,
  button: prescription_module_default.a.openbutton
}; //handle state changes with reducer

const reducer = (state, {
  field,
  value
}) => {
  return _objectSpread({}, state, {
    [field]: value
  });
};

const prescription = props => {
  const {
    customer
  } = Object(external_react_["useContext"])(appcontext["a" /* default */]); //use reducer hook to dispatch change action

  const {
    0: state,
    1: dispatch
  } = Object(external_react_["useReducer"])(reducer, initialState);

  const handleChange = e => {
    dispatch({
      field: e.target.name,
      value: e.target.value
    });
  };

  console.log(state.customerId); //during component mounting

  Object(external_react_["useEffect"])(() => {
    const customerId = localStorage.getItem("customerId");
    dispatch({
      field: "customerId",
      value: customerId
    });
  }, []); //submit form data to backend server

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch({
      field: "loading",
      value: true
    });
    const url = 'http://localhost:4000/prescription';
    console.log(state);

    try {
      const response = await external_axios_default.a.post(url, state, {
        timeout: 30000
      });

      if (response.status == 200) {
        console.log(response);
        localStorage.setItem("customerId", response);
        dispatch({
          field: "loading",
          value: false
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        field: "loading",
        value: false
      });
    }
  };

  const toggleChat = () => {
    console.log("toggling");

    if (state.chat === prescription_module_default.a.chatclosed) {
      dispatch({
        field: "chat",
        value: prescription_module_default.a.chatopen
      });
      dispatch({
        field: "button",
        value: prescription_module_default.a.closebutton
      });
    } else {
      dispatch({
        field: "chat",
        value: prescription_module_default.a.chatclosed
      });
      dispatch({
        field: "button",
        value: prescription_module_default.a.openbutton
      });
    }
  };

  const {
    name,
    description,
    number,
    loading,
    chat,
    button
  } = state;

  if (loading) {
    return prescription_jsx("div", {
      className: prescription_module_default.a.prescription
    }, prescription_jsx(components_loading["a" /* default */], null));
  } else if (customer && Boolean(customer.is_admin)) {
    return "";
  }

  return prescription_jsx("div", {
    className: prescription_module_default.a.prescription
  }, prescription_jsx("button", {
    className: button,
    onClick: toggleChat
  }, "prescription"), prescription_jsx("div", {
    className: chat,
    id: prescription_module_default.a.myForm
  }, prescription_jsx("br", null), prescription_jsx("form", {
    className: prescription_module_default.a.formcontainer
  }, prescription_jsx("fieldset", null, prescription_jsx("legend", null, prescription_jsx("b", null, prescription_jsx("h3", {
    className: prescription_module_default.a.heading
  }, "Send us your prescription"))), prescription_jsx("br", null), prescription_jsx("label", {
    for: "fname"
  }, "Full Name:"), " ", prescription_jsx("br", null), prescription_jsx("input", {
    type: "text",
    id: "name",
    name: "name",
    value: customer ? customer.name : name,
    placeholder: "John Okafor",
    required: true,
    onChange: handleChange
  }), prescription_jsx("br", null), prescription_jsx("label", {
    for: "number"
  }, "phone number:"), " ", prescription_jsx("br", null), prescription_jsx("input", {
    type: "number",
    id: "number",
    name: "number",
    value: customer ? customer.number : number,
    placeholder: "08090213567",
    required: true,
    onChange: handleChange
  }), prescription_jsx("br", null), prescription_jsx("br", null), prescription_jsx("label", {
    for: "prescription"
  }, "prescription details:"), " ", prescription_jsx("br", null), prescription_jsx("textarea", {
    type: "text",
    id: "prescription",
    name: "description",
    value: description,
    required: true,
    onChange: handleChange
  }), prescription_jsx("br", null), prescription_jsx("button", {
    type: "submit",
    className: prescription_module_default.a.btn,
    onClick: handleSubmit
  }, "Submit"), prescription_jsx("br", null), prescription_jsx("button", {
    className: prescription_module_default.a.cancel,
    onClick: toggleChat
  }, "close")))));
};

/* harmony default export */ var components_prescription = (prescription);
// CONCATENATED MODULE: ./components/layout.js

var layout_jsx = external_react_default.a.createElement;






const Layout = props => {
  return layout_jsx("div", null, layout_jsx(head, null), layout_jsx(header, null), layout_jsx(navigation, null), props.children, layout_jsx(components_prescription, null), layout_jsx(footer, null));
};

/* harmony default export */ var layout = (Layout);
// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// CONCATENATED MODULE: ./pages/_app.js


var _app_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // This default export is required in a new `pages/_app.js` file.

class _app_MyApp extends app_default.a {
  constructor(...args) {
    super(...args);

    _app_defineProperty(this, "state", {
      customer: '',
      cart: [],
      carttotal: 0
    });

    _app_defineProperty(this, "fetchCustomer", async () => {
      const customerId = localStorage.getItem('customerId');
      console.log(customerId);
      const url = "http://localhost:4000/customer/" + customerId;
      const res = await external_isomorphic_unfetch_default()(url, {
        headers: {
          "Authorization": localStorage.getItem('token')
        }
      });
      const data = await res.json();
      const customer = data.data;
      console.log(customer);
      return customer;
    });

    _app_defineProperty(this, "addToCart", async product => {
      //check if product is in cart already and add to quantity
      if (product.quantity) {
        console.log("found product");
        let productHolder = "";

        for (let i = 0; i < this.state.cart.length; i++) {
          if (this.state.cart[i].product_id === product.product_id) {
            //copy the product from cart in the state
            productHolder = this.state.cart[i];
            console.log(this.state.cart[i]); //remove the product from cart in the state

            this.state.cart.splice(i);
            console.log("cart: " + productHolder); //re-add the produc to state cart after incrementing the quantity

            productHolder.quantity += 1;
            await this.setState({
              cart: [...this.state.cart, productHolder]
            }); //save to local storage

            localStorage.setItem('cart', JSON.stringify(this.state.cart));
            break;
          }
        }
      } else {
        product.quantity = 1;
        await this.setState({
          cart: [...this.state.cart, product]
        }); //save to local storage

        localStorage.setItem('cart', JSON.stringify(this.state.cart));
      }
    });

    _app_defineProperty(this, "calculateTotal", async price => {
      console.log(price);
      await this.setState({
        carttotal: this.state.carttotal + price
      });
      localStorage.setItem('total', JSON.stringify(this.state.carttotal));
    });

    _app_defineProperty(this, "removeFromTotal", async product => {
      let producdToRemove = this.state.cart.filter(item => item.id === product.id);
      console.log(product.quantity);

      if (this.state.carttotal >= 1 && producdToRemove) {
        await this.setState({
          carttotal: this.state.carttotal - product.price * product.quantity
        });
        localStorage.setItem('total', JSON.stringify(this.state.carttotal));
      }
    });

    _app_defineProperty(this, "removeFromCart", async product => {
      console.log("product: " + product.product_id);
      let newCart = this.state.cart.filter(item => item.product_id !== product.product_id);
      await this.setState({
        cart: newCart
      });
      product.quantity = 0; //save to local storage

      console.log(this.state.cart.length);
      localStorage.setItem('cart', JSON.stringify(this.state.cart));
    });

    _app_defineProperty(this, "setCustomer", val => {
      console.log("SetCustomer: " + val);
      this.setState({
        customer: val
      });
    });

    _app_defineProperty(this, "chat", () => {
      var Tawk_API = Tawk_API || {},
          Tawk_LoadStart = new Date();

      (function () {
        var s1 = document.createElement("script"),
            s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/5f12fe287258dc118bee7be8/default';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
      })();
    });
  }

  componentDidMount() {
    this.chat();

    (async () => {
      //get cart items from local storage
      const cart = JSON.parse(localStorage.getItem('cart')); //get cart total

      const carttotal = JSON.parse(localStorage.getItem('total'));
      const customer = await this.fetchCustomer();
      console.log(customer);

      if (cart) {
        this.setState({
          customer: customer,
          cart: cart,
          carttotal: carttotal
        });
      }
    })();
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return _app_jsx(appcontext["a" /* default */].Provider, {
      value: {
        cart: this.state.cart,
        customer: this.state.customer,
        setCustomer: this.setCustomer,
        addToCart: this.addToCart,
        total: this.calculateTotal,
        removeFromCart: this.removeFromCart,
        removeFromTotal: this.removeFromTotal,
        carttotal: this.state.carttotal
      }
    }, _app_jsx(layout, null, _app_jsx(Component, _extends({}, pageProps, {
      className: "jsx-1818130120" + " " + (pageProps && pageProps.className != null && pageProps.className || "")
    })), _app_jsx(style_default.a, {
      id: "1818130120"
    }, ["*,*::before,*::after{box-sizing:border-box;}"])));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (_app_MyApp);

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "GD+O":
/***/ (function(module, exports) {

module.exports = {
	"pagelink": "pagelink___2-f9Q",
	"loader": "loader___303lL",
	"spin": "spin___aGIZ0"
};

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "PLZj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loading_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("GD+O");
/* harmony import */ var _loading_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loading_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Loading = props => {
  return __jsx("div", {
    className: _loading_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loading_container
  }, __jsx("div", {
    className: _loading_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loader
  }), ";");
};

/* harmony default export */ __webpack_exports__["a"] = (Loading);

/***/ }),

/***/ "SwJl":
/***/ (function(module, exports) {

module.exports = {
	"pagelink": "pagelink___3KTKa",
	"search": "search___3MHpT"
};

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "bcQz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CartContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["a"] = (CartContext);

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "dqGp":
/***/ (function(module, exports) {

module.exports = {
	"pagelink": "pagelink____jdru",
	"nav_container": "nav_container___AArvw",
	"nav": "nav___1kSwy",
	"active": "active___amG3s",
	"dropbtn": "dropbtn___yJU84",
	"dropdown": "dropdown___2r2lA",
	"dropdown_content": "dropdown_content___1VBhe",
	"container": "container___CN5Dy",
	"bar1": "bar1___5HyMH",
	"bar2": "bar2___iOrAY",
	"bar3": "bar3___1ZgCt",
	"change": "change___1C4xs",
	"togle_nav": "togle_nav___3Kd6k"
};

/***/ }),

/***/ "eF0E":
/***/ (function(module, exports) {

module.exports = {
	"pagelink": "pagelink___1xFXa",
	"openbutton": "openbutton___1JJgq",
	"closebutton": "closebutton___2pbXy",
	"chatclosed": "chatclosed___2VVtF",
	"chatopen": "chatopen___yNv89",
	"formcontainer": "formcontainer___244JH",
	"heading": "heading___3qTZh",
	"btn": "btn___31ijb",
	"cancel": "cancel___20Iow"
};

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "n5M9":
/***/ (function(module, exports) {

module.exports = {
	"pagelink": "pagelink___3YSse",
	"footer": "footer___1nBGW",
	"stayintouch": "stayintouch___l2Yrq"
};

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "oOGZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const logout = () => {
  localStorage.removeItem("token");
  window.location.reload();
};

/* harmony default export */ __webpack_exports__["a"] = (logout);

/***/ }),

/***/ "pWeJ":
/***/ (function(module, exports) {

module.exports = {
	"pagelink": "pagelink___MtiHc",
	"header": "header___207u5",
	"logo": "logo___3Dv9V",
	"activity": "activity___2Xw8Y",
	"cart": "cart___1sbiW",
	"user": "user___rnymh",
	"dropdown_content": "dropdown_content___SGcYG",
	"admin_link": "admin_link___3kCBp"
};

/***/ }),

/***/ "rJRk":
/***/ (function(module, exports) {

module.exports = {
	"pagelink": "pagelink___35WRW"
};

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });
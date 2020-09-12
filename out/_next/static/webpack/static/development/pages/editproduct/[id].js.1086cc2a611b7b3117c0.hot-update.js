webpackHotUpdate("static\\development\\pages\\editproduct\\[id].js",{

/***/ "./pages/editproduct/[id].js":
/*!***********************************!*\
  !*** ./pages/editproduct/[id].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editproduct_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editproduct.module.scss */ "./pages/editproduct/editproduct.module.scss");
/* harmony import */ var _editproduct_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_editproduct_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/loading */ "./components/loading.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\User PC\\workspace\\jomed\\jomed-pharmacy\\pages\\editproduct\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var initialState = {
  customerId: "",
  name: "",
  price: "",
  category: "",
  description: "",
  loading: false
}; //handle state changes with reducer

var reducer = function reducer(state, _ref) {
  var field = _ref.field,
      value = _ref.value;
  return _objectSpread({}, state, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, field, value));
};

var EditProduct = function EditProduct() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      product = _useState[0],
      setProduct = _useState[1]; //use reducer hook to dispatch change action


  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(reducer, initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var handleChange = function handleChange(e) {
    dispatch({
      field: e.target.name,
      value: e.target.value
    });
  }; //during component mounting


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetchData();
    var customerId = localStorage.getItem("customerId");
    dispatch({
      field: "customerId",
      value: customerId
    });
    dispatch({
      field: "name",
      value: product.name
    });
    dispatch({
      field: "category",
      value: product.category
    });
    dispatch({
      field: "price",
      value: product.price
    });
    dispatch({
      field: "description",
      value: product.description
    });
  }, []); //submit form data to backend server

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
            url = 'http://localhost:4000/product/' + product.product_id;
            console.log(state);
            _context.prev = 4;
            _context.next = 7;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_4___default.a.patch(url, state, {
              timeout: 60000
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
              router.push("/admin");
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

  var fetchData = function fetchData() {
    var id, res, result, product;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = router.query.id;
            _context2.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("http://localhost:4000/product/".concat(id)));

          case 3:
            res = _context2.sent;
            _context2.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

          case 6:
            result = _context2.sent;
            product = result.data;
            setProduct(product);
            console.log(product);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var name = state.name,
      price = state.price,
      category = state.category,
      description = state.description,
      loading = state.loading,
      chat = state.chat,
      button = state.button;

  if (loading) {
    return __jsx("div", {
      className: _editproduct_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.editproduct,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 3
      }
    }, __jsx(_components_loading__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 1
      }
    }));
  }

  return __jsx("div", {
    className: _editproduct_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.editproduct,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, __jsx("div", {
    id: _editproduct_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.myForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }), __jsx("form", {
    className: _editproduct_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.formcontainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx("fieldset", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx("legend", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: _editproduct_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.heading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 24
    }
  }, "Edit Product"))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }), __jsx("label", {
    "for": "fname",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, "Name:"), " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 46
    }
  }), __jsx("input", {
    type: "text",
    id: "name",
    name: "name",
    value: name,
    required: true,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
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
    "for": "price",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, "Price:"), " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 47
    }
  }), __jsx("input", {
    type: "number",
    id: "price",
    name: "price",
    value: price,
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
      lineNumber: 120,
      columnNumber: 13
    }
  }), __jsx("label", {
    "for": "prescription",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, "prescription details:"), " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 69
    }
  }), __jsx("textarea", {
    type: "text",
    id: "prescription",
    name: "description",
    value: description,
    required: true,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }), __jsx("label", {
    "for": "category",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, "category:"), __jsx("select", {
    id: "category",
    name: "category",
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 5
    }
  }, __jsx("option", {
    value: "antibiotics",
    selected: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }, "Antibiotics"), __jsx("option", {
    value: "antidiabetics",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }, "Antidiabetics"), __jsx("option", {
    value: "antimaleria",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, "Antimaleria")), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }), __jsx("button", {
    type: "submit",
    className: _editproduct_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.btn,
    onClick: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, "Submit"), __jsx("button", {
    className: _editproduct_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.cancel,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 47
    }
  }, "cancel"))))));
}; // EditProduct.getInitialProps = async function(context) {
//     const { id } = context.query;
//     const res = await fetch(`http://localhost:4000/product/${id}`);
//     const result = await res.json();
//     console.log(result.data);
//     const product = result.data;
//     return {product};
// }


/* harmony default export */ __webpack_exports__["default"] = (EditProduct);

/***/ })

})
//# sourceMappingURL=[id].js.1086cc2a611b7b3117c0.hot-update.js.map
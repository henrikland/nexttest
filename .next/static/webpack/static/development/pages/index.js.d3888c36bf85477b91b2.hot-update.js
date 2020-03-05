webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
false,

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptors.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/_is-array.js":
false,

/***/ "./node_modules/core-js/library/modules/_meta.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
false,

/***/ "./node_modules/core-js/library/modules/_own-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
false,

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismic-javascript */ "./node_modules/prismic-javascript/dist/prismic-javascript.min.js");
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "/Users/henrik/nexttest/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


var Index = function Index(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Hellodd Next.js"), props.data.map(function (thing, index) {
    return __jsx("div", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, thing);
  }));
};

Index.getInitialProps = function _callee() {
  var apiEndpoint, api, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          apiEndpoint = "https://lbb-test.prismic.io/api/v2";
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(prismic_javascript__WEBPACK_IMPORTED_MODULE_4___default.a.getApi(apiEndpoint));

        case 3:
          api = _context.sent;
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(api.query(""));

        case 6:
          data = _context.sent;
          // An empty query will return all the documents
          console.log(data);
          return _context.abrupt("return", {
            data: _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(data.results[0].data)
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.d3888c36bf85477b91b2.hot-update.js.map
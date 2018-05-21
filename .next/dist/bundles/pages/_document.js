module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_document.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document__ = __webpack_require__("next/document");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_document__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_jss_lib_JssProvider__ = __webpack_require__("react-jss/lib/JssProvider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_jss_lib_JssProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_jss_lib_JssProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_jsx_server__ = __webpack_require__("styled-jsx/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_jsx_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_jsx_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_getPageContext__ = __webpack_require__("./src/getPageContext.js");
var _jsxFileName = "/Users/Paddy/Documents/Sites/next-apollo-material/pages/_document.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var MyDocument =
/*#__PURE__*/
function (_Document) {
  _inherits(MyDocument, _Document);

  function MyDocument() {
    _classCallCheck(this, MyDocument);

    return _possibleConstructorReturn(this, (MyDocument.__proto__ || Object.getPrototypeOf(MyDocument)).apply(this, arguments));
  }

  _createClass(MyDocument, [{
    key: "render",
    value: function render() {
      var pageContext = this.props.pageContext;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("html", {
        lang: "en",
        dir: "ltr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["Head"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "My page"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: 'user-scalable=0, initial-scale=1, ' + 'minimum-scale=1, width=device-width, height=device-height',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "theme-color",
        content: pageContext.theme.palette.primary.main,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("body", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["Main"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["NextScript"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;
      var pageContext = Object(__WEBPACK_IMPORTED_MODULE_4__src_getPageContext__["a" /* default */])();
      var page = renderPage(function (Component) {
        return function (props) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_jss_lib_JssProvider___default.a, {
            registry: pageContext.sheetsRegistry,
            generateClassName: pageContext.generateClassName,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({
            pageContext: pageContext
          }, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          })));
        };
      });
      return _objectSpread({}, page, {
        pageContext: pageContext,
        styles: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
          id: "jss-server-side" // eslint-disable-next-line react/no-danger
          ,
          dangerouslySetInnerHTML: {
            __html: pageContext.sheetsRegistry.toString()
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }), __WEBPACK_IMPORTED_MODULE_3_styled_jsx_server___default()() || null)
      });
    }
  }]);

  return MyDocument;
}(__WEBPACK_IMPORTED_MODULE_1_next_document___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ "./src/getPageContext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getPageContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jss__ = __webpack_require__("jss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_purple__ = __webpack_require__("@material-ui/core/colors/purple");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_purple___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_purple__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_teal__ = __webpack_require__("@material-ui/core/colors/teal");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_teal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_teal__);
/* eslint-disable no-underscore-dangle */



 // A theme with custom primary and secondary color.
// It's optional.

var theme = Object(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__["createMuiTheme"])({
  palette: {
    primary: {
      light: __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_purple___default.a[300],
      main: __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_purple___default.a[500],
      dark: __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_purple___default.a[700]
    },
    secondary: {
      xlight: __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_teal___default.a['A100'],
      light: __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_teal___default.a['A200'],
      main: __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_teal___default.a['A400'],
      dark: __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_teal___default.a['A700']
    }
  }
});

function createPageContext() {
  return {
    theme: theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new __WEBPACK_IMPORTED_MODULE_0_jss__["SheetsRegistry"](),
    // The standard class name generator.
    generateClassName: Object(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__["createGenerateClassName"])()
  };
}

function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  } // Reuse context on the client-side.


  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_document.js");


/***/ }),

/***/ "@material-ui/core/colors/purple":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/purple");

/***/ }),

/***/ "@material-ui/core/colors/teal":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/teal");

/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "jss":
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ "next/document":
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-jss/lib/JssProvider":
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/JssProvider");

/***/ }),

/***/ "styled-jsx/server":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=_document.js.map
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ArticleGrid/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Grid__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Card__ = __webpack_require__("@material-ui/core/Card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_CardContent__ = __webpack_require__("@material-ui/core/CardContent");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_CardContent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_CardContent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Grow__ = __webpack_require__("@material-ui/core/Grow");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Grow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Grow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
var _jsxFileName = "/Users/Paddy/Documents/Sites/next-apollo-material/components/ArticleGrid/index.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











var styles = function styles(theme) {
  return {
    root: {
      padding: '0 12px',
      margin: '0 auto'
    },
    grid: {
      marginTop: 0
    },
    post: {
      position: 'relative',
      cursor: 'pointer',
      height: '100%',
      transition: 'background 0.3s ease-in-out',
      '&:hover,&:focus': {
        background: theme.palette.secondary.xlight,
        transition: 'background 0.3s ease-in-out',
        '& $link,& $date': {// color: 'white',
          // transition: 'color 0.3s ease-in-out'
        }
      }
    },
    link: {
      color: theme.palette.primary.dark,
      textDecoration: 'none',
      transition: 'color 0.3s ease-in-out'
    },
    date: {
      color: theme.palette.primary.light,
      transition: 'color 0.3s ease-in-out'
    },
    postTextContainer: {
      textAlign: 'left',
      paddingTop: theme.spacing.unit * 20,
      width: '100%',
      position: 'absolute',
      bottom: 0,
      left: 0,
      background: 'rgba(255, 255, 255, 0.2)'
    }
  };
};

var timeout = 100;
var counter = 1;

function incrimentTimeout() {
  if (counter % 20 === 0) {
    counter = 1;
  }

  timeout = counter < 20 ? 100 * counter : 100;
  counter++;
  return timeout;
}

var ArticleGrid =
/*#__PURE__*/
function (_Component) {
  _inherits(ArticleGrid, _Component);

  function ArticleGrid() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, ArticleGrid);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = ArticleGrid.__proto__ || Object.getPrototypeOf(ArticleGrid)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "formatDateTime", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(dt) {
        return __WEBPACK_IMPORTED_MODULE_8_moment___default()(dt).format('l');
      }
    }), _temp));
  }

  _createClass(ArticleGrid, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextProps.allPosts.length !== this.props.allPosts.length;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          allPosts = _props.allPosts,
          classes = _props.classes;
      var timeout = 100;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Grid___default.a, {
        container: true,
        spacing: 24,
        className: classes.grid,
        alignItems: "stretch",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, allPosts && allPosts.map(function (post, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Grow___default.a, {
          "in": true,
          timeout: incrimentTimeout(),
          key: post.id || post.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Grid___default.a, {
          item: true,
          xs: 12,
          md: 6,
          lg: 4,
          onClick: function onClick() {
            return window.location = post.url;
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Card___default.a, {
          className: classes.post,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_CardContent___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          className: classes.link,
          href: post.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }, post.title)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          className: classes.date,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        }, __WEBPACK_IMPORTED_MODULE_8_moment___default()(post.createdAt).format('MMMM Do YYYY'))))))));
      }), allPosts.length === 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Grid___default.a, {
        item: true,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, "No items do display"))));
    }
  }]);

  return ArticleGrid;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ArticleGrid.propTypes = {
  allPosts: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__["withStyles"])(styles)(ArticleGrid));

/***/ }),

/***/ "./components/CreatePost/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Add__ = __webpack_require__("@material-ui/icons/Add");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Icon__ = __webpack_require__("@material-ui/core/Icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graphql_queries_graphql__ = __webpack_require__("./graphql/queries.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graphql_queries_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__graphql_queries_graphql__);
var _jsxFileName = "/Users/Paddy/Documents/Sites/next-apollo-material/components/CreatePost/index.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var styles = function styles(theme) {
  return {
    btn: {
      position: 'fixed',
      bottom: theme.spacing.unit * 4,
      right: theme.spacing.unit * 4
    }
  };
};

var CreatePostBtn =
/*#__PURE__*/
function (_Component) {
  _inherits(CreatePostBtn, _Component);

  function CreatePostBtn() {
    _classCallCheck(this, CreatePostBtn);

    return _possibleConstructorReturn(this, (CreatePostBtn.__proto__ || Object.getPrototypeOf(CreatePostBtn)).apply(this, arguments));
  }

  _createClass(CreatePostBtn, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_apollo__["Mutation"], {
        mutation: __WEBPACK_IMPORTED_MODULE_7__graphql_queries_graphql__["TOGGLE_POST_MODAL_OPEN"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, function (toggleCreatePostModal) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button___default.a, {
          variant: "fab",
          color: "primary",
          "aria-label": "add",
          className: classes.btn,
          onClick: toggleCreatePostModal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Add___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }));
      }));
    }
  }]);

  return CreatePostBtn;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(CreatePostBtn));

/***/ }),

/***/ "./components/CreatePostModal/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Modal__ = __webpack_require__("@material-ui/core/Modal");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__graphql_queries_graphql__ = __webpack_require__("./graphql/queries.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__graphql_queries_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__graphql_queries_graphql__);
throw new Error("Cannot find module \"react-adopt\"");
var _jsxFileName = "/Users/Paddy/Documents/Sites/next-apollo-material/components/CreatePostModal/index.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var styles = function styles(theme) {
  return {
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    }
  };
};

var Composed = Object(__WEBPACK_IMPORTED_MODULE_7_react_adopt__["adopt"])({
  isOpen: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["Query"], {
    query: __WEBPACK_IMPORTED_MODULE_6__graphql_queries_graphql__["CREATE_POST_MODAL_OPEN"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, function () {}),
  toggle: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["Mutation"], {
    mutation: __WEBPACK_IMPORTED_MODULE_6__graphql_queries_graphql__["TOGGLE_POST_MODAL_OPEN"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, function () {})
});

var CreatePostModal =
/*#__PURE__*/
function (_Component) {
  _inherits(CreatePostModal, _Component);

  function CreatePostModal() {
    _classCallCheck(this, CreatePostModal);

    return _possibleConstructorReturn(this, (CreatePostModal.__proto__ || Object.getPrototypeOf(CreatePostModal)).apply(this, arguments));
  }

  _createClass(CreatePostModal, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Composed, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, function (_ref) {
        var isOpen = _ref.isOpen,
            toggle = _ref.toggle;
        if (isOpen.loading || toggle.loading) console.log('loading', {
          isOpen: isOpen,
          toggle: toggle
        });
        if (isOpen.error || toggle.error) console.error({
          isOpen: isOpen,
          toggle: toggle
        });
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Modal___default.a, {
          "aria-labelledby": "Create post",
          "aria-describedby": "Create and publish a post",
          open: isOpen.data.createPostModalOpen,
          onClose: toggle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.paper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography___default.a, {
          variant: "title",
          id: "modal-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, "Text in a modal"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography___default.a, {
          variant: "subheading",
          id: "simple-modal-description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }, "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.")));
      });
    }
  }]);

  return CreatePostModal;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

CreatePostModal.propTypes = {};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__["withStyles"])(styles)(CreatePostModal));

/***/ }),

/***/ "./components/GetPostQuery/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_graphql_posts_graphql__ = __webpack_require__("./src/graphql/posts.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_graphql_posts_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_graphql_posts_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_graphql_postsCount_graphql__ = __webpack_require__("./src/graphql/postsCount.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_graphql_postsCount_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__src_graphql_postsCount_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_infinite_scroller__ = __webpack_require__("react-infinite-scroller");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_infinite_scroller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_infinite_scroller__);
var _jsxFileName = "/Users/Paddy/Documents/Sites/next-apollo-material/components/GetPostQuery/index.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var GetPostQuery =
/*#__PURE__*/
function (_Component) {
  _inherits(GetPostQuery, _Component);

  function GetPostQuery(props) {
    var _this;

    _classCallCheck(this, GetPostQuery);

    _this = _possibleConstructorReturn(this, (GetPostQuery.__proto__ || Object.getPrototypeOf(GetPostQuery)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "loadMorePosts", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(fetchMore, currentPostCount) {
        var currentfetchedSkip = _this.state.currentfetchedSkip;
        if (currentfetchedSkip === currentPostCount) return true;

        _this.setState({
          currentfetchedSkip: currentPostCount
        }, function () {
          return fetchMore({
            variables: {
              skip: currentPostCount,
              first: 20
            },
            updateQuery: function updateQuery(prev, _ref) {
              var fetchMoreResult = _ref.fetchMoreResult;
              if (!fetchMoreResult) return prev;
              var newUnique = fetchMoreResult.allPosts.filter(function (pm) {
                return prev.allPosts.findIndex(function (pr) {
                  return pr.id === pm.id;
                }) === -1;
              });

              if (newUnique.length === 0) {
                return null;
              }

              var newData = Object.assign({}, prev, {
                allPosts: _toConsumableArray(prev.allPosts).concat(_toConsumableArray(newUnique))
              });
              return newData;
            }
          });
        });
      }
    });
    _this.state = {
      currentfetchedSkip: 0
    };
    return _this;
  }

  _createClass(GetPostQuery, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["Query"], {
        query: __WEBPACK_IMPORTED_MODULE_4__src_graphql_postsCount_graphql___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, function (_ref2) {
        var loading = _ref2.loading,
            error = _ref2.error,
            count = _ref2.data._allPostsMeta.count;
        if (loading) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, "Loading...");
        if (error) return "Error! ".concat(error.message);
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["Query"], {
          query: __WEBPACK_IMPORTED_MODULE_3__src_graphql_posts_graphql___default.a,
          variables: {
            first: 20,
            skip: 0
          },
          fetchPolicy: "cache-and-network",
          notifyOnNetworkStatusChange: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, function (_ref3) {
          var loading = _ref3.loading,
              error = _ref3.error,
              networkStatus = _ref3.networkStatus,
              allPosts = _ref3.data.allPosts,
              fetchMore = _ref3.fetchMore;
          if (loading) __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            }
          }, "Loading...");
          if (error) return "Error! ".concat(error.message);
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_infinite_scroller___default.a, {
            pageStart: 0,
            loadMore: function loadMore() {
              return networkStatus === 7 ? _this2.loadMorePosts(fetchMore, allPosts.length) : null;
            },
            hasMore: count > allPosts.length,
            loader: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
              className: "loader",
              key: 0,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 73
              }
            }, "Loading ..."),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          }, _this2.props.render(allPosts));
        });
      });
    }
  }]);

  return GetPostQuery;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (GetPostQuery);

/***/ }),

/***/ "./components/Header/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar__ = __webpack_require__("@material-ui/core/AppBar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar__ = __webpack_require__("@material-ui/core/Toolbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography__);
var _jsxFileName = "/Users/Paddy/Documents/Sites/next-apollo-material/components/Header/index.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    appBar: {
      background: "linear-gradient(45deg, ".concat(theme.palette.primary.dark, " 30%, ").concat(theme.palette.secondary.light, " 90%)"),
      color: '#fff'
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignitems: 'center'
    }
  };
};

var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          name = _props.name,
          children = _props.children;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar___default.a, {
        position: "static",
        className: classes.appBar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar___default.a, {
        className: classes.toolbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography___default.a, {
        variant: "title",
        color: "inherit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, children))));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Header.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(Header));

/***/ }),

/***/ "./components/PageLayout/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Button__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Header__ = __webpack_require__("./components/Header/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Grid__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Grid__);
var _jsxFileName = "/Users/Paddy/Documents/Sites/next-apollo-material/components/PageLayout/index.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var styles = function styles(theme) {
  return {
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing.unit * 20
    },
    btn: {
      color: theme.palette.primary.dark
    }
  };
};

var PageLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PageLayout, _React$Component);

  function PageLayout() {
    _classCallCheck(this, PageLayout);

    return _possibleConstructorReturn(this, (PageLayout.__proto__ || Object.getPrototypeOf(PageLayout)).apply(this, arguments));
  }

  _createClass(PageLayout, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          children = _props.children;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Header__["a" /* default */], {
        name: "Next/Material/Apollo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Button___default.a, {
        className: classes.btn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "Home"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_Button___default.a, {
        className: classes.btn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "About")))), children);
    }
  }]);

  return PageLayout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

PageLayout.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__["withStyles"])(styles)(PageLayout));

/***/ }),

/***/ "./graphql/queries.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CREATE_POST_MODAL_OPEN"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPostModalOpen"},"arguments":[],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"},"arguments":[]}]}]}},{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TOGGLE_POST_MODAL_OPEN"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleCreatePostModal"},"arguments":[],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"},"arguments":[]}]}]}}],"loc":{"start":0,"end":130}};
    doc.loc.source = {"body":"query CREATE_POST_MODAL_OPEN {\n  createPostModalOpen @client\n}\nmutation TOGGLE_POST_MODAL_OPEN {\n  toggleCreatePostModal @client\n}","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set(opRefs);
      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["CREATE_POST_MODAL_OPEN"] = oneQuery(doc, "CREATE_POST_MODAL_OPEN");
        
        module.exports["TOGGLE_POST_MODAL_OPEN"] = oneQuery(doc, "TOGGLE_POST_MODAL_OPEN");
        


/***/ }),

/***/ "./lib/withData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_with_apollo__ = __webpack_require__("next-with-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_with_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_with_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_boost__ = __webpack_require__("apollo-boost");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_boost___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_boost__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__graphql_queries_graphql__ = __webpack_require__("./graphql/queries.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__graphql_queries_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__graphql_queries_graphql__);


 // can also be a function that accepts a `headers` object (SSR only) and returns a config

function createClient(_ref) {
  var headers = _ref.headers;
  return new __WEBPACK_IMPORTED_MODULE_1_apollo_boost___default.a({
    uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn',
    connectToDevTools: true,
    ssrMode: !process.browser,
    // Disables forceFetch on the server (so queries are only run once)
    // request: async operation => {
    //   // operation.setContext({
    //   //   fetchOptions: {
    //   //     credentials: 'same-origin'
    //   //   },
    //   //   headers
    //   // });
    // },
    clientState: {
      resolvers: {
        Mutation: {
          toggleCreatePostModal: function toggleCreatePostModal(_, variables, _ref2) {
            var cache = _ref2.cache;

            var _cache$read = cache.read({
              query: __WEBPACK_IMPORTED_MODULE_2__graphql_queries_graphql__["CREATE_POST_MODAL_OPEN"]
            }),
                createPostModalOpen = _cache$read.createPostModalOpen;

            var data = {
              data: {
                createPostModalOpen: !createPostModalOpen
              }
            };
            cache.writeData(data);
            return data;
          }
        }
      },
      defaults: {
        createPostModalOpen: false
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_next_with_apollo___default()({
  client: createClient
}));

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_Typography__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_withData__ = __webpack_require__("./lib/withData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_PageLayout__ = __webpack_require__("./components/PageLayout/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ArticleGrid__ = __webpack_require__("./components/ArticleGrid/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_GetPostQuery__ = __webpack_require__("./components/GetPostQuery/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_CreatePost__ = __webpack_require__("./components/CreatePost/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_CreatePostModal__ = __webpack_require__("./components/CreatePostModal/index.jsx");
var _jsxFileName = "/Users/Paddy/Documents/Sites/next-apollo-material/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_PageLayout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_GetPostQuery__["a" /* default */], {
        render: function render(allPosts) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_ArticleGrid__["a" /* default */], {
            allPosts: allPosts,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_CreatePost__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_CreatePostModal__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/graphql/posts.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"connection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"posts","block":false}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":155}};
    doc.loc.source = {"body":" query getAllPosts($first:Int!,$skip: Int!) {\n  allPosts(first:$first,skip:$skip)  @connection(key:\"posts\") {\n    title\n    id\n    createdAt \n    url\n  }\n}","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set(opRefs);
      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["getAllPosts"] = oneQuery(doc, "getAllPosts");
        


/***/ }),

/***/ "./src/graphql/postsCount.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_allPostsMeta"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":45}};
    doc.loc.source = {"body":" query {\n  _allPostsMeta  {\n    count\n  }  \n}","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set(opRefs);
      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardContent":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/Grid":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Grow":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grow");

/***/ }),

/***/ "@material-ui/core/Icon":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ "@material-ui/core/Modal":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Modal");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Add":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "apollo-boost":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "moment":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-with-apollo":
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-infinite-scroller":
/***/ (function(module, exports) {

module.exports = require("react-infinite-scroller");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
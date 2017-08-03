
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Button = exports.NewCard = exports.SearchBox = exports.Container = undefined;

var _taggedTemplateLiteral2 = __webpack_require__(540);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = __webpack_require__(541);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  max-width:1200px;\n  position:relaitve;\n  display:flex;\n  align-items:flex-start;\n  flex-direction:column;\n  align-self:flex-start;\n  margin:auto;\n  padding:1em;\n'], ['\n  max-width:1200px;\n  position:relaitve;\n  display:flex;\n  align-items:flex-start;\n  flex-direction:column;\n  align-self:flex-start;\n  margin:auto;\n  padding:1em;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width:100%;\n  display:flex;\n  flex-direction:row;\n  flex-wrap:wrap;\n  width:100%;\n\n  input {\n    flex-grow:1;\n    height:50px;\n    border:1px solid #ddd;\n    border-radius:3px;\n    font-size:1em;\n    padding:.7em;\n    outline:none;\n    margin-right:.5em;\n\n    &:hover,\n    &:focus {\n      outline:none;\n    }\n  }\n'], ['\n  width:100%;\n  display:flex;\n  flex-direction:row;\n  flex-wrap:wrap;\n  width:100%;\n\n  input {\n    flex-grow:1;\n    height:50px;\n    border:1px solid #ddd;\n    border-radius:3px;\n    font-size:1em;\n    padding:.7em;\n    outline:none;\n    margin-right:.5em;\n\n    &:hover,\n    &:focus {\n      outline:none;\n    }\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  width:100%;\n  padding:1em;\n  font-size:2em;\n  color:black;\n  background-color:#ddd;\n  box-shadow: 0 .1em .3em .03em rgba(0,0,0,0.3);\n  margin:1em 0;\n'], ['\n  width:100%;\n  padding:1em;\n  font-size:2em;\n  color:black;\n  background-color:#ddd;\n  box-shadow: 0 .1em .3em .03em rgba(0,0,0,0.3);\n  margin:1em 0;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: ', ';\n  border-radius: 4px;\n  min-width:200px;\n  color:white;\n  font-size:1.1em;\n  font-family: \'Raleway\', sans-serif;\n  font-weight:500;\n  letter-spacing:0.15em;\n  border:0;\n  text-transform: uppercase;\n  box-shadow: 0 .1em .1em .03em rgba(0,0,0,0.3);\n'], ['\n  background-color: ', ';\n  border-radius: 4px;\n  min-width:200px;\n  color:white;\n  font-size:1.1em;\n  font-family: \'Raleway\', sans-serif;\n  font-weight:500;\n  letter-spacing:0.15em;\n  border:0;\n  text-transform: uppercase;\n  box-shadow: 0 .1em .1em .03em rgba(0,0,0,0.3);\n']);

var Container = exports.Container = _styledComponents2.default.section(_templateObject);

var SearchBox = exports.SearchBox = _styledComponents2.default.form(_templateObject2);

var NewCard = exports.NewCard = _styledComponents2.default.article(_templateObject3);

var Button = exports.Button = _styledComponents2.default.button(_templateObject4, function (props) {
    return props.primary ? '#4171e2' : 'red';
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/fernandocasaliba/GitHub/todoApp/pages/styled/general.styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/fernandocasaliba/GitHub/todoApp/pages/styled/general.styles.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/styled/general.styles")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Search = __webpack_require__(555);

var _Search2 = _interopRequireDefault(_Search);

var _List = __webpack_require__(554);

var _List2 = _interopRequireDefault(_List);

var _global = __webpack_require__(556);

var _general = __webpack_require__(542);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fernandocasaliba/GitHub/todoApp/pages/index.js?entry';

// styles


var Index = function Index() {
  return _react2.default.createElement(_general.Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_Search2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement(_List2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }));
};

exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/fernandocasaliba/GitHub/todoApp/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/fernandocasaliba/GitHub/todoApp/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _list = __webpack_require__(557);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fernandocasaliba/GitHub/todoApp/pages/components/List.js';


var List = function (_Component) {
  (0, _inherits3.default)(List, _Component);

  function List() {
    (0, _classCallCheck3.default)(this, List);

    return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).apply(this, arguments));
  }

  (0, _createClass3.default)(List, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_list.ListItems, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, 'hola'), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, 'hola'), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, 'hola'), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, 'hola'));
    }
  }]);

  return List;
}(_react.Component);

exports.default = List;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/fernandocasaliba/GitHub/todoApp/pages/components/List.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/fernandocasaliba/GitHub/todoApp/pages/components/List.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/components/List")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _general = __webpack_require__(542);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fernandocasaliba/GitHub/todoApp/pages/components/Search.js';

// Styles


var Search = function (_Component) {
  (0, _inherits3.default)(Search, _Component);

  function Search() {
    (0, _classCallCheck3.default)(this, Search);

    // Set initial state
    var _this = (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).call(this));

    _this.state = {
      'typed': 'text'
    };

    // Maneja el cambio de texto del input
    _this.changeText = _this.changeText.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Search, [{
    key: 'changeText',
    value: function changeText(event) {
      event.preventDefault();
      this.setState({ typed: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_general.SearchBox, { onSubmit: this.changeText, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement('input', { placeholder: 'Agregar...',
        onChange: this.changeText, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement(_general.Button, { type: 'submit',
        primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, 'Guardar'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), _react2.default.createElement(_general.NewCard, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, this.state.typed));
    }
  }]);

  return Search;
}(_react.Component);

exports.default = Search;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/fernandocasaliba/GitHub/todoApp/pages/components/Search.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/fernandocasaliba/GitHub/todoApp/pages/components/Search.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/components/Search")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

var _taggedTemplateLiteral2 = __webpack_require__(540);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = __webpack_require__(541);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  @import url(\'https://fonts.googleapis.com/css?family=Raleway:200,300,400,600&subset=latin-ext\');\n\n  * {\n    box-sizing:border-box;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    background-color:white;\n    font-family: \'Raleway\', sans-serif;\n  }\n'], ['\n  @import url(\'https://fonts.googleapis.com/css?family=Raleway:200,300,400,600&subset=latin-ext\');\n\n  * {\n    box-sizing:border-box;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    background-color:white;\n    font-family: \'Raleway\', sans-serif;\n  }\n']);

(0, _styledComponents.injectGlobal)(_templateObject);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/fernandocasaliba/GitHub/todoApp/pages/styled/global.styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/fernandocasaliba/GitHub/todoApp/pages/styled/global.styles.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/styled/global.styles")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItems = undefined;

var _taggedTemplateLiteral2 = __webpack_require__(540);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = __webpack_require__(541);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  border-top:1px solid #eee;\n  width:100%;\n  padding:1em 0;\n  margin:0;\n  display:flex;\n  flex-direction:row;\n  flex-wrap: wrap;\n\n  li {\n    list-style-type:none;\n    border-radius:3px;\n    width:calc(100% / 3 - 1em);\n    padding:1em;\n    font-size:1em;\n    color:black;\n    margin:.5em;\n    background-color:#eee;\n    box-shadow: 0 .1em .3em .03em rgba(0,0,0,0.3);\n  }\n'], ['\n  border-top:1px solid #eee;\n  width:100%;\n  padding:1em 0;\n  margin:0;\n  display:flex;\n  flex-direction:row;\n  flex-wrap: wrap;\n\n  li {\n    list-style-type:none;\n    border-radius:3px;\n    width:calc(100% / 3 - 1em);\n    padding:1em;\n    font-size:1em;\n    color:black;\n    margin:.5em;\n    background-color:#eee;\n    box-shadow: 0 .1em .3em .03em rgba(0,0,0,0.3);\n  }\n']);

var ListItems = exports.ListItems = _styledComponents2.default.ul(_templateObject);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/fernandocasaliba/GitHub/todoApp/pages/styled/list.styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/fernandocasaliba/GitHub/todoApp/pages/styled/list.styles.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/styled/list.styles")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(543);


/***/ })

},[559]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL3N0eWxlZC9nZW5lcmFsLnN0eWxlcy5qcz9hMWQyMTM3Iiwid2VicGFjazovLy8uL3BhZ2VzP2ExZDIxMzciLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9MaXN0LmpzP2ExZDIxMzciLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9TZWFyY2guanM/YTFkMjEzNyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zdHlsZWQvZ2xvYmFsLnN0eWxlcy5qcz83MTFjY2E0Iiwid2VicGFjazovLy8uL3BhZ2VzL3N0eWxlZC9saXN0LnN0eWxlcy5qcz83MTFjY2E0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIG1heC13aWR0aDoxMjAwcHg7XG4gIHBvc2l0aW9uOnJlbGFpdHZlO1xuICBkaXNwbGF5OmZsZXg7XG4gIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgYWxpZ24tc2VsZjpmbGV4LXN0YXJ0O1xuICBtYXJnaW46YXV0bztcbiAgcGFkZGluZzoxZW07XG5gO1xuXG5leHBvcnQgY29uc3QgU2VhcmNoQm94ID0gc3R5bGVkLmZvcm1gXG4gIHdpZHRoOjEwMCU7XG4gIGRpc3BsYXk6ZmxleDtcbiAgZmxleC1kaXJlY3Rpb246cm93O1xuICBmbGV4LXdyYXA6d3JhcDtcbiAgd2lkdGg6MTAwJTtcblxuICBpbnB1dCB7XG4gICAgZmxleC1ncm93OjE7XG4gICAgaGVpZ2h0OjUwcHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6M3B4O1xuICAgIGZvbnQtc2l6ZToxZW07XG4gICAgcGFkZGluZzouN2VtO1xuICAgIG91dGxpbmU6bm9uZTtcbiAgICBtYXJnaW4tcmlnaHQ6LjVlbTtcblxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOm5vbmU7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTmV3Q2FyZCA9IHN0eWxlZC5hcnRpY2xlYFxuICB3aWR0aDoxMDAlO1xuICBwYWRkaW5nOjFlbTtcbiAgZm9udC1zaXplOjJlbTtcbiAgY29sb3I6YmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6I2RkZDtcbiAgYm94LXNoYWRvdzogMCAuMWVtIC4zZW0gLjAzZW0gcmdiYSgwLDAsMCwwLjMpO1xuICBtYXJnaW46MWVtIDA7XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5wcmltYXJ5ID8gJyM0MTcxZTInIDogJ3JlZCd9O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1pbi13aWR0aDoyMDBweDtcbiAgY29sb3I6d2hpdGU7XG4gIGZvbnQtc2l6ZToxLjFlbTtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6NTAwO1xuICBsZXR0ZXItc3BhY2luZzowLjE1ZW07XG4gIGJvcmRlcjowO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3gtc2hhZG93OiAwIC4xZW0gLjFlbSAuMDNlbSByZ2JhKDAsMCwwLDAuMyk7XG5gO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvc3R5bGVkL2dlbmVyYWwuc3R5bGVzLmpzIiwiaW1wb3J0IFNlYXJjaCBmcm9tICcuL2NvbXBvbmVudHMvU2VhcmNoJztcbmltcG9ydCBMaXN0IGZyb20gJy4vY29tcG9uZW50cy9MaXN0JztcblxuLy8gc3R5bGVzXG5pbXBvcnQge2luamVjdEdsb2JhbH0gZnJvbSAnLi9zdHlsZWQvZ2xvYmFsLnN0eWxlcyc7XG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAnLi9zdHlsZWQvZ2VuZXJhbC5zdHlsZXMnO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IChcbiAgPENvbnRhaW5lcj5cbiAgICA8U2VhcmNoIC8+XG4gICAgPExpc3QgLz5cbiAgPC9Db250YWluZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaXN0SXRlbXN9IGZyb20gJy4vLi4vc3R5bGVkL2xpc3Quc3R5bGVzJztcblxuY2xhc3MgTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGlzdEl0ZW1zPlxuICAgICAgICA8bGk+aG9sYTwvbGk+XG4gICAgICAgIDxsaT5ob2xhPC9saT5cbiAgICAgICAgPGxpPmhvbGE8L2xpPlxuICAgICAgICA8bGk+aG9sYTwvbGk+XG4gICAgICA8L0xpc3RJdGVtcz5cbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NvbXBvbmVudHMvTGlzdC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IHtTZWFyY2hCb3gsQnV0dG9uLCBOZXdDYXJkfSBmcm9tICcuLy4uL3N0eWxlZC9nZW5lcmFsLnN0eWxlcyc7XG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvLyBTZXQgaW5pdGlhbCBzdGF0ZVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAndHlwZWQnOiAndGV4dCdcbiAgICB9O1xuXG4gICAgLy8gTWFuZWphIGVsIGNhbWJpbyBkZSB0ZXh0byBkZWwgaW5wdXRcbiAgICB0aGlzLmNoYW5nZVRleHQgPSB0aGlzLmNoYW5nZVRleHQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNoYW5nZVRleHQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe3R5cGVkOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlYXJjaEJveCBvblN1Ym1pdD17dGhpcy5jaGFuZ2VUZXh0fT5cblxuICAgICAgICA8aW5wdXQgIHBsYWNlaG9sZGVyPVwiQWdyZWdhci4uLlwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlVGV4dH0gLz5cblxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIHByaW1hcnk+R3VhcmRhcjwvQnV0dG9uPlxuICAgICAgICA8YnIvPlxuXG4gICAgICAgIDxOZXdDYXJkPnt0aGlzLnN0YXRlLnR5cGVkfTwvTmV3Q2FyZD5cblxuICAgICAgPC9TZWFyY2hCb3g+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NvbXBvbmVudHMvU2VhcmNoLmpzIiwiaW1wb3J0IHsgaW5qZWN0R2xvYmFsIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbmplY3RHbG9iYWxgXG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheToyMDAsMzAwLDQwMCw2MDAmc3Vic2V0PWxhdGluLWV4dCcpO1xuXG4gICoge1xuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcbiAgfVxuXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgfVxuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3N0eWxlZC9nbG9iYWwuc3R5bGVzLmpzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBMaXN0SXRlbXMgPSBzdHlsZWQudWxgXG4gIGJvcmRlci10b3A6MXB4IHNvbGlkICNlZWU7XG4gIHdpZHRoOjEwMCU7XG4gIHBhZGRpbmc6MWVtIDA7XG4gIG1hcmdpbjowO1xuICBkaXNwbGF5OmZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOnJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gIGxpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcbiAgICBib3JkZXItcmFkaXVzOjNweDtcbiAgICB3aWR0aDpjYWxjKDEwMCUgLyAzIC0gMWVtKTtcbiAgICBwYWRkaW5nOjFlbTtcbiAgICBmb250LXNpemU6MWVtO1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIG1hcmdpbjouNWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6I2VlZTtcbiAgICBib3gtc2hhZG93OiAwIC4xZW0gLjNlbSAuMDNlbSByZ2JhKDAsMCwwLDAuMyk7XG4gIH1cbmA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9zdHlsZWQvbGlzdC5zdHlsZXMuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FBREE7QUFDQTtBQVVBO0FBQ0E7QUF1QkE7QUFDQTtBQVNBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUhBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFHQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7OztBQU9BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBOzs7QUFFQTtBQUNBOzs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUpBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFIQTtBQUNBO0FBR0E7QUFBQTtBQUNBOzs7OztBQUVBO0FBRUE7QUFBQTs7OztBQUlBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUdBO0FBREE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBRUE7QUFGQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBOzs7OztBQVFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        
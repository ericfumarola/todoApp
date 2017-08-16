
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.NewCard = exports.SearchBox = exports.Container = undefined;

var _taggedTemplateLiteral2 = __webpack_require__(571);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = __webpack_require__(585);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  max-width:900px;\n  position:relaitve;\n  display:flex;\n  align-items:flex-start;\n  flex-direction:column;\n  align-self:flex-start;\n  margin:auto;\n  padding:2em;\n'], ['\n  max-width:900px;\n  position:relaitve;\n  display:flex;\n  align-items:flex-start;\n  flex-direction:column;\n  align-self:flex-start;\n  margin:auto;\n  padding:2em;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width:100%;\n  display:flex;\n  flex-direction:row;\n  flex-wrap:wrap;\n\n  input {\n    font-family: \'Raleway\', sans-serif;\n    flex-grow:1;\n    height:50px;\n    border:1px solid #ddd;\n    border-radius:3px;\n    font-size:1em;\n    padding:.7em;\n    outline:none;\n    margin-right:.5em;\n\n    &:hover,\n    &:focus {\n      outline:none;\n    }\n  }\n'], ['\n  width:100%;\n  display:flex;\n  flex-direction:row;\n  flex-wrap:wrap;\n\n  input {\n    font-family: \'Raleway\', sans-serif;\n    flex-grow:1;\n    height:50px;\n    border:1px solid #ddd;\n    border-radius:3px;\n    font-size:1em;\n    padding:.7em;\n    outline:none;\n    margin-right:.5em;\n\n    &:hover,\n    &:focus {\n      outline:none;\n    }\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  width:100%;\n  min-height:100px;\n  border-radius:4px;\n  padding:1em;\n  font-size:2em;\n  color:black;\n  background-color:#fcffd4;\n  box-shadow: 0 .1em .2em 0 rgba(0,0,0,0.3);\n  margin:1em 0;\n'], ['\n  width:100%;\n  min-height:100px;\n  border-radius:4px;\n  padding:1em;\n  font-size:2em;\n  color:black;\n  background-color:#fcffd4;\n  box-shadow: 0 .1em .2em 0 rgba(0,0,0,0.3);\n  margin:1em 0;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: ', ';\n  border-radius: 4px;\n  min-width:200px;\n  color:white;\n  font-size:1.1em;\n  font-family: \'Raleway\', sans-serif;\n  font-weight:500;\n  letter-spacing:0.15em;\n  border:0;\n  text-transform: uppercase;\n  outline:none;\n  box-shadow: 0 .1em .1em .03em rgba(0,0,0,0.3);\n  transition:all 350ms linear;\n\n  &:hover {\n    background-color: ', ';\n  }\n'], ['\n  background-color: ', ';\n  border-radius: 4px;\n  min-width:200px;\n  color:white;\n  font-size:1.1em;\n  font-family: \'Raleway\', sans-serif;\n  font-weight:500;\n  letter-spacing:0.15em;\n  border:0;\n  text-transform: uppercase;\n  outline:none;\n  box-shadow: 0 .1em .1em .03em rgba(0,0,0,0.3);\n  transition:all 350ms linear;\n\n  &:hover {\n    background-color: ', ';\n  }\n']);

var Container = exports.Container = _styledComponents2.default.section(_templateObject);

var SearchBox = exports.SearchBox = _styledComponents2.default.form(_templateObject2);

var NewCard = exports.NewCard = _styledComponents2.default.article(_templateObject3);

var Button = exports.Button = _styledComponents2.default.button(_templateObject4, function (props) {
  return props.primary ? '#4171e2' : 'red';
}, function (props) {
  return props.primary ? '#e24141' : '#4171e2';
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

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Home = __webpack_require__(704);

var _Home2 = _interopRequireDefault(_Home);

var _global = __webpack_require__(706);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fernandocasaliba/GitHub/todoApp/pages/index.js?entry';

// styles


var Index = function Index() {
  return _react2.default.createElement(_Home2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  });
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

/***/ 703:
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

var _general = __webpack_require__(624);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fernandocasaliba/GitHub/todoApp/pages/components/Search.js';

// Styles


var Search = function (_Component) {
  (0, _inherits3.default)(Search, _Component);

  function Search() {
    (0, _classCallCheck3.default)(this, Search);

    // Set initial state
    var _this = (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).call(this));

    _this.onChangeText = function (event) {
      event.preventDefault();

      // Asigna nuevo state
      _this.setState({ cardContent: event.target.value });
    };

    _this.onSaveCard = function (event) {
      event.preventDefault();
      var newCard = _this.state.cardContent;

      _this.props.addNote(_this.state.cardContent);

      // Resetea value e input
      _this.setState({ cardContent: '' });
    };

    _this.state = {
      'cardContent': ''
    };

    // Maneja el cambio de texto del input
    _this.onChangeText = _this.onChangeText.bind(_this);
    return _this;
  }

  // Acción de cambio de texto


  // Guardar tarjeta


  (0, _createClass3.default)(Search, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_general.SearchBox, { onSubmit: this.onSaveCard, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement('input', { placeholder: 'Agregar texto...',
        value: this.state.cardContent,
        onChange: this.onChangeText, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement(_general.Button, { primary: true,
        type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'Guardar'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), _react2.default.createElement(_general.NewCard, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
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

/***/ 704:
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

var _DbFirebase = __webpack_require__(705);

var _Search = __webpack_require__(703);

var _Search2 = _interopRequireDefault(_Search);

var _general = __webpack_require__(624);

var _list = __webpack_require__(707);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fernandocasaliba/GitHub/todoApp/pages/container/Home.js';

// styles


//
console.log(_DbFirebase.fire);

// if (!firebase.apps.length) {
//   firebase.initializeApp(DbFirebase)
// }

var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home(props) {
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));

    _this.addNote = _this.addNote.bind(_this);
    _this.removeNote = _this.removeNote.bind(_this);

    // this.app = fire;
    // this.db = this.app.database().ref().child('notes');

    _this.state = {
      notes: [{
        content: ['local'],
        id: ['1']
      }]
    };
    return _this;
  }

  (0, _createClass3.default)(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var previousNotes = this.state.notes;

      var nameRef = _DbFirebase.fire.database().ref().child('notes');

      nameRef.on('note_added', function (snap) {
        previousNotes.push({
          id: snap.key,
          content: snap.val().content
        });

        _this2.setState({
          notes: previousNotes
        });
      });
    }

    // Add Note

  }, {
    key: 'addNote',
    value: function addNote(note) {
      // this.database.push().set({content:note})
      // const previousNotes = this.state.notes;
      //
      // previousNotes.push({
      //   id : previousNotes.length + 1,
      //   content: note
      // });
      //
      // this.setState({
      //   notes : previousNotes
      // })

      this.database.push().set({ content: note });
    }

    // Remove Note

  }, {
    key: 'removeNote',
    value: function removeNote(id) {
      this.setState({
        notes: this.state.notes.filter(function (el) {
          return id !== el.id;
        })
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_general.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(_Search2.default, { addNote: this.addNote, __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), _react2.default.createElement(_list.ListItems, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, this.state.notes.map(function (note) {
        return _react2.default.createElement('li', { id: note.id, key: note.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }, _react2.default.createElement('aside', { onClick: function onClick() {
            return _this3.removeNote(note.id);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }), note.content);
      })));
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/fernandocasaliba/GitHub/todoApp/pages/container/Home.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/fernandocasaliba/GitHub/todoApp/pages/container/Home.js"); } } })();
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
    })(module.exports.default || module.exports, "/container/Home")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: 'import' and 'export' may only appear at the top level (14:2)\n\n\u001b[0m \u001b[90m 12 | \u001b[39m\u001b[36mif\u001b[39m (\u001b[33m!\u001b[39mfirebase\u001b[33m.\u001b[39mapps\u001b[33m.\u001b[39mlength) {\n \u001b[90m 13 | \u001b[39m  \u001b[36mconst\u001b[39m fire \u001b[33m=\u001b[39m firebase\u001b[33m.\u001b[39minitializeApp(config)\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 14 | \u001b[39m  \u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m fire\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 15 | \u001b[39m  console\u001b[33m.\u001b[39mlog(\u001b[32m'hola'\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m 16 | \u001b[39m}\n \u001b[90m 17 | \u001b[39m\u001b[0m\n");

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

var _taggedTemplateLiteral2 = __webpack_require__(571);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = __webpack_require__(585);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  @import url(\'https://fonts.googleapis.com/css?family=Raleway:200,300,400,600&subset=latin-ext\');\n\n  * {\n    box-sizing:border-box;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    background-color:white;\n    font-family: \'Raleway\', sans-serif;\n  }\n\n  ul {\n    padding:0;\n    li {\n      list-style-type:none;\n    }\n  }\n'], ['\n  @import url(\'https://fonts.googleapis.com/css?family=Raleway:200,300,400,600&subset=latin-ext\');\n\n  * {\n    box-sizing:border-box;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    background-color:white;\n    font-family: \'Raleway\', sans-serif;\n  }\n\n  ul {\n    padding:0;\n    li {\n      list-style-type:none;\n    }\n  }\n']);

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

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItems = undefined;

var _taggedTemplateLiteral2 = __webpack_require__(571);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = __webpack_require__(585);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position:relative;\n  clear:both;\n  width:100%;\n  padding:1.7em 0;\n  margin:0;\n  border-top:1px solid #eee;\n\n  column-count: 3;\n  column-gap: 20px;\n  height: 100%;\n\n  li {\n    display:inline-block;\n    position:relative;\n    list-style-type:none;\n    width: 100%;\n    margin-bottom:15px;\n    border-radius: 4px;\n    min-height: 100px;\n    break-inside: avoid;\n    padding:1em;\n    overflow:hidden;\n    font-size:1em;\n    color:black;\n    background-color:#eee;\n    box-shadow: 0 0.1em 0.15em 0em rgba(0,0,0,0.3);\n    transition:all 150ms cubic-bezier(0.18, 0.89, 0.32, 1.28);\n\n    &:hover,\n    &:focus {\n      outline:none;\n      box-shadow: 0 0.1em 0.15em 0.01em rgba(0,0,0,0.2),\n                  0 0.2em 0.35em 0em rgba(0,0,0,0.25);\n\n      aside {\n        opacity:1;\n\n        &:before {\n           transform:rotate(45deg);\n        }\n        &:after {\n          transform:rotate(-45deg);\n        }\n      }\n    }\n\n    aside {\n      opacity:0;\n      position:absolute;\n      color:black;\n      top:10px;\n      right: 10px;\n      width:15px;\n      height:15px;\n      cursor:pointer;\n      transition-property:opacity;\n      transition-timing-function:cubic-bezier(0.18, 0.89, 0.32, 1.28);\n      transition-duration:150ms;\n      transition-delay:120ms;\n\n      &:before,\n      &:after {\n        content:\'\';\n        width:100%;\n        height:1px;\n        top:50%;\n        position:absolute;\n        background-color:black;\n        transition-property:transform;\n        transition-timing-function:cubic-bezier(0.18, 0.89, 0.32, 1.28);\n        transition-duration:250ms;\n        transition-delay:150ms;\n        transform:rotate(0);\n      }\n\n      &:before {\n        transform:rotate(0);\n      }\n      &:after {\n        transform:rotate(-90deg);\n      }\n    }\n  }\n'], ['\n  position:relative;\n  clear:both;\n  width:100%;\n  padding:1.7em 0;\n  margin:0;\n  border-top:1px solid #eee;\n\n  column-count: 3;\n  column-gap: 20px;\n  height: 100%;\n\n  li {\n    display:inline-block;\n    position:relative;\n    list-style-type:none;\n    width: 100%;\n    margin-bottom:15px;\n    border-radius: 4px;\n    min-height: 100px;\n    break-inside: avoid;\n    padding:1em;\n    overflow:hidden;\n    font-size:1em;\n    color:black;\n    background-color:#eee;\n    box-shadow: 0 0.1em 0.15em 0em rgba(0,0,0,0.3);\n    transition:all 150ms cubic-bezier(0.18, 0.89, 0.32, 1.28);\n\n    &:hover,\n    &:focus {\n      outline:none;\n      box-shadow: 0 0.1em 0.15em 0.01em rgba(0,0,0,0.2),\n                  0 0.2em 0.35em 0em rgba(0,0,0,0.25);\n\n      aside {\n        opacity:1;\n\n        &:before {\n           transform:rotate(45deg);\n        }\n        &:after {\n          transform:rotate(-45deg);\n        }\n      }\n    }\n\n    aside {\n      opacity:0;\n      position:absolute;\n      color:black;\n      top:10px;\n      right: 10px;\n      width:15px;\n      height:15px;\n      cursor:pointer;\n      transition-property:opacity;\n      transition-timing-function:cubic-bezier(0.18, 0.89, 0.32, 1.28);\n      transition-duration:150ms;\n      transition-delay:120ms;\n\n      &:before,\n      &:after {\n        content:\'\';\n        width:100%;\n        height:1px;\n        top:50%;\n        position:absolute;\n        background-color:black;\n        transition-property:transform;\n        transition-timing-function:cubic-bezier(0.18, 0.89, 0.32, 1.28);\n        transition-duration:250ms;\n        transition-delay:150ms;\n        transform:rotate(0);\n      }\n\n      &:before {\n        transform:rotate(0);\n      }\n      &:after {\n        transform:rotate(-90deg);\n      }\n    }\n  }\n']);

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

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(625);


/***/ })

},[712]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL3N0eWxlZC9nZW5lcmFsLnN0eWxlcy5qcz8yOWU1YzNhIiwid2VicGFjazovLy8uL3BhZ2VzPzI5ZTVjM2EiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9TZWFyY2guanM/MjllNWMzYSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWluZXIvSG9tZS5qcz8yOWU1YzNhIiwid2VicGFjazovLy8uL3BhZ2VzL3N0eWxlZC9nbG9iYWwuc3R5bGVzLmpzPzI5ZTVjM2EiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc3R5bGVkL2xpc3Quc3R5bGVzLmpzPzI5ZTVjM2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgbWF4LXdpZHRoOjkwMHB4O1xuICBwb3NpdGlvbjpyZWxhaXR2ZTtcbiAgZGlzcGxheTpmbGV4O1xuICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gIGFsaWduLXNlbGY6ZmxleC1zdGFydDtcbiAgbWFyZ2luOmF1dG87XG4gIHBhZGRpbmc6MmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IFNlYXJjaEJveCA9IHN0eWxlZC5mb3JtYFxuICB3aWR0aDoxMDAlO1xuICBkaXNwbGF5OmZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOnJvdztcbiAgZmxleC13cmFwOndyYXA7XG5cbiAgaW5wdXQge1xuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gICAgZmxleC1ncm93OjE7XG4gICAgaGVpZ2h0OjUwcHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6M3B4O1xuICAgIGZvbnQtc2l6ZToxZW07XG4gICAgcGFkZGluZzouN2VtO1xuICAgIG91dGxpbmU6bm9uZTtcbiAgICBtYXJnaW4tcmlnaHQ6LjVlbTtcblxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOm5vbmU7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTmV3Q2FyZCA9IHN0eWxlZC5hcnRpY2xlYFxuICB3aWR0aDoxMDAlO1xuICBtaW4taGVpZ2h0OjEwMHB4O1xuICBib3JkZXItcmFkaXVzOjRweDtcbiAgcGFkZGluZzoxZW07XG4gIGZvbnQtc2l6ZToyZW07XG4gIGNvbG9yOmJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNmY2ZmZDQ7XG4gIGJveC1zaGFkb3c6IDAgLjFlbSAuMmVtIDAgcmdiYSgwLDAsMCwwLjMpO1xuICBtYXJnaW46MWVtIDA7XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5wcmltYXJ5ID8gJyM0MTcxZTInIDogJ3JlZCd9O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1pbi13aWR0aDoyMDBweDtcbiAgY29sb3I6d2hpdGU7XG4gIGZvbnQtc2l6ZToxLjFlbTtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6NTAwO1xuICBsZXR0ZXItc3BhY2luZzowLjE1ZW07XG4gIGJvcmRlcjowO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBvdXRsaW5lOm5vbmU7XG4gIGJveC1zaGFkb3c6IDAgLjFlbSAuMWVtIC4wM2VtIHJnYmEoMCwwLDAsMC4zKTtcbiAgdHJhbnNpdGlvbjphbGwgMzUwbXMgbGluZWFyO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMucHJpbWFyeSA/ICcjZTI0MTQxJyA6ICcjNDE3MWUyJ307XG4gIH1cbmA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9zdHlsZWQvZ2VuZXJhbC5zdHlsZXMuanMiLCJpbXBvcnQgSG9tZSBmcm9tICcuL2NvbnRhaW5lci9Ib21lJztcblxuLy8gc3R5bGVzXG5pbXBvcnQge2luamVjdEdsb2JhbH0gZnJvbSAnLi9zdHlsZWQvZ2xvYmFsLnN0eWxlcyc7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxuICA8SG9tZSAvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuLy8gU3R5bGVzXG5pbXBvcnQge1NlYXJjaEJveCwgQnV0dG9uLCBOZXdDYXJkfSBmcm9tICcuLy4uL3N0eWxlZC9nZW5lcmFsLnN0eWxlcyc7XG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvLyBTZXQgaW5pdGlhbCBzdGF0ZVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAnY2FyZENvbnRlbnQnOiAnJ1xuICAgIH07XG5cbiAgICAvLyBNYW5lamEgZWwgY2FtYmlvIGRlIHRleHRvIGRlbCBpbnB1dFxuICAgIHRoaXMub25DaGFuZ2VUZXh0ID0gdGhpcy5vbkNoYW5nZVRleHQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIEFjY2nDs24gZGUgY2FtYmlvIGRlIHRleHRvXG4gIG9uQ2hhbmdlVGV4dCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBBc2lnbmEgbnVldm8gc3RhdGVcbiAgICB0aGlzLnNldFN0YXRlKHtjYXJkQ29udGVudDogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gIH1cblxuICAvLyBHdWFyZGFyIHRhcmpldGFcbiAgb25TYXZlQ2FyZCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IG5ld0NhcmQgPSB0aGlzLnN0YXRlLmNhcmRDb250ZW50O1xuXG4gICAgdGhpcy5wcm9wcy5hZGROb3RlKHRoaXMuc3RhdGUuY2FyZENvbnRlbnQpXG5cbiAgICAvLyBSZXNldGVhIHZhbHVlIGUgaW5wdXRcbiAgICB0aGlzLnNldFN0YXRlKHsgY2FyZENvbnRlbnQ6ICcnIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U2VhcmNoQm94IG9uU3VibWl0PXt0aGlzLm9uU2F2ZUNhcmR9PlxuXG4gICAgICAgIDxpbnB1dCAgcGxhY2Vob2xkZXI9XCJBZ3JlZ2FyIHRleHRvLi4uXCJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jYXJkQ29udGVudH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVRleHR9IC8+XG5cbiAgICAgICAgPEJ1dHRvbiBwcmltYXJ5XG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIj5HdWFyZGFyPC9CdXR0b24+XG5cbiAgICAgICAgPGJyLz5cblxuICAgICAgICA8TmV3Q2FyZD57dGhpcy5zdGF0ZS50eXBlZH08L05ld0NhcmQ+XG5cbiAgICAgIDwvU2VhcmNoQm94PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jb21wb25lbnRzL1NlYXJjaC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2ZpcmV9IGZyb20gJy4vLi4vZGF0YWJhc2UvRGJGaXJlYmFzZSc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vLi4vY29tcG9uZW50cy9TZWFyY2gnO1xuXG4vLyBzdHlsZXNcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tICcuLy4uL3N0eWxlZC9nZW5lcmFsLnN0eWxlcyc7XG5pbXBvcnQge0xpc3RJdGVtc30gZnJvbSAnLi8uLi9zdHlsZWQvbGlzdC5zdHlsZXMnO1xuXG4vL1xuY29uc29sZS5sb2coZmlyZSk7XG5cbi8vIGlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcbi8vICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChEYkZpcmViYXNlKVxuLy8gfVxuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmFkZE5vdGUgPSB0aGlzLmFkZE5vdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbW92ZU5vdGUgPSB0aGlzLnJlbW92ZU5vdGUuYmluZCh0aGlzKTtcblxuICAgIC8vIHRoaXMuYXBwID0gZmlyZTtcbiAgICAvLyB0aGlzLmRiID0gdGhpcy5hcHAuZGF0YWJhc2UoKS5yZWYoKS5jaGlsZCgnbm90ZXMnKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBub3RlcyA6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICdsb2NhbCdcbiAgICAgICAgICBdLFxuICAgICAgICAgIGlkIDogW1xuICAgICAgICAgICAgJzEnXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IHByZXZpb3VzTm90ZXMgPSB0aGlzLnN0YXRlLm5vdGVzO1xuXG4gICAgY29uc3QgbmFtZVJlZiA9IGZpcmUuZGF0YWJhc2UoKS5yZWYoKS5jaGlsZCgnbm90ZXMnKTtcblxuICAgIG5hbWVSZWYub24oJ25vdGVfYWRkZWQnLCBzbmFwID0+IHtcbiAgICAgIHByZXZpb3VzTm90ZXMucHVzaCh7XG4gICAgICAgIGlkIDogc25hcC5rZXksXG4gICAgICAgIGNvbnRlbnQ6IHNuYXAudmFsKCkuY29udGVudFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBub3RlcyA6IHByZXZpb3VzTm90ZXNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8vIEFkZCBOb3RlXG4gIGFkZE5vdGUobm90ZSkge1xuICAgIC8vIHRoaXMuZGF0YWJhc2UucHVzaCgpLnNldCh7Y29udGVudDpub3RlfSlcbiAgICAvLyBjb25zdCBwcmV2aW91c05vdGVzID0gdGhpcy5zdGF0ZS5ub3RlcztcbiAgICAvL1xuICAgIC8vIHByZXZpb3VzTm90ZXMucHVzaCh7XG4gICAgLy8gICBpZCA6IHByZXZpb3VzTm90ZXMubGVuZ3RoICsgMSxcbiAgICAvLyAgIGNvbnRlbnQ6IG5vdGVcbiAgICAvLyB9KTtcbiAgICAvL1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgbm90ZXMgOiBwcmV2aW91c05vdGVzXG4gICAgLy8gfSlcblxuICAgIHRoaXMuZGF0YWJhc2UucHVzaCgpLnNldCh7Y29udGVudDpub3RlfSlcbiAgfVxuXG4gIC8vIFJlbW92ZSBOb3RlXG4gIHJlbW92ZU5vdGUoaWQpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIFx0bm90ZXM6IHRoaXMuc3RhdGUubm90ZXMuZmlsdGVyKChlbCkgPT4gaWQgIT09IGVsLmlkKVxuICAgIH0pXG4gIH1cblxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTZWFyY2ggYWRkTm90ZT17dGhpcy5hZGROb3RlfSAvPlxuICAgICAgICA8TGlzdEl0ZW1zPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLm5vdGVzLm1hcCgobm90ZSkgPT4gPGxpIGlkPXtub3RlLmlkfSBrZXk9e25vdGUuaWR9Pjxhc2lkZSAgb25DbGljaz17KCkgPT4gdGhpcy5yZW1vdmVOb3RlKG5vdGUuaWQpfT48L2FzaWRlPntub3RlLmNvbnRlbnR9PC9saT4pfVxuICAgICAgICA8L0xpc3RJdGVtcz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY29udGFpbmVyL0hvbWUuanMiLCJpbXBvcnQgeyBpbmplY3RHbG9iYWwgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmluamVjdEdsb2JhbGBcbiAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjIwMCwzMDAsNDAwLDYwMCZzdWJzZXQ9bGF0aW4tZXh0Jyk7XG5cbiAgKiB7XG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xuICB9XG5cbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICB9XG5cbiAgdWwge1xuICAgIHBhZGRpbmc6MDtcbiAgICBsaSB7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcbiAgICB9XG4gIH1cbmA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9zdHlsZWQvZ2xvYmFsLnN0eWxlcy5qcyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgTGlzdEl0ZW1zID0gc3R5bGVkLnVsYFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgY2xlYXI6Ym90aDtcbiAgd2lkdGg6MTAwJTtcbiAgcGFkZGluZzoxLjdlbSAwO1xuICBtYXJnaW46MDtcbiAgYm9yZGVyLXRvcDoxcHggc29saWQgI2VlZTtcblxuICBjb2x1bW4tY291bnQ6IDM7XG4gIGNvbHVtbi1nYXA6IDIwcHg7XG4gIGhlaWdodDogMTAwJTtcblxuICBsaSB7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbToxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICBicmVhay1pbnNpZGU6IGF2b2lkO1xuICAgIHBhZGRpbmc6MWVtO1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICBmb250LXNpemU6MWVtO1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6I2VlZTtcbiAgICBib3gtc2hhZG93OiAwIDAuMWVtIDAuMTVlbSAwZW0gcmdiYSgwLDAsMCwwLjMpO1xuICAgIHRyYW5zaXRpb246YWxsIDE1MG1zIGN1YmljLWJlemllcigwLjE4LCAwLjg5LCAwLjMyLCAxLjI4KTtcblxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOm5vbmU7XG4gICAgICBib3gtc2hhZG93OiAwIDAuMWVtIDAuMTVlbSAwLjAxZW0gcmdiYSgwLDAsMCwwLjIpLFxuICAgICAgICAgICAgICAgICAgMCAwLjJlbSAwLjM1ZW0gMGVtIHJnYmEoMCwwLDAsMC4yNSk7XG5cbiAgICAgIGFzaWRlIHtcbiAgICAgICAgb3BhY2l0eToxO1xuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXNpZGUge1xuICAgICAgb3BhY2l0eTowO1xuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICBjb2xvcjpibGFjaztcbiAgICAgIHRvcDoxMHB4O1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICB3aWR0aDoxNXB4O1xuICAgICAgaGVpZ2h0OjE1cHg7XG4gICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eTtcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjE4LCAwLjg5LCAwLjMyLCAxLjI4KTtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246MTUwbXM7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OjEyMG1zO1xuXG4gICAgICAmOmJlZm9yZSxcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OicnO1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBoZWlnaHQ6MXB4O1xuICAgICAgICB0b3A6NTAlO1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm07XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjE4LCAwLjg5LCAwLjMyLCAxLjI4KTtcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjoyNTBtcztcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheToxNTBtcztcbiAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgwKTtcbiAgICAgIH1cblxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDApO1xuICAgICAgfVxuICAgICAgJjphZnRlciB7XG4gICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9zdHlsZWQvbGlzdC5zdHlsZXMuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FBREE7QUFDQTtBQVVBO0FBQ0E7QUF1QkE7QUFDQTtBQVdBO0FBQ0E7QUFEQTtBQWdCQTtBQWhCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBSkE7QUFBQTtBQUNBO0FBWUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQWpCQTtBQUNBO0FBb0JBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUF4QkE7QUFDQTtBQURBO0FBSUE7QUFIQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTs7Ozs7O0FBVUE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFRQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUhBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQURBOztBQUdBO0FBR0E7QUFIQTtBQUZBO0FBV0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUdBO0FBRkE7QUFHQTtBQUVBO0FBQ0E7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUZBOzs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTs7Ozs7QUFHQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlGQTtBQUNBOzs7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7Ozs7OztBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        
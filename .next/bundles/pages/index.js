
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

/***/ 702:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fernandocasaliba/GitHub/todoApp/pages/components/List.js';


var List = function (_Component) {
  (0, _inherits3.default)(List, _Component);

  function List(props) {
    (0, _classCallCheck3.default)(this, List);

    return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).call(this, props));
  }

  (0, _createClass3.default)(List, [{
    key: 'render',
    value: function render(props) {

      return _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement('aside', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), this.props.cards);
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

var _Search = __webpack_require__(703);

var _Search2 = _interopRequireDefault(_Search);

var _List = __webpack_require__(702);

var _List2 = _interopRequireDefault(_List);

var _general = __webpack_require__(624);

var _list = __webpack_require__(707);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fernandocasaliba/GitHub/todoApp/pages/container/Home.js';
// import {DbFirebase} from './../database/DbFirebase';
// import firebase from 'firebase';


// styles


//
// if (!firebase.apps.length) {
//   firebase.initializeApp(DbFirebase)
// }

var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home(props) {
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));

    _this.addNote = _this.addNote.bind(_this);

    _this.state = {
      notes: [{
        content: ['sasasa 1'],
        id: ['1']
      }]
    };
    return _this;
  }

  (0, _createClass3.default)(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // const prevNotes = this.state.notes;
      //
      // this.app = firebase.initializeApp(DbFirebase);
      // this.database.on('value', (snap) => {
      //   prevNotes.push({
      //     content : snapshot.val().content,
      //     id      : snap.key
      //   })
      //
      //   this.setState({
      //     notes:prevNotes
      //   })
      // })
    }
  }, {
    key: 'addNote',
    value: function addNote(note) {
      // this.database.push().set({content:note})
      var previousNotes = this.state.notes;
      previousNotes.push({
        id: previousNotes.length + 1,
        content: note
      });

      this.setState({
        notes: previousNotes
      });

      console.log(previousNotes);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_general.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_Search2.default, { addNote: this.addNote, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), _react2.default.createElement(_list.ListItems, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, this.state.notes.map(function (note, index) {
        return _react2.default.createElement(_List2.default, { cards: note.content, key: note.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL3N0eWxlZC9nZW5lcmFsLnN0eWxlcy5qcz9mZTNmZTMzIiwid2VicGFjazovLy8uL3BhZ2VzP2U0OTYyOWIiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9MaXN0LmpzP2U0OTYyOWIiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9TZWFyY2guanM/ZTQ5NjI5YiIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWluZXIvSG9tZS5qcz9lNDk2MjliIiwid2VicGFjazovLy8uL3BhZ2VzL3N0eWxlZC9nbG9iYWwuc3R5bGVzLmpzP2U0OTYyOWIiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc3R5bGVkL2xpc3Quc3R5bGVzLmpzP2U0OTYyOWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgbWF4LXdpZHRoOjkwMHB4O1xuICBwb3NpdGlvbjpyZWxhaXR2ZTtcbiAgZGlzcGxheTpmbGV4O1xuICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gIGFsaWduLXNlbGY6ZmxleC1zdGFydDtcbiAgbWFyZ2luOmF1dG87XG4gIHBhZGRpbmc6MmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IFNlYXJjaEJveCA9IHN0eWxlZC5mb3JtYFxuICB3aWR0aDoxMDAlO1xuICBkaXNwbGF5OmZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOnJvdztcbiAgZmxleC13cmFwOndyYXA7XG5cbiAgaW5wdXQge1xuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gICAgZmxleC1ncm93OjE7XG4gICAgaGVpZ2h0OjUwcHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6M3B4O1xuICAgIGZvbnQtc2l6ZToxZW07XG4gICAgcGFkZGluZzouN2VtO1xuICAgIG91dGxpbmU6bm9uZTtcbiAgICBtYXJnaW4tcmlnaHQ6LjVlbTtcblxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOm5vbmU7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTmV3Q2FyZCA9IHN0eWxlZC5hcnRpY2xlYFxuICB3aWR0aDoxMDAlO1xuICBtaW4taGVpZ2h0OjEwMHB4O1xuICBib3JkZXItcmFkaXVzOjRweDtcbiAgcGFkZGluZzoxZW07XG4gIGZvbnQtc2l6ZToyZW07XG4gIGNvbG9yOmJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNmY2ZmZDQ7XG4gIGJveC1zaGFkb3c6IDAgLjFlbSAuMmVtIDAgcmdiYSgwLDAsMCwwLjMpO1xuICBtYXJnaW46MWVtIDA7XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5wcmltYXJ5ID8gJyM0MTcxZTInIDogJ3JlZCd9O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1pbi13aWR0aDoyMDBweDtcbiAgY29sb3I6d2hpdGU7XG4gIGZvbnQtc2l6ZToxLjFlbTtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6NTAwO1xuICBsZXR0ZXItc3BhY2luZzowLjE1ZW07XG4gIGJvcmRlcjowO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBvdXRsaW5lOm5vbmU7XG4gIGJveC1zaGFkb3c6IDAgLjFlbSAuMWVtIC4wM2VtIHJnYmEoMCwwLDAsMC4zKTtcbiAgdHJhbnNpdGlvbjphbGwgMzUwbXMgbGluZWFyO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMucHJpbWFyeSA/ICcjZTI0MTQxJyA6ICcjNDE3MWUyJ307XG4gIH1cbmA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9zdHlsZWQvZ2VuZXJhbC5zdHlsZXMuanMiLCJpbXBvcnQgSG9tZSBmcm9tICcuL2NvbnRhaW5lci9Ib21lJztcblxuLy8gc3R5bGVzXG5pbXBvcnQge2luamVjdEdsb2JhbH0gZnJvbSAnLi9zdHlsZWQvZ2xvYmFsLnN0eWxlcyc7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxuICA8SG9tZSAvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIocHJvcHMpIHtcblxuICAgIHJldHVybiAoXG4gICAgICA8bGk+XG4gICAgICAgIDxhc2lkZT48L2FzaWRlPlxuICAgICAgICB7dGhpcy5wcm9wcy5jYXJkc31cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NvbXBvbmVudHMvTGlzdC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IHtTZWFyY2hCb3gsIEJ1dHRvbiwgTmV3Q2FyZH0gZnJvbSAnLi8uLi9zdHlsZWQvZ2VuZXJhbC5zdHlsZXMnO1xuXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8gU2V0IGluaXRpYWwgc3RhdGVcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgJ2NhcmRDb250ZW50JzogJydcbiAgICB9O1xuXG4gICAgLy8gTWFuZWphIGVsIGNhbWJpbyBkZSB0ZXh0byBkZWwgaW5wdXRcbiAgICB0aGlzLm9uQ2hhbmdlVGV4dCA9IHRoaXMub25DaGFuZ2VUZXh0LmJpbmQodGhpcyk7XG4gIH1cblxuICAvLyBBY2Npw7NuIGRlIGNhbWJpbyBkZSB0ZXh0b1xuICBvbkNoYW5nZVRleHQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gQXNpZ25hIG51ZXZvIHN0YXRlXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y2FyZENvbnRlbnQ6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9XG5cbiAgLy8gR3VhcmRhciB0YXJqZXRhXG4gIG9uU2F2ZUNhcmQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBuZXdDYXJkID0gdGhpcy5zdGF0ZS5jYXJkQ29udGVudDtcblxuICAgIHRoaXMucHJvcHMuYWRkTm90ZSh0aGlzLnN0YXRlLmNhcmRDb250ZW50KVxuXG4gICAgLy8gUmVzZXRlYSB2YWx1ZSBlIGlucHV0XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNhcmRDb250ZW50OiAnJyB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlYXJjaEJveCBvblN1Ym1pdD17dGhpcy5vblNhdmVDYXJkfT5cblxuICAgICAgICA8aW5wdXQgIHBsYWNlaG9sZGVyPVwiQWdyZWdhciB0ZXh0by4uLlwiXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2FyZENvbnRlbnR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VUZXh0fSAvPlxuXG4gICAgICAgIDxCdXR0b24gcHJpbWFyeVxuICAgICAgICB0eXBlPVwic3VibWl0XCI+R3VhcmRhcjwvQnV0dG9uPlxuXG4gICAgICAgIDxici8+XG5cbiAgICAgICAgPE5ld0NhcmQ+e3RoaXMuc3RhdGUudHlwZWR9PC9OZXdDYXJkPlxuXG4gICAgICA8L1NlYXJjaEJveD5cbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY29tcG9uZW50cy9TZWFyY2guanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IHtEYkZpcmViYXNlfSBmcm9tICcuLy4uL2RhdGFiYXNlL0RiRmlyZWJhc2UnO1xuLy8gaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi8uLi9jb21wb25lbnRzL1NlYXJjaCc7XG5pbXBvcnQgTGlzdCBmcm9tICcuLy4uL2NvbXBvbmVudHMvTGlzdCc7XG5cbi8vIHN0eWxlc1xuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gJy4vLi4vc3R5bGVkL2dlbmVyYWwuc3R5bGVzJztcbmltcG9ydCB7TGlzdEl0ZW1zfSBmcm9tICcuLy4uL3N0eWxlZC9saXN0LnN0eWxlcyc7XG5cbi8vXG4vLyBpZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XG4vLyAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoRGJGaXJlYmFzZSlcbi8vIH1cblxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5hZGROb3RlID0gdGhpcy5hZGROb3RlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbm90ZXMgOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgICAnc2FzYXNhIDEnXG4gICAgICAgICAgXSxcbiAgICAgICAgICBpZCA6IFtcbiAgICAgICAgICAgICcxJ1xuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAvLyBjb25zdCBwcmV2Tm90ZXMgPSB0aGlzLnN0YXRlLm5vdGVzO1xuICAgIC8vXG4gICAgLy8gdGhpcy5hcHAgPSBmaXJlYmFzZS5pbml0aWFsaXplQXBwKERiRmlyZWJhc2UpO1xuICAgIC8vIHRoaXMuZGF0YWJhc2Uub24oJ3ZhbHVlJywgKHNuYXApID0+IHtcbiAgICAvLyAgIHByZXZOb3Rlcy5wdXNoKHtcbiAgICAvLyAgICAgY29udGVudCA6IHNuYXBzaG90LnZhbCgpLmNvbnRlbnQsXG4gICAgLy8gICAgIGlkICAgICAgOiBzbmFwLmtleVxuICAgIC8vICAgfSlcbiAgICAvL1xuICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgIG5vdGVzOnByZXZOb3Rlc1xuICAgIC8vICAgfSlcbiAgICAvLyB9KVxuICB9XG5cbiAgYWRkTm90ZShub3RlKSB7XG4gICAgLy8gdGhpcy5kYXRhYmFzZS5wdXNoKCkuc2V0KHtjb250ZW50Om5vdGV9KVxuICAgIGNvbnN0IHByZXZpb3VzTm90ZXMgPSB0aGlzLnN0YXRlLm5vdGVzO1xuICAgIHByZXZpb3VzTm90ZXMucHVzaCh7XG4gICAgICBpZCA6IHByZXZpb3VzTm90ZXMubGVuZ3RoICsgMSxcbiAgICAgIGNvbnRlbnQ6IG5vdGVcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbm90ZXMgOiBwcmV2aW91c05vdGVzXG4gICAgfSlcblxuICAgIGNvbnNvbGUubG9nKHByZXZpb3VzTm90ZXMpXG5cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTZWFyY2ggYWRkTm90ZT17dGhpcy5hZGROb3RlfSAvPlxuICAgICAgICA8TGlzdEl0ZW1zPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLm5vdGVzLm1hcCgobm90ZSwgaW5kZXgpID0+IDxMaXN0IGNhcmRzPXtub3RlLmNvbnRlbnR9IGtleT17bm90ZS5pZH0vPil9XG4gICAgICAgIDwvTGlzdEl0ZW1zPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jb250YWluZXIvSG9tZS5qcyIsImltcG9ydCB7IGluamVjdEdsb2JhbCB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW5qZWN0R2xvYmFsYFxuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXk6MjAwLDMwMCw0MDAsNjAwJnN1YnNldD1sYXRpbi1leHQnKTtcblxuICAqIHtcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XG4gIH1cblxuICBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gIH1cblxuICB1bCB7XG4gICAgcGFkZGluZzowO1xuICAgIGxpIHtcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xuICAgIH1cbiAgfVxuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3N0eWxlZC9nbG9iYWwuc3R5bGVzLmpzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBMaXN0SXRlbXMgPSBzdHlsZWQudWxgXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBjbGVhcjpib3RoO1xuICB3aWR0aDoxMDAlO1xuICBwYWRkaW5nOjEuN2VtIDA7XG4gIG1hcmdpbjowO1xuICBib3JkZXItdG9wOjFweCBzb2xpZCAjZWVlO1xuXG4gIGNvbHVtbi1jb3VudDogMztcbiAgY29sdW1uLWdhcDogMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGxpIHtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOjE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIGJyZWFrLWluc2lkZTogYXZvaWQ7XG4gICAgcGFkZGluZzoxZW07XG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgIGZvbnQtc2l6ZToxZW07XG4gICAgY29sb3I6YmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZWVlO1xuICAgIGJveC1zaGFkb3c6IDAgMC4xZW0gMC4xNWVtIDBlbSByZ2JhKDAsMCwwLDAuMyk7XG4gICAgdHJhbnNpdGlvbjphbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDAuMTgsIDAuODksIDAuMzIsIDEuMjgpO1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6bm9uZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4xZW0gMC4xNWVtIDAuMDFlbSByZ2JhKDAsMCwwLDAuMiksXG4gICAgICAgICAgICAgICAgICAwIDAuMmVtIDAuMzVlbSAwZW0gcmdiYSgwLDAsMCwwLjI1KTtcblxuICAgICAgYXNpZGUge1xuICAgICAgICBvcGFjaXR5OjE7XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgfVxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc2lkZSB7XG4gICAgICBvcGFjaXR5OjA7XG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgdG9wOjEwcHg7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIHdpZHRoOjE1cHg7XG4gICAgICBoZWlnaHQ6MTVweDtcbiAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5O1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuMTgsIDAuODksIDAuMzIsIDEuMjgpO1xuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjoxNTBtcztcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6MTIwbXM7XG5cbiAgICAgICY6YmVmb3JlLFxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6Jyc7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIGhlaWdodDoxcHg7XG4gICAgICAgIHRvcDo1MCU7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybTtcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuMTgsIDAuODksIDAuMzIsIDEuMjgpO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOjI1MG1zO1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OjE1MG1zO1xuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDApO1xuICAgICAgfVxuXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMCk7XG4gICAgICB9XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3N0eWxlZC9saXN0LnN0eWxlcy5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUFEQTtBQUNBO0FBVUE7QUFDQTtBQXVCQTtBQUNBO0FBV0E7QUFDQTtBQURBO0FBZ0JBO0FBaEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7Ozs7O0FBU0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBSkE7QUFBQTtBQUNBO0FBWUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQWpCQTtBQUNBO0FBb0JBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUF4QkE7QUFDQTtBQURBO0FBSUE7QUFIQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTs7Ozs7O0FBVUE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFRQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFSQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBOztBQUdBO0FBR0E7QUFIQTtBQUZBO0FBV0E7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUpBO0FBQ0E7QUFHQTtBQUlBO0FBSEE7QUFDQTtBQUVBOzs7O0FBS0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7OztBQUdBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkE7QUFDQTs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        
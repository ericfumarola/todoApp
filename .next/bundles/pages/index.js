
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

var _global = __webpack_require__(705);

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
      _this.setState({ typed: event.target.value });
    };

    _this.onSaveCard = function (event) {
      event.preventDefault();
      var newCard = _this.state.typed;

      // Resetea value e input
      _this.setState({ typed: '' });
      _this.setState({ inputText: '' });

      console.log(newCard);
    };

    _this.state = {
      'inputText': '',
      'typed': ''
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
          lineNumber: 42
        }
      }, _react2.default.createElement('input', { placeholder: 'Agregar texto...',
        value: this.state.typed,
        onChange: this.onChangeText, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react2.default.createElement(_general.Button, { primary: true,
        type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Guardar'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), _react2.default.createElement(_general.NewCard, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
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

var _DbFirebase = __webpack_require__(712);

var _firebase = __webpack_require__(669);

var _firebase2 = _interopRequireDefault(_firebase);

var _Search = __webpack_require__(703);

var _Search2 = _interopRequireDefault(_Search);

var _List = __webpack_require__(702);

var _List2 = _interopRequireDefault(_List);

var _general = __webpack_require__(624);

var _list = __webpack_require__(706);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fernandocasaliba/GitHub/todoApp/pages/container/Home.js';

// styles


//
// if (!firebase.apps.length) {
//
// }

var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this));

    _this.app = _firebase2.default.initializeApp(_DbFirebase.DbFirebase), _this.db = _this.app.firebase.database().ref().child('notes');
    _this.state = {
      notes: [{
        content: ['saraza', 'tu vieja', 'sasas', 'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa', 'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa', 'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa'],
        id: ['saraza', 'tu vieja', 'sasas', 'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa', 'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa', 'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa']
      }, {
        content: ['saraza', 'tu vieja', 'sasas', 'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa', 'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa', 'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa'],
        id: ['saraza', 'tu vieja', 'sasas', 'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa', 'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa', 'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa']
      }]

    };

    return _this;
  }

  (0, _createClass3.default)(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var prevNotes = this.state.notes;

      this.database.on('value', function (snap) {
        prevNotes.push({
          content: snapshot.val().content,
          id: snap.key
        });

        _this2.setState({
          notes: prevNotes
        });
      });
    }
  }, {
    key: 'addNote',
    value: function addNote(note) {
      this.database.push().set({ content: note });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_general.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(_Search2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), _react2.default.createElement(_list.ListItems, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, this.state.notes.map(function (note, index) {
        return _react2.default.createElement(_List2.default, { cards: note.content, key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 90
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

/***/ 705:
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

/***/ 706:
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

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(625);


/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = exports.config = {
  apiKey: 'AIzaSyC6NlAzYNaxGhvUNy3Kgs1Bal1r4X6Tims',
  authDomain: 'reacttest-6b3a6.firebaseapp.com',
  databaseURL: 'https://reacttest-6b3a6.firebaseio.com',
  projectId: 'reacttest-6b3a6',
  storageBucket: 'reacttest-6b3a6.appspot.com',
  messagingSenderId: '1082647419812'
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/fernandocasaliba/GitHub/todoApp/pages/database/DbFirebase.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/fernandocasaliba/GitHub/todoApp/pages/database/DbFirebase.js"); } } })();
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
    })(module.exports.default || module.exports, "/database/DbFirebase")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })

},[711]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL3N0eWxlZC9nZW5lcmFsLnN0eWxlcy5qcz83ZjVlMmY4Iiwid2VicGFjazovLy8uL3BhZ2VzPzdmNWUyZjgiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9MaXN0LmpzPzdmNWUyZjgiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9TZWFyY2guanM/N2Y1ZTJmOCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWluZXIvSG9tZS5qcz83ZjVlMmY4Iiwid2VicGFjazovLy8uL3BhZ2VzL3N0eWxlZC9nbG9iYWwuc3R5bGVzLmpzPzdmNWUyZjgiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc3R5bGVkL2xpc3Quc3R5bGVzLmpzPzdmNWUyZjgiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGF0YWJhc2UvRGJGaXJlYmFzZS5qcz83ZjVlMmY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIG1heC13aWR0aDo5MDBweDtcbiAgcG9zaXRpb246cmVsYWl0dmU7XG4gIGRpc3BsYXk6ZmxleDtcbiAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICBhbGlnbi1zZWxmOmZsZXgtc3RhcnQ7XG4gIG1hcmdpbjphdXRvO1xuICBwYWRkaW5nOjJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hCb3ggPSBzdHlsZWQuZm9ybWBcbiAgd2lkdGg6MTAwJTtcbiAgZGlzcGxheTpmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjpyb3c7XG4gIGZsZXgtd3JhcDp3cmFwO1xuXG4gIGlucHV0IHtcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICAgIGZsZXgtZ3JvdzoxO1xuICAgIGhlaWdodDo1MHB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOjNweDtcbiAgICBmb250LXNpemU6MWVtO1xuICAgIHBhZGRpbmc6LjdlbTtcbiAgICBvdXRsaW5lOm5vbmU7XG4gICAgbWFyZ2luLXJpZ2h0Oi41ZW07XG5cbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTpub25lO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE5ld0NhcmQgPSBzdHlsZWQuYXJ0aWNsZWBcbiAgd2lkdGg6MTAwJTtcbiAgbWluLWhlaWdodDoxMDBweDtcbiAgYm9yZGVyLXJhZGl1czo0cHg7XG4gIHBhZGRpbmc6MWVtO1xuICBmb250LXNpemU6MmVtO1xuICBjb2xvcjpibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjojZmNmZmQ0O1xuICBib3gtc2hhZG93OiAwIC4xZW0gLjJlbSAwIHJnYmEoMCwwLDAsMC4zKTtcbiAgbWFyZ2luOjFlbSAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMucHJpbWFyeSA/ICcjNDE3MWUyJyA6ICdyZWQnfTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtaW4td2lkdGg6MjAwcHg7XG4gIGNvbG9yOndoaXRlO1xuICBmb250LXNpemU6MS4xZW07XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OjUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6MC4xNWVtO1xuICBib3JkZXI6MDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgb3V0bGluZTpub25lO1xuICBib3gtc2hhZG93OiAwIC4xZW0gLjFlbSAuMDNlbSByZ2JhKDAsMCwwLDAuMyk7XG4gIHRyYW5zaXRpb246YWxsIDM1MG1zIGxpbmVhcjtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnByaW1hcnkgPyAnI2UyNDE0MScgOiAnIzQxNzFlMid9O1xuICB9XG5gO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvc3R5bGVkL2dlbmVyYWwuc3R5bGVzLmpzIiwiaW1wb3J0IEhvbWUgZnJvbSAnLi9jb250YWluZXIvSG9tZSc7XG5cbi8vIHN0eWxlc1xuaW1wb3J0IHtpbmplY3RHbG9iYWx9IGZyb20gJy4vc3R5bGVkL2dsb2JhbC5zdHlsZXMnO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IChcbiAgPEhvbWUgLz5cbilcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKHByb3BzKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxpPlxuICAgICAgICA8YXNpZGU+PC9hc2lkZT5cbiAgICAgICAge3RoaXMucHJvcHMuY2FyZHN9XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jb21wb25lbnRzL0xpc3QuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCB7U2VhcmNoQm94LCBCdXR0b24sIE5ld0NhcmR9IGZyb20gJy4vLi4vc3R5bGVkL2dlbmVyYWwuc3R5bGVzJztcblxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIFNldCBpbml0aWFsIHN0YXRlXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICdpbnB1dFRleHQnOiAnJyxcbiAgICAgICd0eXBlZCc6ICcnXG4gICAgfTtcblxuICAgIC8vIE1hbmVqYSBlbCBjYW1iaW8gZGUgdGV4dG8gZGVsIGlucHV0XG4gICAgdGhpcy5vbkNoYW5nZVRleHQgPSB0aGlzLm9uQ2hhbmdlVGV4dC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8gQWNjacOzbiBkZSBjYW1iaW8gZGUgdGV4dG9cbiAgb25DaGFuZ2VUZXh0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIEFzaWduYSBudWV2byBzdGF0ZVxuICAgIHRoaXMuc2V0U3RhdGUoe3R5cGVkOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgfVxuXG4gIC8vIEd1YXJkYXIgdGFyamV0YVxuICBvblNhdmVDYXJkID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgbmV3Q2FyZCA9IHRoaXMuc3RhdGUudHlwZWQ7XG5cbiAgICAvLyBSZXNldGVhIHZhbHVlIGUgaW5wdXRcbiAgICB0aGlzLnNldFN0YXRlKHsgdHlwZWQ6ICcnIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFRleHQ6ICcnIH0pO1xuXG4gICAgY29uc29sZS5sb2cobmV3Q2FyZCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWFyY2hCb3ggb25TdWJtaXQ9e3RoaXMub25TYXZlQ2FyZH0+XG5cbiAgICAgICAgPGlucHV0ICBwbGFjZWhvbGRlcj1cIkFncmVnYXIgdGV4dG8uLi5cIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnR5cGVkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlVGV4dH0gLz5cblxuICAgICAgICA8QnV0dG9uIHByaW1hcnlcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCI+R3VhcmRhcjwvQnV0dG9uPlxuXG4gICAgICAgIDxici8+XG5cbiAgICAgICAgPE5ld0NhcmQ+e3RoaXMuc3RhdGUudHlwZWR9PC9OZXdDYXJkPlxuXG4gICAgICA8L1NlYXJjaEJveD5cbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY29tcG9uZW50cy9TZWFyY2guanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtEYkZpcmViYXNlfSBmcm9tICcuLy4uL2RhdGFiYXNlL0RiRmlyZWJhc2UnO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi8uLi9jb21wb25lbnRzL1NlYXJjaCc7XG5pbXBvcnQgTGlzdCBmcm9tICcuLy4uL2NvbXBvbmVudHMvTGlzdCc7XG5cbi8vIHN0eWxlc1xuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gJy4vLi4vc3R5bGVkL2dlbmVyYWwuc3R5bGVzJztcbmltcG9ydCB7TGlzdEl0ZW1zfSBmcm9tICcuLy4uL3N0eWxlZC9saXN0LnN0eWxlcyc7XG5cbi8vXG4vLyBpZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XG4vL1xuLy8gfVxuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuYXBwID0gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChEYkZpcmViYXNlKSxcbiAgICB0aGlzLmRiICA9IHRoaXMuYXBwLmZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCkuY2hpbGQoJ25vdGVzJyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5vdGVzIDogW1xuICAgICAgICB7XG4gICAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICAgJ3NhcmF6YScsXG4gICAgICAgICAgICAndHUgdmllamEnLFxuICAgICAgICAgICAgJ3Nhc2FzJyxcbiAgICAgICAgICAgICdkc2Fkc2FkIGQgYWRhIGQgYWQgYXNkcyBkIGFzIGRhIHNkYSBkIHNkIHNhZCBhc2Qgc2QgYSBkYSBkYSBkYXNkIGFzIGRhIGRhcyBkIGFkcyAgYSBzZCBzZCBhc2QgYXMgZCBhc2QgZCBhIGRhIGQgYWRzIGQgYXMgZGFkIGFzZCBhc2QgYXMgZGEgc2QgYXNkZGFzZGFzZHNkYXNkYXNkc2EnLFxuICAgICAgICAgICAgJ2RzYWRzYWQgZCBhZGEgZCBhZCBhc2RzIGQgYXMgZGEgc2RhIGQgc2Qgc2FkIGFzZCBzZCBhIGRhIGRhIGRhc2QgYXMgZGEgZGFzIGQgYWRzICBhIHNkIHNkIGFzZCBhcyBkIGFzZCBkIGEgZGEgZCBhZHMgZCBhcyBkYWQgYXNkIGFzZCBhcyBkYSBzZCBhc2RkYXNkYXNkc2Rhc2Rhc2RzYScsXG4gICAgICAgICAgICAnZHNhZHNhZCBkIGFkYSBkIGFkIGFzZHMgZCBhcyBkYSBzZGEgZCBzZCBzYWQgYXNkIHNkIGEgZGEgZGEgZGFzZCBhcyBkYSBkYXMgZCBhZHMgIGEgc2Qgc2QgYXNkIGFzIGQgYXNkIGQgYSBkYSBkIGFkcyBkIGFzIGRhZCBhc2QgYXNkIGFzIGRhIHNkIGFzZGRhc2Rhc2RzZGFzZGFzZHNhJ1xuICAgICAgICAgIF0sXG4gICAgICAgICAgaWQgOiBbXG4gICAgICAgICAgICAnc2FyYXphJyxcbiAgICAgICAgICAgICd0dSB2aWVqYScsXG4gICAgICAgICAgICAnc2FzYXMnLFxuICAgICAgICAgICAgJ2RzYWRzYWQgZCBhZGEgZCBhZCBhc2RzIGQgYXMgZGEgc2RhIGQgc2Qgc2FkIGFzZCBzZCBhIGRhIGRhIGRhc2QgYXMgZGEgZGFzIGQgYWRzICBhIHNkIHNkIGFzZCBhcyBkIGFzZCBkIGEgZGEgZCBhZHMgZCBhcyBkYWQgYXNkIGFzZCBhcyBkYSBzZCBhc2RkYXNkYXNkc2Rhc2Rhc2RzYScsXG4gICAgICAgICAgICAnZHNhZHNhZCBkIGFkYSBkIGFkIGFzZHMgZCBhcyBkYSBzZGEgZCBzZCBzYWQgYXNkIHNkIGEgZGEgZGEgZGFzZCBhcyBkYSBkYXMgZCBhZHMgIGEgc2Qgc2QgYXNkIGFzIGQgYXNkIGQgYSBkYSBkIGFkcyBkIGFzIGRhZCBhc2QgYXNkIGFzIGRhIHNkIGFzZGRhc2Rhc2RzZGFzZGFzZHNhJyxcbiAgICAgICAgICAgICdkc2Fkc2FkIGQgYWRhIGQgYWQgYXNkcyBkIGFzIGRhIHNkYSBkIHNkIHNhZCBhc2Qgc2QgYSBkYSBkYSBkYXNkIGFzIGRhIGRhcyBkIGFkcyAgYSBzZCBzZCBhc2QgYXMgZCBhc2QgZCBhIGRhIGQgYWRzIGQgYXMgZGFkIGFzZCBhc2QgYXMgZGEgc2QgYXNkZGFzZGFzZHNkYXNkYXNkc2EnXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICdzYXJhemEnLFxuICAgICAgICAgICAgJ3R1IHZpZWphJyxcbiAgICAgICAgICAgICdzYXNhcycsXG4gICAgICAgICAgICAnZHNhZHNhZCBkIGFkYSBkIGFkIGFzZHMgZCBhcyBkYSBzZGEgZCBzZCBzYWQgYXNkIHNkIGEgZGEgZGEgZGFzZCBhcyBkYSBkYXMgZCBhZHMgIGEgc2Qgc2QgYXNkIGFzIGQgYXNkIGQgYSBkYSBkIGFkcyBkIGFzIGRhZCBhc2QgYXNkIGFzIGRhIHNkIGFzZGRhc2Rhc2RzZGFzZGFzZHNhJyxcbiAgICAgICAgICAgICdkc2Fkc2FkIGQgYWRhIGQgYWQgYXNkcyBkIGFzIGRhIHNkYSBkIHNkIHNhZCBhc2Qgc2QgYSBkYSBkYSBkYXNkIGFzIGRhIGRhcyBkIGFkcyAgYSBzZCBzZCBhc2QgYXMgZCBhc2QgZCBhIGRhIGQgYWRzIGQgYXMgZGFkIGFzZCBhc2QgYXMgZGEgc2QgYXNkZGFzZGFzZHNkYXNkYXNkc2EnLFxuICAgICAgICAgICAgJ2RzYWRzYWQgZCBhZGEgZCBhZCBhc2RzIGQgYXMgZGEgc2RhIGQgc2Qgc2FkIGFzZCBzZCBhIGRhIGRhIGRhc2QgYXMgZGEgZGFzIGQgYWRzICBhIHNkIHNkIGFzZCBhcyBkIGFzZCBkIGEgZGEgZCBhZHMgZCBhcyBkYWQgYXNkIGFzZCBhcyBkYSBzZCBhc2RkYXNkYXNkc2Rhc2Rhc2RzYSdcbiAgICAgICAgICBdLFxuICAgICAgICAgIGlkIDogW1xuICAgICAgICAgICAgJ3NhcmF6YScsXG4gICAgICAgICAgICAndHUgdmllamEnLFxuICAgICAgICAgICAgJ3Nhc2FzJyxcbiAgICAgICAgICAgICdkc2Fkc2FkIGQgYWRhIGQgYWQgYXNkcyBkIGFzIGRhIHNkYSBkIHNkIHNhZCBhc2Qgc2QgYSBkYSBkYSBkYXNkIGFzIGRhIGRhcyBkIGFkcyAgYSBzZCBzZCBhc2QgYXMgZCBhc2QgZCBhIGRhIGQgYWRzIGQgYXMgZGFkIGFzZCBhc2QgYXMgZGEgc2QgYXNkZGFzZGFzZHNkYXNkYXNkc2EnLFxuICAgICAgICAgICAgJ2RzYWRzYWQgZCBhZGEgZCBhZCBhc2RzIGQgYXMgZGEgc2RhIGQgc2Qgc2FkIGFzZCBzZCBhIGRhIGRhIGRhc2QgYXMgZGEgZGFzIGQgYWRzICBhIHNkIHNkIGFzZCBhcyBkIGFzZCBkIGEgZGEgZCBhZHMgZCBhcyBkYWQgYXNkIGFzZCBhcyBkYSBzZCBhc2RkYXNkYXNkc2Rhc2Rhc2RzYScsXG4gICAgICAgICAgICAnZHNhZHNhZCBkIGFkYSBkIGFkIGFzZHMgZCBhcyBkYSBzZGEgZCBzZCBzYWQgYXNkIHNkIGEgZGEgZGEgZGFzZCBhcyBkYSBkYXMgZCBhZHMgIGEgc2Qgc2QgYXNkIGFzIGQgYXNkIGQgYSBkYSBkIGFkcyBkIGFzIGRhZCBhc2QgYXNkIGFzIGRhIHNkIGFzZGRhc2Rhc2RzZGFzZGFzZHNhJ1xuICAgICAgICAgIF0sXG4gICAgICAgIH1cbiAgICAgIF0sXG5cbiAgICB9XG5cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCBwcmV2Tm90ZXMgPSB0aGlzLnN0YXRlLm5vdGVzO1xuXG4gICAgdGhpcy5kYXRhYmFzZS5vbigndmFsdWUnLCAoc25hcCkgPT4ge1xuICAgICAgcHJldk5vdGVzLnB1c2goe1xuICAgICAgICBjb250ZW50IDogc25hcHNob3QudmFsKCkuY29udGVudCxcbiAgICAgICAgaWQgICAgICA6IHNuYXAua2V5XG4gICAgICB9KVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbm90ZXM6cHJldk5vdGVzXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhZGROb3RlKG5vdGUpIHtcbiAgICB0aGlzLmRhdGFiYXNlLnB1c2goKS5zZXQoe2NvbnRlbnQ6bm90ZX0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VhcmNoIC8+XG4gICAgICAgIDxMaXN0SXRlbXM+XG4gICAgICAgICAge3RoaXMuc3RhdGUubm90ZXMubWFwKChub3RlLCBpbmRleCkgPT4gPExpc3QgY2FyZHM9e25vdGUuY29udGVudH0ga2V5PXtpbmRleH0vPil9XG4gICAgICAgIDwvTGlzdEl0ZW1zPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jb250YWluZXIvSG9tZS5qcyIsImltcG9ydCB7IGluamVjdEdsb2JhbCB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW5qZWN0R2xvYmFsYFxuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXk6MjAwLDMwMCw0MDAsNjAwJnN1YnNldD1sYXRpbi1leHQnKTtcblxuICAqIHtcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XG4gIH1cblxuICBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gIH1cblxuICB1bCB7XG4gICAgcGFkZGluZzowO1xuICAgIGxpIHtcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xuICAgIH1cbiAgfVxuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3N0eWxlZC9nbG9iYWwuc3R5bGVzLmpzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBMaXN0SXRlbXMgPSBzdHlsZWQudWxgXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBjbGVhcjpib3RoO1xuICB3aWR0aDoxMDAlO1xuICBwYWRkaW5nOjEuN2VtIDA7XG4gIG1hcmdpbjowO1xuICBib3JkZXItdG9wOjFweCBzb2xpZCAjZWVlO1xuXG4gIGNvbHVtbi1jb3VudDogMztcbiAgY29sdW1uLWdhcDogMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGxpIHtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOjE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIGJyZWFrLWluc2lkZTogYXZvaWQ7XG4gICAgcGFkZGluZzoxZW07XG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgIGZvbnQtc2l6ZToxZW07XG4gICAgY29sb3I6YmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZWVlO1xuICAgIGJveC1zaGFkb3c6IDAgMC4xZW0gMC4xNWVtIDBlbSByZ2JhKDAsMCwwLDAuMyk7XG4gICAgdHJhbnNpdGlvbjphbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDAuMTgsIDAuODksIDAuMzIsIDEuMjgpO1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6bm9uZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4xZW0gMC4xNWVtIDAuMDFlbSByZ2JhKDAsMCwwLDAuMiksXG4gICAgICAgICAgICAgICAgICAwIDAuMmVtIDAuMzVlbSAwZW0gcmdiYSgwLDAsMCwwLjI1KTtcblxuICAgICAgYXNpZGUge1xuICAgICAgICBvcGFjaXR5OjE7XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgfVxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc2lkZSB7XG4gICAgICBvcGFjaXR5OjA7XG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgdG9wOjEwcHg7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIHdpZHRoOjE1cHg7XG4gICAgICBoZWlnaHQ6MTVweDtcbiAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5O1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuMTgsIDAuODksIDAuMzIsIDEuMjgpO1xuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjoxNTBtcztcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6MTIwbXM7XG5cbiAgICAgICY6YmVmb3JlLFxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6Jyc7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIGhlaWdodDoxcHg7XG4gICAgICAgIHRvcDo1MCU7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybTtcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuMTgsIDAuODksIDAuMzIsIDEuMjgpO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOjI1MG1zO1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OjE1MG1zO1xuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDApO1xuICAgICAgfVxuXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMCk7XG4gICAgICB9XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3N0eWxlZC9saXN0LnN0eWxlcy5qcyIsImV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGFwaUtleTogJ0FJemFTeUM2TmxBellOYXhHaHZVTnkzS2dzMUJhbDFyNFg2VGltcycsXG4gIGF1dGhEb21haW46ICdyZWFjdHRlc3QtNmIzYTYuZmlyZWJhc2VhcHAuY29tJyxcbiAgZGF0YWJhc2VVUkw6ICdodHRwczovL3JlYWN0dGVzdC02YjNhNi5maXJlYmFzZWlvLmNvbScsXG4gIHByb2plY3RJZDogJ3JlYWN0dGVzdC02YjNhNicsXG4gIHN0b3JhZ2VCdWNrZXQ6ICdyZWFjdHRlc3QtNmIzYTYuYXBwc3BvdC5jb20nLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogJzEwODI2NDc0MTk4MTInXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvZGF0YWJhc2UvRGJGaXJlYmFzZS5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUFEQTtBQUNBO0FBVUE7QUFDQTtBQXVCQTtBQUNBO0FBV0E7QUFDQTtBQURBO0FBZ0JBO0FBaEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7Ozs7O0FBU0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBSkE7QUFBQTtBQUNBO0FBYUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQWxCQTtBQUNBO0FBcUJBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTtBQUNBO0FBREE7QUFFQTtBQUdBO0FBSkE7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7Ozs7OztBQVdBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUdBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFJQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBR0E7O0FBQUE7QUFFQTtBQUZBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBUUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFIQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBRUE7O0FBR0E7QUFRQTtBQVJBO0FBa0JBO0FBUUE7QUFSQTtBQUNBO0FBckJBO0FBQ0E7QUF3Q0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBR0E7QUFGQTtBQUdBOzs7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUNBOzs7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7Ozs7OztBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUxBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        
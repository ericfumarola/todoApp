
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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  max-width:800px;\n  position:relaitve;\n  display:flex;\n  align-items:flex-start;\n  flex-direction:column;\n  align-self:flex-start;\n  margin:auto;\n  padding:2em;\n'], ['\n  max-width:800px;\n  position:relaitve;\n  display:flex;\n  align-items:flex-start;\n  flex-direction:column;\n  align-self:flex-start;\n  margin:auto;\n  padding:2em;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width:100%;\n  display:flex;\n  flex-direction:row;\n  flex-wrap:wrap; \n\n  input {\n    font-family: \'Raleway\', sans-serif;\n    flex-grow:1;\n    height:50px;\n    border:1px solid #ddd;\n    border-radius:3px;\n    font-size:1em;\n    padding:.7em;\n    outline:none;\n    margin-right:.5em;\n\n    &:hover,\n    &:focus {\n      outline:none;\n    }\n  }\n'], ['\n  width:100%;\n  display:flex;\n  flex-direction:row;\n  flex-wrap:wrap; \n\n  input {\n    font-family: \'Raleway\', sans-serif;\n    flex-grow:1;\n    height:50px;\n    border:1px solid #ddd;\n    border-radius:3px;\n    font-size:1em;\n    padding:.7em;\n    outline:none;\n    margin-right:.5em;\n\n    &:hover,\n    &:focus {\n      outline:none;\n    }\n  }\n']),
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

var _Home = __webpack_require__(703);

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
      }, this.state.cardContent));
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

var _firebase = __webpack_require__(669);

var _firebase2 = _interopRequireDefault(_firebase);

var _DbFirebase = __webpack_require__(704);

var _DbFirebase2 = _interopRequireDefault(_DbFirebase);

var _Search = __webpack_require__(702);

var _Search2 = _interopRequireDefault(_Search);

var _general = __webpack_require__(624);

var _list = __webpack_require__(706);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fernandocasaliba/GitHub/todoApp/pages/container/Home.js';

// styles


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
      notes: []
    };
    return _this;
  }

  (0, _createClass3.default)(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var previousNotes = this.state.notes;

      if (!_firebase2.default.apps.length) {
        _firebase2.default.initializeApp(_DbFirebase2.default);
      }

      var nameRef = _firebase2.default.database().ref().child('notes');

      console.log(previousNotes);

      nameRef.on('child_added', function (snapshot) {
        previousNotes.push(snapshot.val());

        var postId = previousNotes.key;

        console.log(postId);

        _this2.setState({
          notes: previousNotes
        });
      });
    }

    // Add Note

  }, {
    key: 'addNote',
    value: function addNote(note) {
      _firebase2.default.database().ref().child('notes').push().set({ content: note });
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

      var allNotes = this.state.notes.map(function (note, i) {
        return _react2.default.createElement('li', { id: i, key: i, __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, _react2.default.createElement('aside', { onClick: function onClick() {
            return _this3.removeNote(note.key);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }), note.content, ' ', note[i]);
      });

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
      }, allNotes));
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

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
// import firebase from 'firebase';

exports.default = {
  apiKey: 'AIzaSyC6NlAzYNaxGhvUNy3Kgs1Bal1r4X6Tims',
  authDomain: 'reacttest-6b3a6.firebaseapp.com',
  databaseURL: 'https://reacttest-6b3a6.firebaseio.com',
  projectId: 'reacttest-6b3a6',
  storageBucket: 'reacttest-6b3a6.appspot.com',
  messagingSenderId: '1082647419812'
};

// if (!firebase.apps.length) {
//   const fire = firebase.initializeApp(config);
// }

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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position:relative;\n  clear:both;\n  width:100%;\n  padding:1.7em 0;\n  margin:0;\n  border-top:1px solid #eee;\n\n  column-count: 3;\n  column-gap: 20px;\n  height: 100%;\n\n  li {\n    display:inline-block;\n    position:relative;\n    list-style-type:none;\n    width: 100%;\n    margin-bottom:20px;\n    border-radius: 4px;\n    min-height: 100px;\n    break-inside: avoid;\n    padding:1em;\n\n    font-size:1em;\n    color:black;\n    background-color:#eee;\n    box-shadow: 0 0.1em 0.15em 0em rgba(0,0,0,0.3);\n\n    aside {\n      position:absolute;\n      color:black;\n      top:10px;\n      right: 10px;\n      width:15px;\n      height:15px;\n      cursor:pointer;\n\n      &:before,\n      &:after {\n        content:\'\';\n        width:100%;\n        height:1px;\n        top:50%;\n        position:absolute;\n        background-color:black;\n        transition:all 300ms linear;\n        transform:rotate(45deg) translateY(-50%);\n      }\n\n      &:after {\n        transform:rotate(-45deg);\n      }\n\n      &:hover {\n        &:before {\n           transform:rotate(-45deg);\n        }\n        &:after {\n          transform:rotate(45deg);\n        }\n      }\n\n    }\n  }\n'], ['\n  position:relative;\n  clear:both;\n  width:100%;\n  padding:1.7em 0;\n  margin:0;\n  border-top:1px solid #eee;\n\n  column-count: 3;\n  column-gap: 20px;\n  height: 100%;\n\n  li {\n    display:inline-block;\n    position:relative;\n    list-style-type:none;\n    width: 100%;\n    margin-bottom:20px;\n    border-radius: 4px;\n    min-height: 100px;\n    break-inside: avoid;\n    padding:1em;\n\n    font-size:1em;\n    color:black;\n    background-color:#eee;\n    box-shadow: 0 0.1em 0.15em 0em rgba(0,0,0,0.3);\n\n    aside {\n      position:absolute;\n      color:black;\n      top:10px;\n      right: 10px;\n      width:15px;\n      height:15px;\n      cursor:pointer;\n\n      &:before,\n      &:after {\n        content:\'\';\n        width:100%;\n        height:1px;\n        top:50%;\n        position:absolute;\n        background-color:black;\n        transition:all 300ms linear;\n        transform:rotate(45deg) translateY(-50%);\n      }\n\n      &:after {\n        transform:rotate(-45deg);\n      }\n\n      &:hover {\n        &:before {\n           transform:rotate(-45deg);\n        }\n        &:after {\n          transform:rotate(45deg);\n        }\n      }\n\n    }\n  }\n']);

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


/***/ })

},[711]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL3N0eWxlZC9nZW5lcmFsLnN0eWxlcy5qcz9kMjA1ODY1Iiwid2VicGFjazovLy8uL3BhZ2VzP2QyMDU4NjUiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9TZWFyY2guanM/ZDIwNTg2NSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWluZXIvSG9tZS5qcz9kMjA1ODY1Iiwid2VicGFjazovLy8uL3BhZ2VzL2RhdGFiYXNlL0RiRmlyZWJhc2UuanM/ZDIwNTg2NSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zdHlsZWQvZ2xvYmFsLnN0eWxlcy5qcz9kMjA1ODY1Iiwid2VicGFjazovLy8uL3BhZ2VzL3N0eWxlZC9saXN0LnN0eWxlcy5qcz9kMjA1ODY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIG1heC13aWR0aDo4MDBweDtcbiAgcG9zaXRpb246cmVsYWl0dmU7XG4gIGRpc3BsYXk6ZmxleDtcbiAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICBhbGlnbi1zZWxmOmZsZXgtc3RhcnQ7XG4gIG1hcmdpbjphdXRvO1xuICBwYWRkaW5nOjJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hCb3ggPSBzdHlsZWQuZm9ybWBcbiAgd2lkdGg6MTAwJTtcbiAgZGlzcGxheTpmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjpyb3c7XG4gIGZsZXgtd3JhcDp3cmFwOyBcblxuICBpbnB1dCB7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgICBmbGV4LWdyb3c6MTtcbiAgICBoZWlnaHQ6NTBweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czozcHg7XG4gICAgZm9udC1zaXplOjFlbTtcbiAgICBwYWRkaW5nOi43ZW07XG4gICAgb3V0bGluZTpub25lO1xuICAgIG1hcmdpbi1yaWdodDouNWVtO1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6bm9uZTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBOZXdDYXJkID0gc3R5bGVkLmFydGljbGVgXG4gIHdpZHRoOjEwMCU7XG4gIG1pbi1oZWlnaHQ6MTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6NHB4O1xuICBwYWRkaW5nOjFlbTtcbiAgZm9udC1zaXplOjJlbTtcbiAgY29sb3I6YmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6I2ZjZmZkNDtcbiAgYm94LXNoYWRvdzogMCAuMWVtIC4yZW0gMCByZ2JhKDAsMCwwLDAuMyk7XG4gIG1hcmdpbjoxZW0gMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnByaW1hcnkgPyAnIzQxNzFlMicgOiAncmVkJ307XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWluLXdpZHRoOjIwMHB4O1xuICBjb2xvcjp3aGl0ZTtcbiAgZm9udC1zaXplOjEuMWVtO1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDo1MDA7XG4gIGxldHRlci1zcGFjaW5nOjAuMTVlbTtcbiAgYm9yZGVyOjA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG91dGxpbmU6bm9uZTtcbiAgYm94LXNoYWRvdzogMCAuMWVtIC4xZW0gLjAzZW0gcmdiYSgwLDAsMCwwLjMpO1xuICB0cmFuc2l0aW9uOmFsbCAzNTBtcyBsaW5lYXI7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5wcmltYXJ5ID8gJyNlMjQxNDEnIDogJyM0MTcxZTInfTtcbiAgfVxuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3N0eWxlZC9nZW5lcmFsLnN0eWxlcy5qcyIsImltcG9ydCBIb21lIGZyb20gJy4vY29udGFpbmVyL0hvbWUnO1xuXG4vLyBzdHlsZXNcbmltcG9ydCB7aW5qZWN0R2xvYmFsfSBmcm9tICcuL3N0eWxlZC9nbG9iYWwuc3R5bGVzJztcblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gIDxIb21lIC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCB7U2VhcmNoQm94LCBCdXR0b24sIE5ld0NhcmR9IGZyb20gJy4vLi4vc3R5bGVkL2dlbmVyYWwuc3R5bGVzJztcblxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIFNldCBpbml0aWFsIHN0YXRlXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICdjYXJkQ29udGVudCc6ICcnXG4gICAgfTtcblxuICAgIC8vIE1hbmVqYSBlbCBjYW1iaW8gZGUgdGV4dG8gZGVsIGlucHV0XG4gICAgdGhpcy5vbkNoYW5nZVRleHQgPSB0aGlzLm9uQ2hhbmdlVGV4dC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8gQWNjacOzbiBkZSBjYW1iaW8gZGUgdGV4dG9cbiAgb25DaGFuZ2VUZXh0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIEFzaWduYSBudWV2byBzdGF0ZVxuICAgIHRoaXMuc2V0U3RhdGUoe2NhcmRDb250ZW50OiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgfVxuXG4gIC8vIEd1YXJkYXIgdGFyamV0YVxuICBvblNhdmVDYXJkID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgbmV3Q2FyZCA9IHRoaXMuc3RhdGUuY2FyZENvbnRlbnQ7XG5cbiAgICB0aGlzLnByb3BzLmFkZE5vdGUodGhpcy5zdGF0ZS5jYXJkQ29udGVudClcblxuICAgIC8vIFJlc2V0ZWEgdmFsdWUgZSBpbnB1dFxuICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJkQ29udGVudDogJycgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWFyY2hCb3ggb25TdWJtaXQ9e3RoaXMub25TYXZlQ2FyZH0+XG5cbiAgICAgICAgPGlucHV0ICBwbGFjZWhvbGRlcj1cIkFncmVnYXIgdGV4dG8uLi5cIlxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNhcmRDb250ZW50fVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlVGV4dH0gLz5cblxuICAgICAgICA8QnV0dG9uIHByaW1hcnlcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiPkd1YXJkYXI8L0J1dHRvbj5cblxuICAgICAgICA8YnIvPlxuXG4gICAgICAgIDxOZXdDYXJkPnt0aGlzLnN0YXRlLmNhcmRDb250ZW50fTwvTmV3Q2FyZD5cblxuICAgICAgPC9TZWFyY2hCb3g+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NvbXBvbmVudHMvU2VhcmNoLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGZpcmViYXNlQXBwIGZyb20gJ2ZpcmViYXNlJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi8uLi9kYXRhYmFzZS9EYkZpcmViYXNlJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi8uLi9jb21wb25lbnRzL1NlYXJjaCc7XG5cbi8vIHN0eWxlc1xuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gJy4vLi4vc3R5bGVkL2dlbmVyYWwuc3R5bGVzJztcbmltcG9ydCB7TGlzdEl0ZW1zfSBmcm9tICcuLy4uL3N0eWxlZC9saXN0LnN0eWxlcyc7XG5cblxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5hZGROb3RlID0gdGhpcy5hZGROb3RlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVOb3RlID0gdGhpcy5yZW1vdmVOb3RlLmJpbmQodGhpcyk7XG5cbiAgICAvLyB0aGlzLmFwcCA9IGZpcmU7XG4gICAgLy8gdGhpcy5kYiA9IHRoaXMuYXBwLmRhdGFiYXNlKCkucmVmKCkuY2hpbGQoJ25vdGVzJyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbm90ZXMgOiBbXVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCBwcmV2aW91c05vdGVzID0gdGhpcy5zdGF0ZS5ub3RlcztcblxuICAgIGlmICghZmlyZWJhc2VBcHAuYXBwcy5sZW5ndGgpIHtcbiAgICAgIGZpcmViYXNlQXBwLmluaXRpYWxpemVBcHAoY29uZmlnKTtcbiAgICB9XG5cbiAgICBjb25zdCBuYW1lUmVmID0gIGZpcmViYXNlQXBwLmRhdGFiYXNlKCkucmVmKCkuY2hpbGQoJ25vdGVzJyk7XG5cblxuICAgIGNvbnNvbGUubG9nKHByZXZpb3VzTm90ZXMpO1xuXG4gICAgbmFtZVJlZi5vbignY2hpbGRfYWRkZWQnLCBzbmFwc2hvdCA9PiB7XG4gICAgICBwcmV2aW91c05vdGVzLnB1c2goc25hcHNob3QudmFsKCkpO1xuXG4gICAgICBjb25zdCBwb3N0SWQgPSBwcmV2aW91c05vdGVzLmtleTtcblxuICAgICAgY29uc29sZS5sb2cocG9zdElkKTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG5vdGVzIDogcHJldmlvdXNOb3Rlc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLy8gQWRkIE5vdGVcbiAgYWRkTm90ZShub3RlKSB7XG4gICAgZmlyZWJhc2VBcHAuZGF0YWJhc2UoKS5yZWYoKS5jaGlsZCgnbm90ZXMnKS5wdXNoKCkuc2V0KHtjb250ZW50Om5vdGV9KVxuICB9XG5cbiAgLy8gUmVtb3ZlIE5vdGVcbiAgcmVtb3ZlTm90ZShpZCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgXHRub3RlczogdGhpcy5zdGF0ZS5ub3Rlcy5maWx0ZXIoKGVsKSA9PiBpZCAhPT0gZWwuaWQpXG4gICAgfSlcbiAgfVxuXG5cbiAgcmVuZGVyICgpIHtcblxuICAgIGNvbnN0IGFsbE5vdGVzID0gdGhpcy5zdGF0ZS5ub3Rlcy5tYXAoKG5vdGUsIGkpID0+IDxsaSBpZD17aX0ga2V5PXtpfT48YXNpZGUgb25DbGljaz17KCkgPT4gdGhpcy5yZW1vdmVOb3RlKG5vdGUua2V5KX0+PC9hc2lkZT57bm90ZS5jb250ZW50fSB7bm90ZVtpXX08L2xpPilcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VhcmNoIGFkZE5vdGU9e3RoaXMuYWRkTm90ZX0gLz5cbiAgICAgICAgPExpc3RJdGVtcz5cbiAgICAgICAgICB7YWxsTm90ZXN9XG4gICAgICAgIDwvTGlzdEl0ZW1zPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jb250YWluZXIvSG9tZS5qcyIsIi8vIGltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYXBpS2V5OiAnQUl6YVN5QzZObEF6WU5heEdodlVOeTNLZ3MxQmFsMXI0WDZUaW1zJyxcbiAgYXV0aERvbWFpbjogJ3JlYWN0dGVzdC02YjNhNi5maXJlYmFzZWFwcC5jb20nLFxuICBkYXRhYmFzZVVSTDogJ2h0dHBzOi8vcmVhY3R0ZXN0LTZiM2E2LmZpcmViYXNlaW8uY29tJyxcbiAgcHJvamVjdElkOiAncmVhY3R0ZXN0LTZiM2E2JyxcbiAgc3RvcmFnZUJ1Y2tldDogJ3JlYWN0dGVzdC02YjNhNi5hcHBzcG90LmNvbScsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiAnMTA4MjY0NzQxOTgxMidcbn07XG5cbi8vIGlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcbi8vICAgY29uc3QgZmlyZSA9IGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcbi8vIH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2RhdGFiYXNlL0RiRmlyZWJhc2UuanMiLCJpbXBvcnQgeyBpbmplY3RHbG9iYWwgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmluamVjdEdsb2JhbGBcbiAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjIwMCwzMDAsNDAwLDYwMCZzdWJzZXQ9bGF0aW4tZXh0Jyk7XG5cbiAgKiB7XG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xuICB9XG5cbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICB9XG5cbiAgdWwge1xuICAgIHBhZGRpbmc6MDtcbiAgICBsaSB7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcbiAgICB9XG4gIH1cbmA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9zdHlsZWQvZ2xvYmFsLnN0eWxlcy5qcyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgTGlzdEl0ZW1zID0gc3R5bGVkLnVsYFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgY2xlYXI6Ym90aDtcbiAgd2lkdGg6MTAwJTtcbiAgcGFkZGluZzoxLjdlbSAwO1xuICBtYXJnaW46MDtcbiAgYm9yZGVyLXRvcDoxcHggc29saWQgI2VlZTtcblxuICBjb2x1bW4tY291bnQ6IDM7XG4gIGNvbHVtbi1nYXA6IDIwcHg7XG4gIGhlaWdodDogMTAwJTtcblxuICBsaSB7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbToyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICBicmVhay1pbnNpZGU6IGF2b2lkO1xuICAgIHBhZGRpbmc6MWVtO1xuXG4gICAgZm9udC1zaXplOjFlbTtcbiAgICBjb2xvcjpibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7XG4gICAgYm94LXNoYWRvdzogMCAwLjFlbSAwLjE1ZW0gMGVtIHJnYmEoMCwwLDAsMC4zKTtcblxuICAgIGFzaWRlIHtcbiAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgY29sb3I6YmxhY2s7XG4gICAgICB0b3A6MTBweDtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgd2lkdGg6MTVweDtcbiAgICAgIGhlaWdodDoxNXB4O1xuICAgICAgY3Vyc29yOnBvaW50ZXI7XG5cbiAgICAgICY6YmVmb3JlLFxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6Jyc7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIGhlaWdodDoxcHg7XG4gICAgICAgIHRvcDo1MCU7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xuICAgICAgICB0cmFuc2l0aW9uOmFsbCAzMDBtcyBsaW5lYXI7XG4gICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICB9XG5cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgfVxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICB9XG5gO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvc3R5bGVkL2xpc3Quc3R5bGVzLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQURBO0FBQ0E7QUFVQTtBQUNBO0FBdUJBO0FBQ0E7QUFXQTtBQUNBO0FBREE7QUFnQkE7QUFoQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBOzs7QUFFQTtBQUNBOzs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBOzs7QUFFQTtBQUNBOzs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUpBO0FBQUE7QUFDQTtBQVlBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFqQkE7QUFDQTtBQW9CQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBeEJBO0FBQ0E7QUFEQTtBQUlBO0FBSEE7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7Ozs7OztBQVVBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUdBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFJQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBR0E7O0FBQUE7QUFFQTtBQUZBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBUUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUhBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUZBO0FBR0E7QUFFQTtBQUNBOzs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFGQTs7OztBQUtBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7OztBQVFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        
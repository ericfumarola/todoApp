
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


// inicializa Firebase
if (!_firebase2.default.apps.length) {
  _firebase2.default.initializeApp(_DbFirebase2.default);
}

var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this));

    _this.addNote = _this.addNote.bind(_this);
    _this.removeNote = _this.removeNote.bind(_this);

    _this.database = _firebase2.default.database().ref().child('notes');

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

      // Add note
      this.database.on('child_added', function (snapshot) {
        previousNotes.push(snapshot.val());

        _this2.setState({
          notes: previousNotes
        });
      });

      // Remove Note
      this.database.on('child_removed', function (snapshot) {
        // for(var i=0; i < previousNotes.length; i++){
        //   if(previousNotes[i].key === snapshot.key){
        //     previousNotes.splice(i, 1);
        //   }
        // }
        _this2.setState({
          notes: _this2.state.notes.filter(function (el) {
            return snapshot.key !== el.key;
          })
        });

        // this.setState({
        //   notes: previousNotes
        // })

        console.log(_this2.state.notes);
      });
    }

    // Add Note

  }, {
    key: 'addNote',
    value: function addNote(note) {
      var data = this.database.push();
      var key = data.key;
      data.set({
        content: note,
        key: key
      });
    }

    // Remove Note

  }, {
    key: 'removeNote',
    value: function removeNote(noteId) {
      this.database.child(noteId).remove();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var allNotes = this.state.notes.map(function (note) {
        return _react2.default.createElement('li', { id: note.key, key: note.key, __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, _react2.default.createElement('aside', { onClick: function onClick() {
            return _this3.removeNote(note.key);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }), note.content);
      }).reverse();

      return _react2.default.createElement(_general.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_Search2.default, { addNote: this.addNote, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), _react2.default.createElement(_list.ListItems, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL3N0eWxlZC9nZW5lcmFsLnN0eWxlcy5qcz81ZjMwMjE3Iiwid2VicGFjazovLy8uL3BhZ2VzPzVmMzAyMTciLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9TZWFyY2guanM/NWYzMDIxNyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWluZXIvSG9tZS5qcz81ZjMwMjE3Iiwid2VicGFjazovLy8uL3BhZ2VzL2RhdGFiYXNlL0RiRmlyZWJhc2UuanM/NWYzMDIxNyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zdHlsZWQvZ2xvYmFsLnN0eWxlcy5qcz81ZjMwMjE3Iiwid2VicGFjazovLy8uL3BhZ2VzL3N0eWxlZC9saXN0LnN0eWxlcy5qcz81ZjMwMjE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIG1heC13aWR0aDo4MDBweDtcbiAgcG9zaXRpb246cmVsYWl0dmU7XG4gIGRpc3BsYXk6ZmxleDtcbiAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICBhbGlnbi1zZWxmOmZsZXgtc3RhcnQ7XG4gIG1hcmdpbjphdXRvO1xuICBwYWRkaW5nOjJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hCb3ggPSBzdHlsZWQuZm9ybWBcbiAgd2lkdGg6MTAwJTtcbiAgZGlzcGxheTpmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjpyb3c7XG4gIGZsZXgtd3JhcDp3cmFwOyBcblxuICBpbnB1dCB7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgICBmbGV4LWdyb3c6MTtcbiAgICBoZWlnaHQ6NTBweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czozcHg7XG4gICAgZm9udC1zaXplOjFlbTtcbiAgICBwYWRkaW5nOi43ZW07XG4gICAgb3V0bGluZTpub25lO1xuICAgIG1hcmdpbi1yaWdodDouNWVtO1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6bm9uZTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBOZXdDYXJkID0gc3R5bGVkLmFydGljbGVgXG4gIHdpZHRoOjEwMCU7XG4gIG1pbi1oZWlnaHQ6MTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6NHB4O1xuICBwYWRkaW5nOjFlbTtcbiAgZm9udC1zaXplOjJlbTtcbiAgY29sb3I6YmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6I2ZjZmZkNDtcbiAgYm94LXNoYWRvdzogMCAuMWVtIC4yZW0gMCByZ2JhKDAsMCwwLDAuMyk7XG4gIG1hcmdpbjoxZW0gMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnByaW1hcnkgPyAnIzQxNzFlMicgOiAncmVkJ307XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWluLXdpZHRoOjIwMHB4O1xuICBjb2xvcjp3aGl0ZTtcbiAgZm9udC1zaXplOjEuMWVtO1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDo1MDA7XG4gIGxldHRlci1zcGFjaW5nOjAuMTVlbTtcbiAgYm9yZGVyOjA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG91dGxpbmU6bm9uZTtcbiAgYm94LXNoYWRvdzogMCAuMWVtIC4xZW0gLjAzZW0gcmdiYSgwLDAsMCwwLjMpO1xuICB0cmFuc2l0aW9uOmFsbCAzNTBtcyBsaW5lYXI7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5wcmltYXJ5ID8gJyNlMjQxNDEnIDogJyM0MTcxZTInfTtcbiAgfVxuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3N0eWxlZC9nZW5lcmFsLnN0eWxlcy5qcyIsImltcG9ydCBIb21lIGZyb20gJy4vY29udGFpbmVyL0hvbWUnO1xuXG4vLyBzdHlsZXNcbmltcG9ydCB7aW5qZWN0R2xvYmFsfSBmcm9tICcuL3N0eWxlZC9nbG9iYWwuc3R5bGVzJztcblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gIDxIb21lIC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCB7U2VhcmNoQm94LCBCdXR0b24sIE5ld0NhcmR9IGZyb20gJy4vLi4vc3R5bGVkL2dlbmVyYWwuc3R5bGVzJztcblxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIFNldCBpbml0aWFsIHN0YXRlXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICdjYXJkQ29udGVudCc6ICcnXG4gICAgfTtcblxuICAgIC8vIE1hbmVqYSBlbCBjYW1iaW8gZGUgdGV4dG8gZGVsIGlucHV0XG4gICAgdGhpcy5vbkNoYW5nZVRleHQgPSB0aGlzLm9uQ2hhbmdlVGV4dC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8gQWNjacOzbiBkZSBjYW1iaW8gZGUgdGV4dG9cbiAgb25DaGFuZ2VUZXh0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIEFzaWduYSBudWV2byBzdGF0ZVxuICAgIHRoaXMuc2V0U3RhdGUoe2NhcmRDb250ZW50OiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgfVxuXG4gIC8vIEd1YXJkYXIgdGFyamV0YVxuICBvblNhdmVDYXJkID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgbmV3Q2FyZCA9IHRoaXMuc3RhdGUuY2FyZENvbnRlbnQ7XG5cbiAgICB0aGlzLnByb3BzLmFkZE5vdGUodGhpcy5zdGF0ZS5jYXJkQ29udGVudClcblxuICAgIC8vIFJlc2V0ZWEgdmFsdWUgZSBpbnB1dFxuICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJkQ29udGVudDogJycgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWFyY2hCb3ggb25TdWJtaXQ9e3RoaXMub25TYXZlQ2FyZH0+XG5cbiAgICAgICAgPGlucHV0ICBwbGFjZWhvbGRlcj1cIkFncmVnYXIgdGV4dG8uLi5cIlxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNhcmRDb250ZW50fVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlVGV4dH0gLz5cblxuICAgICAgICA8QnV0dG9uIHByaW1hcnlcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiPkd1YXJkYXI8L0J1dHRvbj5cblxuICAgICAgICA8YnIvPlxuXG4gICAgICAgIDxOZXdDYXJkPnt0aGlzLnN0YXRlLmNhcmRDb250ZW50fTwvTmV3Q2FyZD5cblxuICAgICAgPC9TZWFyY2hCb3g+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NvbXBvbmVudHMvU2VhcmNoLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGZpcmViYXNlQXBwIGZyb20gJ2ZpcmViYXNlJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi8uLi9kYXRhYmFzZS9EYkZpcmViYXNlJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi8uLi9jb21wb25lbnRzL1NlYXJjaCc7XG5cbi8vIHN0eWxlc1xuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gJy4vLi4vc3R5bGVkL2dlbmVyYWwuc3R5bGVzJztcbmltcG9ydCB7TGlzdEl0ZW1zfSBmcm9tICcuLy4uL3N0eWxlZC9saXN0LnN0eWxlcyc7XG5cbi8vIGluaWNpYWxpemEgRmlyZWJhc2VcbmlmICghZmlyZWJhc2VBcHAuYXBwcy5sZW5ndGgpIHtcbiAgZmlyZWJhc2VBcHAuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xufVxuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuYWRkTm90ZSA9IHRoaXMuYWRkTm90ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlTm90ZSA9IHRoaXMucmVtb3ZlTm90ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5kYXRhYmFzZSA9IGZpcmViYXNlQXBwLmRhdGFiYXNlKCkucmVmKCkuY2hpbGQoJ25vdGVzJyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbm90ZXMgOiBbXVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCBwcmV2aW91c05vdGVzID0gdGhpcy5zdGF0ZS5ub3RlcztcblxuICAgIC8vIEFkZCBub3RlXG4gICAgdGhpcy5kYXRhYmFzZS5vbignY2hpbGRfYWRkZWQnLCBzbmFwc2hvdCA9PiB7XG4gICAgICBwcmV2aW91c05vdGVzLnB1c2goc25hcHNob3QudmFsKCkpO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbm90ZXMgOiBwcmV2aW91c05vdGVzXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyBSZW1vdmUgTm90ZVxuICAgIHRoaXMuZGF0YWJhc2Uub24oJ2NoaWxkX3JlbW92ZWQnLCBzbmFwc2hvdCA9PiB7XG4gICAgICAvLyBmb3IodmFyIGk9MDsgaSA8IHByZXZpb3VzTm90ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgLy8gICBpZihwcmV2aW91c05vdGVzW2ldLmtleSA9PT0gc25hcHNob3Qua2V5KXtcbiAgICAgIC8vICAgICBwcmV2aW91c05vdGVzLnNwbGljZShpLCAxKTtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBcdG5vdGVzOiB0aGlzLnN0YXRlLm5vdGVzLmZpbHRlcigoZWwpID0+IHNuYXBzaG90LmtleSAhPT0gZWwua2V5KVxuICAgICAgfSlcblxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAvLyAgIG5vdGVzOiBwcmV2aW91c05vdGVzXG4gICAgICAvLyB9KVxuXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm5vdGVzKTtcbiAgICB9KVxuICB9XG5cbiAgLy8gQWRkIE5vdGVcbiAgYWRkTm90ZShub3RlKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YWJhc2UucHVzaCgpO1xuICAgIGNvbnN0IGtleSA9IGRhdGEua2V5O1xuICAgIGRhdGEuc2V0KHtcbiAgICAgIGNvbnRlbnQ6IG5vdGUsXG4gICAgICBrZXk6IGtleVxuICAgIH0pXG4gIH1cblxuICAvLyBSZW1vdmUgTm90ZVxuICByZW1vdmVOb3RlKG5vdGVJZCl7XG4gICAgdGhpcy5kYXRhYmFzZS5jaGlsZChub3RlSWQpLnJlbW92ZSgpO1xuICB9XG5cblxuICByZW5kZXIgKCkge1xuXG4gICAgY29uc3QgYWxsTm90ZXMgPSB0aGlzLnN0YXRlLm5vdGVzLm1hcCgobm90ZSkgPT4gPGxpIGlkPXtub3RlLmtleX0ga2V5PXtub3RlLmtleX0+PGFzaWRlIG9uQ2xpY2s9eygpID0+IHRoaXMucmVtb3ZlTm90ZShub3RlLmtleSl9PjwvYXNpZGU+e25vdGUuY29udGVudH08L2xpPikucmV2ZXJzZSgpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFNlYXJjaCBhZGROb3RlPXt0aGlzLmFkZE5vdGV9IC8+XG4gICAgICAgIDxMaXN0SXRlbXM+XG4gICAgICAgICAge2FsbE5vdGVzfVxuICAgICAgICA8L0xpc3RJdGVtcz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY29udGFpbmVyL0hvbWUuanMiLCIvLyBpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFwaUtleTogJ0FJemFTeUM2TmxBellOYXhHaHZVTnkzS2dzMUJhbDFyNFg2VGltcycsXG4gIGF1dGhEb21haW46ICdyZWFjdHRlc3QtNmIzYTYuZmlyZWJhc2VhcHAuY29tJyxcbiAgZGF0YWJhc2VVUkw6ICdodHRwczovL3JlYWN0dGVzdC02YjNhNi5maXJlYmFzZWlvLmNvbScsXG4gIHByb2plY3RJZDogJ3JlYWN0dGVzdC02YjNhNicsXG4gIHN0b3JhZ2VCdWNrZXQ6ICdyZWFjdHRlc3QtNmIzYTYuYXBwc3BvdC5jb20nLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogJzEwODI2NDc0MTk4MTInXG59O1xuXG4vLyBpZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XG4vLyAgIGNvbnN0IGZpcmUgPSBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG4vLyB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9kYXRhYmFzZS9EYkZpcmViYXNlLmpzIiwiaW1wb3J0IHsgaW5qZWN0R2xvYmFsIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbmplY3RHbG9iYWxgXG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheToyMDAsMzAwLDQwMCw2MDAmc3Vic2V0PWxhdGluLWV4dCcpO1xuXG4gICoge1xuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcbiAgfVxuXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIHVsIHtcbiAgICBwYWRkaW5nOjA7XG4gICAgbGkge1xuICAgICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XG4gICAgfVxuICB9XG5gO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvc3R5bGVkL2dsb2JhbC5zdHlsZXMuanMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IExpc3RJdGVtcyA9IHN0eWxlZC51bGBcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIGNsZWFyOmJvdGg7XG4gIHdpZHRoOjEwMCU7XG4gIHBhZGRpbmc6MS43ZW0gMDtcbiAgbWFyZ2luOjA7XG4gIGJvcmRlci10b3A6MXB4IHNvbGlkICNlZWU7XG5cbiAgY29sdW1uLWNvdW50OiAzO1xuICBjb2x1bW4tZ2FwOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgbGkge1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206MjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgICBwYWRkaW5nOjFlbTtcblxuICAgIGZvbnQtc2l6ZToxZW07XG4gICAgY29sb3I6YmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZWVlO1xuICAgIGJveC1zaGFkb3c6IDAgMC4xZW0gMC4xNWVtIDBlbSByZ2JhKDAsMCwwLDAuMyk7XG5cbiAgICBhc2lkZSB7XG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgdG9wOjEwcHg7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIHdpZHRoOjE1cHg7XG4gICAgICBoZWlnaHQ6MTVweDtcbiAgICAgIGN1cnNvcjpwb2ludGVyO1xuXG4gICAgICAmOmJlZm9yZSxcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OicnO1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBoZWlnaHQ6MXB4O1xuICAgICAgICB0b3A6NTAlO1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbiAgICAgICAgdHJhbnNpdGlvbjphbGwgMzAwbXMgbGluZWFyO1xuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgfVxuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3N0eWxlZC9saXN0LnN0eWxlcy5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUFEQTtBQUNBO0FBVUE7QUFDQTtBQXVCQTtBQUNBO0FBV0E7QUFDQTtBQURBO0FBZ0JBO0FBaEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFKQTtBQUFBO0FBQ0E7QUFZQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBakJBO0FBQ0E7QUFvQkE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQXhCQTtBQUNBO0FBREE7QUFJQTtBQUhBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBT0E7QUFDQTtBQUNBOzs7Ozs7QUFVQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFHQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBSUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUdBOztBQUFBO0FBRUE7QUFGQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBOzs7OztBQVFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFIQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBRUE7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFIQTtBQUtBO0FBQ0E7Ozs7O0FBQUE7QUFDQTs7OztBQUlBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7OztBQVFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFGQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        
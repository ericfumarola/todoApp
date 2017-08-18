webpackHotUpdate(5,{

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

  function Home(props) {
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));

    _this.addNote = _this.addNote.bind(_this);
    _this.removeNote = _this.removeNote.bind(_this);

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

      var nameRef = _firebase2.default.database().ref().child('notes');

      // Add note
      nameRef.on('child_added', function (snapshot) {
        previousNotes.push(snapshot.val());

        _this2.setState({
          notes: previousNotes
        });
      });

      // Remove Note
      nameRef.on('child_removed', function (snapshot) {
        previousNotes.push(snapshot.val());

        _this2.setState({
          notes: previousNotes
        });
      });
    }

    // Add Note

  }, {
    key: 'addNote',
    value: function addNote(note) {
      var dato = _firebase2.default.database().ref().child('notes').push();
      var key = dato.key;
      var insertar = {
        content: note,
        key: key
      };
      dato.set(insertar);
    }

    // Remove Note

  }, {
    key: 'removeNote',
    value: function removeNote(note, id) {
      var dato = _firebase2.default.database().ref().child('notes').push();
      var key = dato.key;
      console.log(key);
      var remove = {
        note: id
      };
      dato.remove(remove);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var allNotes = this.state.notes.map(function (note, i) {
        return _react2.default.createElement('li', { id: note.key, key: note.key, __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }, _react2.default.createElement('aside', { onClick: function onClick() {
            return _this3.removeNote(note.key);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }), note.content);
      });

      return _react2.default.createElement(_general.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement(_Search2.default, { addNote: this.addNote, __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), _react2.default.createElement(_list.ListItems, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4wZWZlYTdhNjYwNmNlYjkwMDhkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29udGFpbmVyL0hvbWUuanM/MTAyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgZmlyZWJhc2VBcHAgZnJvbSAnZmlyZWJhc2UnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLy4uL2RhdGFiYXNlL0RiRmlyZWJhc2UnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuLy4uL2NvbXBvbmVudHMvU2VhcmNoJztcblxuLy8gc3R5bGVzXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAnLi8uLi9zdHlsZWQvZ2VuZXJhbC5zdHlsZXMnO1xuaW1wb3J0IHtMaXN0SXRlbXN9IGZyb20gJy4vLi4vc3R5bGVkL2xpc3Quc3R5bGVzJztcblxuLy8gaW5pY2lhbGl6YSBGaXJlYmFzZVxuaWYgKCFmaXJlYmFzZUFwcC5hcHBzLmxlbmd0aCkge1xuICBmaXJlYmFzZUFwcC5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG59XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuYWRkTm90ZSA9IHRoaXMuYWRkTm90ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlTm90ZSA9IHRoaXMucmVtb3ZlTm90ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5vdGVzIDogW11cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc3QgcHJldmlvdXNOb3RlcyA9IHRoaXMuc3RhdGUubm90ZXM7XG5cbiAgICBjb25zdCBuYW1lUmVmID0gIGZpcmViYXNlQXBwLmRhdGFiYXNlKCkucmVmKCkuY2hpbGQoJ25vdGVzJyk7XG5cbiAgICAvLyBBZGQgbm90ZVxuICAgIG5hbWVSZWYub24oJ2NoaWxkX2FkZGVkJywgc25hcHNob3QgPT4ge1xuICAgICAgcHJldmlvdXNOb3Rlcy5wdXNoKHNuYXBzaG90LnZhbCgpKTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG5vdGVzIDogcHJldmlvdXNOb3Rlc1xuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8gUmVtb3ZlIE5vdGVcbiAgICBuYW1lUmVmLm9uKCdjaGlsZF9yZW1vdmVkJywgc25hcHNob3QgPT4ge1xuICAgICAgcHJldmlvdXNOb3Rlcy5wdXNoKHNuYXBzaG90LnZhbCgpKTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBcdG5vdGVzOiBwcmV2aW91c05vdGVzXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvLyBBZGQgTm90ZVxuICBhZGROb3RlKG5vdGUpIHtcbiAgICBjb25zdCBkYXRvID0gZmlyZWJhc2VBcHAuZGF0YWJhc2UoKS5yZWYoKS5jaGlsZCgnbm90ZXMnKS5wdXNoKCk7XG4gICAgY29uc3Qga2V5ID0gZGF0by5rZXk7XG4gICAgY29uc3QgaW5zZXJ0YXIgPSB7XG4gICAgICBjb250ZW50OiBub3RlLFxuICAgICAga2V5OiBrZXlcbiAgICB9XG4gICAgZGF0by5zZXQoaW5zZXJ0YXIpXG4gIH1cblxuICAvLyBSZW1vdmUgTm90ZVxuICByZW1vdmVOb3RlKG5vdGUsIGlkKXtcbiAgICBjb25zdCBkYXRvID0gZmlyZWJhc2VBcHAuZGF0YWJhc2UoKS5yZWYoKS5jaGlsZCgnbm90ZXMnKS5wdXNoKCk7XG4gICAgY29uc3Qga2V5ID0gZGF0by5rZXk7XG4gICAgY29uc29sZS5sb2coa2V5KTtcbiAgICBjb25zdCByZW1vdmUgPSB7XG4gICAgICBub3RlOiBpZFxuICAgIH1cbiAgICBkYXRvLnJlbW92ZShyZW1vdmUpXG4gIH1cblxuXG4gIHJlbmRlciAoKSB7XG5cbiAgICBjb25zdCBhbGxOb3RlcyA9IHRoaXMuc3RhdGUubm90ZXMubWFwKChub3RlLCBpKSA9PiA8bGkgaWQ9e25vdGUua2V5fSBrZXk9e25vdGUua2V5fT48YXNpZGUgb25DbGljaz17KCkgPT4gdGhpcy5yZW1vdmVOb3RlKG5vdGUua2V5KX0+PC9hc2lkZT57bm90ZS5jb250ZW50fTwvbGk+KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTZWFyY2ggYWRkTm90ZT17dGhpcy5hZGROb3RlfSAvPlxuICAgICAgICA8TGlzdEl0ZW1zPlxuICAgICAgICAgIHthbGxOb3Rlc31cbiAgICAgICAgPC9MaXN0SXRlbXM+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NvbnRhaW5lci9Ib21lLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUhBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRkE7QUFHQTtBQUVBO0FBQ0E7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBSEE7QUFHQTtBQUdBO0FBQ0E7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRkE7QUFFQTs7OztBQUlBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7OztBQVFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kYWMxMGJhNGZlNjBjMzU3ZWI4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29udGFpbmVyL0hvbWUuanM/MTAyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgZmlyZWJhc2VBcHAgZnJvbSAnZmlyZWJhc2UnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLy4uL2RhdGFiYXNlL0RiRmlyZWJhc2UnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuLy4uL2NvbXBvbmVudHMvU2VhcmNoJztcblxuLy8gc3R5bGVzXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAnLi8uLi9zdHlsZWQvZ2VuZXJhbC5zdHlsZXMnO1xuaW1wb3J0IHtMaXN0SXRlbXN9IGZyb20gJy4vLi4vc3R5bGVkL2xpc3Quc3R5bGVzJztcblxuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmFkZE5vdGUgPSB0aGlzLmFkZE5vdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbW92ZU5vdGUgPSB0aGlzLnJlbW92ZU5vdGUuYmluZCh0aGlzKTtcblxuICAgIC8vIHRoaXMuYXBwID0gZmlyZTtcbiAgICAvLyB0aGlzLmRiID0gdGhpcy5hcHAuZGF0YWJhc2UoKS5yZWYoKS5jaGlsZCgnbm90ZXMnKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBub3RlcyA6IFtdXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IHByZXZpb3VzTm90ZXMgPSB0aGlzLnN0YXRlLm5vdGVzO1xuXG4gICAgaWYgKCFmaXJlYmFzZUFwcC5hcHBzLmxlbmd0aCkge1xuICAgICAgZmlyZWJhc2VBcHAuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWVSZWYgPSAgZmlyZWJhc2VBcHAuZGF0YWJhc2UoKS5yZWYoKS5jaGlsZCgnbm90ZXMnKTtcblxuXG4gICAgY29uc29sZS5sb2cocHJldmlvdXNOb3Rlcyk7XG5cbiAgICBuYW1lUmVmLm9uKCdjaGlsZF9hZGRlZCcsIHNuYXBzaG90ID0+IHtcbiAgICAgIHByZXZpb3VzTm90ZXMucHVzaChzbmFwc2hvdC52YWwoKSk7XG5cbiAgICAgIGNvbnN0IHBvc3RJZCA9IHByZXZpb3VzTm90ZXMua2V5O1xuXG4gICAgICBjb25zb2xlLmxvZyhwb3N0SWQpO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbm90ZXMgOiBwcmV2aW91c05vdGVzXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvLyBBZGQgTm90ZVxuICBhZGROb3RlKG5vdGUpIHtcbiAgICBmaXJlYmFzZUFwcC5kYXRhYmFzZSgpLnJlZigpLmNoaWxkKCdub3RlcycpLnB1c2goKS5zZXQoe2NvbnRlbnQ6bm90ZX0pXG4gIH1cblxuICAvLyBSZW1vdmUgTm90ZVxuICByZW1vdmVOb3RlKGlkKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICBcdG5vdGVzOiB0aGlzLnN0YXRlLm5vdGVzLmZpbHRlcigoZWwpID0+IGlkICE9PSBlbC5pZClcbiAgICB9KVxuICB9XG5cblxuICByZW5kZXIgKCkge1xuXG4gICAgY29uc3QgYWxsTm90ZXMgPSB0aGlzLnN0YXRlLm5vdGVzLm1hcCgobm90ZSwgaSkgPT4gPGxpIGlkPXtpfSBrZXk9e2l9Pjxhc2lkZSBvbkNsaWNrPXsoKSA9PiB0aGlzLnJlbW92ZU5vdGUobm90ZS5rZXkpfT48L2FzaWRlPntub3RlLmNvbnRlbnR9IHtub3RlW2ldfTwvbGk+KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTZWFyY2ggYWRkTm90ZT17dGhpcy5hZGROb3RlfSAvPlxuICAgICAgICA8TGlzdEl0ZW1zPlxuICAgICAgICAgIHthbGxOb3Rlc31cbiAgICAgICAgPC9MaXN0SXRlbXM+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NvbnRhaW5lci9Ib21lLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUhBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUZBO0FBR0E7QUFFQTtBQUNBOzs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFGQTs7OztBQUtBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7OztBQVFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
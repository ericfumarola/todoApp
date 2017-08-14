webpackHotUpdate(5,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xZTYyM2Q1YWEwOGYwNzljOWM2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29udGFpbmVyL0hvbWUuanM/MTAyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtEYkZpcmViYXNlfSBmcm9tICcuLy4uL2RhdGFiYXNlL0RiRmlyZWJhc2UnO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi8uLi9jb21wb25lbnRzL1NlYXJjaCc7XG5pbXBvcnQgTGlzdCBmcm9tICcuLy4uL2NvbXBvbmVudHMvTGlzdCc7XG5cbi8vIHN0eWxlc1xuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gJy4vLi4vc3R5bGVkL2dlbmVyYWwuc3R5bGVzJztcbmltcG9ydCB7TGlzdEl0ZW1zfSBmcm9tICcuLy4uL3N0eWxlZC9saXN0LnN0eWxlcyc7XG5cbi8vXG4vLyBpZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XG4vL1xuLy8gfVxuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuYXBwID0gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChEYkZpcmViYXNlKSxcbiAgICB0aGlzLmRiICA9IHRoaXMuYXBwLmZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCkuY2hpbGQoJ25vdGVzJyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5vdGVzIDogW1xuICAgICAgICB7XG4gICAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICAgJ3NhcmF6YScsXG4gICAgICAgICAgICAndHUgdmllamEnLFxuICAgICAgICAgICAgJ3Nhc2FzJyxcbiAgICAgICAgICAgICdkc2Fkc2FkIGQgYWRhIGQgYWQgYXNkcyBkIGFzIGRhIHNkYSBkIHNkIHNhZCBhc2Qgc2QgYSBkYSBkYSBkYXNkIGFzIGRhIGRhcyBkIGFkcyAgYSBzZCBzZCBhc2QgYXMgZCBhc2QgZCBhIGRhIGQgYWRzIGQgYXMgZGFkIGFzZCBhc2QgYXMgZGEgc2QgYXNkZGFzZGFzZHNkYXNkYXNkc2EnLFxuICAgICAgICAgICAgJ2RzYWRzYWQgZCBhZGEgZCBhZCBhc2RzIGQgYXMgZGEgc2RhIGQgc2Qgc2FkIGFzZCBzZCBhIGRhIGRhIGRhc2QgYXMgZGEgZGFzIGQgYWRzICBhIHNkIHNkIGFzZCBhcyBkIGFzZCBkIGEgZGEgZCBhZHMgZCBhcyBkYWQgYXNkIGFzZCBhcyBkYSBzZCBhc2RkYXNkYXNkc2Rhc2Rhc2RzYScsXG4gICAgICAgICAgICAnZHNhZHNhZCBkIGFkYSBkIGFkIGFzZHMgZCBhcyBkYSBzZGEgZCBzZCBzYWQgYXNkIHNkIGEgZGEgZGEgZGFzZCBhcyBkYSBkYXMgZCBhZHMgIGEgc2Qgc2QgYXNkIGFzIGQgYXNkIGQgYSBkYSBkIGFkcyBkIGFzIGRhZCBhc2QgYXNkIGFzIGRhIHNkIGFzZGRhc2Rhc2RzZGFzZGFzZHNhJ1xuICAgICAgICAgIF0sXG4gICAgICAgICAgaWQgOiBbXG4gICAgICAgICAgICAnc2FyYXphJyxcbiAgICAgICAgICAgICd0dSB2aWVqYScsXG4gICAgICAgICAgICAnc2FzYXMnLFxuICAgICAgICAgICAgJ2RzYWRzYWQgZCBhZGEgZCBhZCBhc2RzIGQgYXMgZGEgc2RhIGQgc2Qgc2FkIGFzZCBzZCBhIGRhIGRhIGRhc2QgYXMgZGEgZGFzIGQgYWRzICBhIHNkIHNkIGFzZCBhcyBkIGFzZCBkIGEgZGEgZCBhZHMgZCBhcyBkYWQgYXNkIGFzZCBhcyBkYSBzZCBhc2RkYXNkYXNkc2Rhc2Rhc2RzYScsXG4gICAgICAgICAgICAnZHNhZHNhZCBkIGFkYSBkIGFkIGFzZHMgZCBhcyBkYSBzZGEgZCBzZCBzYWQgYXNkIHNkIGEgZGEgZGEgZGFzZCBhcyBkYSBkYXMgZCBhZHMgIGEgc2Qgc2QgYXNkIGFzIGQgYXNkIGQgYSBkYSBkIGFkcyBkIGFzIGRhZCBhc2QgYXNkIGFzIGRhIHNkIGFzZGRhc2Rhc2RzZGFzZGFzZHNhJyxcbiAgICAgICAgICAgICdkc2Fkc2FkIGQgYWRhIGQgYWQgYXNkcyBkIGFzIGRhIHNkYSBkIHNkIHNhZCBhc2Qgc2QgYSBkYSBkYSBkYXNkIGFzIGRhIGRhcyBkIGFkcyAgYSBzZCBzZCBhc2QgYXMgZCBhc2QgZCBhIGRhIGQgYWRzIGQgYXMgZGFkIGFzZCBhc2QgYXMgZGEgc2QgYXNkZGFzZGFzZHNkYXNkYXNkc2EnXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICdzYXJhemEnLFxuICAgICAgICAgICAgJ3R1IHZpZWphJyxcbiAgICAgICAgICAgICdzYXNhcycsXG4gICAgICAgICAgICAnZHNhZHNhZCBkIGFkYSBkIGFkIGFzZHMgZCBhcyBkYSBzZGEgZCBzZCBzYWQgYXNkIHNkIGEgZGEgZGEgZGFzZCBhcyBkYSBkYXMgZCBhZHMgIGEgc2Qgc2QgYXNkIGFzIGQgYXNkIGQgYSBkYSBkIGFkcyBkIGFzIGRhZCBhc2QgYXNkIGFzIGRhIHNkIGFzZGRhc2Rhc2RzZGFzZGFzZHNhJyxcbiAgICAgICAgICAgICdkc2Fkc2FkIGQgYWRhIGQgYWQgYXNkcyBkIGFzIGRhIHNkYSBkIHNkIHNhZCBhc2Qgc2QgYSBkYSBkYSBkYXNkIGFzIGRhIGRhcyBkIGFkcyAgYSBzZCBzZCBhc2QgYXMgZCBhc2QgZCBhIGRhIGQgYWRzIGQgYXMgZGFkIGFzZCBhc2QgYXMgZGEgc2QgYXNkZGFzZGFzZHNkYXNkYXNkc2EnLFxuICAgICAgICAgICAgJ2RzYWRzYWQgZCBhZGEgZCBhZCBhc2RzIGQgYXMgZGEgc2RhIGQgc2Qgc2FkIGFzZCBzZCBhIGRhIGRhIGRhc2QgYXMgZGEgZGFzIGQgYWRzICBhIHNkIHNkIGFzZCBhcyBkIGFzZCBkIGEgZGEgZCBhZHMgZCBhcyBkYWQgYXNkIGFzZCBhcyBkYSBzZCBhc2RkYXNkYXNkc2Rhc2Rhc2RzYSdcbiAgICAgICAgICBdLFxuICAgICAgICAgIGlkIDogW1xuICAgICAgICAgICAgJ3NhcmF6YScsXG4gICAgICAgICAgICAndHUgdmllamEnLFxuICAgICAgICAgICAgJ3Nhc2FzJyxcbiAgICAgICAgICAgICdkc2Fkc2FkIGQgYWRhIGQgYWQgYXNkcyBkIGFzIGRhIHNkYSBkIHNkIHNhZCBhc2Qgc2QgYSBkYSBkYSBkYXNkIGFzIGRhIGRhcyBkIGFkcyAgYSBzZCBzZCBhc2QgYXMgZCBhc2QgZCBhIGRhIGQgYWRzIGQgYXMgZGFkIGFzZCBhc2QgYXMgZGEgc2QgYXNkZGFzZGFzZHNkYXNkYXNkc2EnLFxuICAgICAgICAgICAgJ2RzYWRzYWQgZCBhZGEgZCBhZCBhc2RzIGQgYXMgZGEgc2RhIGQgc2Qgc2FkIGFzZCBzZCBhIGRhIGRhIGRhc2QgYXMgZGEgZGFzIGQgYWRzICBhIHNkIHNkIGFzZCBhcyBkIGFzZCBkIGEgZGEgZCBhZHMgZCBhcyBkYWQgYXNkIGFzZCBhcyBkYSBzZCBhc2RkYXNkYXNkc2Rhc2Rhc2RzYScsXG4gICAgICAgICAgICAnZHNhZHNhZCBkIGFkYSBkIGFkIGFzZHMgZCBhcyBkYSBzZGEgZCBzZCBzYWQgYXNkIHNkIGEgZGEgZGEgZGFzZCBhcyBkYSBkYXMgZCBhZHMgIGEgc2Qgc2QgYXNkIGFzIGQgYXNkIGQgYSBkYSBkIGFkcyBkIGFzIGRhZCBhc2QgYXNkIGFzIGRhIHNkIGFzZGRhc2Rhc2RzZGFzZGFzZHNhJ1xuICAgICAgICAgIF0sXG4gICAgICAgIH1cbiAgICAgIF0sXG5cbiAgICB9XG5cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCBwcmV2Tm90ZXMgPSB0aGlzLnN0YXRlLm5vdGVzO1xuXG4gICAgdGhpcy5kYXRhYmFzZS5vbigndmFsdWUnLCAoc25hcCkgPT4ge1xuICAgICAgcHJldk5vdGVzLnB1c2goe1xuICAgICAgICBjb250ZW50IDogc25hcHNob3QudmFsKCkuY29udGVudCxcbiAgICAgICAgaWQgICAgICA6IHNuYXAua2V5XG4gICAgICB9KVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbm90ZXM6cHJldk5vdGVzXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhZGROb3RlKG5vdGUpIHtcbiAgICB0aGlzLmRhdGFiYXNlLnB1c2goKS5zZXQoe2NvbnRlbnQ6bm90ZX0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VhcmNoIC8+XG4gICAgICAgIDxMaXN0SXRlbXM+XG4gICAgICAgICAge3RoaXMuc3RhdGUubm90ZXMubWFwKChub3RlLCBpbmRleCkgPT4gPExpc3QgY2FyZHM9e25vdGUuY29udGVudH0ga2V5PXtpbmRleH0vPil9XG4gICAgICAgIDwvTGlzdEl0ZW1zPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jb250YWluZXIvSG9tZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBSEE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUVBOztBQUdBO0FBUUE7QUFSQTtBQWtCQTtBQVFBO0FBUkE7QUFDQTtBQXJCQTtBQUNBO0FBd0NBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUdBO0FBRkE7QUFHQTs7OztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7OztBQUdBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
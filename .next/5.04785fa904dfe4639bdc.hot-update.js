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

var _Search = __webpack_require__(703);

var _Search2 = _interopRequireDefault(_Search);

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
    _this.removeNote = _this.removeNote.bind(_this);

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
    value: function componentWillMount() {}
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


    // Add note

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
    }
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
      var _this2 = this;

      return _react2.default.createElement(_general.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_Search2.default, { addNote: this.addNote, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), _react2.default.createElement(_list.ListItems, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, this.state.notes.map(function (note) {
        return _react2.default.createElement('li', { id: note.id, key: note.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }, _react2.default.createElement('aside', { onClick: function onClick() {
            return _this2.removeNote(note.id);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 80
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
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4wNDc4NWZhOTA0ZGZlNDYzOWJkYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29udGFpbmVyL0hvbWUuanM/MTAyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IHtEYkZpcmViYXNlfSBmcm9tICcuLy4uL2RhdGFiYXNlL0RiRmlyZWJhc2UnO1xuLy8gaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi8uLi9jb21wb25lbnRzL1NlYXJjaCc7XG5cbi8vIHN0eWxlc1xuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gJy4vLi4vc3R5bGVkL2dlbmVyYWwuc3R5bGVzJztcbmltcG9ydCB7TGlzdEl0ZW1zfSBmcm9tICcuLy4uL3N0eWxlZC9saXN0LnN0eWxlcyc7XG5cbi8vXG4vLyBpZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XG4vLyAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoRGJGaXJlYmFzZSlcbi8vIH1cblxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5hZGROb3RlID0gdGhpcy5hZGROb3RlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVOb3RlID0gdGhpcy5yZW1vdmVOb3RlLmJpbmQodGhpcyk7XG5cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBub3RlcyA6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICdzYXNhc2EgMSdcbiAgICAgICAgICBdLFxuICAgICAgICAgIGlkIDogW1xuICAgICAgICAgICAgJzEnXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIC8vIGNvbnN0IHByZXZOb3RlcyA9IHRoaXMuc3RhdGUubm90ZXM7XG4gICAgLy9cbiAgICAvLyB0aGlzLmFwcCA9IGZpcmViYXNlLmluaXRpYWxpemVBcHAoRGJGaXJlYmFzZSk7XG4gICAgLy8gdGhpcy5kYXRhYmFzZS5vbigndmFsdWUnLCAoc25hcCkgPT4ge1xuICAgIC8vICAgcHJldk5vdGVzLnB1c2goe1xuICAgIC8vICAgICBjb250ZW50IDogc25hcHNob3QudmFsKCkuY29udGVudCxcbiAgICAvLyAgICAgaWQgICAgICA6IHNuYXAua2V5XG4gICAgLy8gICB9KVxuICAgIC8vXG4gICAgLy8gICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgbm90ZXM6cHJldk5vdGVzXG4gICAgLy8gICB9KVxuICAgIC8vIH0pXG4gIH1cblxuICAvLyBBZGQgbm90ZVxuICBhZGROb3RlKG5vdGUpIHtcbiAgICAvLyB0aGlzLmRhdGFiYXNlLnB1c2goKS5zZXQoe2NvbnRlbnQ6bm90ZX0pXG4gICAgY29uc3QgcHJldmlvdXNOb3RlcyA9IHRoaXMuc3RhdGUubm90ZXM7XG5cbiAgICBwcmV2aW91c05vdGVzLnB1c2goe1xuICAgICAgaWQgOiBwcmV2aW91c05vdGVzLmxlbmd0aCArIDEsXG4gICAgICBjb250ZW50OiBub3RlXG4gICAgfSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5vdGVzIDogcHJldmlvdXNOb3Rlc1xuICAgIH0pXG4gIH1cblxuICByZW1vdmVOb3RlKGlkKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICBcdG5vdGVzOiB0aGlzLnN0YXRlLm5vdGVzLmZpbHRlcigoZWwpID0+IGlkICE9PSBlbC5pZClcbiAgICB9KVxuICB9XG5cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VhcmNoIGFkZE5vdGU9e3RoaXMuYWRkTm90ZX0gLz5cbiAgICAgICAgPExpc3RJdGVtcz5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5ub3Rlcy5tYXAoKG5vdGUpID0+IDxsaSBpZD17bm90ZS5pZH0ga2V5PXtub3RlLmlkfT48YXNpZGUgIG9uQ2xpY2s9eygpID0+IHRoaXMucmVtb3ZlTm90ZShub3RlLmlkKX0+PC9hc2lkZT57bm90ZS5jb250ZW50fTwvbGk+KX1cbiAgICAgICAgPC9MaXN0SXRlbXM+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NvbnRhaW5lci9Ib21lLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBOztBQUdBO0FBR0E7QUFIQTtBQUZBO0FBV0E7Ozs7O0FBZ0JBO0FBWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7OztBQURBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSkE7QUFDQTtBQUdBO0FBR0E7QUFGQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFGQTs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
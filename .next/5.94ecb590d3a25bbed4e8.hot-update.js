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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45NGVjYjU5MGQzYTI1YmJlZDRlOC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29udGFpbmVyL0hvbWUuanM/MTAyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgZmlyZWJhc2VBcHAgZnJvbSAnZmlyZWJhc2UnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLy4uL2RhdGFiYXNlL0RiRmlyZWJhc2UnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuLy4uL2NvbXBvbmVudHMvU2VhcmNoJztcblxuLy8gc3R5bGVzXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAnLi8uLi9zdHlsZWQvZ2VuZXJhbC5zdHlsZXMnO1xuaW1wb3J0IHtMaXN0SXRlbXN9IGZyb20gJy4vLi4vc3R5bGVkL2xpc3Quc3R5bGVzJztcblxuLy8gaW5pY2lhbGl6YSBGaXJlYmFzZVxuaWYgKCFmaXJlYmFzZUFwcC5hcHBzLmxlbmd0aCkge1xuICBmaXJlYmFzZUFwcC5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG59XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5hZGROb3RlID0gdGhpcy5hZGROb3RlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVOb3RlID0gdGhpcy5yZW1vdmVOb3RlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmRhdGFiYXNlID0gZmlyZWJhc2VBcHAuZGF0YWJhc2UoKS5yZWYoKS5jaGlsZCgnbm90ZXMnKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBub3RlcyA6IFtdXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IHByZXZpb3VzTm90ZXMgPSB0aGlzLnN0YXRlLm5vdGVzO1xuXG4gICAgLy8gQWRkIG5vdGVcbiAgICB0aGlzLmRhdGFiYXNlLm9uKCdjaGlsZF9hZGRlZCcsIHNuYXBzaG90ID0+IHtcbiAgICAgIHByZXZpb3VzTm90ZXMucHVzaChzbmFwc2hvdC52YWwoKSk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBub3RlcyA6IHByZXZpb3VzTm90ZXNcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8vIFJlbW92ZSBOb3RlXG4gICAgdGhpcy5kYXRhYmFzZS5vbignY2hpbGRfcmVtb3ZlZCcsIHNuYXBzaG90ID0+IHtcbiAgICAgIC8vIGZvcih2YXIgaT0wOyBpIDwgcHJldmlvdXNOb3Rlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAvLyAgIGlmKHByZXZpb3VzTm90ZXNbaV0ua2V5ID09PSBzbmFwc2hvdC5rZXkpe1xuICAgICAgLy8gICAgIHByZXZpb3VzTm90ZXMuc3BsaWNlKGksIDEpO1xuICAgICAgLy8gICB9XG4gICAgICAvLyB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFx0bm90ZXM6IHRoaXMuc3RhdGUubm90ZXMuZmlsdGVyKChlbCkgPT4gc25hcHNob3Qua2V5ICE9PSBlbC5rZXkpXG4gICAgICB9KVxuXG4gICAgICAvLyB0aGlzLnNldFN0YXRlKHtcbiAgICAgIC8vICAgbm90ZXM6IHByZXZpb3VzTm90ZXNcbiAgICAgIC8vIH0pXG5cbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubm90ZXMpO1xuICAgIH0pXG4gIH1cblxuICAvLyBBZGQgTm90ZVxuICBhZGROb3RlKG5vdGUpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhYmFzZS5wdXNoKCk7XG4gICAgY29uc3Qga2V5ID0gZGF0YS5rZXk7XG4gICAgZGF0YS5zZXQoe1xuICAgICAgY29udGVudDogbm90ZSxcbiAgICAgIGtleToga2V5XG4gICAgfSlcbiAgfVxuXG4gIC8vIFJlbW92ZSBOb3RlXG4gIHJlbW92ZU5vdGUobm90ZUlkKXtcbiAgICB0aGlzLmRhdGFiYXNlLmNoaWxkKG5vdGVJZCkucmVtb3ZlKCk7XG4gIH1cblxuXG4gIHJlbmRlciAoKSB7XG5cbiAgICBjb25zdCBhbGxOb3RlcyA9IHRoaXMuc3RhdGUubm90ZXMubWFwKChub3RlKSA9PiA8bGkgaWQ9e25vdGUua2V5fSBrZXk9e25vdGUua2V5fT48YXNpZGUgb25DbGljaz17KCkgPT4gdGhpcy5yZW1vdmVOb3RlKG5vdGUua2V5KX0+PC9hc2lkZT57bm90ZS5jb250ZW50fTwvbGk+KS5yZXZlcnNlKClcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VhcmNoIGFkZE5vdGU9e3RoaXMuYWRkTm90ZX0gLz5cbiAgICAgICAgPExpc3RJdGVtcz5cbiAgICAgICAgICB7YWxsTm90ZXN9XG4gICAgICAgIDwvTGlzdEl0ZW1zPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jb250YWluZXIvSG9tZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFIQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBRUE7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFIQTtBQUtBO0FBQ0E7Ozs7O0FBQUE7QUFDQTs7OztBQUlBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7OztBQVFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
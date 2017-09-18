webpackHotUpdate(5,{

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(66);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(32);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(33);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(67);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(68);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(30);

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

      var new_note = _this.state.cardContent;

      // Le pasa la nota a la funcion addNote
      _this.props.addNote(new_note);

      // Resetea value e input
      _this.setState({ cardContent: '' });
    };

    _this.state = {
      cardContent: ''
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
      }, _react2.default.createElement('input', {
        placeholder: 'Agregar texto...',
        value: this.state.cardContent,
        onChange: this.onChangeText, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react2.default.createElement(_general.Button, { primary: true, type: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
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

      var qs = __webpack_require__(106)
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/components/Search")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45NWExZWEwMWY3NDI0ZDlhN2NkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9TZWFyY2guanM/ZDNiZDc2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCB7U2VhcmNoQm94LCBCdXR0b24sIE5ld0NhcmR9IGZyb20gJy4vLi4vc3R5bGVkL2dlbmVyYWwuc3R5bGVzJztcblxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIFNldCBpbml0aWFsIHN0YXRlXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNhcmRDb250ZW50OiAnJ1xuICAgIH07XG5cbiAgICAvLyBNYW5lamEgZWwgY2FtYmlvIGRlIHRleHRvIGRlbCBpbnB1dFxuICAgIHRoaXMub25DaGFuZ2VUZXh0ID0gdGhpcy5vbkNoYW5nZVRleHQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIEFjY2nDs24gZGUgY2FtYmlvIGRlIHRleHRvXG4gIG9uQ2hhbmdlVGV4dCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBBc2lnbmEgbnVldm8gc3RhdGVcbiAgICB0aGlzLnNldFN0YXRlKHtjYXJkQ29udGVudDogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gIH1cblxuICAvLyBHdWFyZGFyIHRhcmpldGFcbiAgb25TYXZlQ2FyZCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgbGV0IG5ld19ub3RlID0gdGhpcy5zdGF0ZS5jYXJkQ29udGVudDtcblxuICAgIC8vIExlIHBhc2EgbGEgbm90YSBhIGxhIGZ1bmNpb24gYWRkTm90ZVxuICAgIHRoaXMucHJvcHMuYWRkTm90ZShuZXdfbm90ZSlcblxuICAgIC8vIFJlc2V0ZWEgdmFsdWUgZSBpbnB1dFxuICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJkQ29udGVudDogJycgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWFyY2hCb3ggb25TdWJtaXQ9e3RoaXMub25TYXZlQ2FyZH0+XG5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZ3JlZ2FyIHRleHRvLi4uXCJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jYXJkQ29udGVudH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVRleHR9IC8+XG5cbiAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IHR5cGU9XCJzdWJtaXRcIj5HdWFyZGFyPC9CdXR0b24+XG5cbiAgICAgICAgPGJyLz5cblxuICAgICAgICA8TmV3Q2FyZD57dGhpcy5zdGF0ZS5jYXJkQ29udGVudH08L05ld0NhcmQ+XG5cbiAgICAgIDwvU2VhcmNoQm94PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jb21wb25lbnRzL1NlYXJjaC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUpBO0FBQUE7QUFDQTtBQVlBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFqQkE7QUFDQTtBQW9CQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQTFCQTtBQUNBO0FBREE7QUFJQTtBQUhBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBT0E7QUFDQTtBQUNBOzs7Ozs7QUFZQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBRUE7QUFGQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBOzs7OztBQVFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
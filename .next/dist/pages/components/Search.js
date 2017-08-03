'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _general = require('./../styled/general.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fernandocasaliba/GitHub/todoApp/pages/components/Search.js';

// Styles


var Search = function (_Component) {
  (0, _inherits3.default)(Search, _Component);

  function Search() {
    (0, _classCallCheck3.default)(this, Search);

    // Set initial state
    var _this = (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).call(this));

    _this.state = {
      'typed': 'text'
    };

    // Maneja el cambio de texto del input
    _this.changeText = _this.changeText.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Search, [{
    key: 'changeText',
    value: function changeText(event) {
      event.preventDefault();
      this.setState({ typed: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_general.SearchBox, { onSubmit: this.changeText, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement('input', { placeholder: 'Agregar...',
        onChange: this.changeText, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement(_general.Button, { type: 'submit',
        primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, 'Guardar'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), _react2.default.createElement(_general.NewCard, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, this.state.typed));
    }
  }]);

  return Search;
}(_react.Component);

exports.default = Search;
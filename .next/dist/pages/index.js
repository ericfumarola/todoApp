'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Search = require('./components/Search');

var _Search2 = _interopRequireDefault(_Search);

var _List = require('./components/List');

var _List2 = _interopRequireDefault(_List);

var _global = require('./styled/global.styles');

var _general = require('./styled/general.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fernandocasaliba/GitHub/todoApp/pages/index.js?entry';

// styles


var Index = function Index() {
  return _react2.default.createElement(_general.Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_Search2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement(_List2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }));
};

exports.default = Index;
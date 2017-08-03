'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItems = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  border-top:1px solid #eee;\n  width:100%;\n  padding:1em 0;\n  margin:0;\n  display:flex;\n  flex-direction:row;\n  flex-wrap: wrap;\n\n  li {\n    list-style-type:none;\n    border-radius:3px;\n    width:calc(100% / 3 - 1em);\n    padding:1em;\n    font-size:1em;\n    color:black;\n    margin:.5em;\n    background-color:#eee;\n    box-shadow: 0 .1em .3em .03em rgba(0,0,0,0.3);\n  }\n'], ['\n  border-top:1px solid #eee;\n  width:100%;\n  padding:1em 0;\n  margin:0;\n  display:flex;\n  flex-direction:row;\n  flex-wrap: wrap;\n\n  li {\n    list-style-type:none;\n    border-radius:3px;\n    width:calc(100% / 3 - 1em);\n    padding:1em;\n    font-size:1em;\n    color:black;\n    margin:.5em;\n    background-color:#eee;\n    box-shadow: 0 .1em .3em .03em rgba(0,0,0,0.3);\n  }\n']);

var ListItems = exports.ListItems = _styledComponents2.default.ul(_templateObject);
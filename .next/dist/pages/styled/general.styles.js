'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Button = exports.NewCard = exports.SearchBox = exports.Container = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  max-width:1200px;\n  position:relaitve;\n  display:flex;\n  align-items:flex-start;\n  flex-direction:column;\n  align-self:flex-start;\n  margin:auto;\n  padding:1em;\n'], ['\n  max-width:1200px;\n  position:relaitve;\n  display:flex;\n  align-items:flex-start;\n  flex-direction:column;\n  align-self:flex-start;\n  margin:auto;\n  padding:1em;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width:100%;\n  display:flex;\n  flex-direction:row;\n  flex-wrap:wrap;\n  width:100%;\n\n  input {\n    flex-grow:1;\n    height:50px;\n    border:1px solid #ddd;\n    border-radius:3px;\n    font-size:1em;\n    padding:.7em;\n    outline:none;\n    margin-right:.5em;\n\n    &:hover,\n    &:focus {\n      outline:none;\n    }\n  }\n'], ['\n  width:100%;\n  display:flex;\n  flex-direction:row;\n  flex-wrap:wrap;\n  width:100%;\n\n  input {\n    flex-grow:1;\n    height:50px;\n    border:1px solid #ddd;\n    border-radius:3px;\n    font-size:1em;\n    padding:.7em;\n    outline:none;\n    margin-right:.5em;\n\n    &:hover,\n    &:focus {\n      outline:none;\n    }\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  width:100%;\n  padding:1em;\n  font-size:2em;\n  color:black;\n  background-color:#ddd;\n  box-shadow: 0 .1em .3em .03em rgba(0,0,0,0.3);\n  margin:1em 0;\n'], ['\n  width:100%;\n  padding:1em;\n  font-size:2em;\n  color:black;\n  background-color:#ddd;\n  box-shadow: 0 .1em .3em .03em rgba(0,0,0,0.3);\n  margin:1em 0;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: ', ';\n  border-radius: 4px;\n  min-width:200px;\n  color:white;\n  font-size:1.1em;\n  font-family: \'Raleway\', sans-serif;\n  font-weight:500;\n  letter-spacing:0.15em;\n  border:0;\n  text-transform: uppercase;\n  box-shadow: 0 .1em .1em .03em rgba(0,0,0,0.3);\n'], ['\n  background-color: ', ';\n  border-radius: 4px;\n  min-width:200px;\n  color:white;\n  font-size:1.1em;\n  font-family: \'Raleway\', sans-serif;\n  font-weight:500;\n  letter-spacing:0.15em;\n  border:0;\n  text-transform: uppercase;\n  box-shadow: 0 .1em .1em .03em rgba(0,0,0,0.3);\n']);

var Container = exports.Container = _styledComponents2.default.section(_templateObject);

var SearchBox = exports.SearchBox = _styledComponents2.default.form(_templateObject2);

var NewCard = exports.NewCard = _styledComponents2.default.article(_templateObject3);

var Button = exports.Button = _styledComponents2.default.button(_templateObject4, function (props) {
    return props.primary ? '#4171e2' : 'red';
});
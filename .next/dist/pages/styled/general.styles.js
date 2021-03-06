'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.NewCard = exports.SearchBox = exports.Container = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mediaqueries = require('./mediaqueries.styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  max-width:800px;\n  position:relaitve;\n  display:flex;\n  align-items:flex-start;\n  flex-direction:column;\n  align-self:flex-start;\n  margin:auto;\n  padding:2em;\n  ', '\n'], ['\n  max-width:800px;\n  position:relaitve;\n  display:flex;\n  align-items:flex-start;\n  flex-direction:column;\n  align-self:flex-start;\n  margin:auto;\n  padding:2em;\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    padding:1em;\n    width:100%;\n  '], ['\n    padding:1em;\n    width:100%;\n  ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  width:100%;\n  display:flex;\n  flex-direction:row;\n  flex-wrap:wrap;\n\n  input {\n    font-family: \'Raleway\', sans-serif;\n    flex-grow:1;\n    height:50px;\n    border:1px solid #ddd;\n    border-radius:3px;\n    font-size:1em;\n    padding:.7em;\n    outline:none;\n    margin-right:.5em;\n\n    ', '\n\n    &:hover,\n    &:focus {\n      outline:none;\n    }\n  }\n'], ['\n  width:100%;\n  display:flex;\n  flex-direction:row;\n  flex-wrap:wrap;\n\n  input {\n    font-family: \'Raleway\', sans-serif;\n    flex-grow:1;\n    height:50px;\n    border:1px solid #ddd;\n    border-radius:3px;\n    font-size:1em;\n    padding:.7em;\n    outline:none;\n    margin-right:.5em;\n\n    ', '\n\n    &:hover,\n    &:focus {\n      outline:none;\n    }\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n      width:100%;\n      margin-right:0;\n    '], ['\n      width:100%;\n      margin-right:0;\n    ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  width:100%;\n  min-height:100px;\n  border-radius:4px;\n  padding:1em;\n  font-size:2em;\n  color:black;\n  background-color:#fcffd4;\n  box-shadow: 0 .1em .2em 0 rgba(0,0,0,0.3);\n  margin:1em 0;\n\n  ', '\n'], ['\n  width:100%;\n  min-height:100px;\n  border-radius:4px;\n  padding:1em;\n  font-size:2em;\n  color:black;\n  background-color:#fcffd4;\n  box-shadow: 0 .1em .2em 0 rgba(0,0,0,0.3);\n  margin:1em 0;\n\n  ', '\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n    font-size:1.5em;\n    margin:.75em 0;\n  '], ['\n    font-size:1.5em;\n    margin:.75em 0;\n  ']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  position:relative;\n  background-color: ', ';\n  border-radius: 4px;\n  min-width:200px;\n  color:white;\n  font-size:1.1em;\n  font-family: \'Raleway\', sans-serif;\n  font-weight:500;\n  letter-spacing:0.15em;\n  border:0;\n  text-transform: uppercase;\n  outline:none;\n  box-shadow: 0 .1em .1em .03em rgba(0,0,0,0.3);\n  transition:all 350ms linear;\n\n  ', '\n\n  &:hover {\n    background-color: ', ';\n  }\n'], ['\n  position:relative;\n  background-color: ', ';\n  border-radius: 4px;\n  min-width:200px;\n  color:white;\n  font-size:1.1em;\n  font-family: \'Raleway\', sans-serif;\n  font-weight:500;\n  letter-spacing:0.15em;\n  border:0;\n  text-transform: uppercase;\n  outline:none;\n  box-shadow: 0 .1em .1em .03em rgba(0,0,0,0.3);\n  transition:all 350ms linear;\n\n  ', '\n\n  &:hover {\n    background-color: ', ';\n  }\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n    width:100%;\n    height:50px;\n    margin-top:1em;\n    margin-bottom:1em;\n  '], ['\n    width:100%;\n    height:50px;\n    margin-top:1em;\n    margin-bottom:1em;\n  ']);

var Container = exports.Container = _styledComponents2.default.section(_templateObject, _mediaqueries.media.xs(_templateObject2));

var SearchBox = exports.SearchBox = _styledComponents2.default.form(_templateObject3, _mediaqueries.media.xs(_templateObject4));

var NewCard = exports.NewCard = _styledComponents2.default.article(_templateObject5, _mediaqueries.media.xs(_templateObject6));

var Button = exports.Button = _styledComponents2.default.button(_templateObject7, function (props) {
  return props.primary ? '#4171e2' : 'red';
}, _mediaqueries.media.xs(_templateObject8), function (props) {
  return props.primary ? '#e24141' : '#4171e2';
});
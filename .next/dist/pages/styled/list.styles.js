'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListItems = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mediaqueries = require('./mediaqueries.styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position:relative;\n  clear:both;\n  width:100%;\n  padding:1.7em 0;\n  margin:0;\n  border-top:1px solid #eee;\n\n  column-count: 3;\n  column-gap: 20px;\n  height: 100%;\n\n  ', '\n\n  li {\n    display:inline-block;\n    position:relative;\n    list-style-type:none;\n    width: 100%;\n    margin-bottom:20px;\n    border-radius: 4px;\n    min-height: 100px;\n    break-inside: avoid;\n    padding:1em 1.5em 1em 1em;\n\n    font-size:1em;\n    color:black;\n    background-color:#eee;\n    box-shadow: 0 0.1em 0.15em 0em rgba(0,0,0,0.3);\n\n    aside {\n      position:absolute;\n      color:black;\n      top:10px;\n      right: 10px;\n      width:15px;\n      height:15px;\n      cursor:pointer;\n\n      ', '\n\n      &:before,\n      &:after {\n        content:\'\';\n        width:100%;\n        height:1px;\n        top:50%;\n        position:absolute;\n        background-color:black;\n        transition:all 300ms linear;\n        transform:rotate(45deg) translateY(-50%);\n      }\n\n      &:after {\n        transform:rotate(-45deg);\n      }\n\n      &:hover {\n        &:before {\n           transform:rotate(-45deg);\n        }\n        &:after {\n          transform:rotate(45deg);\n        }\n      }\n\n    }\n  }\n'], ['\n  position:relative;\n  clear:both;\n  width:100%;\n  padding:1.7em 0;\n  margin:0;\n  border-top:1px solid #eee;\n\n  column-count: 3;\n  column-gap: 20px;\n  height: 100%;\n\n  ', '\n\n  li {\n    display:inline-block;\n    position:relative;\n    list-style-type:none;\n    width: 100%;\n    margin-bottom:20px;\n    border-radius: 4px;\n    min-height: 100px;\n    break-inside: avoid;\n    padding:1em 1.5em 1em 1em;\n\n    font-size:1em;\n    color:black;\n    background-color:#eee;\n    box-shadow: 0 0.1em 0.15em 0em rgba(0,0,0,0.3);\n\n    aside {\n      position:absolute;\n      color:black;\n      top:10px;\n      right: 10px;\n      width:15px;\n      height:15px;\n      cursor:pointer;\n\n      ', '\n\n      &:before,\n      &:after {\n        content:\'\';\n        width:100%;\n        height:1px;\n        top:50%;\n        position:absolute;\n        background-color:black;\n        transition:all 300ms linear;\n        transform:rotate(45deg) translateY(-50%);\n      }\n\n      &:after {\n        transform:rotate(-45deg);\n      }\n\n      &:hover {\n        &:before {\n           transform:rotate(-45deg);\n        }\n        &:after {\n          transform:rotate(45deg);\n        }\n      }\n\n    }\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    column-count: 1;\n    padding-top:1.75em;\n    padding-bottom:2em;\n  '], ['\n    column-count: 1;\n    padding-top:1.75em;\n    padding-bottom:2em;\n  ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n        width:20px;\n        height:20px;\n      '], ['\n        width:20px;\n        height:20px;\n      ']);

var ListItems = exports.ListItems = _styledComponents2.default.ul(_templateObject, _mediaqueries.media.xs(_templateObject2), _mediaqueries.media.xs(_templateObject3));
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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position:relative;\n  clear:both;\n  width:100%;\n  padding:1.7em 0;\n  margin:0;\n  border-top:1px solid #eee;\n\n  column-count: 3;\n  column-gap: 20px;\n  height: 100%;\n\n  li {\n    display:inline-block;\n    position:relative;\n    list-style-type:none;\n    width: 100%;\n    margin-bottom:15px;\n    border-radius: 4px;\n    min-height: 100px;\n    break-inside: avoid;\n    padding:1em;\n    overflow:hidden;\n    font-size:1em;\n    color:black;\n    background-color:#eee;\n    box-shadow: 0 0.1em 0.15em 0em rgba(0,0,0,0.3);\n    transition:all 150ms cubic-bezier(0.18, 0.89, 0.32, 1.28);\n\n    &:hover,\n    &:focus {\n      outline:none;\n      box-shadow: 0 0.1em 0.15em 0.01em rgba(0,0,0,0.2),\n                  0 0.2em 0.35em 0em rgba(0,0,0,0.25);\n\n      aside {\n        opacity:1;\n\n        &:before {\n           transform:rotate(45deg);\n        }\n        &:after {\n          transform:rotate(-45deg);\n        }\n      }\n    }\n\n    aside {\n      opacity:0;\n      position:absolute;\n      color:black;\n      top:10px;\n      right: 10px;\n      width:15px;\n      height:15px;\n      cursor:pointer;\n      transition-property:opacity;\n      transition-timing-function:cubic-bezier(0.18, 0.89, 0.32, 1.28);\n      transition-duration:150ms;\n      transition-delay:120ms;\n\n      &:before,\n      &:after {\n        content:\'\';\n        width:100%;\n        height:1px;\n        top:50%;\n        position:absolute;\n        background-color:black;\n        transition-property:transform;\n        transition-timing-function:cubic-bezier(0.18, 0.89, 0.32, 1.28);\n        transition-duration:250ms;\n        transition-delay:150ms;\n        transform:rotate(0);\n      }\n\n      &:before {\n        transform:rotate(0);\n      }\n      &:after {\n        transform:rotate(-90deg);\n      }\n    }\n  }\n'], ['\n  position:relative;\n  clear:both;\n  width:100%;\n  padding:1.7em 0;\n  margin:0;\n  border-top:1px solid #eee;\n\n  column-count: 3;\n  column-gap: 20px;\n  height: 100%;\n\n  li {\n    display:inline-block;\n    position:relative;\n    list-style-type:none;\n    width: 100%;\n    margin-bottom:15px;\n    border-radius: 4px;\n    min-height: 100px;\n    break-inside: avoid;\n    padding:1em;\n    overflow:hidden;\n    font-size:1em;\n    color:black;\n    background-color:#eee;\n    box-shadow: 0 0.1em 0.15em 0em rgba(0,0,0,0.3);\n    transition:all 150ms cubic-bezier(0.18, 0.89, 0.32, 1.28);\n\n    &:hover,\n    &:focus {\n      outline:none;\n      box-shadow: 0 0.1em 0.15em 0.01em rgba(0,0,0,0.2),\n                  0 0.2em 0.35em 0em rgba(0,0,0,0.25);\n\n      aside {\n        opacity:1;\n\n        &:before {\n           transform:rotate(45deg);\n        }\n        &:after {\n          transform:rotate(-45deg);\n        }\n      }\n    }\n\n    aside {\n      opacity:0;\n      position:absolute;\n      color:black;\n      top:10px;\n      right: 10px;\n      width:15px;\n      height:15px;\n      cursor:pointer;\n      transition-property:opacity;\n      transition-timing-function:cubic-bezier(0.18, 0.89, 0.32, 1.28);\n      transition-duration:150ms;\n      transition-delay:120ms;\n\n      &:before,\n      &:after {\n        content:\'\';\n        width:100%;\n        height:1px;\n        top:50%;\n        position:absolute;\n        background-color:black;\n        transition-property:transform;\n        transition-timing-function:cubic-bezier(0.18, 0.89, 0.32, 1.28);\n        transition-duration:250ms;\n        transition-delay:150ms;\n        transform:rotate(0);\n      }\n\n      &:before {\n        transform:rotate(0);\n      }\n      &:after {\n        transform:rotate(-90deg);\n      }\n    }\n  }\n']);

var ListItems = exports.ListItems = _styledComponents2.default.ul(_templateObject);
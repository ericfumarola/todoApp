'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.media = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    @media (max-width: ', 'em) {\n      ', '\n    }\n  '], ['\n    @media (max-width: ', 'em) {\n      ', '\n    }\n  ']);

// import { mediaQuery } from 'styled-components' // assuming this feature is added!
//
// const sizes = {
//   xl : 1200,
//   lg : 1199,
// 	md: 991,
// 	sm: 767,
// 	xs: 575
// }
//
// export const media = {
//   handheld:   mediaQuery`(max-width: ${(sizes.tablet - 1) / 16}em)`,
//   tablet:     mediaQuery`(min-width: ${sizes.tablet / 16}em)`,
//   tabletOnly: mediaQuery`(min-width: ${sizes.tablet / 16}em) and (max-width: ${(sizes.desktop - 1) / 16}em)`,
//   desktop:    mediaQuery`(min-width: ${sizes.desktop / 16}em)`,
//   giant:      mediaQuery`(min-width: ${sizes.giant / 16}em)`,
//   minWidth:   (pxValue) => mediaQuery`(min-width: ${pxValue / 16}em)`,
//   print:      mediaQuery`print`,
// }


// $easeOutCubic = cubic-bezier(0.18, 0.89, 0.32, 1.28);
// these sizes are arbitrary and you can set them to whatever you wish


var sizes = {
  xl: 1200,
  lg: 1199,
  md: 991,
  sm: 767,
  xs: 575

  // iterate through the sizes and create a media template
};var media = exports.media = (0, _keys2.default)(sizes).reduce(function (accumulator, label) {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  var emSize = sizes[label] / 16;
  accumulator[label] = function () {
    return (0, _styledComponents.css)(_templateObject, emSize, _styledComponents.css.apply(undefined, arguments));
  };
  return accumulator;
}, {});
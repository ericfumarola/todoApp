webpackHotUpdate(5,{

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListItems = undefined;

var _taggedTemplateLiteral2 = __webpack_require__(584);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = __webpack_require__(585);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mediaqueries = __webpack_require__(712);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position:relative;\n  clear:both;\n  width:100%;\n  padding:1.7em 0;\n  margin:0;\n  border-top:1px solid #eee;\n\n  column-count: 3;\n  column-gap: 20px;\n  height: 100%;\n\n  ', '\n\n  li {\n    display:inline-block;\n    position:relative;\n    list-style-type:none;\n    width: 100%;\n    margin-bottom:20px;\n    border-radius: 4px;\n    min-height: 100px;\n    break-inside: avoid;\n    padding:1em 1.5em 1em 1em;\n\n    font-size:1em;\n    color:black;\n    background-color:#eee;\n    box-shadow: 0 0.1em 0.15em 0em rgba(0,0,0,0.3);\n\n    aside {\n      position:absolute;\n      color:black;\n      top:10px;\n      right: 10px;\n      width:15px;\n      height:15px;\n      cursor:pointer;\n\n      ', '\n\n      &:before,\n      &:after {\n        content:\'\';\n        width:100%;\n        height:1px;\n        top:50%;\n        position:absolute;\n        background-color:black;\n        transition:all 300ms linear;\n        transform:rotate(45deg) translateY(-50%);\n      }\n\n      &:after {\n        transform:rotate(-45deg);\n      }\n\n      &:hover {\n        &:before {\n           transform:rotate(-45deg);\n        }\n        &:after {\n          transform:rotate(45deg);\n        }\n      }\n\n    }\n  }\n'], ['\n  position:relative;\n  clear:both;\n  width:100%;\n  padding:1.7em 0;\n  margin:0;\n  border-top:1px solid #eee;\n\n  column-count: 3;\n  column-gap: 20px;\n  height: 100%;\n\n  ', '\n\n  li {\n    display:inline-block;\n    position:relative;\n    list-style-type:none;\n    width: 100%;\n    margin-bottom:20px;\n    border-radius: 4px;\n    min-height: 100px;\n    break-inside: avoid;\n    padding:1em 1.5em 1em 1em;\n\n    font-size:1em;\n    color:black;\n    background-color:#eee;\n    box-shadow: 0 0.1em 0.15em 0em rgba(0,0,0,0.3);\n\n    aside {\n      position:absolute;\n      color:black;\n      top:10px;\n      right: 10px;\n      width:15px;\n      height:15px;\n      cursor:pointer;\n\n      ', '\n\n      &:before,\n      &:after {\n        content:\'\';\n        width:100%;\n        height:1px;\n        top:50%;\n        position:absolute;\n        background-color:black;\n        transition:all 300ms linear;\n        transform:rotate(45deg) translateY(-50%);\n      }\n\n      &:after {\n        transform:rotate(-45deg);\n      }\n\n      &:hover {\n        &:before {\n           transform:rotate(-45deg);\n        }\n        &:after {\n          transform:rotate(45deg);\n        }\n      }\n\n    }\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    column-count: 1;\n    padding-top:1.75em;\n    padding-bottom:2em;\n  '], ['\n    column-count: 1;\n    padding-top:1.75em;\n    padding-bottom:2em;\n  ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n        width:20px;\n        height:20px;\n      '], ['\n        width:20px;\n        height:20px;\n      ']);

var ListItems = exports.ListItems = _styledComponents2.default.ul(_templateObject, _mediaqueries.media.xs(_templateObject2), _mediaqueries.media.xs(_templateObject3));

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/fernandocasaliba/GitHub/todoApp/pages/styled/list.styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/fernandocasaliba/GitHub/todoApp/pages/styled/list.styles.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/styled/list.styles")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5iNTUwYzkwZTFjNjIzZDUxZmU5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvc3R5bGVkL2xpc3Quc3R5bGVzLmpzP2JiNGI5NDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge21lZGlhfSAgZnJvbSAnLi9tZWRpYXF1ZXJpZXMuc3R5bGVkJztcblxuZXhwb3J0IGNvbnN0IExpc3RJdGVtcyA9IHN0eWxlZC51bGBcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIGNsZWFyOmJvdGg7XG4gIHdpZHRoOjEwMCU7XG4gIHBhZGRpbmc6MS43ZW0gMDtcbiAgbWFyZ2luOjA7XG4gIGJvcmRlci10b3A6MXB4IHNvbGlkICNlZWU7XG5cbiAgY29sdW1uLWNvdW50OiAzO1xuICBjb2x1bW4tZ2FwOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgJHttZWRpYS54c2BcbiAgICBjb2x1bW4tY291bnQ6IDE7XG4gICAgcGFkZGluZy10b3A6MS43NWVtO1xuICAgIHBhZGRpbmctYm90dG9tOjJlbTtcbiAgYH1cblxuICBsaSB7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbToyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICBicmVhay1pbnNpZGU6IGF2b2lkO1xuICAgIHBhZGRpbmc6MWVtIDEuNWVtIDFlbSAxZW07XG5cbiAgICBmb250LXNpemU6MWVtO1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6I2VlZTtcbiAgICBib3gtc2hhZG93OiAwIDAuMWVtIDAuMTVlbSAwZW0gcmdiYSgwLDAsMCwwLjMpO1xuXG4gICAgYXNpZGUge1xuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICBjb2xvcjpibGFjaztcbiAgICAgIHRvcDoxMHB4O1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICB3aWR0aDoxNXB4O1xuICAgICAgaGVpZ2h0OjE1cHg7XG4gICAgICBjdXJzb3I6cG9pbnRlcjtcblxuICAgICAgJHttZWRpYS54c2BcbiAgICAgICAgd2lkdGg6MjBweDtcbiAgICAgICAgaGVpZ2h0OjIwcHg7XG4gICAgICBgfVxuXG4gICAgICAmOmJlZm9yZSxcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OicnO1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBoZWlnaHQ6MXB4O1xuICAgICAgICB0b3A6NTAlO1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbiAgICAgICAgdHJhbnNpdGlvbjphbGwgMzAwbXMgbGluZWFyO1xuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgfVxuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3N0eWxlZC9saXN0LnN0eWxlcy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7Ozs7O0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
webpackHotUpdate(5,{

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebase = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./firebase\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  apiKey: 'AIzaSyC6NlAzYNaxGhvUNy3Kgs1Bal1r4X6Tims',
  authDomain: 'reacttest-6b3a6.firebaseapp.com',
  databaseURL: 'https://reacttest-6b3a6.firebaseio.com',
  projectId: 'reacttest-6b3a6',
  storageBucket: 'reacttest-6b3a6.appspot.com',
  messagingSenderId: '1082647419812'
};

// if (!firebase.apps.length) {
var fire = _firebase2.default.initializeApp(config);
// }

exports.default = fire;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/fernandocasaliba/GitHub/todoApp/pages/database/DbFirebase.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/fernandocasaliba/GitHub/todoApp/pages/database/DbFirebase.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
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
    })(module.exports.default || module.exports, "/database/DbFirebase")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4zODAwMjQ1NWE2NmY4NDY1YWNlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGF0YWJhc2UvRGJGaXJlYmFzZS5qcz9hOGQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICcuL2ZpcmViYXNlJztcblxuY29uc3QgY29uZmlnID0ge1xuICBhcGlLZXk6ICdBSXphU3lDNk5sQXpZTmF4R2h2VU55M0tnczFCYWwxcjRYNlRpbXMnLFxuICBhdXRoRG9tYWluOiAncmVhY3R0ZXN0LTZiM2E2LmZpcmViYXNlYXBwLmNvbScsXG4gIGRhdGFiYXNlVVJMOiAnaHR0cHM6Ly9yZWFjdHRlc3QtNmIzYTYuZmlyZWJhc2Vpby5jb20nLFxuICBwcm9qZWN0SWQ6ICdyZWFjdHRlc3QtNmIzYTYnLFxuICBzdG9yYWdlQnVja2V0OiAncmVhY3R0ZXN0LTZiM2E2LmFwcHNwb3QuY29tJyxcbiAgbWVzc2FnaW5nU2VuZGVySWQ6ICcxMDgyNjQ3NDE5ODEyJ1xufTtcblxuLy8gaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xuICBjb25zdCBmaXJlID0gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBmaXJlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvZGF0YWJhc2UvRGJGaXJlYmFzZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
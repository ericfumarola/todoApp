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

var _DbFirebase = require('./../database/DbFirebase');

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _Search = require('./../components/Search');

var _Search2 = _interopRequireDefault(_Search);

var _List = require('./../components/List');

var _List2 = _interopRequireDefault(_List);

var _general = require('./../styled/general.styles');

var _list = require('./../styled/list.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fernandocasaliba/GitHub/todoApp/pages/container/Home.js';

// styles


//
// if (!firebase.apps.length) {
//
// }

var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this));

    _this.app = _firebase2.default.initializeApp(_DbFirebase.DbFirebase), _this.db = _this.app.firebase.database().ref().child('notes');
    _this.state = {
      notes: [{
        content: ['saraza', 'tu vieja', 'sasas', 'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa', 'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa', 'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa'],
        id: ['saraza', 'tu vieja', 'sasas', 'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa', 'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa', 'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa']
      }, {
        content: ['saraza', 'tu vieja', 'sasas', 'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa', 'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa', 'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa'],
        id: ['saraza', 'tu vieja', 'sasas', 'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa', 'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa', 'dsadsad d ada d ad asds d as da sda d sd sad asd sd a da da dasd as da das d ads  a sd sd asd as d asd d a da d ads d as dad asd asd as da sd asddasdasdsdasdasdsa']
      }]

    };

    return _this;
  }

  (0, _createClass3.default)(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var prevNotes = this.state.notes;

      this.database.on('value', function (snap) {
        prevNotes.push({
          content: snapshot.val().content,
          id: snap.key
        });

        _this2.setState({
          notes: prevNotes
        });
      });
    }
  }, {
    key: 'addNote',
    value: function addNote(note) {
      this.database.push().set({ content: note });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_general.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(_Search2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), _react2.default.createElement(_list.ListItems, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, this.state.notes.map(function (note, index) {
        return _react2.default.createElement(_List2.default, { cards: note.content, key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        });
      })));
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;
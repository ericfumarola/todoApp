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

var _Search = require('./../components/Search');

var _Search2 = _interopRequireDefault(_Search);

var _List = require('./../components/List');

var _List2 = _interopRequireDefault(_List);

var _general = require('./../styled/general.styles');

var _list = require('./../styled/list.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fernandocasaliba/GitHub/todoApp/pages/container/Home.js';
// import {DbFirebase} from './../database/DbFirebase';
// import firebase from 'firebase';


// styles


//
// if (!firebase.apps.length) {
//   firebase.initializeApp(DbFirebase)
// }

var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home(props) {
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));

    _this.addNote = _this.addNote.bind(_this);

    _this.state = {
      notes: [{
        content: ['sasasa 1'],
        id: ['1']
      }]
    };
    return _this;
  }

  (0, _createClass3.default)(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // const prevNotes = this.state.notes;
      //
      // this.app = firebase.initializeApp(DbFirebase);
      // this.database.on('value', (snap) => {
      //   prevNotes.push({
      //     content : snapshot.val().content,
      //     id      : snap.key
      //   })
      //
      //   this.setState({
      //     notes:prevNotes
      //   })
      // })
    }
  }, {
    key: 'addNote',
    value: function addNote(note) {
      // this.database.push().set({content:note})
      var previousNotes = this.state.notes;
      previousNotes.push({
        id: previousNotes.length + 1,
        content: note
      });

      this.setState({
        notes: previousNotes
      });

      console.log(previousNotes);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_general.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_Search2.default, { addNote: this.addNote, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), _react2.default.createElement(_list.ListItems, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, this.state.notes.map(function (note, index) {
        return _react2.default.createElement(_List2.default, { cards: note.content, key: note.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        });
      })));
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;
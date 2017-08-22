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

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _DbFirebase = require('./../database/DbFirebase');

var _DbFirebase2 = _interopRequireDefault(_DbFirebase);

var _Search = require('./../components/Search');

var _Search2 = _interopRequireDefault(_Search);

var _general = require('./../styled/general.styles');

var _list = require('./../styled/list.styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fernandocasaliba/GitHub/todoApp/pages/container/Home.js';

// styles


// inicializa Firebase
if (!_firebase2.default.apps.length) {
  _firebase2.default.initializeApp(_DbFirebase2.default);
}

var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this));

    _this.addNote = _this.addNote.bind(_this);
    _this.removeNote = _this.removeNote.bind(_this);

    _this.database = _firebase2.default.database().ref().child('notes');

    _this.state = {
      notes: []
    };
    return _this;
  }

  (0, _createClass3.default)(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var previousNotes = this.state.notes;

      // Add note
      this.database.on('child_added', function (snapshot) {
        previousNotes.push(snapshot.val());

        _this2.setState({
          notes: previousNotes
        });
      });

      // Remove Note
      this.database.on('child_removed', function (snapshot) {
        // for(var i=0; i < previousNotes.length; i++){
        //   if(previousNotes[i].key === snapshot.key){
        //     previousNotes.splice(i, 1);
        //   }
        // }
        _this2.setState({
          notes: _this2.state.notes.filter(function (el) {
            return snapshot.key !== el.key;
          })
        });

        // this.setState({
        //   notes: previousNotes
        // })

        console.log(_this2.state.notes);
      });
    }

    // Add Note

  }, {
    key: 'addNote',
    value: function addNote(note) {
      var data = this.database.push();
      var key = data.key;
      data.set({
        content: note,
        key: key
      });
    }

    // Remove Note

  }, {
    key: 'removeNote',
    value: function removeNote(noteId) {
      this.database.child(noteId).remove();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var allNotes = this.state.notes.map(function (note) {
        return _react2.default.createElement('li', { id: note.key, key: note.key, __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, _react2.default.createElement('aside', { onClick: function onClick() {
            return _this3.removeNote(note.key);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }), note.content);
      }).reverse();

      return _react2.default.createElement(_general.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_Search2.default, { addNote: this.addNote, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), _react2.default.createElement(_list.ListItems, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, allNotes));
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ClickMe = require('./components/ClickMe');

var _ClickMe2 = _interopRequireDefault(_ClickMe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.hydrate(_react2.default.createElement(_ClickMe2.default, null), document.getElementById('content'));
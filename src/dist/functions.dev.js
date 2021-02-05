"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timesTwo = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import {timesTwo} from './functions'
// import { render, screen } from '@testing-library/react';
// import App from './App';
var timesTwo = function timesTwo(a) {
  return a * 2;
}; // test('Multiplies by two', () => {
//   expect(linkElement).toBeInTheDocument();
// });
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


exports.timesTwo = timesTwo;
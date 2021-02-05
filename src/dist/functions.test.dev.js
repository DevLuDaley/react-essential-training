"use strict";

var _functions = require("./functions");

test('Multiplies by two', function () {
  expect((0, _functions.timesTwo)(4)).toBe(8);
  expect((0, _functions.timesTwo)(5)).toBe(10);
}); // test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
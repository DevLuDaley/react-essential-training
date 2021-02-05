import {timesTwo} from './functions'
// import { render, screen } from '@testing-library/react';
// import App from './App';

test('Multiplies by two', () => {
  expect(timesTwo(4)).toBe(8)
  expect(timesTwo(5)).toBe(10)
})
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders h1', () => {
  const { getByText } = render(<App />);
  const h1Element = getByText(/Welcome to our nameless Workout Tracker/i);
  expect(h1Element).toBeInTheDocument();
});
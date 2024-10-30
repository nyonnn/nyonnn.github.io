// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Bio Section heading', () => {
  render(<App />);
  const bioHeading = screen.getByRole('heading', { name: /bio section/i });
  expect(bioHeading).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Fitness Tracker heading on the login page', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /fitness tracker/i })).toBeInTheDocument();
});

test('renders Login and Create Account mode-switch buttons', () => {
  render(<App />);
  // two "Login" buttons exist (mode toggle + submit), so use getAllByRole
  expect(screen.getAllByRole('button', { name: /^login$/i }).length).toBeGreaterThanOrEqual(1);
  expect(screen.getByRole('button', { name: /create account/i })).toBeInTheDocument();
});

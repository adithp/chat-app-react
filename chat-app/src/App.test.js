import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Online Now heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Online Now/i);
  expect(headingElement).toBeInTheDocument();
});

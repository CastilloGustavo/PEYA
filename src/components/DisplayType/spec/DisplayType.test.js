import { render, screen } from '@testing-library/react';
import DisplayType from '../index';

test('renders display list', () => {
  render(<DisplayType display='list' />);
  const linkElement = screen.getByText(/List/i);
  expect(linkElement).toBeInTheDocument();
});
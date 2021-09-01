import { render, screen } from '@testing-library/react';
import App from '../index';

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () =>{
    return {
      title_page: 'Welcome a tu Horoscopo Favorito',
      sub_title_page: 'Veremos que te espera hoy'
    }
  },
  useDispatch: (otrafuncion) =>{
    return jest.fn();
  }
}));

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome a tu Horoscopo Favorito/i);
  expect(linkElement).toBeInTheDocument();
});

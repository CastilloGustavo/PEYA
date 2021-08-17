import { render, screen } from '@testing-library/react';
import App from '../index';
import getMainZodicMonth from '../utils';

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () =>{
    return {
      title_page: 'Welcome a tu Horoscopo Favorito',
      sub_title_page: 'Veremos que te espera hoy',
      display_type: 'grid',
      zodic_list: [],
      zodic_list_filtered: [],
      text_search: '',
      zodic_month:{
        name: 'Escorpio',
        prediction: 'Va a salir todo bien',
        image: 'escorpio'
      }
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

test('Select Zodic correct', () =>{
  const ariesMain = new Date('03/21/2021');
  
  let result = getMainZodicMonth(ariesMain);
  expect(result).toBe('aries');

  const pisisMain = new Date('02/19/2021');
  result = getMainZodicMonth(pisisMain);
  expect(result).toBe('picis');

  const pisisMain2 = new Date('03/20/2021');
  result = getMainZodicMonth(pisisMain2);
  expect(result).toBe('picis');

})

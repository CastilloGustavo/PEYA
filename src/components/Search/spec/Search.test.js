/* eslint-disable no-labels */
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Search from '../index';

jest.mock("react-redux", (wrapperFn) => ({
    ...jest.requireActual("react-redux"),
    useSelector: () =>{
      return {
        title_page: 'Welcome a tu Horoscopo Favorito',
        sub_title_page: 'Veremos que te espera hoy',
        display_type: 'grid',
        zodic_list: [{
            name: 'Escorpio',
            prediction: 'Va a salir todo bien',
            image: 'escorpio'
          }],
        zodic_list_filtered: [{
            name: 'Escorpio',
            prediction: 'Va a salir todo bien',
            image: 'escorpio'
          }],
        text_search: '',
        zodic_month:{
          name: 'Escorpio',
          prediction: 'Va a salir todo bien',
          image: 'escorpio'
        }
      }
    },
    useDispatch: (otrafuncion) =>{
       return (otrafuncion) =>{
            return wrapperFn;
        }
    }
  }));

test('renders search ok', () => {
    const {getByTestId} = render(<Search  />);
    userEvent.type(getByTestId('input'), 'escor');
    expect(getByTestId('input')).toHaveValue('escor');
});
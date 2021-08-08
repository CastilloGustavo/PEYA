import { createStore } from 'redux';
import reducer from '../reducers';

// const reducers = combineReducers({
//     // Se podria combinar reducer si se desea que esten es diferentes archivos
// });


const store = createStore(reducer);

export default store
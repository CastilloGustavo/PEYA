import {typeFindZodicList, typeSelectTypeDisplay} from '../actions';

const defaultState = {
    title_page: 'Welcome a tu Horoscopo Favorito',
    sub_title_page: 'Veremos que te espera hoy',
    display_type: 'list',
    zodic_list: [],
    text_search: '',
};

const reducer = (state = defaultState, {type, payload}) =>{
    switch(type){
        case typeFindZodicList:{
            return {
                ...state,
                zodic_list:payload
                }
        }
        case typeSelectTypeDisplay:{
            return {
                ...state,
                display_type: payload,
            }
        }
        default: 
        return state;
    }
}


export default reducer;
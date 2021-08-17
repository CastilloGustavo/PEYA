import {typeFindZodicList, typeSelectTypeDisplay, typeFilterZodicList, typeSetZodicMount} from '../actions';

const defaultState = {
    title_page: 'Welcome a tu Horoscopo Favorito',
    sub_title_page: 'Veremos que te espera hoy',
    display_type: 'grid',
    zodic_list: [],
    zodic_list_filtered: [],
    text_search: '',
    zodic_month: {}
};

const reducer = (state = defaultState, {type, payload}) =>{
    switch(type){
        case typeFindZodicList:{
        return {...state,
            zodic_list: Object.assign([],payload),
            zodic_list_filtered: Object.assign([],payload),
            }
        }
        case typeFilterZodicList:{
            return {
            ...state,
            zodic_list_filtered: payload,
            }
        }
        case typeSelectTypeDisplay:{
            return {
                ...state,
                display_type: payload,
            }
        }
        case typeSetZodicMount:{
            return {
                ...state,
                zodic_month: payload,
            }
        }
        default: 
        return state;
    }
}


export default reducer;
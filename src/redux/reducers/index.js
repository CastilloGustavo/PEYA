import rfdc from 'rfdc';
import {typeFindZodicList, typeSelectTypeDisplay, typeFilterZodicList} from '../actions';

const cloneCircles = rfdc({ circles: true, proto: true })

const defaultState = {
    title_page: 'Welcome a tu Horoscopo Favorito',
    sub_title_page: 'Veremos que te espera hoy',
    display_type: 'list',
    zodic_list: [],
    zodic_list_filtered: [],
    text_search: '',
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
        default: 
        return state;
    }
}


export default reducer;
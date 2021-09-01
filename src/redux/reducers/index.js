import {typeFindPlanetsList} from '../actions';

const defaultState = {
    title_page: 'Welcome a mi Primera KATA',
    sub_title_page: 'Daremos lo Mejor y Nos divertiremos',
};

const reducer = (state = defaultState, {type, payload}) =>{
    switch(type){
        case typeFindPlanetsList:{
        return {...state,
            
            }
        }
        default: 
        return state;
    }
}


export default reducer;
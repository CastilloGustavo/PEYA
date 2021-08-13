import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { filterZodicList } from '../../redux/actions';

const Search = (props) =>{
    const { zodic_list, zodic_list_filtered } = useSelector( state => state); 
    const dispatch = useDispatch();

    const onChangeFilterItem = (event)=>{
        const { value } = event.target;
        const rule = new RegExp(`${value}`, 'i');
        
        const zodicListFiltered = zodic_list.filter(item => rule.test(item.name));
        console.log(zodic_list_filtered);
        console.log(zodic_list);
        console.log(zodicListFiltered);

        dispatch(filterZodicList(zodicListFiltered))
    } 

    return(<div>
        <span>Buscar</span>
        <input onChange={onChangeFilterItem} type="text" />
    </div>)
}

export default Search;
import React from 'react';
import ResultItem from '../ResultItem';

const ResultList = (props) =>{
    const {list} = props;
    return(<div>
        {
            list.map( x => (<ResultItem result={x}></ResultItem>))
        }
    </div>)
}

export default ResultList;
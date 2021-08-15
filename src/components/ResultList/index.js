import React from 'react';
import ResultItem from '../ResultItem';

const ResultList = (props) =>{
    const {list , display} = props;
    return(<div>
        {
            list.map( x => (<ResultItem display={display} result={x}></ResultItem>))
        }
    </div>)
}

export default ResultList;
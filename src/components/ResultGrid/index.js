import React from 'react';
import ResultItem from '../ResultItem';

import './style.scss';

const ResultGrid = (props) =>{
    const {list, display } = props;
    return(<div className="cnt-grid-item">
        {
            list.map( x => (<ResultItem display={display} result={x}></ResultItem>))

        }
    </div>)
}

export default ResultGrid;
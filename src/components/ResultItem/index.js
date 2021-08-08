import React from 'react';
import WrapperImg from '../../assets'
import './style.scss';

const ResultItem= (props) =>{
    const {result} = props;
    
    return(<div className="cnt-item">
        <div className="cnt-item-img">
            <WrapperImg keyImg={result.image}></WrapperImg>
        </div>
        <div className="cnt-item-body">
            <div className="cnt-item-body-title">{result.name}</div>
            <div className="cnt-item-body-prediction">{result.prediction}</div>
        </div>
    </div>)
}

export default ResultItem;
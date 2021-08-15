import React from 'react';
import WrapperImg from '../../assets'
import './style.scss';

const ResultItem= (props) =>{
    const {result, display} = props;

    const title = <div className="cnt-item-body-title">{result.name}</div>;
    const viewList = <div className="cnt-item-img"><WrapperImg keyImg={result.image}></WrapperImg></div>;
    const viewGridWrapper = <div className="cnt-item-view-grid">{title}{viewList}</div>

    const renderTitleListInBody = () =>{
       return display === 'list' ? (title) : null;
    }

    const renderImagen = () =>{
        return display === 'list' ? (viewList) : (viewGridWrapper);
    }

    return(<div className="cnt-item">
        {renderImagen()}
        <div className="cnt-item-body">
            {renderTitleListInBody()}
            <div className="cnt-item-body-prediction">{result.prediction}</div>
        </div>
    </div>)
}

export default ResultItem;
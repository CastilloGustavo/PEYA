import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import getAllZodic from '../../services';
import Search from '../Search';
import DisplayType from '../DisplayType';
import { findZodicList } from '../../redux/actions';
import ResultList from '../ResultList';
import './styles.scss';

const App = (props) =>{
  // const {title_page , sub_title_page } = props;
  const {title_page , sub_title_page, display_type, zodic_list} = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(()=>{
    getAllZodic().then(result =>{
      dispatch(findZodicList(result))
    });
  },[dispatch])

  const showInfoResult = () => {
    if(display_type === 'list'){
      return(<ResultList list={zodic_list}></ResultList>);
    }
    return (<h1>Me muestro en grill</h1>)
  }

  return(<div className="cnt-main-app">
    <span className="title-app">{title_page}</span>
    <span className="sub-title-app">{sub_title_page}</span>
    <div className="cnt-header-result">
      <DisplayType></DisplayType>
      <Search></Search>
    </div>
    <div className="cnt-body-result">
      {showInfoResult()}
    </div>
  </div>) 
}

export default App;

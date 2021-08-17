import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { findZodicList, selectTypeDisplay, setZodicMount } from '../../redux/actions';

import getMainZodicMonth from './utils';
import getAllZodic from '../../services';
import Search from '../Search';
import DisplayType from '../DisplayType';
import ResultList from '../ResultList';
import './styles.scss';
import ResultGrid from '../ResultGrid';
import ResultItem from '../ResultItem';

const App = (props) =>{
  const {title_page , sub_title_page, display_type, zodic_list_filtered, zodic_month} = useSelector(state => state);
  const dispatch = useDispatch();
  

  useEffect(()=>{
    getAllZodic().then(result =>{
      const keyZodicSelect = getMainZodicMonth(new Date())
      const zodic_month = result.filter((x) => x.image === keyZodicSelect)[0]
      dispatch(findZodicList(result));
      dispatch(setZodicMount(zodic_month));
    });
  },[dispatch])

  

  const onChangeDisplay = (value) =>{
    dispatch(selectTypeDisplay(value))
  }

  const showInfoResult = () => {
    if(display_type === 'list'){
      return(<ResultList display={display_type} list={zodic_list_filtered}></ResultList>);
    }
    return (<ResultGrid display={display_type} list={zodic_list_filtered}></ResultGrid>)
  }

  return(<div className="cnt-main-app">
    <span className="title-app">{title_page}</span>
    <span className="sub-title-app">{sub_title_page}</span>
    <div className="cnt-header-result">
      <DisplayType onChangeCustom={onChangeDisplay} display={display_type}></DisplayType>
      <Search></Search>
    </div>
    <div className="cnt-body-result">
      <ResultItem display="list" result={zodic_month}></ResultItem>
    </div>
    <div className="cnt-body-result">
      {showInfoResult()}
    </div>
  </div>) 
}

export default App;

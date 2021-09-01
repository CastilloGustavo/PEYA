import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { findPlanetList } from '../../redux/actions';

import getAllPlanets from '../../services';

import './styles.scss';

const App = (props) =>{
  const {title_page , sub_title_page} = useSelector(state => state);
  const dispatch = useDispatch();


  useEffect(()=>{
    getAllPlanets().then(result =>{
      console.log(result);
      // dispatch(findPlanetList(result));
    });
  },[dispatch])


  return(<div className="cnt-main-app">
    <span className="title-app">{title_page}</span>
    <span className="sub-title-app">{sub_title_page}</span>
  </div>) 
}

export default App;

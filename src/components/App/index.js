import React, { useEffect } from 'react';
import getAllZodic from '../../services';
import Search from '../Search';
import DisplayType from '../DisplayType';
import './styles.scss';

const App = (props) =>{

  useEffect(()=>{
    getAllZodic().then(result =>{
      console.log(result);
    });
  },[])

  return(<div className="cnt-main-app">
    <h1>Welcome a tu Horoscopo Favorito</h1>
    <h3>Veremos que te espera hoy</h3>
    <div className="cnt-header-result">
      <DisplayType></DisplayType>
      <Search></Search>
    </div>
  </div>) 
}

export default App;

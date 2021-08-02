import React, { useEffect } from 'react';
import getAllZodic from '../../services';
import './styles.scss';

const App = (props) =>{

  useEffect(()=>{
    getAllZodic();
  },[])

  return(<div>
    <h1>Soy pagina principal</h1>
  </div>) 
}

export default App;

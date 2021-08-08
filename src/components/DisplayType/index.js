import React from 'react';
import { selectTypeDisplay } from '../../redux/actions';
import { useDispatch } from 'react-redux'

const DisplayType = (props) =>{
  const dispatch = useDispatch()
  const onChangeType = (event) =>{
    dispatch(selectTypeDisplay(event.target.value))
  }
  return(<div>
      <select id="type-visulizacion" onChange={onChangeType}>
      <option value="list">List</option>
      <option value="grid">Grilla</option>
    </select>
  </div>)
}

export default DisplayType;

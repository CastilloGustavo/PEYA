import React from 'react';

const DisplayType = (props) =>{
  const {display , onChangeCustom} = props;
  
  const onChangeType = (event) => {
    onChangeCustom(event.target.value);
  }
  return(<div>
      <select id="type-visulizacion" value={display} onChange={onChangeType}>
      <option value="list">List</option>
      <option value="grid">Grilla</option>
    </select>
  </div>)
}

export default DisplayType;

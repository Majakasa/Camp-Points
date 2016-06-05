import React from 'react';

function Add(props){
  return (
    <div className="AddPlaylist container">
      <p>Add activity points</p>
      <form onSubmit={props.onSubmitCamper}>
        <input onChange={props.onChangeName} placeholder='Name' type='text' /><br/>
        <input onChange={props.onChangeActivity} placeholder='Activity' type='text' />
        <input onChange={props.onChangePoints} placeholder='Points' type='text' /><br/>
        <button type='submit'>Add</button>
      </form>
      <h4>{props.camperAddedMsg}</h4>
    </div>
  );
}

export default Add;

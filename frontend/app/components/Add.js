import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

function Add(props){
  return (
    <div className="AddPlaylist container">
      <p>Add activity points</p>
      <form onSubmit={props.onSubmitCamper}>
        <input onChange={props.onChangeName} placeholder='Name' type='text' /><br/>
        <input onChange={props.onChangeActivity} placeholder='Activity' type='text' />
        <DropdownButton id="ActivityDropdown" title="Dropdown">
         <MenuItem >Books</MenuItem>
         <MenuItem >Podcasts</MenuItem>
         <MenuItem >Tech I Like</MenuItem>
         <MenuItem >About me</MenuItem>
         <MenuItem>Add a Blog</MenuItem>
        </DropdownButton>

        <input onChange={props.onChangePoints} placeholder='Points' type='text' /><br/>
        <button type='submit'>Add</button>
      </form>
      <h4>{props.camperAddedMsg}</h4>
    </div>
  );
}

export default Add;

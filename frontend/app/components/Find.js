
import React from 'react';
import { Table } from 'react-bootstrap';


function Find(props){
  console.log('hello', props);

  return (
    <div>
      <h2>Find</h2>

      <input onChange={props.onChangeName} placeholder='Search by name' type='text' />
      <button onClick={props.onSubmitRecipe} type='button' >Search</button>
      <br/><br/>
      <Table responsive striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>AllSports</th>
            <th>Archery</th>
            <th>Canoeing</th>
            <th>Creative Arts</th>
            <th>Culinary Fun</th>
            <th>Dance</th>
            <th>Eagle-I</th>
            <th>Fencing</th>
            <th>Kayaking</th>
            <th>Performing Arts</th>
            <th>Rock Climbing</th>
            <th>SUP</th>
            <th>Sailing</th>
            <th>Tennis</th>
            <th>Water Ski</th>
            <th>Windsurfing</th>
          </tr>
        </thead>
          <tbody>
            <tr key={props.camper.id}>
                  <td>{props.camper.id}</td>
                  <td>{props.camper.first_name}</td>
                  <td>{props.camper.last_name}</td>
                  <td>{props.camper.allsports}</td>
                  <td>{props.camper.archery}</td>
                  <td>{props.camper.canoeing}</td>
                  <td>{props.camper.creative_arts}</td>
                  <td>{props.camper.culinary_fun}</td>
                  <td>{props.camper.dance}</td>
                  <td>{props.camper.eagle_I}</td>
                  <td>{props.camper.fencing}</td>
                  <td>{props.camper.kayaking}</td>
                  <td>{props.camper.performing_arts}</td>
                  <td>{props.camper.rock_climbing}</td>
                  <td>{props.camper.sup}</td>
                  <td>{props.camper.sailing}</td>
                  <td>{props.camper.swimming}</td>
                  <td>{props.camper.tennis}</td>
                  <td>{props.camper.water_ski}</td>
                  <td>{props.camper.windsurfing}</td>
            </tr>
          </tbody>
        </Table>
    </div>
  );
}


export default Find;

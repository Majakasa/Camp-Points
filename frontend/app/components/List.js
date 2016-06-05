// import React from 'react';

// // const List= React.createClass({
// //   render: function(){
// //     return (
// //       <div>
// //         <h2>Campers/h2>
// //         <ul>
// //           {Campers}
// //         </ul>
// //       </div>
// //     )
// //   }
// // })
//
// function List(props){
//   return (
//     <div className="listCampers">
//       <h2>Campers/h2>
//       <ul>
//         {Campers}
//       </ul>
//     </div>
//   );
// }

//
// export default List

import React from 'react';
import { Table } from 'react-bootstrap';

function List(props){


  const camperlist = props.campers.map((camper) =>{
    return <tr key={camper.id}>
          <td>{camper.id}</td>
          <td>{camper.first_name}</td>
          <td>{camper.last_name}</td>
          <td>{camper.allsports}</td>
          <td>{camper.archery}</td>
          <td>{camper.canoeing}</td>
          <td>{camper.creative_arts}</td>
          <td>{camper.culinary_fun}</td>
          <td>{camper.dance}</td>
          <td>{camper.eagle_I}</td>
          <td>{camper.fencing}</td>
          <td>{camper.kayaking}</td>
          <td>{camper.performing_arts}</td>
          <td>{camper.rock_climbing}</td>
          <td>{camper.sup}</td>
          <td>{camper.sailing}</td>
          <td>{camper.swimming}</td>
          <td>{camper.tennis}</td>
          <td>{camper.water_ski}</td>
          <td>{camper.windsurfing}</td>
    </tr>;
  });
  return (
    <div>
      <h2>Recipe by name</h2>
      <Table striped bordered condensed hover>
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
            {camperlist}
          </tbody>
        </Table>
    </div>
  );
}


export default List;

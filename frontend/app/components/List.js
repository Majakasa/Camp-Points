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


  const recipeList = props.campers.map((camper) =>{
    return <tr key={camper.id}>
          <td>{camper.id}</td>
          <td>{camper.first_name}</td>
          <td>{camper.last_name}</td>
          <td>{camper.archery}</td>
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
            <th>Archery</th>
          </tr>
        </thead>
          <tbody>
            {recipeList}
          </tbody>
        </Table>
    </div>
  );
}


export default List;

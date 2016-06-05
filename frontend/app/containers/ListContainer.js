// import React, {
//   Component
// } from 'react';
// import AjaxHelpers from '../utils/AjaxHelpers';
//
//
// class CamperList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//       error: null
//     };
//   }
//   componentDidMount() {
//
//     AjaxHelpers.listCampers(function(data) {
//       if (data) {
//         this.setState({data: data})
//       } else {
//         this.setState({error: true})
//       }
//     }.bind(this))
//   }
//   renderData() {
//     return this.state.data.map(function(camper, index) {
//       return (
//         <div key={index}>
//           <p>Name: {camper.first_name},
//           Gender: {camper.last_name},
//           Creator: {camper.allsports},
//           Wins: {camper.archery}</p>
//         </div>
//       );
//     });
//   }
//   render() {
//     if (this.state.error) {
//       return (
//         <p>There was an error.</p>
//       )
//     }
//     if (this.state.data) {
//       return (
//         <div>
//           <p>Campers</p>
//           {this.renderData()}
//         </div>
//       )
//     }
//     return (
//       <p>Loading Campers...</p>
//     );
//   }
// }
// export default CamperList



import React from 'react';
import axios from 'axios';

import List from '../components/List';
import AjaxHelpers from '../utils/AjaxHelpers';

const ListContainer = React.createClass({
  getInitialState: function() {
    return {
      ajaxReturn: []
    };
  },

  componentDidMount: function() {
    AjaxHelpers.listCampers()
    .then(function(response){
      console.log(response.data);
      this.setState({
        ajaxReturn: response.data
      });
    }.bind(this))
    .catch(function(err){
      console.warn('err');
      return err;
    })
  },

  render: function(){
    return(
      <div className="display">
        <List campers={this.state.ajaxReturn}/>
      </div>
    )
  }
});

export default ListContainer;

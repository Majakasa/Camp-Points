// import React from 'react';
// import axios from 'axios';
// import Add from '../components/Add';
// import AjaxHelpers from '../utils/AjaxHelpers';
// const AddContainer = React.createClass({
//   getInitialState: function() {
//     return {
//       Name: '',
//       Activity: '',
//       Points: '',
//       listAdded:''
//     };
//   },
//   onChangeName: function(e) {
//     this.setState({
//       Name: e.target.value
//     })
//   },
//   onChangeActivity: function(e) {
//     this.setState({
//       Activity: e.target.value
//     })
//   },
//   onChangePoints: function(e) {
//     this.setState({
//       Points: e.target.value
//     })
//   },
//   onSubmitCamper: function(e) {
//     e.preventDefault();
//     const camper = {
//       Name: this.state.Name,
//       Activity: this.state.Activity,
//       Points: this.state.Points,
//     }
//     AjaxHelpers.addCamper(camper)
//     .then(function(response){
//       console.log(response.data);
//       this.setState({
//         listAdded: "added"
//       });
//     }.bind(this))
//     .catch(function(err){
//       alert(err)
//       console.warn('err', err);
//       return err;
//     });
//
//   //   var AddPlaylist = {author:'', playlists: [ { title:'', movies: [] }] }
//   //   var movieArray = [this.state.Movie1, this.state.Movie2, this.state.Movie3];
//   //   AddPlaylist.author = (List.Author);
//   //   AddPlaylist.playlists[0].title = (List.Title);
//   //
//   //     for(var i = 0; i < movieArray.length; i++){
//   //       AjaxHelper.getMovies(movieArray[i])
//   //       .then(function(response){
//   //         var movieList = {
//   //           title: response.data.results[0].title,
//   //           poster: response.data.results[0].poster_240x342,
//   //           year: response.data.results[0].release_year
//   //         }
//   //         AddPlaylist.playlists[0].movies.push(movieList);
//   //       }.bind(this))
//   //       .catch(function(err){
//   //         alert(err)
//   //         console.warn('err', err);
//   //         return err;
//   //       });
//   //     };
//   //     setTimeout(function(){
//   //       AjaxHelper.addMovies(AddPlaylist)
//   //       .then(function(response){
//   //         console.log(response.data);
//   //         this.setState({
//   //           listAdded: "added"
//   //         });
//   //       }.bind(this))
//   //       .catch(function(err){
//   //         console.warn('err', err);
//   //         return err;
//   //       })
//   //     }, 2000);
//   //     console.log('playlist',AddPlaylist);
//   // },
//
//
//   render: function(){
//     return(
//       <div>
//         <Add onChangeName={this.onChangeName}
//           onChangeTitle={this.onChangeTitle}
//           onChangeActivity={this.onChangeActivity}
//           onChangePoints={this.onChangePoints}
//           listAddedMsg={this.state.listAdded} />
//       </div>
//     )
//   }
// });
// export default AddContainer;
import React from 'react';
import axios from 'axios';

import Add from '../components/Add';
import AjaxHelper from '../utils/AjaxHelpers';


const AddContainer = React.createClass({
  getInitialState: function() {
    return {
      //ajaxReturn: [],
      Name: '',
      Activity: '',
      Points: '',
      camperAdded: ''
    };
  },

  onChangeName: function(e) {
    this.setState({
      Name: e.target.value
    })
  },
  onChangeActivity: function(e) {
    this.setState({
      Activity: e.target.value
    })
  },
  onChangePoints: function(e) {
    this.setState({
      Points: e.target.value
    })
  },

  onSubmitCamper: function(e) {
    e.preventDefault();
    const camper = {
      name: this.state.Name,
      activity: this.state.Activity,
      points: this.state.Points
    }
    console.log(camper);

    AjaxHelper.addCamper(camper)
    .then(function(response){
      console.log(response.data);
      this.setState({
        camperAdded: "added"
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
        <Add onChangeName={this.onChangeName}
          onChangeActivity={this.onChangeActivity}
          onChangePoints={this.onChangePoints}
          onSubmitRecipe={this.onSubmitRecipe}
          camperAddedMsg={this.state.camperAdded} />
      </div>
    )
  }
});

export default AddContainer;

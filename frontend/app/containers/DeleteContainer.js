import React from 'react';
import axios from 'axios';

import Delete from '../components/Delete';
import AjaxHelper from '../utils/AjaxHelpers';

const DeleteContainer = React.createClass({
  getInitialState: function() {
    return {
      searchName: '',
      recipeDeleted: ''
    };
  },

  onChangeName: function(e) {
    this.setState({
      searchName: e.target.value
    })
  },

  onSubmitRecipe: function() {
    const name = this.state.searchName;
    console.log(name);

    AjaxHelper.deleteRecipe(name)
    .then(function(response){
      console.log(response.data);
      this.setState({
        recipeDeleted: "deleted"
      });
      console.log(this.state);
    }.bind(this))
    .catch(function(err){
      console.warn('err');
      return err;
    })
  },

  render: function(){
    return(
      <div className="display">
        <Delete onChangeName={this.onChangeName}
          onSubmitRecipe={this.onSubmitRecipe}
          recipeDeleted={this.state.recipeDeleted} />
      </div>
    )
  }
});

export default DeleteContainer;

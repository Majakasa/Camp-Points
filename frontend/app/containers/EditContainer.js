import React from 'react';
import axios from 'axios';
import ajaxHelpers from '../utils/AjaxHelpers';
import Title from '../fsc/Title';
import ResultsComponent from '../fsc/ResultsComponent';
import FormComponent from '../components/FormComponent';
import EditCamper from '../components/Edit';

const App = React.createClass({

  getInitialState: function() {
    return {
      ajaxReturn: [],
      radioVal: '',
      name: '',
      email: '',
      newName: '',
      newEmail: ''
    };
  },

  updateValState: function(e) {
    console.log("You've chosen:", e.target.value);
    this.setState({
      radioVal: e.target.value
    });
  },

updateContactAjaxCall: function() {
  console.log('Update this contact:', this.state.name);
  const contact = {
    name: this.state.name,
    newName: this.state.newName,
    newEmail: this.state.newEmail
  };
  ajaxHelpers.updateContact(contact)
  .then(function(response){
    console.log("response.data", response.data);
    this.setState({
      ajaxReturn: response.data
    });
  }.bind(this));
},

nameInput: function(e){
  this.setState({
    name: e.target.value
  })
},
emailInput: function(e){
  this.setState({
    email: e.target.value
  })
},
newNameInput: function(e){
  this.setState({
    newName: e.target.value
  })
},
newEmailInput: function(e){
  this.setState({
    newEmail: e.target.value
  })
},
getAppropriateFormComponent: function() {
  switch (this.state.radioVal) {
    case 'see-all':
      console.log('see-all case');
      return (
        <GetContacts onSubmit={this.getContactsAjaxCall} />
      );
      break;

case 'update-contact':
      console.log('update-contact case');
      return (
        <edit
          nameInput={this.nameInput}
          newNameInput={this.newNameInput}
          newEmailInput={this.newEmailInput}
          onSubmit={this.updateContactAjaxCall}
        />
      )
      break;

    default:
      return <p>Make a choice</p>
  }
},

  render: function(){
  return(
   <div className="main-container">
     <Title/>
     <FormComponent
       updateValState={this.updateValState}
     />
     {this.getAppropriateFormComponent()}
     <ResultsComponent
       contacts={this.state.ajaxReturn}
     />
   </div>
  )
  }
});

import React from 'react';
import Home from './Home';

const Main = React.createClass({
  render: function(){
    return(
      <div>
      <h1>Camp points</h1>
        {this.props.children}
      </div>
    )
  }
});

export default Main;

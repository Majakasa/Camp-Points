import React from 'react';
import {Link} from 'react-router';


const Home = React.createClass({
  clickConfirm: function(){
  console.log('button was clicked!');
  },
  render: function(){
    return (
      <div>
      <h1>Home</h1>
        <ul className='nav-bar'>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/add'}>Add</Link></li>
          <li><Link to={'/list'}>List</Link></li>
          <li><Link to={'/find'}>Find</Link></li>

        </ul>
        {this.props.children}
      </div>
    )
  }
});
export default Home

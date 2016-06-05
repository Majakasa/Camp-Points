import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import About from '../components/About';

import ListContainer from '../containers/ListContainer';
import AddContainer from '../containers/AddContainer';





const routes =(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path='about' component={About} />
      <Route path='add' component={AddContainer} />
      <Route path='list' component={ListContainer} />
    </Route>
  </Router>
);

export default routes;

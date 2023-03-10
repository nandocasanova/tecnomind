import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Rating from '../pages/Rating';
import Register from '../pages/Register';

function Routes() {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route exact path='/rating' component={Rating} />
      </Switch>
    </AnimatePresence>
  );
}

export default Routes;

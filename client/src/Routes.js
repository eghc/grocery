import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './views/Dashboard.js';
import NotFound from './views/NotFound.js';
import Home from './views/Home.js';

import axios from 'axios';

export default class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route
          component={Home}
          exact
          path="/"
        />
        <Route
          component={Dashboard}
          exact
          path="/dashboard"
        />
        <Route
          component={NotFound}
          exact
          path="/not-found"
        />
        <Redirect to="/not-found" />
      </Switch>
      );
    }
  }

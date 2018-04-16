'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import NotFoundPage from './components/NotFoundPage';
import Login from './components/Login';
import Register from './components/Register';
import AdminPage from './components/AdminPage';
import BuildTrack from './components/BuildTrack';
import PlanningTrip from './components/PlanningTrip';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="login" component={Login}/>
    <Route path="register" component={Register}/>
    <Route path="buildTrack" component={BuildTrack}/>
    <Route path="planTrip" component={PlanningTrip}/>
    <Route path="adminPage" component={AdminPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;

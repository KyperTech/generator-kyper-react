import React from 'react';
import { Route, IndexRoute } from 'react-router'
import {
    App,
    Home,
    About,
    Profile,
    Login,
    Signup,
    NotFound,
    Cars
  } from './containers';
export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ Home } />
    <Route path="login" component={ Login }/>
    <Route path="signup" component={ Signup }/>
    <Route path="about" component={ About } />
    <Route path="profile" component={ Profile } />
    <Route path="cars" component={ Cars } />
    <Route path="*" component={ NotFound } />
  </Route>
);

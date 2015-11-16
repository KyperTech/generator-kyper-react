import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router'
import { ReduxRouter } from 'redux-router';
import {
    App,
    Home,
    About,
    Profile,
    Login,
    Signup,
    RequireLogin,
    LoginSuccess,
    NotFound,
  } from './containers';
export default class AppRouter extends Component {
  render() {
    //Each Route below corresponds to a page
    return (
      <ReduxRouter>
        <Route path="/" component={ App }>
          <IndexRoute component={ Home } />
          <Route path="login" component={ Login }/>
          <Route path="signup" component={ Signup }/>
          <Route path="about" component={ About } />
          <Route path="profile" component={ Profile } />
          <Route path="*" component={ NotFound } />
        </Route>
      </ReduxRouter>
    )
  }
}

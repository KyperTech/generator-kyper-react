'use strict';

import React from 'react';
import Root from '../app/root';
import createHistory from 'history/lib/createMemoryHistory';
import { reduxReactRouter } from 'redux-router/server';
import Fireuser from 'fireuser';

import configureStore from '../app/store/configureStore';

export default (cb) => {
  //Use matter to get current user
  let fireuser = new Fireuser('https://<%= firebaseName %>.firebaseio.com');
  // Compile an initial state
  const initialState = {
    account: fireuser.currentUser,
  }

  // Create a new Redux store instance
  const store = configureStore(initialState, reduxReactRouter, createHistory);

  // Grab the initial state from our Redux store
  const finalState = store.getState();

  return cb({
    appData: finalState,
    appMarkup: React.renderToString(<Root store={ store } />)
  });

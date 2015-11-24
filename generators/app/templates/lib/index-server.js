'use strict';

import React from 'react';
import Root from '../app/root';
import createHistory from 'history/lib/createMemoryHistory';
import { reduxReactRouter } from 'redux-router/server';
import configureStore from '../app/store/configureStore';

export default (cb) => {
  // Compile an initial state
  const initialState = {
  }

  // Create a new Redux store instance
  const store = configureStore(initialState, reduxReactRouter, createHistory);

  // Grab the initial state from our Redux store
  const finalState = store.getState();
  let markup = React.renderToString(<Root store={ store } />);
  return cb({
    appData: finalState,
    appMarkup: markup
  });
}

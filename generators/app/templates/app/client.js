import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/configureStore';

import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';

const initialState = window.__INITIAL_STATE__ || {
};

const store = configureStore(initialState, reduxReactRouter, createHistory);

let rootElement = document.getElementById('root');

ReactDOM.render(
  <Root store={ store } />, rootElement
);

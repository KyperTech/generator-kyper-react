import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/configureStore';

import { reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';
import matter from './helpers/matter';
import Matter from 'kyper-matter';
let matter = new Matter('<%= appName %>');
const initialState = window.__INITIAL_STATE__ || {
  account: {id: matter.currentUser ? matter.currentUser.id : null},
  accounts: [matter.currentUser]
};

const store = configureStore(initialState, reduxReactRouter, createHistory);

let rootElement = document.getElementById('root');

ReactDOM.render(
  <Root store={ store } />, rootElement
);

import React from 'react';
import ReactDOM from 'react-dom';
import { reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';
import { getMatter } from 'redux-matter';
import Root from './root';
import configureStore from './store/configureStore';

let matter = getMatter();

const store = configureStore({account: matter.currentUser}, reduxReactRouter, createHistory);

let rootElement = document.getElementById('root');

ReactDOM.render(
  <Root store={ store } />, rootElement
);

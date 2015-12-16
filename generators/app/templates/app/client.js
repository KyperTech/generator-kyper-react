import React from 'react';
import ReactDOM from 'react-dom';
import { reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';
import { getMatter } from 'redux-matter';
import Root from './root';
import configureStore from './store/configureStore';

let matter = getMatter();
let entitiesObj = {accounts:{}};
let accountObj = {};

if(matter.currentUser){
  accountObj.id = matter.currentUser.id
  entitiesObj.accounts[matter.currentUser.id] = matter.currentUser
}

const store = configureStore(initialState, reduxReactRouter, createHistory);

let rootElement = document.getElementById('root');

ReactDOM.render(
  <Root store={ store } />, rootElement
);

import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import cars from './cars';
import { Reducers } from 'redux-matter';
const { account, entities } = Reducers;
const rootReducer = combineReducers({
  cars,
  account,
  entities,
  router: routerStateReducer
});

export default rootReducer;

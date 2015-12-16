import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import cars from './cars';
import { Reducers } from 'redux-matter';
const rootReducer = combineReducers({
  cars,
  account: Reducers.account,
  entities: Reducers.entities,
  router: routerStateReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import cars from './cars';
import profile from './profile';

const rootReducer = combineReducers({
  cars,
  profile,
  router: routerStateReducer
});

export default rootReducer;

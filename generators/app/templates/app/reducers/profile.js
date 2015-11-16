import {
  LOGIN_ATTEMPT,
  LOGIN_RESPONSE,
  SIGNUP_ATTEMPT,
  SIGNUP_RESPONSE,
  LOGOUT_ATTEMPT,
  LOGOUT_RESPONSE,
  AUTH_ERR
} from '../actions/profile';

export default function profile(state = {
  isFetching: false,
  account: null
}, action) {
  switch (action.type) {
  case LOGIN_ATTEMPT:
    return merge({}, state, {isFetching: true});
  case LOGIN_RESPONSE:
    return merge({}, state, {isFetching: false}, action.profile);
  case SIGNUP_ATTEMPT:
    return merge({}, state, {isFetching: true});
  case SIGNUP_RESPONSE:
    return merge({}, state, {isFetching: false}, action.profile);
  case LOGOUT_ATTEMPT:
    return merge({}, state, {isFetching: true});
  case LOGOUT_RESPONSE:
    return merge({}, {isFetching: false});
  case AUTH_ERR:
    return merge({}, state, {isFetching: false});
  default:
    return state;
  }
}

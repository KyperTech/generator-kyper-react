export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE';
export const SIGNUP_ATTEMPT = 'SIGNUP_ATTEMPT';
export const SIGNUP_RESPONSE = 'SIGNUP_RESPONSE';
export const LOGOUT_ATTEMPT = 'LOGOUT_ATTEMPT';
export const LOGOUT_RESPONSE = 'LOGOUT_RESPONSE';
export const AUTH_ERR = 'AUTH_ERR';

import Matter from 'kyper-matter';
let matter = new Matter('<% name %>');

// Fetches a single user from Github API unless it is cached.
// Relies on Redux Thunk middleware.
export function loadAccount(login, requiredFields = []) {
  return (dispatch, getState) => {
    const user = getState().account;
    if (user) {
      return null;
    }
  };
}
export function attemptLogin(loginData) {
  console.log('attempt login action', loginData);
 return {
   type: LOGIN_ATTEMPT,
   payload: loginData
 };
}
//Requires react-thunk
export function login(loginData) {
  console.log('login action called', loginData);
  return (dispatch, getState) => {
    console.log('distpatch function running.');
    dispatch(attemptLogin(loginData));
    console.log('distpatch function running.');
    return matter.login(loginData)
    .then(loginRes => {
      console.log('signup response');
      return dispatch(receiveLogin(loginData, loginRes));
    });
  }
}
export function receiveLogin(loginData, res) {
  console.log('receive login called', loginData, res);
 return {
   type: LOGIN_RESPONSE,
   loginData: loginData,
   account: res,
   receivedAt: Date.now()
 };
}

export function attemptSignup(signupData) {
 return {
   type: SIGNUP_ATTEMPT,
   payload: signupData
 };
}
export function signup(signupData) {
  return dispatch => {
    distpatch(attemptSignup(signupData));
    return matter.signup(action.payload)
    .then((loginRes) => {
      dispatch(receiveSignup(signupData, loginRes));
    }, (err) => {
      return {type: AUTH_ERR, payload: err};
    });
  }
}
export function receiveSignup(signupData, res) {
 return {
   type: SIGNUP_RESPONSE,
   signupData,
   account: res,
   receivedAt: Date.now()
 };
}

export function logout() {
  return dispatch => {
    dispatch(attemptLogout());
    return matter.logout()
    .then((logoutRes) => {
      console.log('logout successful:', logoutRes);
      dispatch(receiveLogout(logoutRes));
    }, (err) => {
      return {type: AUTH_ERR, payload: err};
    });
  }
}
export function attemptLogout() {
  return {
    type: LOGOUT_ATTEMPT
  };
}
export function receiveLogout(res) {
 return {
   type: LOGOUT_RESPONSE,
   account: null,
   receivedAt: Date.now()
 };
}

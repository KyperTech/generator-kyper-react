export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE';
export const SIGNUP_ATTEMPT = 'SIGNUP_ATTEMPT';
export const SIGNUP_RESPONSE = 'SIGNUP_RESPONSE';
export const LOGOUT_ATTEMPT = 'LOGOUT_ATTEMPT';
export const LOGOUT_RESPONSE = 'LOGOUT_RESPONSE';
export const AUTH_ERR = 'AUTH_ERR';

import Matter from 'kyper-matter';
let matter = new Matter('<%= appName %>');

export function attemptLogin(loginData) {
 return {
   type: LOGIN_ATTEMPT,
   payload: loginData
 };
}
//Requires react-thunk
export function login(loginData) {
  console.log('Login action called.');
  return (dispatch, getState) => {
    dispatch(attemptLogin(loginData));
    return matter.login(loginData)
    .then(loginRes => {
      console.log('Login response', loginRes);
      return dispatch(receiveLogin(loginData, loginRes));
    });
  }
}
export function receiveLogin(loginData, res) {
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
    .then((signupRes) => {
      console.log('Signup response', signupRes);
      dispatch(receiveSignup(signupData, signupRes));
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

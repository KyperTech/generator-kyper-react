export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT'
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE'
export const SIGNUP_ATTEMPT = 'SIGNUP_ATTEMPT'
export const SIGNUP_RESPONSE = 'SIGNUP_RESPONSE'
export const LOGOUT_ATTEMPT = 'LOGOUT_ATTEMPT'
export const LOGOUT_RESPONSE = 'LOGOUT_RESPONSE'
export const AUTH_ERR = 'AUTH_ERR'

import Fireuser from 'fireuser'
let fireuser = new Fireuser('<%= appName %>')

export function attemptLogin (loginData) {
  return {
    type: LOGIN_ATTEMPT,
    payload: loginData
  }
}
export function login (loginData) {
  return (dispatch, getState) => {
    dispatch(attemptLogin(loginData))
    return fireuser.login(loginData)
    .then(loginRes => {
      return dispatch(receiveLogin(loginData, loginRes))
    })
  }
}
export function receiveLogin (loginData, account) {
  return {
    type: LOGIN_RESPONSE,
    loginData,
    account,
    receivedAt: Date.now()
  }
}

export function attemptSignup (payload) {
  return {
    type: SIGNUP_ATTEMPT,
    payload
  }
}
export function signup (signupData) {
  return dispatch => {
    dispatch(attemptSignup(signupData))
    return fireuser.signup(signupData)
      .then(signupRes =>
        dispatch(receiveSignup(signupData, signupRes)),
        payload => Object.assign({}, { type: AUTH_ERR, payload })
      )
  }
}
export function receiveSignup (signupData, account) {
  return {
    type: SIGNUP_RESPONSE,
    signupData,
    account
    receivedAt: Date.now()
 }
}

export function logout () {
  return dispatch => {
    dispatch(attemptLogout())
    return fireuser.logout()
      .then(logoutRes =>
        dispatch(receiveLogout(logoutRes)),
        payload => Object.assign({ type: AUTH_ERR, payload })
      })
  }
}

export function attemptLogout () {
  return {
    type: LOGOUT_ATTEMPT
  }
}

export function receiveLogout () {
  return {
    type: LOGOUT_RESPONSE,
    account: null,
    receivedAt: Date.now()
  }
}

export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE';
export const SIGNUP_ATTEMPT = 'SIGNUP_ATTEMPT';
export const SIGNUP_RESPONSE = 'SIGNUP_RESPONSE';
export const LOGOUT_ATTEMPT = 'LOGOUT_ATTEMPT';
export const LOGOUT_RESPONSE = 'LOGOUT_RESPONSE';
export const AUTH_ERR = 'AUTH_ERR';
/** WARNING
 * This setup is for demo purposes only and does not actually authenticate
 * Reference the following for an example
 * https://github.com/rackt/redux/tree/master/examples/real-world
 */
// Fetches a single user from API unless it is cached.
// Relies on Redux Thunk middleware.
export function loadAccount(login, requiredFields = []) {
  return (dispatch, getState) => {
    const user = getState().profile;
    if (user) {
      return null;
    }
  };
}
export function attemptLogin(loginData) {
 return {
   type: LOGIN_ATTEMPT,
   payload: loginData
 };
}
//Requires react-thunk
export function login(loginData) {
  return (dispatch, getState) => {
    dispatch(attemptLogin(loginData));
    //Call to API or use middleware here
    let fakeProfileData = {
      username: loginData.username || 'Guest',
      email: loginData.email || 'test@test.com',
    };
    receiveLogin(fakeProfileData);
  }
}
export function receiveLogin(profile) {
 return {
   type: LOGIN_RESPONSE,
   profile: profile,
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
    dispatch(attemptSignup(signupData));
    //Call to API or use middleware here
    let fakeProfileData = {
      username: signupData.username || 'Guest',
      email: signupData.email || 'test@test.com',
    };
    receiveSignup(fakeProfileData);
  }
}
export function receiveSignup(profile) {
 return {
   type: SIGNUP_RESPONSE,
   profile: profile,
   receivedAt: Date.now()
 };
}

export function logout() {
  return dispatch => {
    dispatch(attemptLogout());
    //Call to API or use middleware here
    dispatch(receiveLogout());
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
   profile: null,
   receivedAt: Date.now()
 };
}

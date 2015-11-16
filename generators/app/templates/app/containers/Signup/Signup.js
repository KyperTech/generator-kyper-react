import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import SignupForm from '../../components/SignupForm/SignupForm';

import './Signup.scss';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleSignupClick = this.handleSignupClick.bind(this);
  }
  handleSignupClick(signupData) {
    this.props.signup(signupData);
  }
  render() {
    return (
      <div className="Signup">
        <h2>Signup</h2>
        <SignupForm onLoginClick={ signupData => this.handleSignupClick(signupData) }/>
      </div>
    )
  }
}
export default Signup;

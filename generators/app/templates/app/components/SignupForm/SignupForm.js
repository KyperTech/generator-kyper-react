import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
// import './SignupForm.scss';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {username: '', password: ''};
  }
  static propTypes = {
    onLoginClick: PropTypes.func.isRequired
  };
  /**
   * @function handleSignup
   * @description Fire onLoginClick function provided to component when login is clicked
   */
  handleSignup(event) {
    event.preventDefault();
    this.props.onLoginClick({username:this.state.username, password: this.password});
  }
  /**
   * @function handleUsernameChange
   * @description Update the state with the values from the form inputs.
   * @fires context#setState
   */
  handleInputChange(event) {
    this.setState({
      ['input']: event.target.value
    });
  }
  handlePasswordChange(event) {
    event.preventDefault();
    this.password = event.target.value;
  }
  render() {
    return (
      <form className="SignupForm" onSubmit={this.handleSignup}>
        <div className="SignupForm-Input-Wrapper">
          <span className="SignupForm-Label">Username</span>
          <input className="SignupForm-Input" onChange={this.handleInputChange}/>
        </div>
        <div className="input-wrapper">
          <span className="SignupForm-Label">Email</span>
          <input className="SignupForm-Input" onChange={this.handleInputChange}/>
        </div>
        <div className="input-wrapper">
          <span className="SignupForm-Label">Name</span>
          <input className="SignupForm-Input" onChange={this.handleInputChange}/>
        </div>
        <div className="input-wrapper">
          <span className="SignupForm-Label">Password</span>
          <input className="SignupForm-Input" onChange={this.handlePasswordChange} type='password' />
        </div>
        <div className="input-wrapper">
          <span className="SignupForm-Label">Confirm</span>
          <input className="SignupForm-Input" onChange={this.handleInputChange} type='password'/>
        </div>
        <div className="input-wrapper">
          <button className="SignupForm-Button" type="submit">Signup</button>
          <button className="SignupForm-Button" type="reset">Cancel</button>
        </div>
     </form>
    )
  }
}

export default SignupForm;

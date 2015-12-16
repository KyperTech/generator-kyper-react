import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import './SignupForm.scss';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePrivateChange = this.handlePrivateChange.bind(this);
    this.state = {};
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
    let newAccountData = this.getState();
    newAccountData.password = this.password ? this.password : '';
    this.props.onLoginClick(newAccountData);
  }
  /**
   * @function handleInputChange
   * @description Update the state with the values from the form inputs.
   * @fires context#setState
   */
  handleInputChange(name, e) {
    e.preventDefault();
    this.setState({
      [name]: e.target.value
    });
  }
  /**
   * @function handleUsernameChange
   * @description Store private values.
   * @fires context#setState
   */
  handlePrivateChange(name, e) {
    e.preventDefault();
    this[name] = e.target.value;
  }
  render() {
    return (
      <form className="SignupForm" onSubmit={this.handleSignup}>
        <div className="SignupForm-Input-Wrapper">
          <span className="SignupForm-Label">Username</span>
          <input
            className="SignupForm-Input"
            onChange={this.handleInputChange.bind(this, 'username')}
          />
        </div>
        <div className="input-wrapper">
          <span className="SignupForm-Label">Email</span>
          <input
            className="SignupForm-Input"
            onChange={this.handleInputChange.bind(this, 'email')}
          />
        </div>
        <div className="input-wrapper">
          <span className="SignupForm-Label">Name</span>
          <input
            className="SignupForm-Input"
            onChange={this.handleInputChange.bind(this, 'name')}
          />
        </div>
        <div className="input-wrapper">
          <span className="SignupForm-Label">Password</span>
          <input
            className="SignupForm-Input"
            type='password'
            onChange={this.handlePrivateChange.bind(this, 'password')}
          />
        </div>
        <div className="input-wrapper">
          <span className="SignupForm-Label">Confirm</span>
          <input
            className="SignupForm-Input"
            type='password'
            onChange={this.handlePrivateChange.bind(this, 'confirm')}
          />
        </div>
        <div className="input-wrapper">
          <button className="Button SignupForm-Button" type="submit">
            Signup
          </button>
          <button className="Button SignupForm-Button" type="reset">
            Cancel
          </button>
        </div>
     </form>
    )
  }
}

export default SignupForm;

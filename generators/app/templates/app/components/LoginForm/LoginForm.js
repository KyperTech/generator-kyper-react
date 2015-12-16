import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import './LoginForm.scss';

 class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {username: '', password: ''};
  }
  static propType = {
    onLoginClick: PropTypes.func.isRequired
  };
  /**
   * @function handleLogin
   * @description Fire onLoginClick function provided to component when login is clicked
   */
  handleLogin(event) {
    event.preventDefault();
    this.props.onLoginClick({
      username:this.state.username,
      password: this.password
    });
  }
  /**
   * @function handleUsernameChange
   * @description Update the state with the values from the form inputs.
   * @fires context#setState
   */
  handleUsernameChange(event) {
    this.setState({
      ['username']: event.target.value
    });
  }
  handlePasswordChange(event) {
    this.password = event.target.value;
  }
  render() {
    return (
        <form className="LoginForm" onSubmit={this.handleLogin}>
          <div className="LoginForm-Group">
            <span className="LoginForm-Label">
              Username/Email
            </span>
            <input className="LoginForm-Input" onChange={this.handleUsernameChange}/>
          </div>
          <div className="LoginForm-Group">
            <span className="LoginForm-Label">
              Password
            </span>
            <input className="LoginForm-Input" onChange={this.handlePasswordChange} type='password' />
          </div>
          <div className="LoginForm-Buttons">
            <button className="Button LoginForm-Login" type="submit">
              Login
            </button>
            <button className="Button LoginForm-Cancel" type="reset">
              Cancel
            </button>
          </div>
       </form>
    )
  }
}

export default LoginForm;

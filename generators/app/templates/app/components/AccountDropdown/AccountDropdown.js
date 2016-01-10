import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import './AccountDropdown.scss';

export default class AccountDropdown extends Component {
  constructor() {
    super();
    this.state = {isOpen: false};
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  static propTypes = {
    account: PropTypes.shape({
      username: PropTypes.string.isRequired
    }).isRequired,
    onLogoutClick: PropTypes.func
  };
  toggleDropdown() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    if(!this.state.isOpen) {
      return (
        <div className="AccountDropdown-Closed">
          <button onClick={ this.toggleDropdown }>
            {this.props.account.username}
          </button>
        </div>
      );
    } else {
      return (
        <div className="AccountDropdown-Open">
          <button onClick={ this.toggleDropdown }>
            {this.props.account.username}
          </button>
          <Link className="AccountDropdown-Link" to="/account">
            Profile
          </Link>
          <button onClick={ this.props.onLogoutClick }>
            Logout
          </button>
        </div>
      );
    }
  }
}

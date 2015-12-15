import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import './ProfileDropdown.scss';

class ProfileDropdown extends Component {
  constructor() {
    super();
    this.state = {isOpen: false};
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  static propTypes = {
    profile: PropTypes.shape({
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
        <div className="ProfileDropdown-Closed">
          <button onClick={ this.toggleDropdown }>{this.props.profile.username}</button>
        </div>
      );
    } else {
      return (
        <div className="ProfileDropdown-Open">
          <button onClick={ this.toggleDropdown }>{this.props.profile.username}</button>
          <Link className="ProfileDropdown-Link" to="/profile">Profile</Link>
          <button onClick={ this.props.onLogoutClick }>Logout</button>
        </div>
      );
    }
  }
}

export default ProfileDropdown;

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';
import './ProfileManager.scss';

class ProfileManager extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    profile: PropTypes.object
  };
  render() {
    if(this.props.profile && this.props.profile.username){
      return (
        <ProfileDropdown
          profile={ this.props.profile }
        />
      )
    } else {
      return (
        <div className="ProfileManager-Buttons">
          <Link className="ProfileManager-Button" to="/login">Login</Link>
          <Link className="ProfileManager-Button" to="/signup">Signup</Link>
        </div>
      );
    }
  }
}

export default ProfileManager;

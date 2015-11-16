import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class ProfileDropdown extends Component {
  static propTypes = {
    profile: PropTypes.shape({
      username: PropTypes.string.isRequired
    }).isRequired
  };
  render() {
    return (
      <div className="buttons">
        <Link to="/profile">{this.props.profile.username}</Link>
      </div>
    )
  }
}

export default ProfileDropdown;

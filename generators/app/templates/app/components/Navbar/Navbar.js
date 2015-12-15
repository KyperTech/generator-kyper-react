import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import ProfileManager from '../ProfileManager/ProfileManager';
import './Navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    profile: PropTypes.object,
    onLogoutClick: PropTypes.func
  };
  render() {
    let brandLinkLoc = (this.props.profile && this.props.profile.username) ? '/cars' : '/';
    let brandLink = <Link to={ brandLinkLoc }><%= appName %></Link>
    return (
      <div className="Navbar">
        <div className="Navbar-Brand">
          { brandLink }
        </div>
        <div className="Navbar-Spacer"></div>
        <ProfileManager
          profile={ this.props.profile }
          onLogoutClick={ this.props.onLogoutClick }
        />
      </div>
    )
  }
}
export default Navbar;

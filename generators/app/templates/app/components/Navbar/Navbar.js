import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import ProfileManager from '../ProfileManager/ProfileManager';
import './Navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    profile: PropTypes.object
  };
  render() {
    return (
      <div className="Navbar">
        <div className="Navbar-Brand">
          <Link to="/">Starter</Link>
        </div>
        <div className="Navbar-Spacer"></div>
        <ProfileManager profile={ this.props.profile } />
      </div>
    )
  }
}
export default Navbar;

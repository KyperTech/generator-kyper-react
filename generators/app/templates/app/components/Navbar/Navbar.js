import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import AccountManager from '../AccountManager/AccountManager'
import './Navbar.scss'

export default class Navbar extends Component {
  constructor (props) {
    super(props)
  }

  static propTypes = {
    account: PropTypes.object,
    onLogoutClick: PropTypes.func
  };

  render () {
    const brandLinkLoc = (this.props.account && this.props.account.username) ? '/cars' : '/'
    return (
      <div className="Navbar">
        <div className="Navbar-Brand">
          <Link to={ brandLinkLoc }><%= appName %></Link>
        </div>
        <div className="Navbar-Spacer"></div>
        <AccountManager
          account={ this.props.account }
          onLogoutClick={ this.props.onLogoutClick }
        />
      </div>
    )
  }
}

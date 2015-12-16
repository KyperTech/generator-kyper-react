import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'redux-matter';
import { Link } from 'react-router';
import './Profile.scss';

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let emailTo = `mailto:${this.props.account.email || ''}`;
    return (
      <div className="Profile">
        <div className="Profile-Data">
          <span className="Profile-Datapoint Profile-Username">
            { this.props.account.username }
          </span>
          <span className="Profile-Datapoint Profile-Name">
            { this.props.account.name || 'No Name' }
          </span>
          <span className="Profile-Datapoint Profile-Role">
            { this.props.account.role }
          </span>
          <a className="Profile-Datapoint Profile-Email" href={ emailTo }>
            { this.props.account.email }
          </a>
          <button className="Button" onClick={ this.props.logout }>
            Logout
          </button>
        </div>
      </div>
    )
  }
}
//Place state of redux store into props of component
function mapStateToProps(state) {
  return {
    account: state.account ? state.entities.accounts[state.account.id] : null,
    router: state.router
  };
}
//Place action methods into props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);

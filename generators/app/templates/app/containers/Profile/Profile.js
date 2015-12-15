import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/profile';
import { Link } from 'react-router';
import './Profile.scss';

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let emailTo = `mailto:${this.props.profile.email || ''}`;
    return (
      <div className="Profile">
        <div className="Profile-Data">
          <span className="Profile-Datapoint Profile-Username">{ this.props.profile.username }</span>
          <span className="Profile-Datapoint Profile-Name">{ this.props.profile.name || 'No Name' }</span>
          <span className="Profile-Datapoint Profile-Role">{ this.props.profile.role }</span>
          <a className="Profile-Datapoint Profile-Email" href={ emailTo }>
            { this.props.profile.email }
          </a>
          <button className="Button" onClick={ this.props.logout }>Logout</button>
        </div>
      </div>
    )
  }
}
//Place state of redux store into props of component
function mapStateToProps(state) {
  return {
    profile: state.profile,
    router: state.router
  };
}
//Place action methods into props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);

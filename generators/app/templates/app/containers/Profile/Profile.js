import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/auth';
import { Link } from 'react-router';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.logout = this.props.logout.bind(this);
  }
  render() {
    return (
      <div className="homepage">
        <h2>Profile Page</h2>
        <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
}
//Place state of redux store into props of component
function mapStateToProps(state) {
  return {
    account: state.account,
    router: state.router
  };
}
//Place action methods into props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);

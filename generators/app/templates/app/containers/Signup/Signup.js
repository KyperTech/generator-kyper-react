import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Actions from '../../actions'
import SignupForm from '../../components/SignupForm/SignupForm'

import './Signup.scss'

class Signup extends Component {
  constructor (props) {
    super(props)
  }

  static propTypes = {
    signup: PropTypes.func
  };

  render () {
    return (
      <div className="Signup">
        <h2>Signup</h2>
        <SignupForm onLoginClick={ signupData => this.props.signup(signupData) }/>
      </div>
    )
  }
}
// Place state of redux store into props of component
function mapStateToProps (state) {
  return {
    router: state.router
  }
}
// Place action methods into props
function mapDispatchToProps (dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)

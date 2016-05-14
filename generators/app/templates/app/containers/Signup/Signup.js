import { capitalize, find } from 'lodash'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
// import { signup } from 'fireuser'
import * as Actions from '../../actions'

// Components
import SignupForm from '../../components/SignupForm/SignupForm'
import Paper from 'material-ui/lib/paper'
import RaisedButton from 'material-ui/lib/raised-button'
import CircularProgress from 'material-ui/lib/circular-progress'
import Snackbar from 'material-ui/lib/snackbar'

import './Signup.scss'

class Signup extends Component {
  constructor (props) {
    super(props)
  }

  state = {
    errors: { username: null, password: null },
    snackCanOpen: false
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.account.username) {
      this.context.router.push(`/${nextProps.account.username}`)
    }
  }

  handleSnackClose = () => {
    this.setState({
     snackCanOpen: false
    })
  }

  /**
   * @function reset
   * @description Reset whole state (inputs, errors, snackbar open/close)
   */
  reset = () =>
    this.setState({
      errors: {},
      username: null,
      email: null,
      name: null,
      snackCanOpen: false
    })

  /**
   * @function handleSignup
   * @description Call signup through redux-devshare action
   */
  handleSignup = signupData => {
    this.setState({ snackCanOpen: true, isLoading: true })
    signup(signupData)
      .then((res) => this.context.router.push(`/${res.user.username}`))
      .catch(error => this.error = error.toString || error)
      .finally(() => this.setState({ isLoading: false }))
    // event({ category: 'User', action: 'Email Signup' })
  }

  render () {
    const { isFetching, error } = this.props.account || {}

    if (isFetching) {
      return (
        <div className="Signup">
          <div className="Signup-Progress">
            <CircularProgress  mode="indeterminate" />
          </div>
        </div>
      )
    }
    return (
      <div className="Signup">
        <Paper className="Signup-Panel">
          <SignupForm onSignup={ this.handleSignup } />
        </Paper>
        <div className="Signup-Or">
          or
        </div>
        <RaisedButton
          label="Sign in with Google"
          secondary={ true }
          onTouchTap={ this.handleSignup.bind(this, 'google') }
        />
        <RaisedButton
          label="Sign in with GitHub"
          secondary={ true }
          onTouchTap={ this.handleSignup.bind(this, 'github') }
        />
        <div className="Signup-Login">
          <span className="Signup-Login-Label">
            Already have an account?
          </span>
          <Link className="Signup-Login-Link" to="/login">Login</Link>
        </div>
        <Snackbar
          open={ error !== null && this.state.snackCanOpen }
          message={ error || 'Signup error' }
          action="close"
          autoHideDuration={ 3000 }
          onRequestClose={ this.handleSnackClose }
        />
      </div>
    )
  }
}


// Place state of redux store into props of component
const mapStateToProps = (state) => {
  return {
    account: state.account,
    router: state.router
  }
}

// Place action methods into props
const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Signup)

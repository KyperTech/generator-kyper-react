import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as Actions from '../../actions'

// Components
import LoginForm from '../../components/LoginForm/LoginForm'
import Paper from 'material-ui/lib/paper'
import CircularProgress from 'material-ui/lib/circular-progress'
import Snackbar from 'material-ui/lib/snackbar'
import RaisedButton from 'material-ui/lib/raised-button'
import FontIcon from 'material-ui/lib/font-icon'

import './Login.scss'

class Login extends Component {
  constructor (props) {
    super(props)
  }

  state = {
    snackCanOpen: false,
    errors: { username: null, password: null }
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.account.username) {
      this.context.router.push(`/${nextProps.account.username}`)
    }
  }

  handleRequestClose = () =>
    this.setState({
      snackCanOpen: false,
    })

  handleLogin = loginData => {
    this.setState({
      snackCanOpen: true
    })
    this.props.login(loginData)
    // event({ category: 'User', action: 'Email Login' })
  }

  providerLogin = provider => {
    this.props.authWithProvider(provider)
    // event({ category: 'User', action: 'Provider Login', value: provider })
  }

  render () {

    const { isFetching, error } = this.props.account || {}

    if (isFetching) {
      return (
        <div className="Login">
          <div className="Login-Progress">
            <CircularProgress  mode="indeterminate" />
          </div>
        </div>
      )
    }

    return (
      <div className="Login">
        <Paper className="Login-Panel">
          <LoginForm onLogin={ this.handleLogin } />
        </Paper>
        <div className="Login-Or">
          or
        </div>
        <RaisedButton
          label="Sign in With Google"
          secondary={ true }
          onTouchTap={ this.providerLogin.bind(this, 'google') }
        />
        <RaisedButton
          label="Sign in With GitHub"
          secondary={ true }
          onTouchTap={ this.providerLogin.bind(this, 'github') }
        />
        <div className="Login-Signup">
          <span className="Login-Signup-Label">
            Need an account?
          </span>
          <Link className="Login-Signup-Link" to="/signup">
            Sign Up
          </Link>
        </div>
        <Snackbar
          open={ typeof error !== 'undefined' && this.state.snackCanOpen }
          message={ error || 'Error' }
          action="close"
          autoHideDuration={ 3000 }
          onRequestClose={ this.handleRequestClose }
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)

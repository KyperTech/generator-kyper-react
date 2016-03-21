import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from '../../actions'
import './App.scss'

import Navbar from '../../components/Navbar/Navbar'

class Main extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='App'>
        <Navbar
          account={ this.props.account }
          onLogoutClick={ this.props.logout }
        />
        { this.props.children }
      </div>
    )
  }
}
// Place state of redux store into props of component
function mapStateToProps (state) {
  return {
    account: state.account,
    router: state.router
  }
}
// Place action methods into props
function mapDispatchToProps (dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

import React, { Component } from 'react'
import { ReduxRouter } from 'redux-router'
import routes from './routes'

class AppRouter extends Component {
  render () {
    return (
      <ReduxRouter>
        { routes }
      </ReduxRouter>
    )
  }
}

export default AppRouter

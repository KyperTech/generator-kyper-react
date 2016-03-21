import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import AppRouter from './app-router'

class Root extends Component {
  constructor (dev) {
    super()
    this.dev = dev || false
  }

  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render () {
    return (
      <Provider store={this.props.store} className='Root'>
        <AppRouter />
      </Provider>
    )
  }
}

export default Root

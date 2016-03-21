import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import { reduxReactRouter } from 'redux-router'
import thunkMiddleware from 'redux-thunk'
import createHistory from 'history/lib/createBrowserHistory'

const createStoreWithMiddleware = compose(
  // Save for redux middleware
  applyMiddleware(thunkMiddleware),
  reduxReactRouter({
    createHistory
  }),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
)(createStore)

export default function configureStore (initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

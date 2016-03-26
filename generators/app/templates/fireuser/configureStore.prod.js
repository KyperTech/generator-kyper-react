import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import { Middleware } from 'redux-devshare'
import { syncHistory } from 'react-router-redux'

export default function configureStore (initialState, history) {
  const reduxRouterMiddleware = syncHistory(history)
  const createStoreWithMiddleware = compose(
    applyMiddleware(thunk, Middleware, reduxRouterMiddleware)
  )(createStore)
  const store = createStoreWithMiddleware(rootReducer, initialState)

  return store
}

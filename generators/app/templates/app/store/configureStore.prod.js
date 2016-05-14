import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
// import { syncHistory } from 'react-router-redux'

export default function configureStore (initialState, history) {
  // const reduxRouterMiddleware = syncHistory(history)
  const createStoreWithMiddleware = compose(
    // applyMiddleware(thunk, reduxRouterMiddleware)
    applyMiddleware(thunk)
  )(createStore)
  const store = createStoreWithMiddleware(rootReducer, initialState)

  return store
}

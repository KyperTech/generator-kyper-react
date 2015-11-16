import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import { devTools } from 'redux-devtools';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/lib/createBrowserHistory';
import routes from '../routes';

const createStoreWithMiddleware = compose(
  // Save for redux middleware
  applyMiddleware(thunkMiddleware),
  reduxReactRouter({
    createHistory
  }),
  devTools()
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

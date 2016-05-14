import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'
import { Reducers } from 'redux-fireuser'
import tabs from './tabs'
const { account, projects, entities } = Reducers

const rootReducer = combineReducers({
  account,
  entities,
  tabs,
  projects,
  router: routeReducer
})

export default rootReducer

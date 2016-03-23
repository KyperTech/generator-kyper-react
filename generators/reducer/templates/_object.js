import {
  ADD_<%= singularUpper %>,
  UPDATE_<%= singularUpper %>,
  REMOVE_<%= singularUpper %>,
} from '../actions/<%= lowerCase %>'
import { merge, clone } from 'lodash'

export default function <%= lowerCase %>(state = {}, action) {
  switch (action.type) {
  case ADD_<%= singularUpper %>:
    if(!action.name){
      console.error('Name is required to add a <%= camelName %>')
      return state
    }
    if(!state[action.name]){
      console.error('<%= camelName %> with that name already exists')
      return state
    }
    let newState = {}
    newState[action.name] = action.payload
    return merge({}, state, newState)
  case UPDATE_<%= singularUpper %>:
    if (!action.name) {
      console.error('Name is required to update a <%= camelName %>')
      return state
    }
    if (!state[action.name]) {
      console.error('<%= camelName %> with that name not found')
      return state
    }
    let newState = clone(state)
    newState[action.name] = action.payload
    return merge({}, state, newState)
  case REMOVE_<%= singularUpper %>:
    if (!action.name ){
      console.error('Name is required to remove a <%= camelName %>')
      return state
    }
    if(!state[action.name]){
      console.error('<%= camelName %> with that name not found')
      return state
    }
    let newState = clone(state)
    newState[action.name] = action.payload
    return merge({}, state, newState)
  default:
    return state
  }
}

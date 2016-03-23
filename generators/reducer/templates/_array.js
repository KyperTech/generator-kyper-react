import {
  ADD_<%= singularUpper %>,
  UPDATE_<%= singularUpper %>,
  REMOVE_<%= singularUpper %>,
} from '../actions/<%= lowerCase %>'
import { union, clone } from 'lodash'
export default function <%= lowerCase %>(state = [], action) {
  switch (action.type) {
  case ADD_<%= singularUpper %>:
    if(!action.payload){
      console.error('Payload required to add a <%= name %>')
      return state
    }
    return [...state, action.payload]
  case UPDATE_<%= singularUpper %>:
    if(!action.index && action.payload){
      console.error('Index and payload required to update a <%= name %>')
      return state
    }
    if(!state[action.name]){
      console.error('<%= name %> with that name already exists')
      return state
    }
    let newState = clone(state)
    newState[action.index] = action.payload
    return newState
  case REMOVE_<%= singularUpper %>:
    if(!action.index){
      console.error('Index required to delete a <%= name %>')
      return state
    }
    if(!state[action.index]){
      console.error('<%= name %> at that index does not exist')
      return state
    }
    let newState = clone(state)
    delete newState[action.index]
    return newState
  default:
    return state
  }
}

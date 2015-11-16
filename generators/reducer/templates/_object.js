import {
  ADD_<%= singularName.toUpperCase() %>,
  UPDATE_<%= singularName.toUpperCase() %>,
  REMOVE_<%= singularName.toUpperCase() %>,
} from '../actions/<%= name.toLowerCase() %>';
import {merge, clone} from 'lodash';

export default function <%= name.toLowerCase() %>(state = {}, action) {
  switch (action.type) {
  case ADD_<%= singularName.toUpperCase() %>:
    if(!action.name){
      console.error('Name is required to add a <%= camelName %>');
      return state;
    }
    if(!state[action.name]){
      console.error('<%= camelName %> with that name already exists');
      return state;
    }
    let newState = {};
    newState[action.name] = action.payload;
    return merge({}, state, newState);
  case UPDATE_<%= singularName.toUpperCase() %>:
    if(!action.name){
      console.error('Name is required to update a <%= camelName %>');
      return state;
    }
    if(!state[action.name]){
      console.error('<%= camelName %> with that name not found');
      return state;
    }
    let newState = clone(state);
    newState[action.name] = action.payload;
    return merge({}, state, newState);
  case REMOVE_<%= singularName.toUpperCase() %>:
    if(!action.name){
      console.error('Name is required to remove a <%= camelName %>');
      return state;
    }
    if(!state[action.name]){
      console.error('<%= camelName %> with that name not found');
      return state;
    }
    let newState = clone(state);
    newState[action.name] = action.payload;
    return merge({}, state, newState);
  default:
    return state;
  }
}

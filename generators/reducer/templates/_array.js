import {
  ADD_<%= singularName.toUpperCase() %>,
  UPDATE_<%= singularName.toUpperCase() %>,
  REMOVE_<%= singularName.toUpperCase() %>,
} from '../actions/<%= name.toLowerCase() %>';
import {union, clone} from 'lodash';
export default function <%= name.toLowerCase() %>(state = [], action) {
  switch (action.type) {
  case ADD_<%= singularName.toUpperCase() %>:
    if(!action.payload){
      console.error('Payload required to add a <%= name %>');
      return state;
    }
    return [...state, action.payload];
    break;
  case UPDATE_<%= singularName.toUpperCase() %>:
    if(!action.index && action.payload){
      console.error('Index and payload required to update a <%= name %>');
      return state;
    }
    if(!state[action.name]){
      console.error('<%= name %> with that name already exists');
      return state;
    }
    let newState = clone(state);
    newState[action.index] = action.payload;
    return newState;
    break;
  case REMOVE_<%= singularName.toUpperCase() %>:
    if(!action.index){
      console.error('Index required to delete a <%= name %>');
      return state;
    }
    if(!state[action.index]){
      console.error('<%= name %> at that index does not exist');
      return state;
    }
    let newState = clone(state);
    delete newState[action.index];
    return newState;
    break;
  default:
    return state;
  }
}

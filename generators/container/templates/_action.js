export const ADD_<%= upperCase %> = 'ADD_<%= upperCase %>';
export const REMOVE_<%= upperCase %> = 'REMOVE_<%= upperCase %>';
export const UPDATE_<%= upperCase %> = 'UPDATE_<%= upperCase %>';

export function add<%= pascalCase %>(<%= lowerCase %>) {
  return {
    type: 'ADD_<%= upperCase %>',
    payload: <%= lowerCase %>
  };
}
export function remove<%= pascalCase %>(<%= lowerCase %>) {
  return {
    type: 'REMOVE_<%= upperCase %>',
    payload: <%= lowerCase %>
  };
}
export function update<%= pascalCase %>(<%= lowerCase %>) {
  return {
    type: 'UPDATE_<%= upperCase %>',
    payload: <%= lowerCase %>
  };
}

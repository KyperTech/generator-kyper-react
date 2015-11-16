export const ADD_<%= name.toUpperCase() %> = 'ADD_<%= name.toUpperCase() %>';
export const REMOVE_<%= name.toUpperCase() %> = 'REMOVE_<%= name.toUpperCase() %>';
export const UPDATE_<%= name.toUpperCase() %> = 'UPDATE_<%= name.toUpperCase() %>';

export function add<%= camelName %>(<%= name.toLowerCase() %>) {
  return {
    type: 'ADD_<%= name.toUpperCase() %>',
    payload: <%= name.toLowerCase() %>
  };
}
export function remove<%= camelName %>(<%= name.toLowerCase() %>) {
  return {
    type: 'REMOVE_<%= name.toUpperCase() %>',
    payload: <%= name.toLowerCase() %>
  };
}
export function update<%= camelName %>(<%= name.toLowerCase() %>) {
  return {
    type: 'UPDATE_<%= name.toUpperCase() %>',
    payload: <%= name.toLowerCase() %>
  };
}

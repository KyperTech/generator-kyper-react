import React, { Component, PropTypes } from 'react'
import './<%= name %>.scss'

export default class <%= name %> extends Component {
  constructor (props){
    super(props);
  }
  static propTypes = {

  };
  render (){
    return (
      <div className='<%= name %>'>

      </div>
    );
  }
}

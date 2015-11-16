import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../actions/<%= name.toLowerCase() %>';
import './<%= name %>.scss';

class <%= name %> extends Component {
  constructor(props){
    super(props);
  }
  static propTypes = {

  };
  render(){
    return (
      <div className="<%= name %>">

      </div>
    );
  }
}
//Place state of redux store into props of component
function mapStateToProps(state) {
  return {
    router: state.router
  };
}
//Place action methods into props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(<%= name %>);

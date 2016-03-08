import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CarsList from '../../components/CarsList/CarsList'
import * as Actions from '../../actions/cars'
import './Cars.scss'

class Cars extends Component {
  constructor (props){
    super(props)
  }

  static propTypes = {

  };

  render (){
    return (
      <div className='Cars'>
        <h2>Cars</h2>
        <CarsList cars={ this.props.cars } onCarAddClick={ this.props.addCar }/>
      </div>
    )
  }
}
//Place state of redux store into props of component
function mapStateToProps (state) {
  return {
    cars: state.cars,
    router: state.router
  }
}
//Place action methods into props
function mapDispatchToProps (dispatch) {
  return bindActionCreators(Actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Cars)

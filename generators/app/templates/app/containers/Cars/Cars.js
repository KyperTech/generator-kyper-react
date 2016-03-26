import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions/cars'
import './Cars.scss'

class Cars extends Component {
  constructor (props) {
    super(props)
  }

  static propTypes = {
    cars: PropTypes.array,
    addCar: PropTypes.func
  }

  render () {
    const carsList = this.props.cars.map((car, i) => {
      return <li key={ i }>{ car.name } - { car.hp }</li>
    })
    return (
      <div className='Cars'>
        <h2>Cars</h2>
        <div class='ClassList'>
          { carsList }
          <button onClick={ this.handleClick.bind(this) }>Add tesla</button>
        </div>
      </div>
    )
  }
}
// Place state of redux store into props of component
function mapStateToProps (state) {
  return {
    cars: state.cars,
    router: state.router
  }
}

// Place action methods into props
function mapDispatchToProps (dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cars)

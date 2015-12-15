import React, { Component, PropTypes } from 'react';
import './CarsList.scss';

class CarsList extends Component {
  constructor() {
    super();
  }
  static propTypes = {
    cars: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      hp: PropTypes.number.isRequired
    })).isRequired,
    onCarAddClick: PropTypes.func
  };
  handleClick(e) {
    if(this.props && this.props.onCarAddClick){
      this.props.onCarAddClick({
        name: 'tesla',
        hp: 400
      });
    }
  }
  render() {
    let cars = this.props.cars.map((car, i) => {
      return <li key={ i }>{ car.name } - { car.hp }</li>
    })
    return (
      <div>
        { cars }
        <button onClick={ this.handleClick.bind(this) }>Add tesla</button>
      </div>
    )
  }
}

export default CarsList;

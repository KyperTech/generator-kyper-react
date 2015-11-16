import React, { Component, PropTypes } from 'react';
import './cars.scss';

class Cars extends Component {
  constructor() {
    super();
  }

  handleClick(e) {
    this.props.onCarAddClick({
      name: 'tesla',
      hp: 400
    });
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

Cars.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    hp: PropTypes.number.isRequired
  })).isRequired,
  onCarAddClick: PropTypes.func.isRequired
};

export default Cars;

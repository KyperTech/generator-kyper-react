import React, { Component } from 'react';
import { Link } from 'react-router';
import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h2>Starter Project</h2>
        <p>Example application built with React, Redux, and Matter. </p>
        <p>Webpack is used to supply hot reloading for modules during development.</p>
      </div>
    )
  }
}

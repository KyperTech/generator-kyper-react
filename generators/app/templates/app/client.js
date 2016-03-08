import React from 'react'
import ReactDOM from 'react-dom'
import { reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'
import Root from './root'
import configureStore from './store/configureStore'

const initialState = { cars: [ { name: 'First Car', type: 'Tesla', hp: 600 } ] }

const store = configureStore(initialState, reduxReactRouter, createHistory)

let rootElement = document.getElementById('root')

ReactDOM.render(
  <Root store={ store } />, rootElement
)

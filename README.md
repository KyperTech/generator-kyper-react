# generator-kyper-react

[![NPM version][npm-image]][npm-url]
[![npm downloads][npm-downloads-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![license][license-image]][license-url]
[![code-style][code-style-image]][code-style-url]

Generator for a React projects that use Redux and are bundled with Webpack. There are also sub-generators for Components, Containers(Redux linked component), as well as Redux Actions and Reducers.

## Getting Started

1. Install yeoman if you don't have it: using `npm install -g yo`

2. Install Generator:  `npm install -g generator-kyper-react`


## Creating a project
1. Create a project folder and enter it:
`mkdir myProject && cd myProject`

2. Initiate the generator:
`yo kyper-react`


## Sub generators

Sub generators included are run by calling `yo kyper-react:<name of sub-generator> <param1>`.

Example: To call the `component` sub-generator with "SomeThing" as the first parameter write: `yo kyper-react:component SomeThing`

#### Component

Generates a React component along with a matching scss file and places it within `/components`

A component is best for things that will be reused in multiple places. Our example

**result**

```
/app
--/components
----/Car
------Car.js
------Car.scss
```

*/app/components/Car.js:*

```javascript
import React, { Component, PropTypes } from 'react'
import './Car.scss'

export default class Car extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="Car">

      </div>
    )
  }
}

```

### Redux specific

#### Container

**NOTE:** Containers are synonymous with *Smart Components* and *Linked-State Components*

To create a container named *Cars* run: `yo kyper-react:container Cars`

Creates a folder within `/containers` that matches the name provided. Below is the result of the command above being run:

```
/app
--/conatiners
----/Cars
------Cars.js
------Cars.scss
```

/app/containers/Cars.js:
```javascript
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

  }

  render () {
    return (
      <div className="Cars">

      </div>
    )
  }
}

// Place state of redux store into props of component
function mapStateToProps (state) {
  return {
    account: state.account,
    router: state.router
  }
}

// Place action methods into props
function mapDispatchToProps (dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cars)
```

#### Action

[Actions](http://redux.js.org/docs/basics/Actions.html) are functions that are called from containers to make something happen to the state (i.e add a car).
To create a set of actions (add, update, remove) for cars run: `yo kyper-react:action cars`

Creates a folder within `/actions` that matches the name provided. Below is the result of the command above being run:

```
/app
--/actions
----cars.js
```

/app/actions/cars.js:
```javascript
export const ADD_CARS = 'ADD_CARS'
export const REMOVE_CARS = 'REMOVE_CARS'
export const UPDATE_CARS = 'UPDATE_CARS'

export function addCars (cars) {
  return {
    type: 'ADD_CARS',
    payload: 'cars'
  }
}
export function removeCars  (cars) {
  return {
    type: 'REMOVE_CARS',
    payload: 'cars'
  }
}
export function updateCars (cars) {
  return {
    type: 'UPDATE_CARS',
    payload: 'cars'
  }
}
```

#### Reducer

[Reducers](http://redux.js.org/docs/basics/Reducers.html) listen for actions and modify specific pieces of the state accordingly. In this example we are creating a cars reducer that manages state.cars, which is stored as an array.

`yo kyper-react:reducer cars` then select array

```
app/
--/reducers
----cars.js
```

/app/reducers/cars.js:
```javascript
import {
  ADD_CAR,
  UPDATE_CAR,
  REMOVE_CAR,
} from '../actions/cars'
export default function cars(state = [], action) {
  switch (action.type) {
  case ADD_CAR:
    if(!action.payload){
      console.error('Payload required to add a cars')
      return state
    }
    return [...state, action.payload]
    break
  case UPDATE_CAR:
    if(!action.index && action.payload){
      console.error('Index and payload required to update a cars')
      return state
    }
    if(!state[action.name]){
      console.error('cars with that name already exists')
      return state
    }
    let newState = clone(state)
    newState[action.index] = action.payload
    return newState
    break
  case REMOVE_CAR:
    if(!action.index){
      console.error('Index required to delete a cars')
      return state
    }
    if(!state[action.index]){
      console.error('cars at that index does not exist')
      return state
    }
    let newState = clone(state)
    delete newState[action.index]
    return newState
    break
  default:
    return state
  }
}

```

### Generated files based on [Redux Examples](https://github.com/rackt/redux)


## Other Reading

* #### [Redux Docs](http://redux.js.org/)

* #### [Redux Examples](https://github.com/rackt/redux/tree/master/examples)


### Special thanks to [gaearon](https://github.com/gaearon) and [the rackt team](https://github.com/rackt) for building [redux](https://github.com/rackt/redux), and [redux router](https://github.com/rackt/redux-router)

[npm-image]: https://img.shields.io/npm/v/generator-kyper-react.svg?style=flat-square
[npm-url]: https://npmjs.org/package/generator-kyper-react
[npm-downloads-image]: https://img.shields.io/npm/dm/generator-kyper-react.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/KyperTech/generator-kyper-react/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/KyperTech/generator-kyper-react
[daviddm-image]: https://img.shields.io/david/KyperTech/generator-kyper-react.svg?style=flat-square
[daviddm-url]: https://david-dm.org/KyperTech/generator-kyper-react
[climate-image]: https://img.shields.io/codeclimate/github/KyperTech/generator-kyper-react.svg?style=flat-square
[climate-url]: https://codeclimate.com/github/KyperTech/generator-kyper-react
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/KyperTech/generator-kyper-react.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/KyperTech/generator-kyper-react
[license-image]: https://img.shields.io/npm/l/generator-kyper-react.svg?style=flat-square
[license-url]: https://github.com/KyperTech/generator-kyper-react/blob/master/LICENSE
[code-style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[code-style-url]: http://standardjs.com/

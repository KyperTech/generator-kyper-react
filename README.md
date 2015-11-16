# generator-webpack-redux-react


Generator for a webpack-redux-react project with sub-generators for Components, Containers(Redux linked component), as well as Redux Actions and Reducers.


## Getting Started
1. Install yeoman if you don't have it: using `npm install -g yo`

1. Install Generator:  `npm install -g generator-webpack-redux-react`


## Creating a project
1. Create a project folder and enter it:
`mkdir myProject && cd myProject`

2. Initiate the generator:
```yo webpack-redux-react```



## Sub generators
### Generated files based on [Redux Examples](https://github.com/rackt/redux)


#### Component

To create a react component class named *Test* run: `yo webpack-redux-react:component Car`

Creates a folder within `/components` that matches the name provided. Below is the result of the command above being run:

```
/app
--/components
----/Car
------Car.js
------Car.scss
```
/app/components/Car.js:
```javascript
import React, {Component, PropTypes} from 'react';
import './Car.scss';

class Car extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="Car">

      </div>
    );
  }
}

export default Car
```

### Redux specific
#### Container
**NOTE:** Containers are synonymous with *Smart Components* and *Linked-State Components*

To create a container named *Cars* run: `yo webpack-redux-react:container Cars`

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
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../../actions/cars';
import './Cars.scss';

class Cars extends Component {
  constructor(props){
    super(props);
  }
  static propTypes = {

  };
  render(){
    return (
      <div className="Cars">
      </div>
    );
  }
}
//Place state of redux store into props of component
function mapStateToProps(state) {
  return {
    account: state.account,
    router: state.router
  };
}
//Place action methods into props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Cars);

```

#### Action
[Actions](http://redux.js.org/docs/basics/Actions.html) are functions that are called from containers to make something happen to the state (i.e add a car).
To create a set of actions (add, update, remove) for cars run: `yo webpack-redux-react:action cars`

Creates a folder within `/actions` that matches the name provided. Below is the result of the command above being run:

```
/app
--/actions
----cars.js
```

/app/actions/cars.js:
```javascript
export const ADD_CARS = 'ADD_CARS';
export const REMOVE_CARS = 'REMOVE_CARS';
export const UPDATE_CARS = 'UPDATE_CARS';

export function addCars(cars) {
  return {
    type: 'ADD_CARS',
    payload: 'cars'
  };
}
export function removeCars(cars) {
  return {
    type: 'REMOVE_CARS',
    payload: 'cars'
  };
}
export function updateCars(cars) {
  return {
    type: 'UPDATE_CARS',
    payload: 'cars'
  };
}

```

#### Reducer
[Reducers](http://redux.js.org/docs/basics/Reducers.html) listen for actions and modify specific pieces of the state accordingly. In this example we are creating a cars reducer that manages state.cars, which is stored as an array.
`yo webpack-redux-react:reducer cars` then select array
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
} from '../actions/cars';
import {union, clone} from 'lodash';
export default function cars(state = [], action) {
  switch (action.type) {
  case ADD_CAR:
    if(!action.payload){
      console.error('Payload required to add a cars');
      return state;
    }
    return [...state, action.payload];
    break;
  case UPDATE_CAR:
    if(!action.index && action.payload){
      console.error('Index and payload required to update a cars');
      return state;
    }
    if(!state[action.name]){
      console.error('cars with that name already exists');
      return state;
    }
    let newState = clone(state);
    newState[action.index] = action.payload;
    return newState;
    break;
  case REMOVE_CAR:
    if(!action.index){
      console.error('Index required to delete a cars');
      return state;
    }
    if(!state[action.index]){
      console.error('cars at that index does not exist');
      return state;
    }
    let newState = clone(state);
    delete newState[action.index];
    return newState;
    break;
  default:
    return state;
  }
}

```

## Other Reading
* ###[Redux Docs](http://redux.js.org/)
* ### [Redux Examples](https://github.com/rackt/redux/tree/master/examples)

### Special thanks to [gaearon](https://github.com/gaearon) and [the rackt team](https://github.com/rackt) for building [redux](https://github.com/rackt/redux), and [redux router](https://github.com/rackt/redux-router)

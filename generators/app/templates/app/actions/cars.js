export const ADD_CARS = 'ADD_CAR';
export const REMOVE_CARS = 'REMOVE_CAR';
export const UPDATE_CARS = 'UPDATE_CAR';

export function addCar(cars) {
  return {
    type: 'ADD_CAR',
    payload: cars
  };
}
export function removeCar(cars) {
  return {
    type: 'REMOVE_CAR',
    payload: cars
  };
}
export function updateCar(cars) {
  return {
    type: 'UPDATE_CAR',
    payload: cars
  };
}

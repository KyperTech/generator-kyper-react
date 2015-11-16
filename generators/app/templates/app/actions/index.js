export const ADD_CAR = 'ADD_CAR';

export function addCar(car) {
  return {
    type: ADD_CAR,
    payload: car
  };
}

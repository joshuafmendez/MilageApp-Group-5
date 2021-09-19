import { ADD_TRIP, ADD_TRIPS } from "../Actions/actionTypes";

let initialState = {};

const trips = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TRIPS:
      const nextCarState = {};
      payload.forEach((car) => {
        nextCarState[car.id] = car;
      });
      return nextCarState;
    case ADD_TRIP:
      return { ...state, [payload.id]: payload };
    default:
      return state;
  }
};

export default trips;

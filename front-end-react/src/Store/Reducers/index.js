import { combineReducers } from "redux";
import carsReducer from "./cars";
import selectedCarReducer from "./selectedCarReducer";

const rootReducers = combineReducers({ 
    cars: carsReducer,
    selectedCar: selectedCarReducer
 });

export default rootReducers;

import {SELECT_CAR} from "../Actions/actionTypes"

const selectedCarReducer = (state = {} ,action)=> {
    switch (action.type) {
        case SELECT_CAR:
            return [action.payload]
        default:
            return state; 
    }
}

export default selectedCarReducer

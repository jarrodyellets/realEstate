import { BEDS } from '../actions/types';

const initialState = {
  beds: "beds"
}

export default function(state = initialState, action){
  switch (action.type){
    case BEDS:
    console.log(state);
      return {
        ...state,
        beds: action.payload
      };
    default: 
      return state;
  }
}
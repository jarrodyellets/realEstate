import { ASCENDING } from '../actions/types';

const initialState = {
  ascending: true
}

export default function(state = initialState, action){
  switch (action.type){
    case ASCENDING:
    console.log(state);
      return {
        ...state,
        ascending: action.payload
      };
    default: 
      return state;
  }
}
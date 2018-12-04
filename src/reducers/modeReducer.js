import { MODE } from '../actions/types';

const initialState = {
  mode: "buy"
}

export default function(state = initialState, action){
  switch (action.type){
    case MODE:
      return {
        ...state,
        mode: action.payload
      };
    default: 
      return state;
  }
}
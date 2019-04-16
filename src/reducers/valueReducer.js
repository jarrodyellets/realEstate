import { VALUE } from '../actions/types';

const initialState = {
  value: "Austin"
}

export default function(state = initialState, action){
  switch (action.type){
    case VALUE:
    console.log(state);
      return {
        ...state,
        value: action.payload
      };
    default: 
      return state;
  }
}
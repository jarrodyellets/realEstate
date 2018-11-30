import { INTRO } from '../actions/types';

const initialState = {
  intro: true
}

export default function(state = initialState, action){
  switch (action.type){
    case INTRO:
      console.log("here")
      return {
        ...state,
        intro: action.payload
      };
    default: 
      return state;
  }
}
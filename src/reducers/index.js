import { combineReducers } from 'redux';
import introReducer from './introReducer';
import valueReducer from './valueReducer';

export default combineReducers({
  intro: introReducer,
  value: valueReducer
});
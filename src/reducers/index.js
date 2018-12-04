import { combineReducers } from 'redux';
import introReducer from './introReducer';
import valueReducer from './valueReducer';
import modeReducer from './modeReducer';
import bedsReducer from './bedsReducer';

export default combineReducers({
  intro: introReducer,
  value: valueReducer,
  mode: modeReducer,
  beds: bedsReducer
});
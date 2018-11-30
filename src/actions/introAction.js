import { INTRO } from './types';

export const changeInt = intro => dispatch => {
  dispatch({
    type: INTRO,
    payload: intro
  })
}
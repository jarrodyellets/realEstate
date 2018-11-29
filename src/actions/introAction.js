import { INTRO } from './types';

export const changeIntro = intro => dispatch => {
  dispatch({
    type: INTRO,
    payload: intro
  })
}
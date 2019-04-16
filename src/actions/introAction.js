import { INTRO } from './types';

export const changeInt = intro => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: INTRO,
      payload: intro
    });
    resolve();
  });
}
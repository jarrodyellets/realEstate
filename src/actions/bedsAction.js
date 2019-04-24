import { BEDS } from './types';

export const changeBed = beds => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: BEDS,
      payload: beds
    });
    resolve();
  })
}
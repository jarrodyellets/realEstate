import { ASCENDING } from './types';

export const changeAs = ascending => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: ASCENDING,
      payload: ascending
    });
    resolve();
  })
}
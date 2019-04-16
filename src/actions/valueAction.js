import { VALUE } from './types';

export const changeVal = value => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: VALUE,
      payload: value
    });
    resolve();
  })
}
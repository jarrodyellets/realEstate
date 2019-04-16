import { MODE } from './types';

export const changeMo = mode => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: MODE,
      payload: mode
    });
    resolve();
  })
}
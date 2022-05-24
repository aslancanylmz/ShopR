import { SET_USER } from './types';

export const setUserInfo = user => {
  return {
    type: SET_USER,
    payload: user
  };
};

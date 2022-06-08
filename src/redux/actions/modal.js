import { SET_MODAL_VISIBLE } from './types';

export const setModalVisible = visible => {
  return {
    type: SET_MODAL_VISIBLE,
    payload: visible
  };
};

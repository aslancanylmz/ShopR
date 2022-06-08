import { SET_MODAL_VISIBLE } from '../actions/types';

const initialState = {
  visible: false
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_VISIBLE:
      return {
        ...state,
        visible: action.payload
      };
    default:
      return state;
  }
};

export default modalReducer;

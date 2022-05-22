import { CART_COUNTER } from '../actions/types';

const initialState = {
  cartCounter: 33
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_COUNTER:
      return {
        ...state,
        cartCounter: state.cartCounter + action.payload
      };
    default:
      return state;
  }
};

export default cartReducer;

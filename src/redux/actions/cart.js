import { CART_COUNTER } from './types';

export const setCartCounter = cartCounter => {
  return {
    type: CART_COUNTER,
    payload: cartCounter
  };
};

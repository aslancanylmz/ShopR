import { ADD_TO_CART, DELETE_PRODUCT, UPDATE_PRODUCT_IN_CART } from './types';

export const addToCart = product => {
  return {
    type: ADD_TO_CART,
    payload: product
  };
};
export const updateProductInCart = product => {
  return {
    type: UPDATE_PRODUCT_IN_CART,
    payload: product
  };
};
export const deleteProduct = product => {
  return {
    type: DELETE_PRODUCT,
    payload: product
  };
};

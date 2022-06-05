import { ADD_TO_CART, UPDATE_PRODUCT_IN_CART, DELETE_PRODUCT } from '../actions/types';

const initialState = {
  cartProductList: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      var exists = false;
      const newProduct = action.payload;
      var cartProducts = [];
      state.cartProductList.map(cartProduct => {
        if (cartProduct.productName == newProduct.productName) {
          exists = true;
          cartProduct.quantity += 1;
        }
        cartProducts.push(cartProduct);
      });
      if (exists == false) {
        cartProducts.push({
          ...newProduct,
          quantity: 1
        });
      }
      return {
        ...state,
        cartProductList: cartProducts
      };
    case UPDATE_PRODUCT_IN_CART:
      let uptodateProductList = [];
      uptodateProductList = state.cartProductList.map(product =>
        product.productName === action.payload.productName ? action.payload : product
      );
      return {
        ...state,
        cartProductList: uptodateProductList
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        cartProductList: state.cartProductList.filter(product => product.productName !== action.payload.productName)
      };
    default:
      return state;
  }
};

export default cartReducer;

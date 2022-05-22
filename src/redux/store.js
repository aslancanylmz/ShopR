import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;

import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;

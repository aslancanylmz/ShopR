import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';
import userReducer from './reducers/userReducer';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user']
};
const cartConfig = {
  key: 'cart',
  storage: AsyncStorage
};
const userConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['userInfo']
};

const rootReducer = combineReducers({
  cart: persistReducer(cartConfig, cartReducer),
  user: persistReducer(userConfig, userReducer)
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};

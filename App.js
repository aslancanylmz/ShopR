import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setCartCounter } from './src/redux/actions/cart';
import { cartCounter } from './src/redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() => dispatch(setCartCounter(1))}>{useSelector(cartCounter)}</Text>
    </SafeAreaView>
  );
};

export default App;

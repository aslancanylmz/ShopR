import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from '../constants/theme';
import ProductDetail from '../screens/ProductDetail';
import Cart from '../screens/Cart';

const Stack = createNativeStackNavigator();

const CartNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true, headerShadowVisible: false }} headerMode={'screen'}>
      <Stack.Screen name={'Cart'} options={{ title: 'Home' }} component={Cart} />
      <Stack.Screen
        name={'ProductDetailCart'}
        options={({ route }) => ({ headerBackTitleVisible: false, headerTintColor: COLORS.black, title: route.params.title })}
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
};

export default CartNavigation;

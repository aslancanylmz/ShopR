import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from '../constants/theme';
import Products from '../screens/Products';
import CategoryDetail from '../screens/CategoryDetail';
import ProductDetail from '../screens/ProductDetail';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true, headerShadowVisible: false }} headerMode={'screen'}>
      <Stack.Screen name={'Products'} options={{ title: 'Anasayfa' }} component={Products} />
      <Stack.Screen
        name={'CategoryDetail'}
        options={({ route }) => ({ headerBackTitleVisible: false, headerTintColor: COLORS.black, title: route.params.title })}
        component={CategoryDetail}
      />
      <Stack.Screen
        name={'ProductDetail'}
        options={({ route }) => ({ headerBackTitleVisible: false, headerTintColor: COLORS.black, title: route.params.title })}
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;

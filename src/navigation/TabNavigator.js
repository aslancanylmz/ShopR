/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Cart from '../screens/Cart';
import Products from '../screens/Products';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Products' component={Products} />
      <Tab.Screen name='Cart' component={Cart} />
    </Tab.Navigator>
  );
};

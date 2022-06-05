/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { COLORS } from '../constants/theme';
import { Icon, iconNames } from '../components/Icon';
import HomeNavigation from './HomeNavigation';
import CartNavigation from './CartNavigation';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: COLORS.trendyol }}>
      <Tab.Screen
        name='HomeScreen'
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon iconName={iconNames.Home} color={focused ? COLORS.trendyol : COLORS.textInputBorderColor}></Icon>
          )
        }}
      />
      <Tab.Screen
        name='CartNavigation'
        component={CartNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon iconName={iconNames.Cart} color={focused ? COLORS.trendyol : COLORS.textInputBorderColor}></Icon>
          )
        }}
      />
    </Tab.Navigator>
  );
};

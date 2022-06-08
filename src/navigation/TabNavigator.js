/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { COLORS } from '../constants/theme';
import { Icon, iconNames } from '../components/Icon';
import HomeNavigation from './HomeNavigation';
import CartNavigation from './CartNavigation';
import { useSelector } from 'react-redux';
import { cartProductList } from '../redux/selectors';
import EmptyCoupons from '../screens/EmptyCoupons';
import EmptyProfile from '../screens/EmptyProfile';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const cartCounter = useSelector(cartProductList)
    .map(product => product.quantity)
    .reduce((partialSum, a) => partialSum + a, 0);
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: COLORS.trendyol }}>
      <Tab.Screen
        name='HomeTab'
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon iconName={iconNames.Home} color={focused ? COLORS.trendyol : COLORS.textInputBorderColor}></Icon>
          )
        }}
      />
      <Tab.Screen
        name='CartTab'
        component={CartNavigation}
        options={{
          tabBarBadgeStyle: { backgroundColor: COLORS.trendyol, color: COLORS.white },
          tabBarBadge: cartCounter,
          tabBarIcon: ({ focused }) => (
            <Icon iconName={iconNames.Cart} color={focused ? COLORS.trendyol : COLORS.textInputBorderColor}></Icon>
          )
        }}
      />
      <Tab.Screen
        name='CouponsTab'
        component={EmptyCoupons}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon iconName={iconNames.Coupon} color={focused ? COLORS.trendyol : COLORS.textInputBorderColor}></Icon>
          )
        }}
      />
      <Tab.Screen
        name='ProfileTab'
        component={EmptyProfile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon iconName={iconNames.Profile} color={focused ? COLORS.trendyol : COLORS.textInputBorderColor}></Icon>
          )
        }}
      />
    </Tab.Navigator>
  );
};

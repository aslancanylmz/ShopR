import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { userInfo } from '../redux/selectors';
import AuthNavigation from './AuthNavigation';
import { TabNavigator } from './TabNavigator';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const user = useSelector(userInfo);
  {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        headerMode={'screen'}
        initialRouteName={user ? 'TabNavigator' : 'AuthNavigator'}
      >
        {user ? (
          <Stack.Screen name={'TabNavigator'} component={TabNavigator} />
        ) : (
          <Stack.Screen name={'AuthNavigator'} component={AuthNavigation} />
        )}
      </Stack.Navigator>
    );
  }
};

export default AppNavigation;

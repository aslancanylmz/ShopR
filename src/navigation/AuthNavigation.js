import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={'SignUpScreen'} screenOptions={{ headerShown: false }} headerMode={'screen'}>
      <Stack.Screen name={'SignUpScreen'} component={SignUpScreen} />
      <Stack.Screen name={'SignInScreen'} component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

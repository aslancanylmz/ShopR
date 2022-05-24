import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import { COLORS } from '../constants/theme';
import ForgotPassword from '../screens/ForgotPassword';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true, headerShadowVisible: false }} headerMode={'screen'}>
      <Stack.Screen name={'SignInScreen'} options={{ title: 'Giriş Yap' }} component={SignInScreen} />
      <Stack.Screen
        name={'SignUpScreen'}
        options={{ title: 'Üye Ol', headerBackTitleVisible: false, headerTintColor: COLORS.black }}
        component={SignUpScreen}
      />
      <Stack.Screen
        name={'ForgotPasswordScreen'}
        options={{ title: 'Şifremi Unuttum', headerBackTitleVisible: false, headerTintColor: COLORS.black }}
        component={ForgotPassword}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';

import AppNavigation from './AppNavigation';

const RootNavigation = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default RootNavigation;

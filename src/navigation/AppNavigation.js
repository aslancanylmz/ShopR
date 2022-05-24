import React from 'react';
import { useSelector } from 'react-redux';
import { userInfo } from '../redux/selectors';
import AuthNavigation from './AuthNavigation';
import { TabNavigator } from './TabNavigator';

const AppNavigation = () => {
  const user = useSelector(userInfo);
  {
    return !user ? <AuthNavigation /> : <TabNavigator />;
  }
};

export default AppNavigation;

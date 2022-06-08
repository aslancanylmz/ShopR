import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';

import AppNavigation from './AppNavigation';
import { Linking } from 'react-native';

const RootNavigation = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);
  const linking = {
    prefixes: ['shopr://'],
    config: {
      initialRouteName: 'TabNavigator',
      screens: {
        //Nested screens should be added accordingly
        //When adding a new route, check the navigation lifecycle in the added route
        ['TabNavigator']: {
          screens: {
            ['HomeTab']: {
              screens: {
                ['CategoryDetail']: 'kategori/:categoryName',
                ['ProductDetail']: 'urun-detay/:productId'
              }
            },
            ['CartTab']: {
              screens: {
                ['Cart']: 'sepetim/'
              }
            }
          }
        }
      }
    },
    async getInitialURL() {
      // Check if app was opened from a deep link
      const url = await Linking.getInitialURL();
      if (url != null) {
        return url;
      }
    },
    subscribe: listener => {
      // Listens for any changes in the URL when the is app is open
      const linkingSubscription = Linking.addEventListener('url', ({ url }) => {
        listener(url);
      });

      return () => {
        // Clean up the event listeners
        if (linkingSubscription) {
          linkingSubscription.remove();
        }
      };
    }
  };
  return (
    <NavigationContainer linking={linking}>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default RootNavigation;

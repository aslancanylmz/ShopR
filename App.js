import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import RootNavigation from './src/navigation/RootNavigation';
import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  // eslint-disable-next-line quotes
  `ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'`
]);

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <RootNavigation />
    </SafeAreaView>
  );
};

export default App;

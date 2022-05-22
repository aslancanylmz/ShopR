import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import RootNavigation from './src/navigation/RootNavigation';

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <RootNavigation />
    </SafeAreaView>
  );
};

export default App;

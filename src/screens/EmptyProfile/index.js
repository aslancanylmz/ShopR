import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const EmptyProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.descriptionText}>Çok Yakında Sizlerle..</Text>
    </View>
  );
};

export default EmptyProfile;

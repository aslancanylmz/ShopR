import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const SecondaryButton = ({ onPress, text, disabled }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={styles.container}>
      <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit={true}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default SecondaryButton;

import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { COLORS } from '../../../constants/theme';

import styles from './styles';

const PrimaryButton = ({ onPress, text, disabled, requesting }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={styles.container}>
      {requesting ? (
        <ActivityIndicator color={COLORS.white} />
      ) : (
        <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit={true}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default PrimaryButton;

import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import PrimaryButton from './primaryButton';
import SecondaryButton from './secondaryButton';

const ButtonGroup = ({
  primaryButtonPress,
  primaryButtonText,
  secondaryButtonPress,
  secondaryButtonText,
  isSmallSecondary,
  style,
  disabled,
  requesting
}) => {
  const isBoth = secondaryButtonPress && primaryButtonPress;
  return (
    <View style={[styles.container, style]}>
      {secondaryButtonPress && (
        <SecondaryButton
          disabled={requesting}
          onPress={secondaryButtonPress}
          text={secondaryButtonText}
          small={isSmallSecondary}
          isBoth={isBoth}
        />
      )}
      {isBoth && <View style={styles.separator}></View>}
      {primaryButtonPress && (
        <PrimaryButton
          onPress={primaryButtonPress}
          disabled={disabled || requesting}
          text={primaryButtonText}
          requesting={requesting}
          isBoth={isBoth}
        />
      )}
    </View>
  );
};

export default ButtonGroup;

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Icon, iconNames } from '../Icon';

const CollapsibleButton = ({ title, setIsCollapsed, isCollapsed }) => {
  return (
    <TouchableOpacity style={styles.collapsibleButtonContainer} onPress={() => setIsCollapsed(!isCollapsed)}>
      <Text>{title}</Text>
      <Icon iconName={isCollapsed ? iconNames.Forward : iconNames.Cross}></Icon>
    </TouchableOpacity>
  );
};

export default CollapsibleButton;

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import ButtonGroup from '../../components/ButtonGroup';
import styles from './styles';

export default function EmptyCart() {
  const emptyCartText = 'Henüz sepetinize hiç ürün atmadınız.';
  const navigation = useNavigation();
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyCartText}>{emptyCartText}</Text>
      <ButtonGroup
        primaryButtonText={'Hemen Alışverişe Başla'}
        primaryButtonPress={() => navigation.navigate('HomeTab')}
      ></ButtonGroup>
    </View>
  );
}

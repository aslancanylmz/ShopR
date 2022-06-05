import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
const QuantityButtons = ({ setQuantity, quantity, maxQuantity = 25 }) => {
  const hitSlopValues = { top: 10, bottom: 10, left: 10, right: 10 };
  const disableIncrase = maxQuantity <= quantity;
  const disableDecrase = quantity <= 0;
  const incraseQuantity = () => {
    !disableIncrase && setQuantity(quantity + 1);
  };
  const decraseQuantity = () => {
    !disableDecrase && setQuantity(quantity - 1);
  };
  return (
    <View style={styles.quantityContainer}>
      <TouchableOpacity
        disabled={disableDecrase}
        hitSlop={hitSlopValues}
        onPress={() => decraseQuantity()}
        style={styles.quantityButtonContainer}
      >
        <Text style={disableDecrase ? styles.inActiveQuantityButtonText : styles.activeQuantityButtonText}>-</Text>
      </TouchableOpacity>
      <View style={styles.quantityTextContainer}>
        <Text style={styles.quantityText}>{quantity}</Text>
      </View>
      <TouchableOpacity
        disabled={disableIncrase}
        hitSlop={hitSlopValues}
        onPress={() => incraseQuantity()}
        style={styles.quantityButtonContainer}
      >
        <Text style={disableIncrase ? styles.inActiveQuantityButtonText : styles.activeQuantityButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuantityButtons;

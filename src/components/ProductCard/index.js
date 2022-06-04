import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { CustomImage } from '../CustomImage';
import styles from './styles';

export default function ProductCard(props) {
  const { images, productWidth, productName, brandName, marketPrice, currentPrice } = props;
  console.log(props);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetail', { productDetails: props, title: productName })}
      style={styles.container}
      activeOpacity={0.5}
    >
      <CustomImage containerStyle={styles.productImage} marginSize={8} image={images[0]} customWidth={productWidth}></CustomImage>
      <Text style={styles.brandNameText}>{brandName}</Text>
      <Text style={styles.productNameText}>{productName}</Text>
      <View style={styles.priceContainer}>
        {marketPrice && <Text style={styles.marketPrice}>{marketPrice}</Text>}
        <Text style={styles.currentPrice}>{currentPrice}</Text>
      </View>
    </TouchableOpacity>
  );
}

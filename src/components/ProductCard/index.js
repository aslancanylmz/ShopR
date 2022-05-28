import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { CustomImage } from '../CustomImage';
import styles from './styles';

export default function ProductCard({ image, productWidth, productName, brandName, marketPrice, currencyPrice }) {
  return (
    <Pressable style={styles.container}>
      <CustomImage marginSize={8} image={image} customWidth={productWidth}></CustomImage>
      <Text style={styles.brandNameText}>{brandName}</Text>
      <Text style={styles.productNameText}>{productName}</Text>
      <View style={styles.priceContainer}>
        {marketPrice && <Text style={styles.marketPrice}>{marketPrice}</Text>}
        <Text style={styles.currencyPrice}>{currencyPrice}</Text>
      </View>
    </Pressable>
  );
}

import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { CustomImage } from '../CustomImage';
import styles from './styles';

export default function ProductCard({ image, productWidth, productName, brandName, marketPrice, currentPrice }) {
  return (
    <Pressable style={styles.container}>
      <CustomImage containerStyle={styles.productImage} marginSize={8} image={image} customWidth={productWidth}></CustomImage>
      <Text style={styles.brandNameText}>{brandName}</Text>
      <Text style={styles.productNameText}>{productName}</Text>
      <View style={styles.priceContainer}>
        {marketPrice && <Text style={styles.marketPrice}>{marketPrice}</Text>}
        <Text style={styles.currentPrice}>{currentPrice}</Text>
      </View>
    </Pressable>
  );
}

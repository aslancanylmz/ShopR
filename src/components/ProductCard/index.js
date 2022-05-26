import React from 'react';
import { Pressable, Text } from 'react-native';
import { CustomImage } from '../CustomImage';
import styles from '../CustomImage/styles';

export default function ProductCard({ image, productWidth, productName, brandName, price }) {
  return (
    <Pressable style={styles.container}>
      <CustomImage image={image} customWidth={productWidth}></CustomImage>
      <Text>{brandName}</Text>
      <Text>{productName}</Text>
      <Text>{price}</Text>
    </Pressable>
  );
}

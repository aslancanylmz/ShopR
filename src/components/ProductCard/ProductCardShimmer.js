import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import styles from './styles';

const ProductCardShimmer = ({ productWidth, style }) => {
  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  return (
    <View style={[styles.container, style]}>
      <ShimmerPlaceHolder style={styles.productImage} width={productWidth} height={productWidth}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder width={productWidth - 70} style={styles.brandNameText}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder width={productWidth - 50} style={styles.productNameText}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder width={productWidth - 90} style={styles.currentPrice}></ShimmerPlaceHolder>
    </View>
  );
};

export default ProductCardShimmer;

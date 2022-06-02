import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { productListEnums } from '../../constants/enums';
import { SIZES } from '../../constants/theme';
import styles from './styles';

const ProductCardShimmer = ({ style }) => {
  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
  const { numberOfProductsInRow, separatorWidth } = productListEnums;
  const productWidth = SIZES.screenWidth / numberOfProductsInRow - separatorWidth;

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

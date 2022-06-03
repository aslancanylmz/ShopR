import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { productListEnums } from '../../constants/enums';
import { SIZES } from '../../constants/theme';
import ProductCardShimmer from '../ProductCard/ProductCardShimmer';
import styles from './styles';

const HorizontalProductShimmer = ({ titleShimmerVisible = true }) => {
  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
  const { numberOfProductsInHorizontalList, separatorWidth } = productListEnums;
  const productWidth = SIZES.screenWidth / numberOfProductsInHorizontalList - separatorWidth;

  return (
    <View style={styles.contentContainer}>
      {titleShimmerVisible && <ShimmerPlaceHolder width={150} height={20} style={styles.titleShimmer} />}
      <View style={styles.productShimmerContainer}>
        <ProductCardShimmer productWidth={productWidth} style={styles.productShimmer} />
        <ProductCardShimmer productWidth={productWidth} style={styles.productShimmer} />
        <ProductCardShimmer productWidth={productWidth} style={styles.productShimmer} />
      </View>
    </View>
  );
};

export default HorizontalProductShimmer;

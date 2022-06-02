import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import ProductCardShimmer from '../ProductCard/ProductCardShimmer';
import styles from './styles';

const HorizontalProductShimmer = ({ titleShimmerVisible = true }) => {
  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  return (
    <View style={styles.contentContainer}>
      {titleShimmerVisible && <ShimmerPlaceHolder width={150} height={20} style={styles.titleShimmer} />}
      <View style={styles.productShimmerContainer}>
        <ProductCardShimmer style={styles.productShimmer} />
        <ProductCardShimmer style={styles.productShimmer} />
        <ProductCardShimmer style={styles.productShimmer} />
      </View>
    </View>
  );
};

export default HorizontalProductShimmer;

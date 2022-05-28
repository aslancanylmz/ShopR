import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles';
import ProductCard from '../../components/ProductCard';
import { productListEnums } from '../../constants/enums';
import { SIZES } from '../../constants/theme';

export default function HorizontalProductList({ products, title }) {
  const { numberOfProductsInRow, separatorWidth } = productListEnums;
  const productWidth = SIZES.screenWidth / numberOfProductsInRow - separatorWidth;
  const renderProduct = ({ item }) => {
    const { image, productName, brandName, currencyPrice, marketPrice } = item;
    return (
      <ProductCard
        image={image}
        productWidth={productWidth}
        productName={productName}
        brandName={brandName}
        currencyPrice={currencyPrice}
        marketPrice={marketPrice}
      ></ProductCard>
    );
  };
  const renderSeparator = () => {
    return <View style={{ width: separatorWidth }}></View>;
  };
  return (
    <View style={styles.contentContainer}>
      {title && <Text style={styles.titleText}>{title}</Text>}
      <FlatList
        horizontal={true}
        ItemSeparatorComponent={() => renderSeparator()}
        data={products}
        renderItem={item => renderProduct(item)}
        showsHorizontalScrollIndicator={false}
      ></FlatList>
    </View>
  );
}

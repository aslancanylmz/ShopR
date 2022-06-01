import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles';
import ProductCard from '../../components/ProductCard';
import { productListEnums } from '../../constants/enums';
import { SIZES } from '../../constants/theme';
import { useEffect } from 'react';
import { useState } from 'react';
import { getProductList } from '../../services/API/api';

export default function HorizontalProductList({ category }) {
  const { numberOfProductsInRow, separatorWidth } = productListEnums;
  const productWidth = SIZES.screenWidth / numberOfProductsInRow - separatorWidth;
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProductList(setProductList, [category]);
  }, []);

  const renderProduct = ({ item }) => {
    const { imageList, productName, brandName, currentPrice, marketPrice } = item;
    return (
      <ProductCard
        image={imageList[0]}
        productWidth={productWidth}
        productName={productName}
        brandName={brandName}
        currentPrice={currentPrice}
        marketPrice={marketPrice}
      ></ProductCard>
    );
  };
  const renderSeparator = () => {
    return <View style={{ width: separatorWidth }}></View>;
  };
  return (
    <View style={styles.contentContainer}>
      {category && <Text style={styles.titleText}>{category}</Text>}
      <FlatList
        horizontal={true}
        ItemSeparatorComponent={() => renderSeparator()}
        data={productList}
        renderItem={item => renderProduct(item)}
        showsHorizontalScrollIndicator={false}
      ></FlatList>
    </View>
  );
}

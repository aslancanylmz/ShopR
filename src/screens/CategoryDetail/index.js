import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import ProductCard from '../../components/ProductCard';
import { productListEnums } from '../../constants/enums';
import { COLORS, SIZES } from '../../constants/theme';
import { getMoreProducts, getProductList } from '../../services/API/api';
import styles from './styles';

export default function CategoryDetail({ route }) {
  const category = route.params.title;
  const [productList, setProductList] = useState([]);
  const [isLastItem, setIsLastItem] = useState(false);
  const [loading, setLoading] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);
  const { numberOfProductsInRow, separatorWidth } = productListEnums;
  const productWidth = SIZES.screenWidth / numberOfProductsInRow - separatorWidth;

  useEffect(() => {
    getProductList(setProductList, [category], setLoading, setFirstLoad);
  }, []);

  const renderProduct = ({ item, index }) => {
    const { imageList, productName, brandName, marketPrice, currentPrice } = item;
    return (
      <>
        {index % 2 === 1 && <View style={styles.horizontalSeparator}></View>}
        <ProductCard
          images={imageList}
          productWidth={productWidth}
          productName={productName}
          brandName={brandName}
          marketPrice={marketPrice}
          currentPrice={currentPrice}
        ></ProductCard>
      </>
    );
  };
  const onRefresh = () => {
    setLoading(true);
    getProductList(setProductList, [category], setLoading);
  };
  const renderSeparator = () => {
    return <View style={{ height: separatorWidth }}></View>;
  };
  return firstLoad ? (
    <ActivityIndicator color={COLORS.trendyol} size={'large'} style={styles.activityIndicator}></ActivityIndicator>
  ) : (
    <FlatList
      keyExtractor={(item, index) => String(index)}
      contentContainerStyle={styles.container}
      ItemSeparatorComponent={() => renderSeparator()}
      numColumns={2}
      data={productList}
      renderItem={item => renderProduct(item)}
      showsVerticalScrollIndicator={false}
      onEndReached={() => !isLastItem && getMoreProducts(productList, setProductList, [category], setIsLastItem)}
      ListFooterComponent={() => !isLastItem && <ActivityIndicator color={COLORS.trendyol} />}
      ListFooterComponentStyle={!isLastItem && styles.footerContainer}
      refreshing={loading}
      onRefresh={() => onRefresh()}
    ></FlatList>
  );
}

import React from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import ProductCard from '../../components/ProductCard';
import { productListEnums } from '../../constants/enums';
import { SIZES } from '../../constants/theme';
import { useEffect } from 'react';
import { useState } from 'react';
import { getMoreProducts, getProductList } from '../../services/API/api';
import { Icon, iconNames } from '../Icon';

export default function HorizontalProductList({ category }) {
  const { numberOfProductsInRow, separatorWidth } = productListEnums;
  const productWidth = SIZES.screenWidth / numberOfProductsInRow - separatorWidth;
  const [productList, setProductList] = useState([]);
  const [isLastItem, setIsLastItem] = useState(false);

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
  const renderFooter = () => {
    return (
      <Icon
        onPress={() => getMoreProducts(productList, setProductList, [category], setIsLastItem)}
        iconName={iconNames.Forward}
      ></Icon>
    );
  };
  return (
    <View style={styles.contentContainer}>
      {category && <Text style={styles.titleText}>{category}</Text>}
      <FlatList
        keyExtractor={(item, index) => String(index)}
        horizontal={true}
        ItemSeparatorComponent={() => renderSeparator()}
        data={productList}
        renderItem={item => renderProduct(item)}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={() => !isLastItem && renderFooter()}
        ListFooterComponentStyle={styles.footerContainer}
      ></FlatList>
    </View>
  );
}

import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles';
import ProductCard from '../../components/ProductCard';
import { productListEnums } from '../../constants/enums';
import { SIZES } from '../../constants/theme';
import { useEffect } from 'react';
import { useState } from 'react';
import { getMoreProducts, getProductList } from '../../services/API/api';
import { Icon, iconNames } from '../Icon';
import HorizontalProductShimmer from './HorizontalProductShimmer';

export default function HorizontalProductList({ category }) {
  const [productList, setProductList] = useState([]);
  const [isLastItem, setIsLastItem] = useState(false);
  const { numberOfProductsInRow, separatorWidth } = productListEnums;
  const productWidth = SIZES.screenWidth / numberOfProductsInRow - separatorWidth;

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
        data={productList.length === 0 ? [1] : productList}
        renderItem={item =>
          productList.length === 0 ? <HorizontalProductShimmer titleShimmerVisible={false} /> : renderProduct(item)
        }
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={() => !isLastItem && renderFooter()}
        ListFooterComponentStyle={!isLastItem && styles.footerContainer}
      ></FlatList>
    </View>
  );
}

import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import ProductCard from '../../components/ProductCard';
import { productListEnums } from '../../constants/enums';
import { SIZES } from '../../constants/theme';
import { useEffect } from 'react';
import { useState } from 'react';
import { getMoreProducts, getProductList } from '../../services/API/api';
import { Icon, iconNames } from '../Icon';
import HorizontalProductShimmer from './HorizontalProductShimmer';
import { useNavigation } from '@react-navigation/native';

export default function HorizontalProductList({ category }) {
  const [productList, setProductList] = useState([]);
  const [isLastItem, setIsLastItem] = useState(false);
  const { numberOfProductsInHorizontalList, separatorWidth } = productListEnums;
  const productWidth = SIZES.screenWidth / numberOfProductsInHorizontalList - separatorWidth;

  const navigation = useNavigation();

  useEffect(() => {
    getProductList(setProductList, [category]);
  }, []);

  const renderProduct = ({ item }) => {
    const { imageList, productName, brandName, currentPrice, marketPrice, category, productId } = item;
    return (
      <ProductCard
        imageList={imageList}
        productWidth={productWidth}
        productName={productName}
        brandName={brandName}
        currentPrice={currentPrice}
        marketPrice={marketPrice}
        category={category}
        productId={productId}
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
      {category && (
        <TouchableOpacity
          onPress={() => navigation.navigate('CategoryDetail', { categoryName: category })}
          style={styles.categoryNameContainer}
        >
          <Text style={styles.titleText}>{category}</Text>
          <Icon iconName={iconNames.Forward}></Icon>
        </TouchableOpacity>
      )}
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

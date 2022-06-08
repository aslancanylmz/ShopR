import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { Icon, iconNames } from '../../components/Icon';
import ProductCard from '../../components/ProductCard';
import { productListEnums } from '../../constants/enums';
import { COLORS, SIZES } from '../../constants/theme';
import { getMoreProducts, getProductList } from '../../services/API/api';
import styles from './styles';

export default function CategoryDetail({ route }) {
  const category = route.params.categoryName;
  const [productList, setProductList] = useState([]);
  const [isLastItem, setIsLastItem] = useState(false);
  const [loading, setLoading] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);
  const { numberOfProductsInRow, separatorWidth } = productListEnums;
  const productWidth = SIZES.screenWidth / numberOfProductsInRow - separatorWidth;
  const navigation = useNavigation();

  useEffect(() => {
    getProductList(setProductList, [category], setLoading, setFirstLoad);
    navigation.setOptions({
      headerBackTitleVisible: false,
      headerTintColor: COLORS.black,
      title: category,
      headerLeft: () => (
        <Icon
          iconName={iconNames.Back}
          onPress={() => (navigation.canGoBack() ? navigation.goBack() : navigation.replace('Products'))}
        />
      )
    });
  }, [route]);

  const renderProduct = ({ item, index }) => {
    const { imageList, productName, brandName, marketPrice, currentPrice, productId, description } = item;
    return (
      <>
        {index % 2 === 1 && <View style={styles.horizontalSeparator}></View>}
        <ProductCard
          imageList={imageList}
          productWidth={productWidth}
          productName={productName}
          brandName={brandName}
          marketPrice={marketPrice}
          currentPrice={currentPrice}
          productId={productId}
          description={description}
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
  if (firstLoad) {
    return <ActivityIndicator color={COLORS.trendyol} size={'large'} style={styles.activityIndicator}></ActivityIndicator>;
  } else if (productList.error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.descriptionText}>{productList.error}</Text>
      </View>
    );
  } else {
    return (
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
}

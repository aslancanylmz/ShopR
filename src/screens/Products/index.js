import React from 'react';
import HorizontalProductList from '../../components/HorizontalProductList';
import { ActivityIndicator, FlatList, TextInput, View } from 'react-native';
import { useState, useEffect } from 'react';
import { getCategoryList, getMoreSearchProduct, searchProductList } from '../../services/API/api';
import HorizontalProductShimmer from '../../components/HorizontalProductList/HorizontalProductShimmer';
import { validSearchText } from '../../constants/helpers';
import styles from './styles';
import ProductCard from '../../components/ProductCard';
import { COLORS, SIZES } from '../../constants/theme';
import { productListEnums } from '../../constants/enums';

export default function Products() {
  const [categoryList, setCategoryList] = useState([]);
  const [searchText, setSearchText] = useState(null);
  const [productList, setProductList] = useState(null);
  const [loading, setLoading] = useState(true);
  const { numberOfProductsInRow, separatorWidth } = productListEnums;
  const productWidth = SIZES.screenWidth / numberOfProductsInRow - separatorWidth;

  useEffect(() => {
    getCategoryList(setCategoryList);
  }, []);
  useEffect(() => {
    let isMounted = true;
    if (isMounted && searchText) {
      searchProductList(setProductList, searchText, setLoading);
    }

    return () => {
      isMounted = false;
    };
  }, [searchText]);

  const renderProduct = ({ item, index }) => {
    const { imageList, productName, brandName, marketPrice, currentPrice } = item;
    return (
      <>
        {index % 2 === 1 && <View style={styles.horizontalSeparator}></View>}
        <ProductCard
          key={index}
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
  const renderSeparator = () => {
    return <View style={{ height: separatorWidth }}></View>;
  };

  const renderProductList = ({ item }) => {
    return <HorizontalProductList category={item}></HorizontalProductList>;
  };

  const renderHorizontalProductShimmer = () => {
    return (
      <>
        <HorizontalProductShimmer key={0} />
        <HorizontalProductShimmer key={1} />
        <HorizontalProductShimmer key={2} />
        <HorizontalProductShimmer key={3} />
      </>
    );
  };

  return (
    <>
      <TextInput
        onChangeText={text => (validSearchText(text) ? setSearchText(text) : setSearchText(null))}
        style={styles.searchInput}
      ></TextInput>
      {searchText ? (
        <FlatList
          key={'_'}
          keyExtractor={(item, index) => String('_' + index)}
          contentContainerStyle={styles.container}
          ItemSeparatorComponent={() => renderSeparator()}
          numColumns={2}
          data={productList}
          renderItem={item => renderProduct(item)}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => loading && <ActivityIndicator color={COLORS.trendyol} />}
        ></FlatList>
      ) : (
        <FlatList
          key={'#'}
          keyExtractor={(item, index) => String('#' + index)}
          data={categoryList.length === 0 ? [1] : categoryList}
          renderItem={item => (categoryList.length === 0 ? renderHorizontalProductShimmer() : renderProductList(item))}
        ></FlatList>
      )}
    </>
  );
}

{
  /* <TouchableOpacity
      style={{ width: 20, height: 100, backgroundColor: 'red' }}
      onPress={() => {
        products?.forEach(item => {
          firestore()
            .collection('productList')
            .add({
              imageList: item.imageList,
              productName: item.productName,
              brandName: item.brandName,
              marketPrice: item.currencyPrice,
              category: item.category,
              currentPrice: item.marketPrice
            })
            .then(() => {
              console.log('User added!');
            });
        });
      }}
    ></TouchableOpacity> */
}

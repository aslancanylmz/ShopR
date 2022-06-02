import React from 'react';
import HorizontalProductList from '../../components/HorizontalProductList';
import { FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { getCategoryList } from '../../services/API/api';
import HorizontalProductShimmer from '../../components/HorizontalProductList/HorizontalProductShimmer';

export default function Products() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList(setCategoryList);
  }, []);

  const renderProductList = ({ item }) => {
    return <HorizontalProductList category={item}></HorizontalProductList>;
  };

  const renderHorizontalProductShimmer = () => {
    return (
      <>
        <HorizontalProductShimmer />
        <HorizontalProductShimmer />
        <HorizontalProductShimmer />
        <HorizontalProductShimmer />
      </>
    );
  };

  return (
    <FlatList
      data={categoryList.length === 0 ? [1] : categoryList}
      renderItem={item => (categoryList.length === 0 ? renderHorizontalProductShimmer() : renderProductList(item))}
    ></FlatList>
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

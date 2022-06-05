import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';
import ProductButton from '../../components/ProductButton';
import { cartProductList } from '../../redux/selectors';

const Cart = () => {
  const cartProducts = useSelector(cartProductList);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(cartProducts);
  }, [cartProducts]);

  const renderProduct = ({ item }) => {
    return <ProductButton product={item}></ProductButton>;
  };
  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={productList}
      renderItem={item => renderProduct(item)}
      ItemSeparatorComponent={renderSeparator}
    ></FlatList>
  );
};

export default Cart;

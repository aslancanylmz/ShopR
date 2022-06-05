import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './styles';
import ButtonGroup from '../../components/ButtonGroup';
import SliderBox from '../../components/SliderBox';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cart';

export default function ProductDetail({ route }) {
  const { images, productName, brandName, marketPrice, currentPrice } = route.params.productDetails;
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ScrollView>
        <SliderBox marginSize={16} images={images}></SliderBox>
        <Text style={styles.brandNameText}>{brandName}</Text>
        <Text style={styles.productNameText}>{productName}</Text>
        <View style={styles.priceContainer}>
          {marketPrice && <Text style={styles.marketPrice}>{marketPrice} ₺</Text>}
          <Text style={styles.currentPrice}>{currentPrice} ₺</Text>
        </View>
      </ScrollView>
      <ButtonGroup
        primaryButtonPress={() => dispatch(addToCart(route.params.productDetails))}
        primaryButtonText={'Sepete Ekle'}
      ></ButtonGroup>
    </View>
  );
}

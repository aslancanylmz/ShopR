import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import styles from './styles';
import ButtonGroup from '../../components/ButtonGroup';
import SliderBox from '../../components/SliderBox';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cart';
import { getProductDetail } from '../../services/API/api';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constants/theme';

export default function ProductDetail({ route }) {
  const [productDetail, setProductDetail] = useState(null);
  const { productId } = route.params;
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    !productDetail ? getProductDetail(parseInt(productId), setLoading, setProductDetail) : setLoading(false);
    productDetail &&
      navigation.setOptions({ headerBackTitleVisible: false, headerTintColor: COLORS.black, title: productDetail.productName });
  }, []);

  if (loading) return <ActivityIndicator></ActivityIndicator>;
  else
    return (
      <View style={styles.container}>
        <ScrollView>
          <SliderBox marginSize={16} imageList={productDetail?.imageList}></SliderBox>
          <Text style={styles.brandNameText}>{productDetail?.brandName}</Text>
          <Text style={styles.productNameText}>{productDetail?.productName}</Text>
          <View style={styles.priceContainer}>
            {productDetail?.marketPrice && <Text style={styles.marketPrice}>{productDetail?.marketPrice} ₺</Text>}
            <Text style={styles.currentPrice}>{productDetail?.currentPrice} ₺</Text>
          </View>
        </ScrollView>
        <ButtonGroup
          primaryButtonPress={() => dispatch(addToCart(route.params.productDetails))}
          primaryButtonText={'Sepete Ekle'}
        ></ButtonGroup>
      </View>
    );
}

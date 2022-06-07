import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import styles from './styles';
import ButtonGroup from '../../components/ButtonGroup';
import SliderBox from '../../components/SliderBox';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cart';
import { getProductDetail } from '../../services/API/api';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constants/theme';
import CollapsibleButton from '../../components/CollapsibleButton';
import Collapsible from 'react-native-collapsible';

export default function ProductDetail({ route }) {
  const [productDetail, setProductDetail] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { productId } = route.params;
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const collapsibleRef = useRef();

  useEffect(() => {
    !productDetail ? getProductDetail(parseInt(productId), setLoading, setProductDetail) : setLoading(false);
    productDetail &&
      navigation.setOptions({ headerBackTitleVisible: false, headerTintColor: COLORS.black, title: productDetail.productName });
  }, []);
  const handleCollapsibleVisible = () => {
    setIsCollapsed(!isCollapsed);
    collapsibleRef.current.scrollToEnd({ animated: true });
  };

  if (loading)
    return <ActivityIndicator color={COLORS.trendyol} size={'large'} style={styles.activityIndicator}></ActivityIndicator>;
  else
    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          ref={collapsibleRef}
          onContentSizeChange={() => collapsibleRef.current.scrollToEnd({ animated: true })}
        >
          <SliderBox marginSize={16} imageList={productDetail?.imageList}></SliderBox>
          <Text style={styles.brandNameText}>{productDetail?.brandName}</Text>
          <Text style={styles.productNameText}>{productDetail?.productName}</Text>
          <View style={styles.priceContainer}>
            {productDetail?.marketPrice && <Text style={styles.marketPrice}>{productDetail?.marketPrice} ₺</Text>}
            <Text style={styles.currentPrice}>{productDetail?.currentPrice} ₺</Text>
          </View>
          {productDetail?.description && (
            <>
              <CollapsibleButton
                title={'Ürün Açıklaması'}
                isCollapsed={isCollapsed}
                setIsCollapsed={handleCollapsibleVisible}
              ></CollapsibleButton>
              <Collapsible style={!isCollapsed && styles.collapsibleContainer} collapsed={isCollapsed}>
                <Text style={styles.descriptionText}>{productDetail.description}</Text>
              </Collapsible>
            </>
          )}
        </ScrollView>
        <ButtonGroup
          primaryButtonPress={() => dispatch(addToCart(route.params.productDetails))}
          primaryButtonText={'Sepete Ekle'}
        ></ButtonGroup>
      </View>
    );
}

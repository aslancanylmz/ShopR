import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { CustomImage } from '../CustomImage';
import QuantityButtons from '../QuantityButtons';
import styles from './styles';
import { deleteProduct, updateProductInCart } from '../../redux/actions/cart';
import { Icon, iconNames } from '../Icon';
import { SIZES } from '../../constants/theme';
import { productListEnums } from '../../constants/enums';

export default function ProductButton(props) {
  const { product } = props;
  const { imageList, productName, brandName, marketPrice, currentPrice, quantity, category, productId } = product;
  const navigation = useNavigation();
  const [quantityState, setQuantityState] = useState(quantity);
  const dispatch = useDispatch();
  const { numberOfProductsInHorizontalList, separatorWidth } = productListEnums;
  const productWidth = SIZES.screenWidth / numberOfProductsInHorizontalList - separatorWidth;

  useEffect(() => {
    let product = {
      imageList: imageList,
      productName: productName,
      brandName: brandName,
      marketPrice: marketPrice,
      currentPrice: currentPrice,
      quantity: quantityState,
      category: category,
      productId: productId
    };
    dispatch(updateProductInCart(product));
  }, [quantityState]);

  useEffect(() => {
    setQuantityState(quantity);
  }, [quantity]);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetailCart', { productDetails: product, productId: product.productId, title: productName })
      }
      style={styles.container}
      activeOpacity={0.5}
    >
      <CustomImage
        containerStyle={styles.productImage}
        marginSize={8}
        image={imageList[0]}
        customWidth={productWidth}
      ></CustomImage>
      <View style={styles.productInfoContainer}>
        <Text style={styles.brandNameText}>{brandName}</Text>
        <Text style={styles.productNameText}>{productName}</Text>
        <View style={styles.priceContainer}>
          {marketPrice && <Text style={styles.marketPrice}>{marketPrice} ₺</Text>}
          <Text style={styles.currentPrice}>{currentPrice} ₺</Text>
        </View>
        <QuantityButtons quantity={quantityState} setQuantity={setQuantityState}></QuantityButtons>
      </View>
      <Icon onPress={() => dispatch(deleteProduct(product))} style={styles.crossIcon} iconName={iconNames.Cross}></Icon>
    </TouchableOpacity>
  );
}

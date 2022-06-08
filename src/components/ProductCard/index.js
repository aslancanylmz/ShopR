import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { CustomImage } from '../CustomImage';
import styles from './styles';

export default function ProductCard(props) {
  const { imageList, productWidth, productName, brandName, marketPrice, currentPrice, productId } = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetail', { productDetails: props, title: productName, productId: productId })}
      style={styles.container}
      activeOpacity={0.5}
    >
      <CustomImage
        containerStyle={styles.productImage}
        marginSize={8}
        image={imageList[0]}
        customWidth={productWidth}
      ></CustomImage>
      <View style={{ width: productWidth - 16 }}>
        <Text style={styles.brandNameText}>{brandName}</Text>
        <Text style={styles.productNameText}>{productName}</Text>
        <View style={styles.priceContainer}>
          {marketPrice && <Text style={styles.marketPrice}>{marketPrice} ₺</Text>}
          <Text style={styles.currentPrice}>{currentPrice} ₺</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

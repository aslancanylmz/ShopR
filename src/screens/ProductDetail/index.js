import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './styles';
import ButtonGroup from '../../components/ButtonGroup';
import SliderBox from '../../components/SliderBox';

export default function ProductDetail({ route }) {
  const { images, productName, brandName, marketPrice, currentPrice } = route.params.productDetails;

  return (
    <View style={styles.container}>
      <ScrollView>
        <SliderBox marginSize={16} images={images}></SliderBox>
        {/* <CustomImage marginSize={32} containerStyle={styles.productImage} image={image}></CustomImage> */}
        <Text style={styles.brandNameText}>{brandName}</Text>
        <Text style={styles.productNameText}>{productName}</Text>
        <View style={styles.priceContainer}>
          {marketPrice && <Text style={styles.marketPrice}>{marketPrice} ₺</Text>}
          <Text style={styles.currentPrice}>{currentPrice} ₺</Text>
        </View>
      </ScrollView>
      <ButtonGroup primaryButtonPress={() => console.log('Sepete Ekle Butonu')} primaryButtonText={'Sepete Ekle'}></ButtonGroup>
    </View>
  );
}

import React from 'react';
import { FlatList, View } from 'react-native';
import ProductCard from '../../components/ProductCard';
import { productListEnums } from '../../constants/enums';
import { SIZES } from '../../constants/theme';

export default function Products() {
  const products = [
    {
      image: 'https://cdn.arzum.com.tr/ar1127-freestick-sarjli-el-blender-seti-siyah-blender-seti-arzum-ar1127-4410-30-O.jpg',
      productName: 'Blender',
      brandName: 'Arzum',
      price: '200 ₺'
    },
    {
      image: 'https://cdn.arzum.com.tr/ar1127-freestick-sarjli-el-blender-seti-siyah-blender-seti-arzum-ar1127-4410-30-O.jpg',
      productName: 'Blender',
      brandName: 'Arzum',
      price: '200 ₺'
    },
    {
      image: 'https://cdn.arzum.com.tr/ar1127-freestick-sarjli-el-blender-seti-siyah-blender-seti-arzum-ar1127-4410-30-O.jpg',
      productName: 'Blender',
      brandName: 'Arzum',
      price: '200 ₺'
    },
    {
      image: 'https://cdn.arzum.com.tr/ar1127-freestick-sarjli-el-blender-seti-siyah-blender-seti-arzum-ar1127-4410-30-O.jpg',
      productName: 'Blender',
      brandName: 'Arzum',
      price: '200 ₺'
    },
    {
      image: 'https://cdn.arzum.com.tr/ar1127-freestick-sarjli-el-blender-seti-siyah-blender-seti-arzum-ar1127-4410-30-O.jpg',
      productName: 'Blender',
      brandName: 'Arzum',
      price: '200 ₺'
    }
  ];

  const { numberOfProductsInRow, separatorWidth } = productListEnums;
  const productWidth = SIZES.screenWidth / numberOfProductsInRow - separatorWidth;
  const renderProduct = ({ item }) => {
    const { image, productName, brandName, price } = item;
    return (
      <ProductCard
        image={image}
        productWidth={productWidth}
        productName={productName}
        brandName={brandName}
        price={price}
      ></ProductCard>
    );
  };
  const renderSeparator = () => {
    return <View style={{ width: separatorWidth }}></View>;
  };
  return (
    <FlatList
      horizontal={true}
      ItemSeparatorComponent={() => renderSeparator()}
      data={products}
      renderItem={item => renderProduct(item)}
      showsHorizontalScrollIndicator={false}
    ></FlatList>
  );
}

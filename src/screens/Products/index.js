import React from 'react';
import HorizontalProductList from '../../components/HorizontalProductList';

export default function Products() {
  const products = [
    {
      image: 'https://cdn.arzum.com.tr/ar1127-freestick-sarjli-el-blender-seti-siyah-blender-seti-arzum-ar1127-4410-30-O.jpg',
      productName: 'Blender',
      brandName: 'Arzum',
      marketPrice: '200 ₺',
      currencyPrice: '120 ₺'
    },
    {
      image: 'https://cdn.arzum.com.tr/ar1127-freestick-sarjli-el-blender-seti-siyah-blender-seti-arzum-ar1127-4410-30-O.jpg',
      productName: 'Blender',
      brandName: 'Arzum',
      currencyPrice: '200 ₺'
    },
    {
      image: 'https://cdn.arzum.com.tr/ar1127-freestick-sarjli-el-blender-seti-siyah-blender-seti-arzum-ar1127-4410-30-O.jpg',
      productName: 'Blender',
      brandName: 'Arzum',
      currencyPrice: '200 ₺'
    },
    {
      image: 'https://cdn.arzum.com.tr/ar1127-freestick-sarjli-el-blender-seti-siyah-blender-seti-arzum-ar1127-4410-30-O.jpg',
      productName: 'Blender',
      brandName: 'Arzum',
      marketPrice: '200 ₺',
      currencyPrice: '120 ₺'
    },
    {
      image: 'https://cdn.arzum.com.tr/ar1127-freestick-sarjli-el-blender-seti-siyah-blender-seti-arzum-ar1127-4410-30-O.jpg',
      productName: 'Blender',
      brandName: 'Arzum',
      currencyPrice: '200 ₺'
    },
    {
      image: 'https://cdn.arzum.com.tr/ar1127-freestick-sarjli-el-blender-seti-siyah-blender-seti-arzum-ar1127-4410-30-O.jpg',
      productName: 'Blender',
      brandName: 'Arzum',
      currencyPrice: '200 ₺'
    },
    {
      image: 'https://cdn.arzum.com.tr/ar1127-freestick-sarjli-el-blender-seti-siyah-blender-seti-arzum-ar1127-4410-30-O.jpg',
      productName: 'Blender',
      brandName: 'Arzum',
      marketPrice: '200 ₺',
      currencyPrice: '120 ₺'
    },
    {
      image: 'https://cdn.arzum.com.tr/ar1127-freestick-sarjli-el-blender-seti-siyah-blender-seti-arzum-ar1127-4410-30-O.jpg',
      productName: 'Blender',
      brandName: 'Arzum',
      currencyPrice: '200 ₺'
    }
  ];

  return <HorizontalProductList title={'Kategoriler'} products={products}></HorizontalProductList>;
}

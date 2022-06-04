import React, { useState } from 'react';
import { View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import styles from './styles';
import { CustomImage } from '../CustomImage';
import { SIZES } from '../../constants/theme';

const SliderBox = ({ images, carouselWidth = SIZES.screenWidth, marginSize = 64 }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const onSnapToItem = index => {
    setActiveSlide(index);
  };

  const renderItem = ({ item }) => {
    return <CustomImage image={item} marginSize={marginSize} />;
  };

  return (
    <>
      <View style={styles.carouselWrapper}>
        <Carousel
          data={images}
          sliderWidth={carouselWidth}
          itemWidth={carouselWidth}
          layout={'default'}
          onSnapToItem={onSnapToItem}
          renderItem={renderItem}
          lockScrollWhileSnapping={true}
          pagingEnabled={true}
        />
      </View>
      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeSlide}
        dotStyle={styles.dot}
        inactiveDotStyle={styles.inactiveDot}
        containerStyle={styles.paginationContainer}
        dotContainerStyle={styles.dotContainer}
        inactiveDotOpacity={0.7}
        inactiveDotScale={0.6}
      />
    </>
  );
};

export default SliderBox;

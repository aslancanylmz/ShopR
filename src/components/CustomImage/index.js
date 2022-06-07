import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { COLORS, SIZES } from '../../constants/theme';
import styles from './styles';

const CustomImage = props => {
  const { image, marginSize = 0, containerStyle, customWidth } = props;
  const [loading, setLoading] = useState(true);
  const imageWidth = (customWidth ?? SIZES.screenWidth) - marginSize;
  const ratio = 1;
  const defaultImageStyle = {
    width: imageWidth,
    height: imageWidth / ratio
  };

  return (
    <View style={{ ...containerStyle, ...styles.container, ...defaultImageStyle }}>
      {loading ? <ActivityIndicator color={COLORS.navyBlue} /> : null}
      <FastImage
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        source={{ uri: image }}
        style={loading ? styles.imageStyleOnLoading : defaultImageStyle}
        resizeMode={FastImage.resizeMode.cover}
        {...props}
      ></FastImage>
    </View>
  );
};

export { CustomImage };

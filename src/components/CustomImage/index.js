import React, { useEffect, useState } from 'react';
import { Image, ActivityIndicator, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import { COLORS, SIZES } from '../../constants/theme';
import styles from './styles';

const CustomImage = props => {
  const { image, marginSize = 0, containerStyle, customWidth, customHeight, onPress, ratio } = props;
  const imageWidth = (customWidth ?? SIZES.screenWidth) - marginSize;
  const imageHeight = (customHeight ?? SIZES.screenHeight) - marginSize;
  const imageRatio = ratio ?? 1;
  const defaultImageStyle = {
    width: imageWidth,
    height: imageHeight / imageRatio
  };

  const [imageStyle, setImageStyle] = useState(defaultImageStyle);
  const [imageSizeLoading, setImageSizeLoading] = useState(true);

  useEffect(() => {
    Image.getSize(image, (width, height) => {
      const ratio = 1;
      if (customWidth && !customHeight) {
        setImageStyle({
          width: imageWidth,
          height: imageWidth / ratio
        });
      } else if (!customWidth && customHeight) {
        setImageStyle({
          width: imageHeight * ratio,
          height: imageHeight
        });
      } else if (customWidth && customHeight) {
        setImageStyle({
          width: imageWidth,
          height: imageHeight
        });
      } else {
        setImageStyle({
          width: imageWidth,
          height: imageWidth / ratio
        });
      }
      setImageSizeLoading(false);
    });
  }, []);

  return (
    <Pressable onPress={onPress} style={{ ...containerStyle, ...styles.container, ...imageStyle }}>
      {imageSizeLoading ? <ActivityIndicator color={COLORS.navyBlue} /> : null}
      <FastImage
        source={{ uri: image }}
        style={imageSizeLoading ? styles.imageStyleOnLoading : imageStyle}
        resizeMode={FastImage.resizeMode.cover}
        {...props}
      ></FastImage>
    </Pressable>
  );
};

export { CustomImage };

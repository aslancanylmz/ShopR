import React from 'react';
import Svg, { Circle, G, Path, Rect, Defs, ClipPath, LinearGradient, Stop, Polygon, Ellipse } from 'react-native-svg';
import { TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/theme';

const iconNames = {
  Success: 'Success'
};
const Icon = ({ iconName, style, onPress, width, height, color }) => {
  switch (iconName) {
    case 'Success':
      return (
        <TouchableOpacity onPress={onPress} disabled={!onPress} style={style}>
          <Svg width={width ?? '60'} height={height ?? '60'} viewBox='0 0 60 60' fill='none'>
            <Path
              d='M30 0C46.5685 0 60 13.4315 60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0ZM39.659 20.909L26.25 34.318L20.341 28.409C19.4623 27.5303 18.0377 27.5303 17.159 28.409C16.2803 29.2877 16.2803 30.7123 17.159 31.591L24.659 39.091C25.5377 39.9697 26.9623 39.9697 27.841 39.091L42.841 24.091C43.7197 23.2123 43.7197 21.7877 42.841 20.909C41.9623 20.0303 40.5377 20.0303 39.659 20.909Z'
              fill={color ?? COLORS.successColor}
            />
          </Svg>
        </TouchableOpacity>
      );

    default:
      break;
  }
};

export { Icon, iconNames };

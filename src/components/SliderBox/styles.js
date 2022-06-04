import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

const styles = StyleSheet.create({
  carouselWrapper: {
    borderRadius: 12,
    overflow: 'hidden'
  },
  image: {
    borderRadius: 12
  },
  dotContainer: {
    width: 12,
    height: 2,
    marginHorizontal: 2
  },
  dot: {
    backgroundColor: COLORS.trendyol,
    width: 12,
    height: 2
  },
  inactiveDot: {
    backgroundColor: COLORS.secondaryTextColor
  },
  paginationContainer: {
    maxHeight: 2,
    minHeight: 2,
    marginTop: 4,
    paddingBottom: 0
  }
});

export default styles;

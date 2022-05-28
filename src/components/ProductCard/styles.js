import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  imageStyleOnLoading: {
    width: 0,
    height: 0
  },
  brandNameText: {
    fontSize: 12,
    color: COLORS.secondaryTextColor,
    marginTop: 4
  },
  productNameText: {
    fontSize: 15,
    color: COLORS.black,
    fontWeight: '500',
    marginVertical: 4
  },
  marketPrice: {
    textDecorationLine: 'line-through',
    fontSize: 14,
    color: COLORS.black,
    marginRight: 6
  },
  currencyPrice: {
    fontSize: 14,
    color: COLORS.trendyol,
    fontWeight: '400'
  },
  priceContainer: {
    flexDirection: 'row'
  }
});

export default styles;

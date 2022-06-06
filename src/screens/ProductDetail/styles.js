import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingVertical: 8,
    justifyContent: 'space-between'
  },
  productImage: {
    borderRadius: 12,
    overflow: 'hidden'
  },
  brandNameText: {
    fontWeight: '400',
    marginTop: 24,
    fontSize: 24,
    color: COLORS.secondaryTextColor
  },
  productNameText: {
    fontWeight: '600',
    fontSize: 26
  },
  priceContainer: {
    flexDirection: 'row'
  },
  marketPrice: {
    textDecorationLine: 'line-through',
    fontSize: 16,
    marginRight: 12,
    alignSelf: 'center'
  },
  currentPrice: {
    fontSize: 24,
    fontWeight: '700'
  }
});

export default styles;

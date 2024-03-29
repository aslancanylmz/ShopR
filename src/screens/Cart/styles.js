import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

const styles = StyleSheet.create({
  productListContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  container: {
    justifyContent: 'space-between',
    flex: 1
  },
  separator: {
    width: SIZES.screenWidth - 32,
    height: 1,
    backgroundColor: COLORS.textInputBorderColor,
    alignSelf: 'center',
    marginVertical: 8
  },
  infoContainer: {
    borderRadius: 8,
    borderColor: COLORS.textInputBorderColor,
    borderWidth: 1,
    marginHorizontal: 16,
    marginVertical: 8,
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  discountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4
  },
  confirmCartButton: {
    paddingHorizontal: 16,
    marginBottom: 8
  },
  infoDescription: {},
  infoTitle: {
    fontWeight: '600'
  },
  gainText: {
    alignSelf: 'center',
    borderColor: COLORS.successColor,
    borderWidth: 2,
    padding: 4,
    borderRadius: 8
  },
  totalPriceContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 4
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  emptyCartText: {
    fontSize: 24,
    color: COLORS.secondaryTextColor,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 32
  },
  totalPriceText: {
    fontWeight: '600',
    color: COLORS.black
  }
});

export default styles;

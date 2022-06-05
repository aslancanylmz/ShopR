import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

const styles = StyleSheet.create({
  quantityContainer: {
    borderRadius: 32,
    borderColor: COLORS.textInputBorderColor,
    borderWidth: 1,
    flexDirection: 'row',
    marginTop: 8
  },
  quantityButtonContainer: {
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12
  },
  activeQuantityButtonText: {
    fontSize: 24,
    fontWeight: '600',
    color: COLORS.trendyol
  },
  inActiveQuantityButtonText: {
    fontSize: 24,
    fontWeight: '600',
    color: COLORS.textInputBorderColor
  },
  quantityText: {
    color: COLORS.trendyol,
    fontSize: 24,
    fontWeight: '400',
    fontVariant: ['tabular-nums']
  },
  quantityTextContainer: {
    borderRadius: 64,
    backgroundColor: COLORS.softBackground,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;

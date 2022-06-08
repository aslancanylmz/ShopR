import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 2,
    borderColor: COLORS.trendyol,
    borderWidth: 1,
    backgroundColor: COLORS.white,
    paddingVertical: 8
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    includeFontPadding: false,
    color: COLORS.trendyol,
    textAlign: 'center'
  }
});

export default styles;

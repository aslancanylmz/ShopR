import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.ocher,
    borderRadius: 2,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 8
  },
  disabledContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.grayishBlue,
    borderRadius: 2
  },
  text: {
    fontSize: 17,
    includeFontPadding: false,
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: '500'
  }
});

export default styles;

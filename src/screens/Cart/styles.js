import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  separator: {
    width: SIZES.screenWidth - 32,
    height: 1,
    backgroundColor: COLORS.textInputBorderColor,
    alignSelf: 'center',
    marginVertical: 8
  }
});

export default styles;

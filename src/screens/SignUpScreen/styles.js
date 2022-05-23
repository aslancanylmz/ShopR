import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    padding: 26,
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: COLORS.white
  },
  input: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: COLORS.textInputBorderColor,
    padding: 12,
    marginBottom: 8
  }
});

export default styles;

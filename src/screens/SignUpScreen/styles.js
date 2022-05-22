import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    margin: 26,
    flex: 1,
    justifyContent: 'space-between'
  },
  headerText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '700'
  },
  input: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: COLORS.textInputBorderColor,
    padding: 16,
    marginVertical: 4
  }
});

export default styles;

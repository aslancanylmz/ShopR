import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    padding: 26,
    flex: 1,
    backgroundColor: COLORS.white
  },
  input: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: COLORS.textInputBorderColor,
    padding: 12,
    marginBottom: 8
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'left',
    marginVertical: 12
  },
  invalidInput: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: COLORS.invalidColor,
    padding: 12,
    marginBottom: 2
  },
  invalidText: {
    color: COLORS.invalidColor,
    textAlign: 'left',
    fontSize: 12,
    marginBottom: 12
  },
  successText: {
    color: COLORS.successColor,
    textAlign: 'left',
    fontSize: 12,
    marginBottom: 12
  }
});

export default styles;

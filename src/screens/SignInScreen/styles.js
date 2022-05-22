import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 26,
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: COLORS.white
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
  },
  signUpDescription: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center'
  },
  forgotPasswordText: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    fontWeight: '600',
    marginVertical: 8,
    alignSelf: 'flex-end'
  }
});

export default styles;
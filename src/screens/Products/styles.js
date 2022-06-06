import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

const styles = StyleSheet.create({
  searchInput: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.textInputBorderColor,
    padding: 12,
    marginHorizontal: 16,
    marginTop: 8
  },
  container: {
    flex: 0,
    padding: 16
  },
  horizontalSeparator: {
    width: 16
  },
  activityIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerContainer: {
    marginVertical: 24
  }
});

export default styles;

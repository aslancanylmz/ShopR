import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  descriptionText: {
    fontSize: 24,
    color: COLORS.secondaryTextColor,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 32
  }
});

export default styles;

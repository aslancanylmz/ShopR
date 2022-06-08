import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  descriptionText: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '800',
    marginHorizontal: 16
  }
});

export default styles;

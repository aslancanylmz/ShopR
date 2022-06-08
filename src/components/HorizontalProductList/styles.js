import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contentContainer: {
    padding: 16
  },
  titleText: {
    fontSize: 20,
    marginVertical: 12,
    fontWeight: '800'
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 24
  },
  productShimmerContainer: {
    flexDirection: 'row'
  },
  titleShimmer: {
    marginVertical: 12
  },
  productShimmer: {
    marginRight: 16
  },
  horizontalProductsShimmerContainer: {
    marginVertical: 16
  },
  categoryNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default styles;

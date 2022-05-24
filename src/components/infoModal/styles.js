import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants/theme';
const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  modalContainer: {
    paddingVertical: 24,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 8
  },
  modalBackground: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: width,
    height: height,
    backgroundColor: COLORS.black,
    opacity: 0.5,
    zIndex: -99
  },
  successIcon: {
    marginBottom: 12
  },
  descriptionText: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 16,
    lineHeight: 20,
    fontWeight: '400'
  }
});

export default styles;

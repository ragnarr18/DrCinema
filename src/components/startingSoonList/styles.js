import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    margin: 5,

    alignSelf: 'center',
    borderWidth: 5,
    borderColor: colors.cgBlue,
  },
  notAvailable: {
    padding: 5,
    width: winWidth - 50,
    alignItems: 'center',
  },
  notAvailableText: {
    color: colors.cgBlue,
    fontSize: 13,
    fontStyle: 'italic',
  }
});

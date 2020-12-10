import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles/index';

const { width: winWidth } = Dimensions.get('window');
const { height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
  background: {
    backgroundColor: colors.platinum,
  }
});

import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles';

const { width: winWidth } = Dimensions.get('window');
const { width: winHeight } = Dimensions.get('window');
const widthPadding = 30;

export default StyleSheet.create({
  container: {
    margin: 5,

    alignSelf: 'center',
    borderWidth: 5,
    borderColor: colors.cgBlue,
  },
});

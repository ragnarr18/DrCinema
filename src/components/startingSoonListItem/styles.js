import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles';

const { width: winWidth } = Dimensions.get('window');
const { width: winHeight } = Dimensions.get('window');
const widthPadding = 30;

export default StyleSheet.create({
  container: {
    width: winWidth - 50,
    padding: 5,
    flexDirection: 'row',
    margin: 2,
    backgroundColor: colors.pacificBlue,
  },
  start: {
    marginRight: 15,
  },
  name: {
    width: 10,
    flex: 0.5,
    flexWrap: 'wrap',
  },
  end: {
    position: 'absolute',
    right: 10,
    top: 5,
  }
});

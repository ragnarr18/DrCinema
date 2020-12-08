import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');
const { height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
  movieContainer: {
    flexDirection: 'row',
    margin: 7,
    padding: 5,
    backgroundColor: '#bbbbbb',
  },
  textBox: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontSize: 17,
    flexShrink: 1,
  }
});

import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');
const { height: winHeight } = Dimensions.get('window');
const widthPadding = 30;

export default StyleSheet.create({
  container: {
    width: (winWidth - (widthPadding * 2)) / 2,
    backgroundColor: '#bbbbbb',
    margin: 15,
  }
});

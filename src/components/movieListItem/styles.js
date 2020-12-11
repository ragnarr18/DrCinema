import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles';

const { width: winWidth } = Dimensions.get('window');
const { width: winHeight } = Dimensions.get('window');
const widthPadding = 30;

export default StyleSheet.create({
  container: {
    width: (winWidth - (widthPadding * 2)) / 2,
    height: (winHeight - (widthPadding * 3.5)),
    backgroundColor: colors.pacificBlue,
    margin: 15,
    padding: 10,
    borderWidth: 3,
    borderColor: colors.cgBlue,
  },
  image: {
    height: 150,
    width: 100,
  },
  titleContainer: {
    alignContent: 'center',
  },
  title: {
    fontSize: 15,
    color: colors.platinum,
    textAlign: 'center',
  },
  text: {
    fontSize: 12,
    color: colors.platinum,
  },
  genres: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

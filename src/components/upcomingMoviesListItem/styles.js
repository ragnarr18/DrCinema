import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  movieContainer: {
    flexDirection: 'row',
    margin: 7,
    padding: 5,
    backgroundColor: colors.pacificBlue,
    borderWidth: 3,
    borderColor: colors.cgBlue,
  },
  icon: {
    height: 100,
    width: 100,
    paddingTop: 25,
    paddingLeft: 25,
  },
  image: {
    height: 100,
    width: 100,
  },
  textBox: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    color: colors.platinum,
    fontSize: 17,
    flexShrink: 1,
  },
  text: {
    color: colors.platinum,
  },
});

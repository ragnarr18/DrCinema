import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  background: {
    backgroundColor: colors.platinum,
  },
  image: {
    height: 500,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    margin: 20,
  },
  itemContainer: {
    margin: 10,
    padding: 5,
    backgroundColor: colors.pacificBlue,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: colors.cgBlue,
  },
  title: {
    color: colors.platinum,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    padding: 5,
  },
  lowerTitle: {
    color: colors.cgBlue,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    padding: 5,
  },
  subtitle: {
    color: colors.cgBlue,
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  genre: {
    color: colors.platinum,
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'left',
    padding: 10,
  },
  container: {
    flex: 1,
  },
  text: {
    color: colors.platinum,
    padding: 5,
    fontStyle: 'italic',
  },
});

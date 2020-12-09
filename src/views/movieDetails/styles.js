import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');
const { height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
  image: {
    height: 300,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    margin: 10,
    padding: 5,
    backgroundColor: '#a9a9a9',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    padding: 5,
  },
  subtitle: {
    color: '#7E7E7E',
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

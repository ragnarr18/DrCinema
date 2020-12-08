import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');
const { height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
  itemContainer: {
    margin: 10,
    padding: 5,
    backgroundColor: '#a9a9a9',
  },
  cinemaTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    color: '#7E7E7E',
  },
});

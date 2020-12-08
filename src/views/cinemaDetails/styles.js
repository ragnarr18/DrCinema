import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');
const { height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
  itemContainer: {
    margin: 10,
    padding: 5,
    backgroundColor: '#a9a9a9',
  },
  title: {
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
  iconWrap: {
    backgroundColor: 'white',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'column',
    height: 300,
  },
});

import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');
const { height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
  itemContainer: {
    margin: 10,
    padding: 5,
    backgroundColor: '#a9a9a9',
  },
  description: {
    fontSize: 14,
    fontStyle: 'italic',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  title: {
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    padding: 5,
  },
  textWrap: {
    flex: 1,
    flexWrap: 'wrap',
    marginBottom: 15,
    marginTop: 15,
    justifyContent: 'center',
  },
  icon: {
    padding: 5,
  },
});

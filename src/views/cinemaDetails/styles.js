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
    flexDirection: 'row',
    // flexWrap: 'wrap',
    marginBottom: 5,
    marginTop: 10,
    justifyContent: 'flex-start',
  },
  icon: {
    padding: 5,
  },
  showingMovies: {
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 20,
    textDecorationLine: 'underline',
  }
});

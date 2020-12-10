import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    backgroundColor: '#a9a9a9',
    justifyContent: 'center',
    alignItems: 'center',
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
  genre: {
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'left',
    padding: 10,
  },
  container: {
    flex: 1,
  },
});

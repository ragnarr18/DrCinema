import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  noMovies: {
    flex: 1,
    paddingTop: 10,
    alignItems: 'center',
  }
});

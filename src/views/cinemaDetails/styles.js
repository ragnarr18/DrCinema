import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: colors.platinum,
  },
  itemContainer: {
    margin: 10,
    padding: 5,
    backgroundColor: colors.cgBlue,
  },
  description: {
    color: colors.platinum,
    fontSize: 14,
    fontStyle: 'italic',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  title: {
    color: colors.platinum,
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    padding: 5,
  },
  textWrap: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: 'flex-start',
  },
  icon: {
    color: colors.platinum,
    padding: 5,
  },
  showingMovies: {
    color: colors.blueSaphire,
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  justifyText: {
    color: colors.platinum,
    paddingTop: 7,
    paddingLeft: 5,
  },
});

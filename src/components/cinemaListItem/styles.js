import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  background: {
    backgroundColor: colors.pacificBlue,
    borderWidth: 3,
    borderColor: colors.blueSaphire,
  },
  itemContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: '#a9a9a9',
  },
  cinemaTitle: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cinemaSubtitle: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  subtitle: {
    color: colors.platinum,
    fontSize: 12,
    fontStyle: 'italic',
  },
});

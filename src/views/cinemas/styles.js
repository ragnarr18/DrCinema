import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  background: {
    backgroundColor: colors.platinum,
  },
  title: {
    color: colors.blueSaphire,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
    padding: 5,
  },
  description: {
    color: colors.blueSaphire,
    textAlign: 'center',
    padding: 5,
    fontSize: 14,
    fontStyle: 'italic',
  },
  cinemaSubtitle: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  header: {
    borderBottomWidth: 1,
  },
  button: {
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderColor: colors.cgBlue,
    height: 75,
  },
});

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
    fontSize: 24,
    padding: 5,
  },
  description: {
    color: colors.blueSaphire,
    textAlign: 'center',
    padding: 5,
  },
  header: {
    borderBottomWidth: 1,
  },
});

import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  background: {
    backgroundColor: colors.platinum,
  },
  drCinema: {
    fontSize: 50,
    fontWeight: 'bold',
    color: colors.platinum,
    alignSelf: 'center',
    textDecorationLine: 'underline',
    paddingBottom: 10,
  },
  drCinemaBackground: {
    flex: 1,
    backgroundColor: colors.pacificBlue,
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
    borderWidth: 3,
    borderColor: colors.cgBlue,
    height: 80,
    width: 300,
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: colors.pacificBlue,
    marginBottom: 10,
  },
  comingSoonImage: {
    alignItems: 'center'
  }
});

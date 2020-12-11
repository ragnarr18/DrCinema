import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  description: {
    textAlign: 'center',
    padding: 5,
  },
  header: {
    borderBottomWidth: 1,
  },
  container: {
    flex: 1.4,
    backgroundColor: colors.pacificBlue,
    // marginBottom: 10,
    // width: windowWidth - 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  WebViewContainer: {
    // marginTop: (Platform.OS === 'android') ? 20 : 0,
    opacity: 0.99,
    backgroundColor: colors.pacificBlue,
    width: windowWidth - 50,
    height: 200,
  },
  movieAndDescriptionContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // flexGrow: 1,
    // margin: 10,
    padding: 10,
    backgroundColor: colors.pacificBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  movieContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    // flexGrow: 1,
    // margin: 10,
    padding: 10,
    backgroundColor: colors.pacificBlue,
  },
  icon: {
    height: 100,
    width: 500,
    paddingTop: 25,
    paddingLeft: 25,
  },
  image: {
    // flex: 1,
    // alignContent: 'flex-start',
    // paddingBottom: 30,
    // marginBottom: 30,
    height: 200,
    width: 150,
  },
  textBox: {
    flex: 1,
    marginLeft: 10,
    paddingLeft: 10,
    marginTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
  },
  title: {
    color: colors.platinum,
    fontSize: 20,
    // flexShrink: 1,
  },
  text: {
    color: colors.platinum,
    padding: 5,
    fontStyle: 'italic',
    fontSize: 13,
  },
  text2: {
    color: colors.platinum,
    fontSize: 14,
  },
});

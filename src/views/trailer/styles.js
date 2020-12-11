import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  description: {
    textAlign: 'center',
    padding: 5,

  },
  header: {
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.pacificBlue,
  },
  WebViewContainer: {
    marginTop: (Platform.OS === 'android') ? 20 : 0,
    opacity: 0.99,
    backgroundColor: colors.pacificBlue,
  },
  movieAndDescriptionContainer: {
    flex: 2,
    flexDirection: 'column',
    // flexGrow: 1,
    // margin: 10,
    padding: 10,
    backgroundColor: colors.pacificBlue,
  },
  movieContainer: {
    flex: 2,
    flexDirection: 'row',
    // flexGrow: 1,
    // margin: 10,
    padding: 5,
    backgroundColor: colors.pacificBlue,
  },
  icon: {
    height: 100,
    width: 500,
    paddingTop: 25,
    paddingLeft: 25,
  },
  image: {
    flex: 3,
    alignContent: 'center',
    paddingBottom: 30,
    marginBottom: 30,
    // height: 300,
    // width: 300,
  },
  textBox: {
    flex: 4,
    marginLeft: 10,
     paddingLeft: 10,
  },
  title: {
    color: colors.platinum,
    fontSize: 20,
    // flexShrink: 1,
  },
  text: {
    color: colors.platinum,
    padding: 5,
    margin: 5
  },
});

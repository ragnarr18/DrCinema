import { StyleSheet, Dimensions } from 'react-native';

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
  },
  WebViewContainer: {
    marginTop: (Platform.OS === 'android') ? 20 : 0,
    opacity: 0.99,
  },
  movieContainer: {
    flexDirection: 'row',
    margin: 7,
    padding: 5,
    backgroundColor: '#bbbbbb',
  },
  icon: {
    height: 100,
    width: 100,
    paddingTop: 25,
    paddingLeft: 25,
  },
  image: {
    height: 100,
    width: 100,
  },
  textBox: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontSize: 17,
    flexShrink: 1,
  }
});

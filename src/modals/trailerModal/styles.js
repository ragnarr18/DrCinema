import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  model: {
    backgroundColor: 'blue',
    opacity: 0.5,
    // display: 'none'
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    // flex: 1,
    backgroundColor: 'red'
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexGrow: 0.85,
    // borderRadius: 10,
    // width: winWidth,
    // backgroundColor: 'white',
    // padding: 0,
  },
});

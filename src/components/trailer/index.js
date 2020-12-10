import React from 'react';
import {
  Text, View, Button, Image, StyleSheet,
} from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';


const stylesA = StyleSheet.create({

WebViewContainer: {

    marginTop: (Platform.OS === 'android') ? 20 : 0,

  }

});

class Trailer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { item } = this.props;
    const releaseDate = item['release-dateIS'];
    let poster = <Image style={styles.image} source={{ uri: item.poster }} resizeMode="contain" />;
    if (item.poster === 'https://kvikmyndir.is/images/poster/') {
      poster = (
        <View style={styles.icon}>
          <Icon size={50} name="file-image-o" />
        </View>
      );
    }
    return (
      <View style={styles.movieContainer}>
        <View style={{ height: 300 }}>
          <WebView
            style={stylesA.WebViewContainer}
            allowsFullscreenVideo
            javaScriptEnabled
            domStorageEnabled
            source={{ uri: 'https://www.youtube.com/embed/f_FzLs92YFc?rel=0' }}
          />

        </View>
      </View>
    );
  }
}

export default Trailer;

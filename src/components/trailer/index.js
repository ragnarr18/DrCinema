import React from 'react';
import {
  View, Image, StyleSheet, Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const stylesA = StyleSheet.create({

  WebViewContainer: {
    marginTop: (Platform.OS === 'android') ? 20 : 0,
  },
});

class Trailer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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

Trailer.propTypes = {
  item: PropTypes.shape({
    poster: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  currentMovie: PropTypes.func.isRequired,
};

export default Trailer;

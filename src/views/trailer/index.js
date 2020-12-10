import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import { WebView } from 'react-native-webview';
import { getUpcomingMovies } from '../../actions/upcomingMoviesActions';

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

  async componentDidMount() {
    const { getUpcomingMovies } = this.props;
    await getUpcomingMovies();
  }

  getTrailer() {
    const { currentUpcomingMovie } = this.props;
  }

  render() {
    // const { isTrailerModalOpen } = this.state;
    return (
      <View style={{ justifyContent: 'center', flex: 1, padding: 5 }}>
        {/* <Text>{this.props.currentUpcomingMovie.trailers[0]['results'][0]['url']}</Text> */}
        <Text>{this.props.currentUpcomingMovie.title}</Text>
        <WebView
          style={stylesA.WebViewContainer}
          allowsFullscreenVideo
          javaScriptEnabled
          scalesPageToFit
          domStorageEnabled
          source={{ uri: this.props.currentUpcomingMovie.trailers[0].results[0].url }}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ currentUpcomingMovie }) => ({ currentUpcomingMovie });
export default connect(mapStateToProps, { getUpcomingMovies })(Trailer);

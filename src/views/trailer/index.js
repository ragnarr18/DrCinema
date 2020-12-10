import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { WebView } from 'react-native-webview';
import UpcomingMoviesList from '../../components/upcomingMoviesList';
import { getUpcomingMovies } from '../../actions/upcomingMoviesActions';
import TrailerModal from '../../modals/trailerModal';

const stylesA = StyleSheet.create({

  WebViewContainer: {

    marginTop: (Platform.OS === 'android') ? 20 : 0,

  },

});

class Trailer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isTrailerModalOpen: false };
  }

  getTrailer(id) {
    const { currentUpcomingMovie } = this.props;
    console.log('parent props: ', this.props);
    this.setState({ isTrailerModalOpen: true });
  }

  async componentDidMount() {
    const { getUpcomingMovies } = this.props;
    await getUpcomingMovies();
  }

  render() {
    // const { isTrailerModalOpen } = this.state;
    console.log("trailer", this.props.currentUpcomingMovie.trailers[0]['results'][0]['url']);
    return (
        <View style={{ justifyContent: 'center', flex: 1, padding: 5}}>
          {/* <Text>{this.props.currentUpcomingMovie.trailers[0]['results'][0]['url']}</Text> */}
          <Text>{this.props.currentUpcomingMovie['title']}</Text>
          <WebView
            style={stylesA.WebViewContainer}
            allowsFullscreenVideo
            javaScriptEnabled
            scalesPageToFit
            domStorageEnabled
            source={{ uri: this.props.currentUpcomingMovie.trailers[0]['results'][0]['url'] }}
          />
        </View>
    );
  }
}

const mapStateToProps = ({ currentUpcomingMovie }) => ({ currentUpcomingMovie });
export default connect(mapStateToProps, { getUpcomingMovies })(Trailer);

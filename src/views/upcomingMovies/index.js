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

  }

});

class UpcomingMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isTrailerModalOpen: false };
  }

  getTrailer(id) {
    const { currentUpcomingMovie, navigation } = this.props;
    console.log('parent props: ', this.props);
    navigation.navigate('Trailer');
    this.setState({ isTrailerModalOpen: true });
  }

  async componentDidMount() {
    const { getUpcomingMovies } = this.props;
    await getUpcomingMovies();
  }

  render() {
    const { isTrailerModalOpen } = this.state;
    return (
      <View>
        <UpcomingMoviesList openTrailer={() => this.getTrailer()} />
        {/* <TrailerModal
          closeModel={() => this.setState({ isTrailerModalOpen: false })}
          isOpen={isTrailerModalOpen}
        /> */}
        {/* <TrailerModal
          closeModel={() => this.setState({ isTrailerModalOpen: false })}
          isOpen={isTrailerModalOpen}>
          {/* <View> */}
            {/* <View style={{ height: 300, width: 300}}>
              <WebView
                style={stylesA.WebViewContainer}
                allowsFullscreenVideo
                javaScriptEnabled
                scalesPageToFit
                domStorageEnabled
                source={{ uri: 'https://www.youtube.com/embed/f_FzLs92YFc?rel=0' }}
              /> */}

            {/* </View> */}
          {/* </View> */}
         {/* </TrailerModal> */}
      </View>
    );
  }
}

const mapStateToProps = ({ upcomingMovies, currentUpcomingMovie }) => ({ upcomingMovies, currentUpcomingMovie });
export default connect(mapStateToProps, { getUpcomingMovies })(UpcomingMovies);

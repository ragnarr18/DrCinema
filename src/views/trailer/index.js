import React from 'react';
import {
  View, Text, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { WebView } from 'react-native-webview';
import { getUpcomingMovies } from '../../actions/upcomingMoviesActions';
import styles from './styles';

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
    if (currentUpcomingMovie.trailers.length > 0) {
      if (currentUpcomingMovie.trailers[0].results.length > 0) {
        if (currentUpcomingMovie.trailers[0].results[0].url !== undefined) {
          return currentUpcomingMovie.trailers[0].results[0].url;
        }
      }
    }
    return undefined;
  }

  render() {
    const { currentUpcomingMovie } = this.props;
    const { plot } = currentUpcomingMovie;
    const releaseDate = currentUpcomingMovie['release-dateIS'];
    console.log('trailer', this.props.currentUpcomingMovie);
    console.log('size of array: ', this.props.currentUpcomingMovie.trailers.length);
    const trailer = this.getTrailer();

    let poster = <Image style={styles.image} source={{ uri: currentUpcomingMovie.poster }} resizeMode="contain" />;
    if (currentUpcomingMovie.poster === 'https://kvikmyndir.is/images/poster/') {
      poster = (
        <View style={styles.icon}>
          <Icon size={50} name="file-image-o" />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.movieAndDescriptionContainer}>
          <View style={styles.movieContainer}>
            {poster}
            <View style={styles.textBox}>
              <Text style={styles.title}>{currentUpcomingMovie.title}</Text>
              <Text>Útgáfudagur:</Text>
              <Text style={styles.text}>{releaseDate}</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.text}>{plot}</Text>
          </View>
        </View>
        <View style={styles.container}>
          {trailer !== undefined > 0 && (
          // <View style={styles.container}>
          <WebView
            style={styles.WebViewContainer}
            allowsFullscreenVideo
            javaScriptEnabled
            scalesPageToFit
            domStorageEnabled
            source={{ uri: trailer }}
          />
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ currentUpcomingMovie }) => ({ currentUpcomingMovie });
export default connect(mapStateToProps, { getUpcomingMovies })(Trailer);

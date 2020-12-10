import React from 'react';
import {
  View, Text, StyleSheet, ImageBackground,
} from 'react-native';
import { connect } from 'react-redux';
import { WebView } from 'react-native-webview';
import { getUpcomingMovies } from '../../actions/upcomingMoviesActions';
import styles from './styles';

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
    const { currentUpcomingMovie } = this.props;
    const { plot } = currentUpcomingMovie;
    const releaseDate = currentUpcomingMovie['release-dateIS']
    console.log('trailer', this.props.currentUpcomingMovie);
    return (
      <View style={{flex: 1}}>
        <View style={styles.textBox}>
          <Text style={styles.title}>{currentUpcomingMovie.title}</Text>
          <Text>{releaseDate}</Text>
          <Text>{plot}</Text>
        </View>
      <View style={styles.container}>

        {/* <ImageBackground source={{ uri: this.props.currentUpcomingMovie.poster }} style={styles.backgroundImage} /> */}
        {/* <Text>{this.props.currentUpcomingMovie.trailers[0]['results'][0]['url']}</Text> */}
        {/* <Text>{this.props.currentUpcomingMovie.title}</Text> */}
        <WebView
          style={styles.WebViewContainer}
          allowsFullscreenVideo
          javaScriptEnabled
          scalesPageToFit
          domStorageEnabled
          source={{ uri: this.props.currentUpcomingMovie.trailers[0].results[0].url }}
        />
      </View>
      </View>
    );
  }
}

const mapStateToProps = ({ currentUpcomingMovie }) => ({ currentUpcomingMovie });
export default connect(mapStateToProps, { getUpcomingMovies })(Trailer);

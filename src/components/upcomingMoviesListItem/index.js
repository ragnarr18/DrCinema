import React from 'react';
import {
  Text, View, Button, Image, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getCurrentUpcomingMovie } from '../../actions/currentUpcomingMovieActions';
import styles from './styles';

class UpcomingMoviesListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async setCurrentUpcomingMovie(status) {
    if (status) {
      const { item, openTrailer } = this.props;
      await this.props.getCurrentUpcomingMovie(item);
      console.log("child props: ", this.props);
      openTrailer();
    }
  }

  render() {
    const { item, getCurrentUpcomingMovie } = this.props;
    const releaseDate = item['release-dateIS'];
    let poster = <Image style={styles.image} source={{ uri: item.poster }} resizeMode="contain" />;
    if (item.poster === 'https://kvikmyndir.is/images/poster/') {
      poster = (
        <View style={styles.icon}>
          <Icon size={50} name="file-image-o" />
        </View>
      );
    }
    let trailerText = '(No available trailer)';
    let trailerAvailable = false;
    if (item.trailers && item.trailers.length > 0 && item.trailers[0].results.length > 0) {
      trailerText = '(click to see trailer)'
      trailerAvailable = true;
    }
    return (
      <TouchableOpacity onPress={() => this.setCurrentUpcomingMovie(trailerAvailable)}>
        <View style={styles.movieContainer}>
          {poster}
          <View style={styles.textBox}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{releaseDate}</Text>
            <Text>{trailerText}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const mapStateToProps = ({ currentUpcomingMovie }) => ({ currentUpcomingMovie });
export default connect(mapStateToProps, { getCurrentUpcomingMovie })(UpcomingMoviesListItem);
// export default withNavigation(UpcomingMoviesListItem);

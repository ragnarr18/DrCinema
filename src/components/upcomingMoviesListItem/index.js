import React from 'react';
import {
  Text, View, Image, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getCurrentUpcomingMovie } from '../../actions/currentUpcomingMovieActions';
import styles from './styles';

class UpcomingMoviesListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async setCurrentUpcomingMovie() {
    const { item, openTrailer, getCurrentUpcomingMovie } = this.props;
    await getCurrentUpcomingMovie(item);
    openTrailer();
  }

  render() {
    const { item } = this.props;
    const releaseDate = item['release-dateIS'];
    const d = new Date(releaseDate).toGMTString();
    const date = d.substr(0, d.indexOf('00:00'));

    let poster = <Image style={styles.image} source={{ uri: item.poster }} resizeMode="contain" />;
    if (item.poster === 'https://kvikmyndir.is/images/poster/') {
      poster = (
        <View style={styles.icon}>
          <Icon size={50} name="file-image-o" />
        </View>
      );
    }
    let trailerText = '(No available trailer)';
    if (item.trailers && item.trailers.length > 0 && item.trailers[0].results.length > 0) {
      trailerText = '(click to see trailer)';
    }
    return (
      <TouchableOpacity onPress={() => this.setCurrentUpcomingMovie()}>
        <View style={styles.movieContainer}>
          {poster}
          <View style={styles.textBox}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{date}</Text>
            <Text style={styles.text}>{trailerText}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

UpcomingMoviesListItem.propTypes = {
  item: PropTypes.shape({
    poster: PropTypes.string,
    title: PropTypes.string,
    trailers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      results: PropTypes.arrayOf(PropTypes.shape({})),
    })),
  }).isRequired,
  openTrailer: PropTypes.func.isRequired,
  getCurrentUpcomingMovie: PropTypes.func.isRequired,
};

const mapStateToProps = ({ currentUpcomingMovie }) => ({ currentUpcomingMovie });
export default connect(mapStateToProps, { getCurrentUpcomingMovie })(UpcomingMoviesListItem);
// export default withNavigation(UpcomingMoviesListItem);

import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from './styles';
import { currentMovie } from '../../actions/currentMovieAction';

class MovieListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async inspectMovie(item) {
    const { navigation, currentMovie } = this.props;
    await currentMovie(item);
    navigation.navigate('MovieDetails');
  }

  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.inspectMovie(item)}
      >
        <View style={{ alignItems: 'center' }}>
          <Image style={styles.image} source={{ uri: item.poster }} resizeMode="contain" />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <Text style={styles.text}>{item.year}</Text>
          {item.genres.map((genre) => (
            <View style={styles.genres}>
              <Text key={genre.ID} style={[styles.text, { fontSize: 10 }]}>
                {' '}
                {genre.Name}
                {' '}
              </Text>
            </View>
          ))}
        </View>
      </TouchableOpacity>
    );
  }
}

MovieListItem.propTypes = {
  item: PropTypes.shape({
    poster: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  currentMovie: PropTypes.func.isRequired,
};

export default connect(null, { currentMovie })(withNavigation(MovieListItem));

import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import MovieListItem from '../movieListItem';

class CinemaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { moviesByCinemaId } = this.props;
    const movies = moviesByCinemaId.map((item) => (
      <View key={item.title}>
        <MovieListItem item={item} />
      </View>
    ));
    const noMovies = (
      <View style={styles.noMovies}>
        <Text style={{ fontSize: 15, fontStyle: 'italic' }}>There are no movies currently showing in this cinema</Text>
      </View>
    );

    const data = movies.length > 0 ? movies : noMovies;

    return (
      <View style={styles.list}>
        {data}
      </View>
    );
  }
}

CinemaList.propTypes = {
  moviesByCinemaId: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = ({ moviesByCinemaId }) => ({ moviesByCinemaId });
export default connect(mapStateToProps)(CinemaList);

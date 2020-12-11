import React from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UpcomingMoviesListItem from '../upcomingMoviesListItem';

class UpcomingMoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { openTrailer, upcomingMovies } = this.props;
    return (
      <View>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          {upcomingMovies.map((movie) => (
            <View key={movie.title}>
              <UpcomingMoviesListItem item={movie} openTrailer={openTrailer} />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

UpcomingMoviesList.propTypes = {
  upcomingMovies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  openTrailer: PropTypes.func.isRequired,
};

const mapStateToProps = ({ upcomingMovies }) => ({ upcomingMovies });

export default connect(mapStateToProps)(UpcomingMoviesList);

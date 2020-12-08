import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import UpcomingMoviesListItem from '../upcomingMoviesListItem';

class UpcomingMoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Text>
          Hello there.
        </Text>
        {this.props.upcomingMovies.map((movie) => (
          <View>
            <UpcomingMoviesListItem item={movie} />
          </View>
        ))}
      </View>
    );
  }
}

const mapStateToProps = ({ upcomingMovies }) => ({ upcomingMovies });

export default connect(mapStateToProps)(UpcomingMoviesList);

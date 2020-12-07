import React from 'react';
import { View, Text } from 'react-native';
import UpcomingMoviesList from '../../components/upcomingMoviesList';

class UpcomingMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>Upcoming movies, list starts here!</Text>
        <UpcomingMoviesList />
      </View>
    );
  }
}

export default UpcomingMovies;

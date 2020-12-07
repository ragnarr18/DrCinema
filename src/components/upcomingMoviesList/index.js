import React from 'react';
import { View, Text } from 'react-native';
import UpcomingMoviesListItem from '../upcomingMoviesListItem';

class UpcomingMoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>
          Hello there.
        </Text>
        <UpcomingMoviesListItem />
      </View>
    )
  }
}

export default UpcomingMoviesList;

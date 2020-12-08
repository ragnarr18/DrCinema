import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import UpcomingMoviesList from '../../components/upcomingMoviesList';
import { getUpcomingMovies } from '../../actions/upcomingMoviesActions';

class UpcomingMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const { getUpcomingMovies } = this.props;
    await getUpcomingMovies();
  }

  render() {
    return (
      <View>
        <UpcomingMoviesList />
      </View>
    );
  }
}


export default connect(null, { getUpcomingMovies })(UpcomingMovies);

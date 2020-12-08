import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import UpcomingMoviesListItem from '../upcomingMoviesListItem';

class UpcomingMoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const padding = this.props.upcomingMovies.length;
    return (
      <View>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          {this.props.upcomingMovies.map((movie) => (
            <View>
              <UpcomingMoviesListItem item={movie} />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ upcomingMovies }) => ({ upcomingMovies });

export default connect(mapStateToProps)(UpcomingMoviesList);

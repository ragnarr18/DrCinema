import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import MovieList from '../movieList';
import styles from './styles';

class CinemaDetailsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log('child: ', this.props);
    return (
      <MovieList />
    );
  }
}

export default CinemaDetailsList; // returns a connected component
// export default connect(null)(cinemaList)

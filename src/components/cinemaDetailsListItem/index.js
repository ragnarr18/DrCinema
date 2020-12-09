import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';
import MovieList from '../movieList';

class CinemaDetailsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <MovieList />
      </View>
    );
  }
}

export default CinemaDetailsListItem;

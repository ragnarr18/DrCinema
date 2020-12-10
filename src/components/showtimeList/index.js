import React from 'react';
import {
  View, Text, ScrollView, FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import ShowtimeListItem from '../showtimeListItem';

class ShowtimeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { movie } = this.props;
    console.log(movie);
    const showtimes = movie.showtimes.map((show) => (
      <View>
        <ShowtimeListItem time={show.time} url={show.purchase_url} />
      </View>
    ))
    return (
      <View style={styles.list}>
        {showtimes}
      </View>
    );
  }
}

export default ShowtimeList;

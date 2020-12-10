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
    return (
      <View>
        <ShowtimeListItem />
      </View>
    );
  }
}

export default ShowtimeList;

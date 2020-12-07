import React from 'react';
import {
  View, FlatList, Text,
} from 'react-native';
import CinemaDetailsListItem from '../cinemaDetailsListItem';
import styles from './styles';

class CinemaDetailsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { movies, navigation } = this.props;
    const { navigate } = navigation;
    return (
      <View>
        <Text>Hello there. This is where a list begins.</Text>
        <CinemaDetailsListItem />
      </View>
    );
  }
}

export default CinemaDetailsList;

import React from 'react';
import {
  View, Text, Button, TouchableOpacity, TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import { currentCinema } from '../../actions/currentCinema';

class CinemaListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  inspectCinema(cinema) {
    const { navigation, currentCinema } = this.props;
    currentCinema(cinema);
    navigation.navigate('CinemaDetails');
  }

  render() {
    const { item } = this.props;
    const addr = item['address\t'];
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => this.inspectCinema(item)}
        >
          <Text style={styles.cinemaTitle}>{item.name}</Text>
          <Text style={styles.subtitle}>
            Website:
            {item.website}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(null, { currentCinema })(withNavigation(CinemaListItem));

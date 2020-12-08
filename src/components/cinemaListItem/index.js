import React from 'react';
import {
  View, Text, Button, TouchableOpacity, TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { currentCinema } from '../../actions/currentCinema';

class CinemaListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  inspectCinema(navigation, cinemaObject) {
    const { currentCinema } = this.props;
    const { navigationRedux } = this.props;
    currentCinema(cinemaObject);
    navigationRedux.navigate('CinemaDetails');
  }

  render() {
    const { navigation } = this.props;
    const { item } = this.props;
    const addr = item['address\t'];
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => this.inspectCinema(navigation, item)}
        >
          <Text style={styles.cinemaTitle}>{item.name}</Text>
          <Text style={styles.subtitle}>Website: {item.website}</Text>
        </TouchableOpacity>
        {/* <Button
          title="See Cinema"
          onPress={() => this.inspectCinema(navigation, item)}
        /> */}
      </View>
    );
  }
}

const mapStateToProps = ({ navigationRedux }) => ({ navigationRedux });

export default connect(mapStateToProps, { currentCinema })(CinemaListItem);

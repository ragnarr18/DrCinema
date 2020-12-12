import React from 'react';
import {
  View, Button, Linking,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { colors } from '../../styles';
import { compareDateStrings } from '../../services/dateService';

class ShowtimeListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { time, url } = this.props;
    const today = new Date();
    const currTime = `${today.getHours()}:${today.getMinutes()}`;
    time = time.substr(0, 5);

    // is the current time greater than the show time?
    const passed = compareDateStrings(currTime, time);

    return (
      <View style={styles.button}>
        <Button
          title={time}
          disabled={passed}
          color={colors.cgBlue}
          onPress={() => { Linking.openURL(url); }}
        />
      </View>
    );
  }
}

ShowtimeListItem.propTypes = {
  time: PropTypes.shape({
    substr: PropTypes.func,
  }).isRequired,
  url: PropTypes.string.isRequired,
};

export default ShowtimeListItem;

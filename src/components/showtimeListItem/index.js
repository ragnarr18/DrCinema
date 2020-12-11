import React from 'react';
import {
  View, Button, Linking,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { colors } from '../../styles';

class ShowtimeListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { time, url } = this.props;
    const { substr } = time;
    const today = new Date();
    const currTime = `${today.getHours()}:${today.getMinutes()}`;
    const passed = substr(0, 5) > currTime;

    return (
      <View style={styles.button}>
        <Button
          title={time}
          disabled={!passed}
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

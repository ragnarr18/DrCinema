import React from 'react';
import {
  View, Button, Linking,
} from 'react-native';
import styles from './styles';

class ShowtimeListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { time, url } = this.props;
    const today = new Date();
    const currTime = `${today.getHours()}:${today.getMinutes()}`;
    const passed = time.substr(0, 5) > currTime;

    return (
      <View style={styles.button}>
        <Button title={time} disabled={!passed} onPress={() => { Linking.openURL(url); }} />
      </View>
    );
  }
}

export default ShowtimeListItem;

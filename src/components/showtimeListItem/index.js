import React from 'react';
import {
  Text, View, Button, Image, Linking, Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

class ShowtimeListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /*
  pressed(status) {
    if (status) {
      Linking.openURL(url);
    } else {
      Alert.alert('Tickets are no longer available for this showing');
    }
  }
  */

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

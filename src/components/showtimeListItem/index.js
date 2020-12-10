import React from 'react';
import {
  Text, View, Button, Image, Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

class ShowtimeListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { time, url } = this.props;
    console.log(time);
    return (
      <View>
        <Button title={time} onPress={() => { Linking.openURL(url); }} />
      </View>
    );
  }
}

export default ShowtimeListItem;

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
    return (
      <View>
        <Button title="Click me" onPress={() => { Linking.openURL('https://google.com'); }} />
      </View>
    );
  }
}

export default ShowtimeListItem;

import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';

class StartingSoonListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {item} = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={() => Linking.openURL(item.purchase_url)}>
        <Text style={styles.start}>{item.t}</Text>
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.end}>{item.loc}</Text>
      </TouchableOpacity>
    )
  }
}


export default StartingSoonListItem;

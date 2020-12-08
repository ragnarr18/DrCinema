import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';

class UpcomingMoviesListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item } = this.props;
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  }
}

export default UpcomingMoviesListItem;

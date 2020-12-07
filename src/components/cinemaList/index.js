import React from 'react';
import { View, Text } from 'react-native';
import CinemaListItem from '../CinemaListItem';

class CinemaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props

    return (
      <View>
        <Text>
          Cinema List start
        </Text>
        <CinemaListItem
          navigate={navigation.navigate}
        />
      </View>
    )
  }
}

export default CinemaList;

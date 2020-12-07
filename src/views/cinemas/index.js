import React from 'react';
import { View, Text } from 'react-native';
import cinemaList from '../../components/cinemaList';

class cinemas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>Cinema Screen</Text>
        <cinemaList />
      </View>
    )
  }
}

export default cinemas;

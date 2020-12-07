import React from 'react';
import { View, Text } from 'react-native';
import CinemaList from '../../components/CinemaList';

class Cinemas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>Cinema Screen</Text>
        <CinemaList />
      </View>
    )
  }
}

export default Cinemas;

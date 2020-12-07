import React from 'react';
import { View, Text } from 'react-native';

class movieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>Movie Details Screen</Text>
        <cinemaList />
      </View>
    )
  }
}

export default movieDetails;

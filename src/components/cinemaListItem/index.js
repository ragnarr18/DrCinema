import React from 'react';
import {
  View, Text, Button
} from 'react-native';
import styles from './styles';

class CinemaListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { navigate } = this.props;
    console.log('props', this.props);
    return (
      <View>
        <Text>{this.props.address}</Text>
        <Text>{this.props.city}</Text>
        <Button
          title="Go to movieDetails"
          // onPress={() => navigate('MovieDetails')}
          onPress={() => console.log('boop')}
        />
      </View>
    );
  }
}

export default CinemaListItem;

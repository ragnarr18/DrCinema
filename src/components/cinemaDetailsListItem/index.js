import React from 'react';
import {
  View, Text, Button
} from 'react-native';
import styles from './styles';

class CinemaDetailsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigate } = this.props;

    return (
      <View>
        <Button
          title="Go to movieDetails"
          onPress={() => navigate('MovieDetails')}
        />
      </View>
    );
  }
}

export default CinemaDetailsListItem;

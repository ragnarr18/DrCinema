import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';

class CinemaDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigate } = this.props;

    return (
      <View>
        <Button
          title="Go to CinemaDetails"
          onPress={() => navigate('CinemaDetails')}
        />
      </View>
    );
  }
}

export default CinemaDetails;

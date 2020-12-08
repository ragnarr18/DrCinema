import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
// import CinemaDetailsList from '../../components/cinemaDetailsList';

class CinemaDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Text>Cinema Name: [TBD]</Text>
        <Text>Cinema Description: [TBD]</Text>
        <Text>Cinema Address: [TBD]</Text>
        <Text>Cinema Phone: [TBD]</Text>
        <Text>Cinema Website: [TBD]</Text>

        <Text>This is where I want a list to appear:</Text>

      </View>
    );
  }
}

export default CinemaDetails;

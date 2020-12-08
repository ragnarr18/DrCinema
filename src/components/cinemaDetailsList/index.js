import React from 'react';
import { View, Text } from 'react-native';
import CinemaDetailsListItem from '../cinemaDetailsListItem';
import styles from './styles';

class CinemaDetailsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log('child: ', this.props);
    return (
      <View>
        <View>
          <Text>Hello there!</Text>
          <CinemaDetailsListItem />
        </View>
      </View>
    );
  }
}

export default CinemaDetailsList; // returns a connected component
// export default connect(null)(cinemaList)

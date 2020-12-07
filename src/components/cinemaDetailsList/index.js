import React from 'react';
import {
  View, FlatList, Text,
} from 'react-native';
import styles from './styles';

class CinemaDetailsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { movies, navigation, setSelected } = this.props;
    const { navigate } = navigation;
    return (
      <View>
        {/* <FlatList
          numColumns={1}
          data={movies}
          renderItem={({ item: { id, name, color } }) => (
            <CinemaDetailsItem
              id={id}
              name={name}
              color={color}
              navigate={navigate}
            />
          )}
          keyExtractor={(listItem) => listItem.id}
        /> */}
        <Text>I want a list to appear here</Text>
      </View>
    );
  }
}

export default CinemaDetailsList;

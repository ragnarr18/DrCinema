import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import styles from './styles';

class UpcomingMoviesListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item } = this.props;
    const releaseDate = item['release-dateIS'];
    return (
      <View style={styles.movieContainer}>
        <Image style={{ height: 100, width: 100 }} source={{uri: item.poster}} />
        <View style={styles.textBox}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{releaseDate}</Text>
        </View>
      </View>
    );
  }
}

export default UpcomingMoviesListItem;

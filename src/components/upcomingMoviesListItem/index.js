import React from 'react';
import {
  Text, View, Button, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

class UpcomingMoviesListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item } = this.props;
    const releaseDate = item['release-dateIS'];
    let poster = <Image style={styles.image} source={{ uri: item.poster }} resizeMode="contain" />;
    if (item.poster === 'https://kvikmyndir.is/images/poster/') {
      poster = (
        <View style={styles.icon}>
          <Icon size={50} name="file-image-o" />
        </View>
      );
    }
    return (
      <View style={styles.movieContainer}>
        {poster}
        <View style={styles.textBox}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{releaseDate}</Text>
        </View>
      </View>
    );
  }
}

export default UpcomingMoviesListItem;

import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Tom & Jerry',
      releaseDate: '1920',
      duration: '120 min',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/5f/TomandJerryTitleCardc.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra nulla vel lorem convallis finibus. Sed commodo neque eget magna porta auctor. Quisque eget quam ultrices orci finibus...',
      genres: 'action',
    };
  }

  render() {
    const poster = <Image style={styles.image} source={{ uri: this.state.image }} resizeMode="cover" />;
    return (
      <View>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>{this.state.name}</Text>
          <Text style={styles.subtitle}>
            Released in:
            {' '}
            {this.state.releaseDate}
          </Text>
          <Text style={styles.subtitle}>
            Duration:
            {' '}
            {this.state.duration}
          </Text>
          {poster}
          <Text>{this.state.description}</Text>
          <Text style={styles.genre}>
            Genres:
            {' '}
            {this.state.genres}
          </Text>
        </View>
        <Text style={styles.title}>Sýningatímar</Text>
        <Text>This is where I want a list to appear: [TO-DO]</Text>
      </View>
    );
  }
}

export default MovieDetails;

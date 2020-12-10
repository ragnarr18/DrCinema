import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import { currentMovie } from '../../actions/currentMovieAction';

class MovieListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async inspectMovie(item) {
    const { navigation, currentMovie } = this.props;
    await currentMovie(item);
    navigation.navigate('MovieDetails');
  }

  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.inspectMovie(item)}
      >
        <View style={{ alignItems: 'center' }}>
          <Image style={styles.image} source={{ uri: item.poster }} resizeMode="contain" />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <Text style={styles.text}>{item.year}</Text>
          {item.genres.map((genre) => (
            // sko ég er að íhuga ef við höfum tíma að búa til filter
            // sem fer í gegnum alls konar case í json svarinu frá servernum,
            // cuz skoppa og skrítla genre-in eru tölur
            <Text key={genre.ID} style={[styles.text, { fontSize: 10 }]}>
              {' '}
              {genre.Name}
              {' '}
            </Text>
          ))}
        </View>
      </TouchableOpacity>
    );
  }
}

export default connect(null, { currentMovie })(withNavigation(MovieListItem));

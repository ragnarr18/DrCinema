import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import ShowtimeList from '../../components/showtimeList';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const movie = this.props.currentMovie;
    const poster = (
      <Image
        style={styles.image}
        source={{ uri: movie.poster }}
        resizeMode="cover"
      />
    );
    return (
      <View>
        <ScrollView contentContainer={{ flex: 1, flexGrow: 1 }}>
          <View style={styles.itemContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.subtitle}>
              Released in:
              {' '}
              {movie.year}
            </Text>
            <Text style={styles.subtitle}>
              Duration:
              {' '}
              {movie.durationMinutes}
              {' '}
              min
            </Text>
            {poster}
            <Text>{movie.plot}</Text>
            <Text style={styles.genre}>
              Genres:
              {' '}
              {movie.genres.map((genre) => (
                // sko ég er að íhuga ef við höfum tíma að búa til filter
                // sem fer í gegnum alls konar case í json svarinu frá servernum,
                // cuz skoppa og skrítla genre-in eru tölur
                <Text>
                  {' '}
                  {genre.Name}
                  ,
                </Text>
              ))}
            </Text>
          </View>
          <Text style={styles.title}>Showtimes</Text>
          <Text style={styles.subtitle}>Click on a button to buy a ticket for the show!</Text>
          <ShowtimeList movie={movie} />
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = ({ currentMovie }) => ({ currentMovie });
export default connect(mapStateToProps)(MovieDetails);
// export default MovieDetails;

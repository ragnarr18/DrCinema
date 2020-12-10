import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { WebView } from 'react-native-webview';
import { Video } from 'expo-av';
// import { WebView } from 'react-native-webview'; not working for android atm probably needs  "react-native link"
// import Video from '../../components/videoComponent';
import styles from './styles';
import ShowtimeList from '../../components/showtimeList';

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
    console.log('currentMovie: ', this.props.currentMovie);
    // HERE IS THE MOVIE
    return (
      <View>
        <ScrollView contentContainer={{ flex: 1, flexGrow: 1 }}>
          <View style={{ padding: 20, margin: 10 }}>
            <Text>video</Text>
            <Video
              source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              isLooping
              style={{ width: 300, height: 300 }}
            />
          </View>
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
          <ShowtimeList />
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = ({ currentMovie }) => ({ currentMovie });
export default connect(mapStateToProps)(MovieDetails);
// export default MovieDetails;

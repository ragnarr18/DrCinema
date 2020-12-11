import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import CinemaList from '../../components/cinemaList';
import StartingSoonList from '../../components/startingSoonList';

import { getCinemas } from '../../actions/cinemasActions';
import { getMovies } from '../../actions/moviesActions';
import { startingSoon } from '../../actions/startingSoonAction';

import styles from './styles';
import { colors } from '../../styles';

class Cinemas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const {
      getCinemas, getMovies, startingSoon, movies,
    } = this.props;
    await getCinemas();
    await getMovies();
    await startingSoon(movies);
  }

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.background}>
        <View style={{ flex: 1, backgroundColor: colors.pacificBlue }}>
          <Text style={{ fontSize: 50, fontWeight: 'bold', color: colors.platinum, alignSelf: 'center', textDecorationLine: 'underline', paddingBottom: 10, }}>Dr.Cinema</Text>
        </View>
        <Text style={styles.title}>COMING SOON</Text>
        <Text style={styles.description}>Press here to see all upcoming movies</Text>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate('UpcomingMovies')}
          >
            <View style={styles.comingSoonImage}>
              <Image
                style={{ width: 200, height: 70 }}
                source={{ uri: 'https://www.a-dato.com/wp-content/uploads/2018/11/Coming-soon.png' }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>STARTING SOON</Text>
          <Text style={styles.description}>click on a film to purchase a ticket</Text>
          <StartingSoonList />
        </View>
        <View>
          <Text style={styles.title}>CINEMA LIST</Text>
          <Text style={styles.description}>
            Click on a cinema to learn more about it and the movies they are showing.
          </Text>
        </View>
        <CinemaList />
      </ScrollView>
    );
  }
}
const mapStateToProps = ({ cinemas, movies }) => ({ cinemas, movies });

Cinemas.propTypes = {
  getCinemas: PropTypes.func.isRequired,
  getMovies: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  startingSoon: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default connect(mapStateToProps, {
  getCinemas, getMovies, startingSoon,
})(withNavigation(Cinemas));

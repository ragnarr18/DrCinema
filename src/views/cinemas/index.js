import React from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity, Image } from 'react-native';
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
    await this.props.getCinemas();
    await this.props.getMovies();
    await this.props.startingSoon(this.props.movies);
    // console.log('movies', this.props.movies);
    // console.log('parent; ', this.props.cinemas);
  }

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.background}>
        <View style={styles.button}>
          {/* <Button
            color={colors.pacificBlue}
            title="upcoming movies"
            onPress={() => navigation.navigate('UpcomingMovies')}
          /> */}
          <TouchableOpacity
            onPress={() => navigation.navigate('UpcomingMovies')}
            style={{ color: colors.pacificBlue, flex: 1 }}
          >
            <View style={{ flex: 1, backgroundColor: colors.pacificBlue, alignItems: 'center' }}>
              <Image
                style={{ width: 200, height: 50 }}
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
            Click on a cinema to learn more about it and see movies they are showing.
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
};

export default connect(mapStateToProps, {
  getCinemas, getMovies, startingSoon
})(withNavigation(Cinemas));
// })(withNavigation(Cinemas))  arnar hér
// here we are dispatching getCinemas and changePage

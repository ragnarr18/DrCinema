import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import CinemaList from '../../components/cinemaList';

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
      <View style={styles.background}>
        <Button
          color={colors.pacificBlue}
          title="upcoming movies"
          onPress={() => navigation.navigate('UpcomingMovies')}
        />
        <View>
          <Text style={styles.title}>CINEMA LIST</Text>
          <Text style={styles.description}>
            Click on a cinema to learn more about it and see movies they are showing.
          </Text>
        </View>
        <CinemaList />
      </View>
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

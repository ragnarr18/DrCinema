import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UpcomingMoviesList from '../../components/upcomingMoviesList';
import { getUpcomingMovies } from '../../actions/upcomingMoviesActions';
import styles from './styles';

class UpcomingMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const { getUpcomingMovies } = this.props;
    await getUpcomingMovies();
  }

  getTrailer() {
    const { navigation } = this.props;
    navigation.navigate('Trailer');
  }

  render() {
    return (
      <View style={styles.background}>
        <UpcomingMoviesList openTrailer={() => this.getTrailer()} />
      </View>
    );
  }
}

UpcomingMovies.propTypes = {
  getUpcomingMovies: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ upcomingMovies, currentUpcomingMovie }) => (
  { upcomingMovies, currentUpcomingMovie });
export default connect(mapStateToProps, { getUpcomingMovies })(UpcomingMovies);

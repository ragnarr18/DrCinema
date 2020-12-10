import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import HtmlText from 'react-native-html-to-text';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import MovieList from '../../components/movieList';
import styles from './styles';
import { getMoviesByCinemaId } from '../../actions/moviesActions';

class CinemaDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const { currentCinema } = this.props;
    await this.props.getMoviesByCinemaId(currentCinema.id);
  }

  render() {
    const { currentCinema } = this.props;
    const {
      name,
      description,
      phone,
      city,
      website,
    } = currentCinema;
    const address = currentCinema['address\t']; // hard to validate this name
    let html = 'no description available';
    if (description) {
      html = `<p>${description}</p>`;
    }

    return (
      <ScrollView contentContainer={{ flex: 1, flexGrow: 1 }}>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>
            {name}
          </Text>

          <HtmlText html={html} style={styles.description} />

          <View style={styles.textWrap}>
            <Icon name="home" size={30} style={styles.icon} />
            <Text style={styles.justifyText}>
              {'Address: '}
              {address}
              {', '}
              {city}
            </Text>
          </View>

          <View style={styles.textWrap}>
            <Icon name="phone" size={30} style={styles.icon} />
            <Text style={styles.justifyText}>
              {'Phone: '}
              {phone}
            </Text>
          </View>

          <View style={styles.textWrap}>
            <Icon name="link" size={30} style={styles.icon} />
            <Text style={styles.justifyText}>
              {'Website: '}
              {website}
            </Text>
          </View>

        </View>

        <Text style={styles.showingMovies}>Movies now showing</Text>
        <MovieList />

      </ScrollView>
    );
  }
}

CinemaDetails.propTypes = {
  currentCinema: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    phone: PropTypes.string,
    city: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
  getMoviesByCinemaId: PropTypes.func.isRequired,
};

const mapStateToProps = (
  { movies, currentCinema, moviesByCinemaId },
) => ({ movies, currentCinema, moviesByCinemaId });

export default connect(mapStateToProps, { getMoviesByCinemaId })(withNavigation(CinemaDetails));

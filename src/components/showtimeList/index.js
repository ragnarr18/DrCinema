import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import ShowtimeListItem from '../showtimeListItem';

class ShowtimeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { movie } = this.props;
    const showtimes = movie.showtimes.map((show) => (
      <View key={show.time}>
        <ShowtimeListItem time={show.time} url={show.purchase_url} />
      </View>
    ));
    return (
      <View style={styles.list}>
        {showtimes}
      </View>
    );
  }
}

ShowtimeList.propTypes = {
  movie: PropTypes.shape({
    showtimes: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default ShowtimeList;

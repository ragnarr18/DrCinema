import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { currentMovie } from '../../actions/currentMovieAction';

class MovieListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  inspectMovie(item) {
    const { currentMovie } = this.props;
    const { navigationRedux } = this.props;
    currentMovie(item);
    navigationRedux.navigate('MovieDetails');
  }

  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.inspectMovie(item)}
      >
        <View>
          <Text style={styles.cinemaTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = ({ navigationRedux }) => ({ navigationRedux });
export default connect(mapStateToProps, { currentMovie })(MovieListItem);

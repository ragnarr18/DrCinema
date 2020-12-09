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
    console.log(this.props);
    const { currentMovie } = this.props;
    const { navigationRedux } = this.props;
    currentMovie(item);
    navigationRedux.navigate('MovieDetails');
  }

  render() {
    const { item } = this.props;
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.inspectMovie(item)}
        >
          <Text style={styles.cinemaTitle}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = ({ navigationRedux }) => ({ navigationRedux });
export default connect(mapStateToProps, { currentMovie })(MovieListItem);

import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
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
        <View style={{ alignItems: 'center' }}>
          <Image style={styles.image} source={{ uri: item.poster }} resizeMode="contain" />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = ({ navigationRedux }) => ({ navigationRedux });
export default connect(mapStateToProps, { currentMovie })(MovieListItem);

import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import MovieListItem from '../movieListItem';

class CinemaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = this.props.movies.map((item) => (
      <View>
        <MovieListItem item={item} />
      </View>
    ));

    return (
      <View style={styles.list}>
        {data}
      </View>
    );
  }
}

const mapStateToProps = ({ movies }) => ({ movies }); // pulling cinems from store, same as (stateStore){return {cinemas: stateStore.cinemas}}
export default connect(mapStateToProps)(CinemaList); // returns a connected component

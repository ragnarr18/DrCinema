import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';

import StartingSoonListItem from '../startingSoonListItem';

class StartingSoonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let movies = this.props.startingSoon.map((x) => (
      <View key={x.title + x.loc + x.t}>
        <StartingSoonListItem item={x} />
      </View>
    ))
    if (movies.length === 0) {
      movies = (
        <View style={styles.notAvailable}>
          <Text style={styles.notAvailableText}>
            No available showings...
          </Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {movies}
      </View>
    );
  }
}

StartingSoonList.propTypes = {
  startingSoon: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = ({ startingSoon }) => ({ startingSoon });

export default connect(mapStateToProps)(StartingSoonList);

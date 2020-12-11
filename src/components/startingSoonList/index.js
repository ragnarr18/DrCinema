import React from 'react';
import { View } from 'react-native';
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
    return (
      <View style={styles.container}>
        {this.props.startingSoon.map((x) => (
          <View key={x.title + x.loc + x.t}>
            <StartingSoonListItem item={x} />
          </View>
        ))}
      </View>
    );
  }
}

StartingSoonList.propTypes = {
  startingSoon: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = ({ startingSoon }) => ({ startingSoon });

export default connect(mapStateToProps)(StartingSoonList);

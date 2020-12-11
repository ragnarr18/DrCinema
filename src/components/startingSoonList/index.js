import React from 'react';
import { View, Text } from 'react-native';
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
    )
  }
}

const mapStateToProps = ({ startingSoon }) => ({ startingSoon });

export default connect(mapStateToProps)(StartingSoonList);

import React from 'react';
import { Text, TouchableOpacity, Linking } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class StartingSoonListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => Linking.openURL(item.purchase_url)}
      >
        <Text style={styles.start}>{item.t}</Text>
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.end}>{item.loc}</Text>
      </TouchableOpacity>
    );
  }
}

StartingSoonListItem.propTypes = {
  item: PropTypes.shape({
    t: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    loc: PropTypes.string.isRequired,
    purchase_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default StartingSoonListItem;

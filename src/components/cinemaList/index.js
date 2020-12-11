import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CinemaListItem from '../cinemaListItem';
import styles from './styles';

class CinemaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const height = this.props.cinemas.length * 115;
    return (
      <View style={styles.background}>
        <View
          contentContainerStyle={{ height }}
        >
          {this.props.cinemas.map((cinema) => (
            <View key={cinema.name}>
              <CinemaListItem
                item={cinema}
              />
            </View>
          ))}
        </View>
      </View>
    );
  }
}

CinemaList.propTypes = {
  cinemas: PropTypes.arrayOf(PropTypes.shape({
    length: PropTypes.number,
  })).isRequired,
};

const mapStateToProps = ({ cinemas }) => ({ cinemas });
// pulling cinems from store, same as (stateStore){return {cinemas: stateStore.cinemas}}
export default connect(mapStateToProps)(CinemaList); // returns a connected component
// export default connect(null)(cinemaList)

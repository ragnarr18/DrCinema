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
    const { cinemas } = this.props;
    const height = cinemas.length * 115;
    return (
      <View style={styles.background}>
        <View
          contentContainerStyle={{ height }}
        >
          {cinemas.map((cinema) => (
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
export default connect(mapStateToProps)(CinemaList);

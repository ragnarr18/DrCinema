import React from 'react';
import { View } from 'react-native';
// import { connect } from 'react-redux';
// import { changePage } from '../../actions/changePage';
import cinemaDetails from '../cinemaDetails';

class cinemaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <cinemaDetails />
      </View>
    );
  }
}

export default cinemaList;
// export default connect(null, { changePage })(CinemaList);

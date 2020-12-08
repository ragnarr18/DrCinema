import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import CinemaList from '../../components/cinemaList';

import { changePage } from '../../actions/changePage';
import { getCinemas } from '../../actions/cinemasActions';

class Cinemas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    await this.props.getCinemas();
    // console.log('parent; ', this.props.cinemas);
  }

  selectPage(number) {
    // console.log(number);
    this.props.changePage(number);
  }

  render() {
    const { navigation } = this.props;
    return (
    // <Provider store={createStore(reducers)}>
    // Provider á bara að vera í app.js
      <View>
        <Text>CINEMA LIST</Text>
        <CinemaList navigation={navigation} />
      </View>
    // </Provider>
    );
  }
}
const mapStateToProps = ({ cinemas }) => ({ cinemas });

export default connect(mapStateToProps, { changePage, getCinemas })(Cinemas);
// here we are dispatching getCinemas and changePage

import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import CinemaList from '../../components/cinemaList';

import { changePage } from '../../actions/changePage';
import { getCinemas } from '../../actions/cinemasActions';
import { navigationRedux } from '../../actions/navigationRedux';

class Cinemas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    const { navigationRedux } = this.props;
    const { navigation } = this.props;
    navigationRedux(navigation);
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
        <Button
          color="#11ab11"
          title="upcoming movies"
          onPress={() => navigation.navigate('UpcomingMovies')}
        />
        <Text>CINEMA LIST</Text>
        <CinemaList />
      </View>
    // </Provider>
    );
  }
}
const mapStateToProps = ({ cinemas }) => ({ cinemas });

export default connect(mapStateToProps, { changePage, getCinemas, navigationRedux })(Cinemas);
// here we are dispatching getCinemas and changePage

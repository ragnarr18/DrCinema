import React from 'react';
import { View, Text, Button } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import CinemaList from '../../components/cinemaList';
import reducers from '../../reducers';

import { changePage } from '../../actions/changePage';

const Cinemas = (props) => (
  <View>
    <Text>
      Page
    </Text>
    <cinemaList />
    <Button
      title="One"
      onPress={() => console.log(1)}
    />
    <View style={{ height: 5 }} />

  selectPage(number) {
    console.log(number);
    const { changePage } = this.props;
    changePage(number);
  }

  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;

    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>HELLO</Text>
          <CinemaList
            navigation={navigation}
          />
          <Button
            title="One"
            onPress={() => this.selectPage(1)}
          />
          <View style={{ height: 5 }} />

          <Button
            title="Two"
            onPress={() => this.selectPage(2)}
          />
          <Button
            title="Visit upcomingMovies"
            onPress={() => navigation.navigate('UpcomingMovies')}
          />
        </View>
      </Provider>
    );
  }
}

export default connect(null, { changePage })(Cinemas);

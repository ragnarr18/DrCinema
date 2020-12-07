import React from 'react';
import { View, Text, Button } from 'react-native';
// import { Provider, connect } from 'react-redux';
// import { createStore } from 'redux';
import cinemaList from '../../components/cinemaList';
// import reducers from '../../reducers';

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

    <Button
      title="Two"
      onPress={() => console.log(2)}
    />
  </View>
)

export default Cinemas;

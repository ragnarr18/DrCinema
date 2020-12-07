import React from 'react';
import { View, Text, Button } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import CinemaList from '../../components/cinemaList';
import reducers from '../../reducers';

import { changePage } from '../../actions/changePage';
import { getCinemas } from '../../actions/cinemasActions';

class Cinemas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
     this.props.getCinemas();
    // console.log(this.props);
  }

  selectPage(number) {
    console.log(number);
    this.props.changePage(number);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>HELLO</Text>
          <CinemaList />
          <Button
            title="One"
            onPress={() => this.selectPage(1)}
          />
          <View style={{ height: 5 }} />

          <Button
            title="Two"
            onPress={() => this.selectPage(2)}
          />
        </View>
      </Provider>
    );
  }
}

export default connect(null, { changePage, getCinemas })(Cinemas);

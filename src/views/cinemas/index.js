import React from 'react';
import { View, Text, Button } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CinemaList from '../../components/CinemaList';
import reducers from '../../reducers';
import { connect } from 'react-redux';
import { changePage } from '../../actions/changePage';

class Cinemas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  selectPage(number) {
    console.log(number)
    const { changePage } = this.props;
    changePage(number);
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

export default connect(null, { changePage })(Cinemas);

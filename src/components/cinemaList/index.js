import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class CinemaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("child: ",this.props);
    return (
      <View>
        <Text>
          Cinema List {this.props.cinemas}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = ({ cinemas }) => ({ cinemas });
export default connect(mapStateToProps)(CinemaList); // returns a connected component

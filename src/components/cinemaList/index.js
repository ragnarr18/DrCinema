import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import CinemaListItem from '../cinemaDetailsListItem';

class CinemaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidUpdate (nextProps){
  //   this.setState({data: nextProps.cinemas})
  //   console.log(this.state);
  // }

  render() {
    console.log('child: ', this.props);
    return (
      <View>
        <Text>
          Cinema List
          {this.props.cinemas.map((cinema)=>(
            <View>
              <Text>A cinema</Text>
            </View>
          ))}
        </Text>
        {/* <CinemaListItem
          navigate={navigation.navigate}
        /> */}
      </View>
    );
  }
}

const mapStateToProps = ({ cinemas }) => ({ cinemas });
export default connect(mapStateToProps)(CinemaList); // returns a connected component
// export default connect(null)(cinemaList)

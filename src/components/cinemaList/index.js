import React from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import CinemaListItem from '../cinemaListItem';

class CinemaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const height = this.props.cinemas.length * 97;
    return (
      <View>
        <ScrollView
          contentContainerStyle={{ height }}
        >
          {this.props.cinemas.map((cinema) => (
            <View>
              <CinemaListItem
                item={cinema}
                navigation={this.props.navigation} // withNavigation  i staðinn í child
              />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ cinemas }) => ({ cinemas });
// pulling cinems from store, same as (stateStore){return {cinemas: stateStore.cinemas}}
export default connect(mapStateToProps)(CinemaList); // returns a connected component
// export default connect(null)(cinemaList)

import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from './styles';
import { currentCinema } from '../../actions/currentCinema';

class CinemaListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  inspectCinema(cinema) {
    const { navigation, currentCinema } = this.props;
    currentCinema(cinema);
    navigation.navigate('CinemaDetails');
  }

  render() {
    const { item } = this.props;
    let { website } = item;
    const { logo } = item;
    if (website.substr(0, 3) !== 'www') { website = `www.${website}`; }

    return (
      <View style={[styles.itemContainer, styles.background]}>
        <TouchableOpacity
          onPress={() => this.inspectCinema(item)}
        >
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.textView}>
              <Text style={styles.cinemaTitle}>{item.name}</Text>
              <Text style={styles.subtitle}>
                {website}
              </Text>
            </View>
            <View style={styles.logoView}>
              <Image style={{ height: 30, width: 120 }} source={{ uri: logo }} resizeMode="contain" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

CinemaListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    website: PropTypes.string,
    logo: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  currentCinema: PropTypes.func.isRequired,
};

export default connect(null, { currentCinema })(withNavigation(CinemaListItem));

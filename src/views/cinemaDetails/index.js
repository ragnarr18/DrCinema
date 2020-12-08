import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import HtmlText from 'react-native-html-to-text';
import Icon from 'react-native-vector-icons/FontAwesome';
import CinemaDetailsList from '../../components/cinemaDetailsList';
import styles from './styles';

class CinemaDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { navigation } = this.props;
    const { currentCinema } = this.props;
    const {
      name,
      description,
      phone,
      website,
    } = currentCinema;
    const address = currentCinema['address\t'];
    const html = `<p>${description}</p>`;
    return (
      <View>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>
            {name}
          </Text>
          <HtmlText html={html} />
          <View>
            <Icon name="home" size={30} />
            <Text>
              Cinema Address:
              {address}
            </Text>
          </View>
          <View>
            <Icon name="phone" size={30} />
            <Text>
              Cinema Phone:
              {phone}
            </Text>
          </View>
          <View>
            <Icon name="link" size={30} />
            <Text>
              Cinema Website:
              {website}
            </Text>
          </View>
        </View>
        <Text>Movies currently in this cinema:</Text>
        <CinemaDetailsList />
      </View>
    );
  }
}

const mapStateToProps = ({ currentCinema }) => ({ currentCinema });

export default connect(mapStateToProps)(CinemaDetails);

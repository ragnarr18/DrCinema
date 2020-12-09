import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import HtmlText from 'react-native-html-to-text';
import Icon from 'react-native-vector-icons/FontAwesome';
import CinemaDetailsList from '../../components/cinemaDetailsList';
import styles from './styles';
import { getMoviesByCinemaId } from '../../actions/moviesActions';

class CinemaDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { currentCinema } = this.props;
    this.props.getMoviesByCinemaId(currentCinema.id);
    console.log('props: ', this.props);
  }

  render() {
    // const { navigation } = this.props;
    const { currentCinema } = this.props;
    console.log(currentCinema.id);
    const {
      name,
      description,
      phone,
      city,
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
          <HtmlText html={html} style={styles.description} />
          <View style={styles.textWrap}>
            <Icon name="home" size={30} style={styles.icon} />
            <Text>
              Address:
              {address}
              ,
              {city}
            </Text>
          </View>
          <View style={styles.textWrap}>
            <Icon name="phone" size={30} style={styles.icon} />
            <Text>
              Phone:
              {phone}
            </Text>
          </View>
          <View style={styles.textWrap}>
            <Icon name="link" size={30} style={styles.icon} />
            <Text>
              Website:
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

const mapStateToProps = ({ currentCinema, moviesByCinemaId }) => ({ currentCinema, moviesByCinemaId });

export default connect(mapStateToProps, { getMoviesByCinemaId })(CinemaDetails);

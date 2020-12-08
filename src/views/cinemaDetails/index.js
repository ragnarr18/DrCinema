import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import HtmlText from 'react-native-html-to-text';
import CinemaDetailsList from '../../components/cinemaDetailsList';
import styles from './styles';
import { getMoviesByCinemaId } from '../../actions/moviesActions';

class CinemaDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    const { currentCinema } = this.props;
    this.props.getMoviesByCinemaId(currentCinema.id);
    // console.log("getMoviesByCinemaId: ", this.props);
  }


  render() {
    // const { navigation } = this.props;
    const { currentCinema } = this.props;
    console.log(currentCinema.id);
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
        <Text>
          Cinema Name:
          {name}
        </Text>
        <HtmlText html={html} />
        <Text>
          Cinema Address:
          {address}
        </Text>
        <Text>
          Cinema Phone:
          {phone}
        </Text>
        <Text>
          Cinema Website:
          {website}
        </Text>
        <Text>Movies currently in this cinema:</Text>
        <CinemaDetailsList />
      </View>
    );
  }
}

const mapStateToProps = ({ currentCinema, moviesByCinemaId }) => ({ currentCinema, moviesByCinemaId });

export default connect(mapStateToProps, { getMoviesByCinemaId })(CinemaDetails);

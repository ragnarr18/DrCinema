import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import CinemaList from '../../components/cinemaList';

import { changePage } from '../../actions/changePage';
import { getCinemas } from '../../actions/cinemasActions';
import { getMovies } from '../../actions/moviesActions';
import { navigationRedux } from '../../actions/navigationRedux';
import styles from './styles';

class Cinemas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    const { navigationRedux } = this.props;
    const { navigation } = this.props;
    navigationRedux(navigation);
  }

  async componentDidMount() {
    await this.props.getCinemas();
    await this.props.getMovies();
    console.log('movies', this.props.movies);
    // console.log('parent; ', this.props.cinemas);
  }

  selectPage(number) {
    // console.log(number);
    this.props.changePage(number);
  }

  render() {
    const { navigation } = this.props;
    return (
    // <Provider store={createStore(reducers)}>
    // Provider á bara að vera í app.js
      <View>
        <Button
          color="#11ab11"
          title="upcoming movies"
          onPress={() => navigation.navigate('UpcomingMovies')}
        />
        <View>
          <Text style={styles.title}>CINEMA LIST</Text>
          <Text style={styles.description}>Click on a cinema to learn more about it.</Text>
        </View>
        <CinemaList />
      </View>
    // </Provider>
    );
  }
}
const mapStateToProps = ({ cinemas, movies }) => ({ cinemas, movies });

export default connect(mapStateToProps, {
  changePage, getCinemas, getMovies, navigationRedux,
})(Cinemas);
// here we are dispatching getCinemas and changePage

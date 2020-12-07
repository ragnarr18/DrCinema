import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cinemas from '../views/cinemas';
import CinemaDetails from '../views/cinemaDetails';
import MovieDetails from '../views/movieDetails';

const StackNavigator = createStackNavigator({
  Cinemas,
  CinemaDetails,
  MovieDetails,
});

export default createAppContainer(StackNavigator);

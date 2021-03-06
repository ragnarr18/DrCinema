import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cinemas from '../views/cinemas';
import CinemaDetails from '../views/cinemaDetails';
import MovieDetails from '../views/movieDetails';
import UpcomingMovies from '../views/upcomingMovies';
import Trailer from '../views/trailer';

const StackNavigator = createStackNavigator({
  Cinemas,
  CinemaDetails,
  MovieDetails,
  UpcomingMovies,
  Trailer,
});

export default createAppContainer(StackNavigator);

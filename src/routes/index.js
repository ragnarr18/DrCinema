import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import cinemas from '../views/cinemas';
import cinemaDetails from '../views/cinemaDetails';
import movieDetails from '../views/movieDetails';

const StackNavigator = createStackNavigator({
  cinemas,
  cinemaDetails,
  movieDetails,
});

export default createAppContainer(StackNavigator);

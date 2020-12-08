import { combineReducers } from 'redux';
import changePage from './changePage';
import cinemas from './cinemaReducer';
import currentCinema from './currentCinemaReducer';
import navigationRedux from './navigationReducer';
import upcomingMovies from './upcomingMoviesReducer';
// import nav from './nav';

export default combineReducers({
  changePage,
  cinemas,
  currentCinema,
  navigationRedux,
  upcomingMovies,
  // nav,
});

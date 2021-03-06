import { combineReducers } from 'redux';
import cinemas from './cinemaReducer';
import currentCinema from './currentCinemaReducer';
import movies from './moviesReducer';
import upcomingMovies from './upcomingMoviesReducer';
import moviesByCinemaId from './moviesByCinemaIdReducer';
import currentMovie from './currentMovieReducer';
import currentUpcomingMovie from './currentUpcomingMovieReducer';
import startingSoon from './startingSoonReducer';
// import nav from './nav';

export default combineReducers({
  cinemas,
  currentCinema,
  movies,
  upcomingMovies,
  moviesByCinemaId,
  currentMovie,
  currentUpcomingMovie,
  startingSoon,
  // nav,
});

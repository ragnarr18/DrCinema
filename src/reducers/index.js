import { combineReducers } from 'redux';
import changePage from './changePage';
import cinemas from './cinemaReducer';
import currentCinema from './currentCinemaReducer';
import movies from './moviesReducer';
import navigationRedux from './navigationReducer';
import upcomingMovies from './upcomingMoviesReducer';
import moviesByCinemaId from './moviesByCinemaIdReducer';
import currentMovie from './currentMovieReducer';
// import nav from './nav';

export default combineReducers({
  changePage,
  cinemas,
  currentCinema,
  navigationRedux,
  movies,
  upcomingMovies,
  moviesByCinemaId,
  currentMovie,
  // nav,
});

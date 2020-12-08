import { combineReducers } from 'redux';
import changePage from './changePage';
import cinemas from './cinemaReducer';
import currentCinema from './currentCinemaReducer';
// import nav from './nav';

export default combineReducers({
  changePage,
  cinemas,
  currentCinema,
  // nav,
});

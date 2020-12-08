import { combineReducers } from 'redux';
import changePage from './changePage';
import cinemas from './cinemaReducer';
// import nav from './nav';

export default combineReducers({
  changePage,
  cinemas,
  // nav,
});

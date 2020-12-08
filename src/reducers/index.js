import { combineReducers } from 'redux';
import changePage from './changePage';
import cinemas from './cinemaReducer';

export default combineReducers({
  changePage,
  cinemas,
});

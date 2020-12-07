import { combineReducers } from 'redux';
import changePage from './changePage';
import cinema from './cinemaReducer';


export default combineReducers({
  changePage,
  cinema
});

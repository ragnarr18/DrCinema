import movieServices from '../services/movieServices';
import * as constants from '../constants';

function upcomingMovies(movies) {
  return {
    type: constants.UPCOMING_MOVIES,
    payload: movies,
  };
}

export const getUpcomingMovies = () => async (dispatch) => {
  try {
    const movies = await movieServices.getUpcoming();
    dispatch(upcomingMovies(movies));
  } catch (e) {
    console.log('error occured:', e);
  }
};

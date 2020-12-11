import movieServices from '../services/movieServices';
import * as constants from '../constants';

let movies = null;
function getMoviesSuccess(currentMovies) {
  return {
    type: constants.GET_MOVIES,
    payload: currentMovies,
  };
}

function getMoviesByCinemaIdSuccess(id) {
  return {
    type: constants.GET_MOVIES_BY_CINEMA_ID,
    payload: { id, movies },
  };
}

export const getMovies = () => async (dispatch) => {
  try {
    movies = await movieServices.getMovies();
    dispatch(getMoviesSuccess(movies));
  } catch (e) {
    console.log('error occured:', e);
  }
};

export const getMoviesByCinemaId = (id) => async (dispatch) => {
  try {
    dispatch(getMoviesByCinemaIdSuccess(id));
  } catch (e) {
    console.log('error occured:', e);
  }
};

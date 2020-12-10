import movieServices from '../services/movieServices';
import * as constants from '../constants';

let movies = null;
export const getMovies = () => async (dispatch) => {
  try {
    movies = await movieServices.getMovies();
    // console.log(cinemas[0]);
    dispatch(getMoviesSuccess(movies));
  } catch (e) {
    // or dispatch error function
    console.log('error occured:', e);
  }
};

// const getCinemasSuccess = cinemas => ({
//   type: constants.GET_CINEMAS,
//   payload: cinemas
// });

function getMoviesSuccess(currentMovies) {
  return {
    type: constants.GET_MOVIES,
    payload: currentMovies,
  };
}

export const getMoviesByCinemaId = (id) => async (dispatch) => {
  try {
    // const cinemas = await movieServices.getMovies();
    // console.log('action: ', id);
    // console.log(cinemas[0]);
    dispatch(getMoviesByCinemaIdSuccess(id));
  } catch (e) {
    // or dispatch error function
    console.log('error occured:', e);
  }
};

// const getCinemasSuccess = cinemas => ({
//   type: constants.GET_CINEMAS,
//   payload: cinemas
// });

function getMoviesByCinemaIdSuccess(id) {
  return {
    type: constants.GET_MOVIES_BY_CINEMA_ID,
    payload: { id, movies },
  };
}
// const getCinemas = () => {
//   return async (dispatch) => {
//     try {
//       const cinemas = await movieServices.getCinemas();
//       dispatch(getCinemasSuccess(cinemas));
//     } catch (e) {
//       // or dispatch error function
//       console.log('error occured:', e);
//     }
//   };
// }
// export default getCinemas;

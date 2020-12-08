import movieServices from '../services/movieServices';
import * as constants from '../constants';

export const getCinemas = () => async (dispatch) => {
  try {
    const cinemas = await movieServices.getMovies();
    // console.log(cinemas[0]);
    dispatch(getMoviesSuccess(cinemas));
  } catch (e) {
    // or dispatch error function
    console.log('error occured:', e);
  }
};

// const getCinemasSuccess = cinemas => ({
//   type: constants.GET_CINEMAS,
//   payload: cinemas
// });

function getMoviesSuccess(cinemas) {
  return {
    type: constants.GET_MOVIES,
    payload: cinemas,
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

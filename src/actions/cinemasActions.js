import movieServices from '../services/movieServices';
import * as constants from '../constants';

export const getCinemas = () => async (dispatch) => {
  try {
    const cinemas = await movieServices.getCinemas();
    // console.log(cinemas[0]);
    dispatch(getCinemasSuccess(cinemas));
  } catch (e) {
    // or dispatch error function
    console.log('error occured:', e);
  }
};

// const getCinemasSuccess = cinemas => ({
//   type: constants.GET_CINEMAS,
//   payload: cinemas
// });

function getCinemasSuccess(cinemas) {
  return {
    type: constants.GET_CINEMAS,
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

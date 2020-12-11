import movieServices from '../services/movieServices';
import * as constants from '../constants';

function getCinemasSuccess(cinemas) {
  return {
    type: constants.GET_CINEMAS,
    payload: cinemas,
  };
}

export const getCinemas = () => async (dispatch) => {
  try {
    const cinemas = await movieServices.getCinemas();
    dispatch(getCinemasSuccess(cinemas));
  } catch (e) {
    console.log('error occured:', e);
  }
};

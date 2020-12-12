import * as constants from '../constants';

export const currentMovie = (movieObject) => ({
  type: constants.CURRENT_MOVIE,
  payload: movieObject,
});

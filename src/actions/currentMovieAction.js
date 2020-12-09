import * as constants from '../constants';

export const currentMovie = (movieObject) => {
  return {
    type: constants.CURRENT_MOVIE,
    payload: movieObject,
  };
};

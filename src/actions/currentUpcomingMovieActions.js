import * as constants from '../constants';

export const getCurrentUpcomingMovie = (movieObject) => {
  return {
    type: constants.CURRENT_UPCOMING_MOVIE,
    payload: movieObject,
  };
};

import * as constants from '../constants';

export const getCurrentUpcomingMovie = (movieObject) => ({
  type: constants.CURRENT_UPCOMING_MOVIE,
  payload: movieObject,
});

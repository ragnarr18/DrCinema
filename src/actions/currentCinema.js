import * as constants from '../constants';

export const currentCinema = (cinemaObject) => ({
  type: constants.CURRENT_CINEMA,
  payload: cinemaObject,
});

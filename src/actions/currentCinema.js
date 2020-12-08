import * as constants from '../constants';

export const currentCinema = (cinemaObject) => {
  return {
    type: constants.CURRENT_CINEMA,
    payload: cinemaObject,
  };
};

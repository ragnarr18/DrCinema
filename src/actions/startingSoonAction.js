import * as constants from '../constants';

export const startingSoon = (movies) => ({
    type: constants.STARTING_SOON,
    payload: movies,
  });

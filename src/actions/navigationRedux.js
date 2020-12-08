import * as constants from '../constants';

export const navigationRedux = (navigation) => {
  return {
    type: constants.NAVIGATION,
    payload: navigation,
  };
};

import * as constants from '../constants';

export const navigationRedux = (navigation) => ({
  type: constants.NAVIGATION,
  payload: navigation,
});

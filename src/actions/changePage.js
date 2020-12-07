import * as constants from '../constants';

export const changePage = (page) => ({
  type: constants.CHANGEPAGE,
  payload: page
});

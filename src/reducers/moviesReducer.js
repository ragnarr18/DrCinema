import * as constants from '../constants';

export default function (state = [], action) {
  switch (action.type) {
    case constants.GET_CINEMAS:
      return action.payload;
    default:
      return state;
  }
}

import * as constants from '../constants';

export default function (state = {}, action) {
  switch (action.type) {
    case constants.CURRENT_UPCOMING_MOVIE: return action.payload;
    default: return state;
  }
}

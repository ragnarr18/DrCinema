import * as constants from '../constants';

export default function(state= [], action) {
  switch (action.type) {
    case constants.GET_CINEMAS:
    console.log("get cinemas");
      return [action.payload[0]];
    default:
    console.log("default");
    return state;
  }
}

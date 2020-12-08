import * as constants from '../constants';

export default function(state= [], action) {
    console.log("action.type: ", action.type);
  switch (action.type) {
    case constants.GET_CINEMAS:
    // console.log("get cinemas", action.payload[0]);
    // console.log("GET_CINEMAS: ", action.payload.length);
      // return [action.payload[0]];
      // return state.;
      return action.payload[10];
      // return [0,1];
      // return [...state, ...action.payload];
    default:
    // console.log("default");
    return state;
  }
}

import * as constants from '../constants';

export default function(state= [], action) {
    // console.log("action.type: ", action.type);
    // console.log("state: ", state);
  switch (action.type) {
    case constants.GET_CINEMAS:
    // console.log("get cinemas", action.payload[0]);
    // console.log("GET_CINEMAS: ", action.payload.length);
      // return [action.payload[0]];
      // return state.;
      return action.payload;
      // return [0,1];
      // var curr = [action.payload[0]];
      // return [...state, ...curr];
    default:
    // console.log("default");
    return state;
  }
}

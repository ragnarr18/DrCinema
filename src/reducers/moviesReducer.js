import * as constants from '../constants';

export default function (state = [], action) {
  switch (action.type) {
    case constants.GET_MOVIES:
      return action.payload;

    // case constants.GET_MOVIES_BY_CINEMA_ID:
    //   return {
    //     ...state,
    //     MOVIES_BY_CINEMA_ID: state.movies.map(movie =>{
    //       return movie.showtimes.map()
    //     })
    //   }
    default:
      return state;
  }
}

import * as constants from '../constants';

function getMoviesByCinemaId(state, action) {
  // console.log("function");
  // const stateList = Object.keys(state);
  // console.log("state: ",  state);
  const movies = [];
  for (let i = 0; i < state.length; i++) {
    // console.log("single movie", state[i].showtimes.length);
    // const len = state[i].showtimes.length;
    // const array = state[i].showtimes;
    // console.log("props", typeof state[i].showtimes, state[i].showtimes);
    // console.log(state[i].id);
    for (let y = 0; y < state[i].showtimes.length; y++) {
      // console.log("single movie", state[i].showtimes[y], "i: ", i);
      // console.log(state[i].showtimes[y].cinema.id === action.payload);
      if (state[i].showtimes[y].cinema.id === action.payload) {
        const myObj = {
          poster: state[i].poster,
          title: state[i].title,
          year: state[i].year,
          genres: state[i].genres,
          durationMinutes: state[i].durationMinutes,
          plot: state[i].plot,
          showtimes: state[i].showtimes[y].schedule,
        };
        movies.push(myObj);
      }
    }
  }
  // console.log(movies);
  return movies;
}

export default function (state = [], action) {
  // console.log("action.type movies: ", action.type);
  // console.log("payload movies", action.payload);
  switch (action.type) {
    case constants.GET_MOVIES:
      return action.payload;

    // case constants.GET_MOVIES_BY_CINEMA_ID:
    //   return {
    //     // ...state,
    //     moviesByCinemaId: getMoviesByCinemaId(action.cinemas, action.id),
    //   };
    default:
      return state;
  }
}

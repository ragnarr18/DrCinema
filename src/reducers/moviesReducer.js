import * as constants from '../constants';

function getMoviesByCinemaId(state, action) {
  console.log("function");
  const stateList = Object.keys(state);
  console.log("state: ",  state);
  const movies = [];
  for (let i = 0; i < state.length; i++) {
    for (let y = 0; y < state[i].showtimes.length; i++) {
      console.log("single movie", state[i].showtimes);
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
  return movies;
}

export default function (state = [], action) {
  console.log("action.type: ", action.type);
  console.log("payload", action.payload);
  switch (action.type) {
    case constants.GET_MOVIES:
      return action.payload;

    case constants.GET_MOVIES_BY_CINEMA_ID:
      return {
        ...state,
        moviesByCinemaId: getMoviesByCinemaId(state, action),
      };
    default:
      return state;
  }
}

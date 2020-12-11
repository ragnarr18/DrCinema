import * as constants from '../constants';

function getMoviesByCinemaId(state, action) {
  const movies = [];
  for (let i = 0; i < state.length; i++) {
    for (let y = 0; y < state[i].showtimes.length; y++) {
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
  switch (action.type) {
    case constants.GET_MOVIES:
      return action.payload;
    default:
      return state;
  }
}

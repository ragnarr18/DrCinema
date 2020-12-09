import * as constants from '../constants';

function getMoviesByCinemaId(state, id) {
  console.log('state: ', state);
  const movies = [];
  let myObj = null;
  for (let i = 0; i < state.length; i++) {
    for (let y = 0; y < state[i].showtimes.length; y++) {
      // console.log(state[i].showtimes[y]);
      // console.log('state[i].showtimes[y].cinema: ', typeof state[i].showtimes[y].cinema);
      if (typeof state[i].showtimes[y].cinema === 'string') {
        if (state[i].showtimes[y].cinema === id.toString()) {
          myObj = {
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
      if (state[i].showtimes[y].cinema.id === id) {
        myObj = {
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
  console.log(movies);
  return movies;
}

export default function (state = [], action) {
  console.log('action.type: ', action.type);
  console.log('payload', action.payload);
  switch (action.type) {
    case constants.GET_MOVIES_BY_CINEMA_ID:
    return getMoviesByCinemaId(action.payload.movies, action.payload.id);
      // return {
      //   moviesByCinemaId: getMoviesByCinemaId(action.payload.movies, action.payload.id),
      // };
    default:
      return state;
  }
}

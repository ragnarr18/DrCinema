import * as constants from '../constants';

function getNextMovies(movies) {
  const next = [];
  const tmpDate = new Date();
  const d = `${tmpDate.getHours()}:${tmpDate.getMinutes()}`;
  for (let i = 0; i < movies.length; i++) {
    const { showtimes } = movies[i];
    for (let j = 0; j < showtimes.length; j++) {
      const location = showtimes[j].cinema;
      const schedule = showtimes[j].schedule;
      for (let r = 0; r < schedule.length; r++) {
        const { time } = schedule[r];
        const t = time.substr(0, time.indexOf('(') - 1);
        console.log(t > d);
      }
    }
  }
  return movies;
}

export default function (state = [], action) {
  // console.log(action.payload);
  switch (action.type) {
    case constants.STARTING_SOON: return getNextMovies(action.payload);
    default: return state;
  }
}

import * as constants from '../constants';

function getIndexOfOldest(list) {
  // finds the latest date and returns it's index
  let oldest = list[0];
  list.forEach((x) => {
    if (x.time > oldest.time) { oldest = x; }
  })
  return list.indexOf(oldest);
}

function getNextMovies(movies) {
  let next = [];
  let latest = '';
  const tmpDate = new Date();
  const d = `${tmpDate.getHours()}:${tmpDate.getMinutes()}`;

  for (let i = 0; i < movies.length; i++) {
    const { showtimes, title } = movies[i];

    for (let j = 0; j < showtimes.length; j++) {
      const location = showtimes[j].cinema;
      const { schedule } = showtimes[j];

      for (let r = 0; r < schedule.length; r++) {
        const { time, purchase_url } = schedule[r];
        const loc = location.name;
        let t = time.substr(0, time.indexOf('(') - 1);
        t = t.replace('.', ':');
        if (latest === '') { latest = t; }

        if (next.length < 10) {
          if (title && loc && t) {
            next.push({ title, loc, t, purchase_url });
            if (t > latest && t > d) { latest = t; }
          }
        } else if (t < latest) {
          if (title && loc && t) {
            const index = getIndexOfOldest(next);
            next[index] = { title, loc, t, purchase_url };
          }
        }
      }
    }
  }
  // sort next based on time and return
  next = next.sort((a, b) => ((a.t > b.t) ? 1 : -1));
  return next;
}

export default function (state = [], action) {
  // console.log(action.payload);
  switch (action.type) {
    case constants.STARTING_SOON: return getNextMovies(action.payload);
    default: return state;
  }
}

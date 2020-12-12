import * as constants from '../constants';
import { compareDateStrings } from '../services/dateService';

// constant of how many films to show
const numberOfFilms = 5;

function removeOldest(list) {
  // removes the value with the highests time value
  let oldest = list[0].t;
  let index = 0;
  list.forEach((x, i = 0) => {
    if (x.t > oldest) {
      oldest = x.t;
      index = i;
    }
  })
  list.splice(index, 1);
  return list;
}

function getHighest(list) {
  // returns the object with the highest time value
  let highest = list[0].t;
  list.forEach((x) => {
    if (x.t > highest) highest = x.t;
  });
  return highest;
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

        const later = compareDateStrings(t, latest);  // if time is later than latest
        const sooner = compareDateStrings(latest, t); // if time is sooner than latest
        const future = compareDateStrings(t, d);      // if time is in the future

        if (latest === '') { latest = t; }

        if (next.length < numberOfFilms) {
          if (title && loc && t && future) {
            next.push({
              title, loc, t, purchase_url,
            });
            if (later) { latest = t; }
          }
        } else if (title && loc && t && sooner && future) {
          removeOldest(next);
          next.push({
            title, loc, t, purchase_url 
          });
          latest = getHighest(next);
        }
      }
    }
  }
  // sort next based on time and return
  next = next.sort((a, b) => ((a.t > b.t) ? 1 : -1));
  return next;
}

export default function (state = [], action) {
  switch (action.type) {
    case constants.STARTING_SOON: return getNextMovies(action.payload);
    default: return state;
  }
}

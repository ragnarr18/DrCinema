// here fetch the data from the api
import * as constants from '../constants';

const ENDPOINT = 'http://api.kvikmyndir.is/';

const cinemaServices = () => {
  return {
    getCinemas: () => fetch(ENDPOINT + 'theaters', { headers: { 'x-access-token': constants.TOKEN } }).then(d => d.json()).then(d => d.sort((a, b) => ((a.name > b.name) ? 1 : -1))),
    getMovies: () => fetch(ENDPOINT + 'movies', { headers: { 'x-access-token': constants.TOKEN } }).then(d => d.json()),
    getUpcoming: () => fetch(ENDPOINT + 'upcoming', { headers: { 'x-access-token': constants.TOKEN } }).then(d => d.json()).then(d => d.sort((a, b) => ((a['release-dateIS'] > b['release-dateIS']) ? 1 : -1)))
  };
  // getCinemas:  fetch(ENDPOINT, { headers: { 'x-access-token': constants.TOKEN } }).then(d => d.json());
    // return response.json();

};

export default cinemaServices();

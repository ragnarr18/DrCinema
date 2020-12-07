// here fetch the data from the api
import * as constants from '../constants';

const ENDPOINT = 'http://api.kvikmyndir.is/theaters';

const cinemaServices = () => {
  return {
    getCinemas: () => fetch(ENDPOINT, { headers: { 'x-access-token': constants.TOKEN } }).then(d => d.json())
  };
  // getCinemas:  fetch(ENDPOINT, { headers: { 'x-access-token': constants.TOKEN } }).then(d => d.json());
    // return response.json();

};

export default cinemaServices();

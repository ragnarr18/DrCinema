// here fetch the data from the api
import * as constants from '../../constants';

const ENDPOINT = 'http://api.kvikmyndir.is/theaters';

const cinemaServices = () => ({
  getCinemas: async function getCinemas() {
    const response = await fetch(ENDPOINT, { headers: { 'x-access-token': constants.TOKEN } });
    return response.json();
  },
});

export default cinemaServices();

// here fetch the data from the api
import * as constants from '../constants';

const ENDPOINT = 'http://api.kvikmyndir.is/';
const notSambio = [['Smárabíó', 'https://yc.cldmlk.com/002/1550069358167_smarabio-svart-logo.png'], ['Háskólabíó', 'https://yc.cldmlk.com/0000000003/1549487219303_sitelogo_sub1.png'], ['Borgarbíó', 'https://yc.cldmlk.com/0000000004/1557792762258_borg.png'],
  ['LaugarásBíó', 'https://kvikmyndir.is/wp-content/themes/kvikmyndir/images/logo_laugarasbio.png'], ['Bíó Paradís', 'https://nordichouse.is/wp-content/uploads/2018/02/facebook-share.png']];
const sambio = 'http://trailers.samfilm.is/logo/sambio-weblogo.png';
function setLogo(data) {
  for (let y = 0; y < data.length; y++) {
    for (let i = 0; i < notSambio.length; i++) {
      if (data[y].name === notSambio[i][0]) {
        data[y].logo = notSambio[i][1];
        break;
      }
      else {
        data[y].logo = sambio;
      }
    }
  }
  return data;
}

const cinemaServices = () => ({
  getCinemas: () => fetch(`${ENDPOINT}theaters`, { headers: { 'x-access-token': constants.TOKEN } }).then((d) => d.json()).then((d) => setLogo(d)).then((d) => d.sort((a, b) => ((a.name > b.name) ? 1 : -1))),
  getMovies: () => fetch(`${ENDPOINT}movies`, { headers: { 'x-access-token': constants.TOKEN } }).then((d) => d.json()),
  getUpcoming: () => fetch(`${ENDPOINT}upcoming`, { headers: { 'x-access-token': constants.TOKEN } }).then((d) => d.json()).then((d) => d.sort((a, b) => ((a['release-dateIS'] > b['release-dateIS']) ? 1 : -1))),
});

export default cinemaServices();

const axios = require('axios').default;
const axiosCookieJarSupport = require('axios-cookiejar-support').default;
const tough = require('tough-cookie');

const irsAxios = axios.create({
  baseURL: 'https://apps.irs.gov/app/picklist/list/priorFormPublication.html;',
  withCredentials: true,
  params: {
    value: '',
    criteria: '',
    resultsPerPage: 200,
    isDescending: false,
    sortColumn: 'sortOrder',
  },
});
axiosCookieJarSupport(irsAxios);
irsAxios.defaults.jar = new tough.CookieJar();

module.exports = irsAxios;

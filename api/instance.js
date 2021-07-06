import axios from 'axios';

export const instance = axios.createInstance({
  baseUrl: `https://apps.irs.gov/app/picklist/list/priorFormPublication.html?resultsPerPage=200&sortColumn=sortOrder&indexOfFirstRow=0&criteria=&value=&isDescending=false`,
});

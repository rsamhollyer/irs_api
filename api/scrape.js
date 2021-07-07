const cheerio = require('cheerio');
const axios = require('axios');

async function getData() {
  try {
    const { data } = await axios.get(
      `https://apps.irs.gov/app/picklist/list/priorFormPublication.html?sortColumn=sortOrder&indexOfFirstRow=0&value=&criteria=&resultsPerPage=200&isDescending=false`
    );
    const $ = cheerio.load(data);

    // console.log(
    //   $(`.picklist-dataTable`)
    //     .find(`.${'even' || 'odd'}`)
    //     .first()
    //     .text()
    // );
  } catch (error) {
    console.log(error);
  }
}

getData();

/* eslint-disable camelcase */
const cheerio = require('cheerio');
const axios = require('axios');

function searializeForms(dataObject) {
  const $ = cheerio.load(dataObject);
  const formArray = [];
  const instructionArray = [];

  $('.picklist-dataTable')
    .find('tr')
    .each((i, element) => {
      if ($(element).attr('class') !== undefined) {
        const product = $(element).find('a').text();
        const title = $(element).find($('.MiddleCellSpacer')).text().trim();
        const revision_date = $(element)
          .find($('.EndCellSpacer'))
          .text()
          .trim();
        const url = $(element).find('a').attr('href');
        if (!product.startsWith('Inst')) {
          formArray[i] = { product, title, revision_date, url };
        } else {
          instructionArray.push({ product, title, revision_date, url });
        }
      }
    });
  console.log(formArray, instructionArray);
}

async function getData(
  params = {
    sortColumn: 'sortOrder',
    indexOfFirstRow: 0,
    value: '',
    criteria: '',
    resultsPerPage: 200,
    isDescending: false,
  }
) {
  const url = `https://apps.irs.gov/app/picklist/list/priorFormPublication.html`;

  try {
    const { data } = await axios.get(url, { params });

    searializeForms(data);
  } catch (error) {
    console.log(error);
  }
}
getData();

/* eslint-disable camelcase */

const cheerio = require('cheerio');
const irsAxios = require('./instance');

async function getPage(results = 0) {
  try {
    const { data } = await irsAxios
      .get('/', { params: { indexOfFirstRow: results } })
      .catch(error => {
        throw new Error(error);
      });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function searializeForms(dataObject) {
  const forms = [];
  const instructions = [];
  const $ = cheerio.load(dataObject);
  const isNextHref = !!$('a:last-child', '.paginationBottom').attr('href');
  await $('.picklist-dataTable')
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
          forms.push({ product, title, revision_date, url });
        } else {
          instructions.push({ product, title, revision_date, url });
        }
      }
    });
  return [forms, instructions, isNextHref];
}

async function getAllPages() {
  let results = 0;
  let loopStop = true;
  let formsArray = [];
  let instructionsArray = [];

  while (loopStop) {
    const data = await getPage(results);
    const [forms, instructions, isNextHref] = await searializeForms(data);

    loopStop = isNextHref;
    formsArray = formsArray.concat(forms);
    instructionsArray = instructionsArray.concat(instructions);
    results += 200;
    console.log(formsArray.length);
    console.log(instructionsArray.length);
  }
}

getAllPages();

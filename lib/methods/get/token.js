const { html2json } = require('html2json');
const { Base } = require('../../config');

const token = ({ connector }) => () => connector(Base, { body: {} })
  .then(async (res) => ({
    response: await res.text(),
    headers: res.headers.raw(),
  }))
  .then(({ response, headers }) => ({
    response: response.replace(/<!--.*?-->/gs, ''),
    headers,
  }))
  .then(({ response, headers }) => ({
    headers,
    response: html2json(response),
  }))
  .then(({ response, headers }) => ({
    response: response.child[1].child[2],
    headers,
  }))
  .then(({ response, headers }) => ({
    session: headers['set-cookie'][0].split(';')[0].split('=')[1],
    w3p: headers['set-cookie'][2].split(';')[0].split('=')[1],
    TS01ee3a52: headers['set-cookie'][3].split(';')[0].split('=')[1],
    dataToken: response.attr['data-token'],
    dataUnique: response.attr['data-unique'],
  }));

module.exports = token;

const qs = require('qs');

const connector = ({ fetch }) => (url, { body, headers }) => fetch(url, {
  headers,
  body: qs.stringify(body),
  method: 'POST',
});
module.exports = connector;

const token = require('./token');
const cardRequest = require('./cardRequest');
const cardCheck = require('./cardCheck');

const get = ({ connector }) => async ({ tckNo, mykNo }) => {
  // eslint-disable-next-line no-restricted-globals
  if (!tckNo || isNaN(tckNo) || !mykNo) {
    return {
      status: false,
      error: 'fill the required blanks',
      doc: false,
    };
  }
  const {
    session, w3p, TS01ee3a52, dataToken,
  } = await token({ connector })();
  await cardRequest({ connector })({
    session,
    w3p,
    TS01ee3a52,
    dataToken,
    tckNo,
    mykNo,
  });
  return cardCheck({ connector })({
    session,
    w3p,
    TS01ee3a52,
  });
};

module.exports = get;

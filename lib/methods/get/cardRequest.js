const { Base } = require('../../config');
const cookieGenerate = require('../../cookieGenerate');

const cardRequest = ({ connector }) => ({
  session,
  w3p,
  TS01ee3a52,
  dataToken,
  tckNo,
  mykNo,
}) => connector(`${Base}?submit`, {
  body: {
    kimlikNo: tckNo,
    belgeNo: mykNo,
    token: dataToken,
    btn: 'Doğrulama',
  },
  headers: {
    'Cache-Control': 'max-age=0',
    'Upgrade-Insecure-Requests': '1',
    Origin: 'https://www.turkiye.gov.tr',
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
    Accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-User': '?1',
    'Sec-Fetch-Dest': 'document',
    Referer: Base,
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
    Cookie: cookieGenerate({
      TURKIYESESSIONID: session,
      language: 'tr_TR.UTF-8',
      w3p,
      TS01ee3a52,
      'top-menu-state': 'closed',
      '_pk_testcookie.1.8883': 1,
      '_pk_id.1.8883': 'd51dcf648ec97825.1603650396.1.1603650396.1603650396.',
      '_pk_ses.1.8883': 1,
    }),
  },
});

module.exports = cardRequest;

# MYK Lib

# Installing

```bash
npm install @yek-plus/myk
```

# Usage

```js
const myk = require("@yek-plus/myk");
myk()
  .get({
    mykNo: MYKNO,
    tckNo: TCKN,
  })
  .then(console.log);
```

# Options

| property | type       | required | default            | description            |
| -------- | ---------- | -------- | ------------------ | ---------------------- |
| fetch    | `function` | false    | node-fetch package | request fetch function |

# Methods

## get

### Input

| property | type     | required | default | description                           |
| -------- | -------- | -------- | ------- | ------------------------------------- |
| mykNo    | `number` | true     | null    | MYK Mesleki Yeterlilik Belge Numarası |
| tckNo    | `number` | true     | null    | T.C. Kimlik Numarası                  |

### Response

```js
{
  status: Boolean,
  tckNo: String,
  tamIsim: String,
  mykNo: String,
  meslekAdi: String,
  meslekLevel: String,
  sinavTarihi: String,
  belgeDuzenlemeTarihi: String,
  belgeGecerlilikTarihi: String,
  belgelendirmeKurulusu: String,
  belgeDurumu: String,
  belgeDurumuBool: Boolean,
};
```

# Todo

- [ ] Write Tests

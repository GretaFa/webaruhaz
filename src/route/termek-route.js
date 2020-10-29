'user strict';

export default function (router) {
  const termek = require('../controller/termek-controller');

  router.get('/termek', termek.getTermekeks);
}

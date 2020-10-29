'user strict';

import Termek from '../model/termek-model';

export function getTermekeks(req, res) {
  Termek.getTermekek(function (err, termek) {
    if (err) {
      res.status(400).send(err);
      return;
    } else {
      res.json({ termek });
      return;
    }
  });
}

'user strict';

import { conn } from '../../app';

const SELECT_TERMEK_QUERY = `SELECT termek.nev, termek.ar`;
const SELECT_TERMEK_INNER_JOIN_PART = `FROM termek INNER JOIN felhasznalo ON termek.felhasznaloId = felhasznalo.idfelhasznalo WHERE aktiv = 1`;

export default class Termek {
  constructor(termekItem) {
    this.nev = termekItem.nev;
    this.ar = termekItem.ar;
    this.felhasznaloId = termekItem.felhasznaloId;
  }

  static getTermekItems(res) {
    conn.query(
      `${SELECT_TERMEK_QUERY}, felhasznalo.vezeteknev AS felhasznalo ${SELECT_TERMEK_INNER_JOIN_PART}`,
      [],
      function (err, result) {
        if (err) {
          console.log('Error', err);
          res(err, null);
        } else {
          res(null, result);
        }
      }
    );
  }
}

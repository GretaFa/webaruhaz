const termekRouter = require('./src/route/termek-route');
const json = require('body-parser');
const express = require('express');
const app = express();
const config = require('./config');

const mysql = require(config.dbDriver);
const device = require('express-device');

// SETTING CORS-POLICY (FOR DEVELOPMENT)
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.use(device.capture());
app.use(json());
app.use(express.static(__dirname));
// app.use(config.appVersion, router);

const router = express.Router();
termekRouter(router);
app.use(config.appVersion, router);

app.listen(config.appPort, () => {
  console.log(`Software running ${config.appPort}...`);
});

const conn = mysql.createConnection({
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
  port: config.dbPort,
});
conn.connect(function (err) {
  if (err) {
    console.log('Database connection error! Error: ' + err);
  } else {
    console.log(
      `Connection to '${config.dbName}' database sucessful on port ${config.dbPort}!`
    );
  }
});

module.exports = app;

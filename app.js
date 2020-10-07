const express = require('express');
const app = express();
const config = require('./config');

const mysql = require(config.dbDriver);
const device = require('express-device');

app.use(device.capture());
app.use(express.static(__dirname));
//app.use(config.appVersion, router);

app.listen(config.appPort, () => {
    console.log(`Software running ${config.appPort}...`);
});

const conn = mysql.createConnection({
    host: config.dbHost,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    port: config.dbPort
});
conn.connect(function(err){
    if(err){
        console.log('Database connection error! Error: ' + err);
    } else {
        console.log(`Connectrion to '${config.dbName}' database sucessful on port ${config.dbPort}!"`);
        console.log('elso');
    }
});

module.exports = app;

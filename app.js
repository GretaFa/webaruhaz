const mysql = require(config.dbDriver);

export const conn = mysql.createConnection({
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
    }
});

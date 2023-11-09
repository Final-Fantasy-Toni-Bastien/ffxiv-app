const mysql = require('mysql'),
    config = require("./config.json");

module.exports.init = function (callback) {


    const connection = mysql.createConnection({ //connection bdd
        host: config.bdd.host,
        user: config.bdd.user,
        password: config.bdd.password,
        database: config.bdd.database,
        multipleStatements: true
    });

    connection.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }

        module.exports.db = connection;

        console.log("\x1b[90m", '[DB] Connected to thread id :' + connection.threadId);
        callback(err);
    });



};
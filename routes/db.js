let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "mysql",
    database: "news"
});

connection.connect();

module.exports = connection;
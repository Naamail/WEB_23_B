const config = require("./db.config");
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DB
});

connection.connect(error=>{
    if (error) throw error;
    console.log("Connected to DB");
});
 

module.exports = connection;
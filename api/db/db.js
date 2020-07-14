const mysql = require("mysql");
const dotenv = require("dotenv").config();

// modify .env to change values
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Mysql Connected...");
});

module.exports = db;

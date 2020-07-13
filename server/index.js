const express = require("express");
const mysql = require("mysql");
const { response } = require("express");

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "fish_and_chips",
  password: "test",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Mysql Connected...");
});

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/api/item", (req, res) => {
  let sql = "SELECT * FROM category";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send("Posts fetched");
    response.json();
  });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

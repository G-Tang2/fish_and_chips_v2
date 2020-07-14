const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

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

app.get("/api/category", (req, res) => {
  let sql = "SELECT * FROM category";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

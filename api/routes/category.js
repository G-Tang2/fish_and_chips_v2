var express = require("express");
var router = express.Router();
const db = require("../db/db");

router.get("/api/category", (req, res) => {
  let sql = "SELECT * FROM category";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

module.exports = router;

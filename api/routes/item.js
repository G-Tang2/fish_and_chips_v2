var express = require("express");
var router = express.Router();
const db = require("../db/db");

router.get("/api/item", (req, res) => {
  let sql = "SELECT * FROM item";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

router.get("/api/:categoryId/item", (req, res) => {
  let sql = "SELECT * FROM item WHERE category_id=" + db.escape(req.params.categoryId);
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

module.exports = router;

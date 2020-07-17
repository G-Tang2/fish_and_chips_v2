var express = require("express");
var router = express.Router();
const db = require("../db/db");

router.get("/api/open_hours", (req, res) => {
  let sql =
    'SELECT open_hr_no, \
            open_hr_day, \
            TIME_FORMAT(open_hr_open_time, "%h:%i %p") AS open_hour, \
            TIME_FORMAT(open_hr_close_time, "%h:%i %p") AS close_hour \
            FROM opening_hour';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

module.exports = router;

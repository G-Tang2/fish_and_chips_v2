const express = require("express");
const cors = require("cors");

const routeItem = require("./routes/item");
const routeCategory = require("./routes/category");
const routeHours = require("./routes/openHours");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// routes
app.use(routeItem);
app.use(routeCategory);
app.use(routeHours);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

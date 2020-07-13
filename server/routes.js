import * as express from "express";
import DB from "./db";

const router = express.Router();

router.get("/api/item", async (req, res) => {
  try {
    let item = await DB.item.all();
    res.json(item);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

import * as mysql from "mysql";
import config from "../config";
import Item from ".item";

export const Connection = mysql.createConnection(config.mysql);

Connection.connect((err) => {
  if (err) console.log(err);
  console.log("Mysql connected...");
});

export default {
  Item,
};

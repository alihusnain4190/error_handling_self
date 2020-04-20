const { Client } = require("pg");
const dbConfig = require("./config");
const client = new Client(dbConfig);
client
  .connect()
  .then(() => {
    console.log("connect " + dbConfig.database + " on port " + dbConfig.port);
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = client;

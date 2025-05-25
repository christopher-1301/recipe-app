const sqlite3 = require("sqlite3").verbose();
const express = require("express");
const app = express();
const port = 3000;

const db = new sqlite3.Database("../../db/recipes", (err) => {
  if (err) {
    console.error("Could not connect to database", err);
  } else {
    console.log("Connected to the database");
  }
});

app.listen(port, () => {
  console.log(`Recipe app backend listening on port ${port}`);
});

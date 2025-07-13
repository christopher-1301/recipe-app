const sqlite3 = require("sqlite3").verbose();
const express = require("express");

const app = express();
const port = 3000;

const path = require("path");
const dbPath = path.join(__dirname, "data", "recipes.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Could not connect to database", err);
  } else {
    console.log("Connected to the database");
  }
});

app.listen(port, () => {
  console.log(`Recipe app backend listening on port ${port}`);
});

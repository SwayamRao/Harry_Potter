const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./ctf.db', sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to the SQLite database in read-only mode.");
  }
});

module.exports = db;

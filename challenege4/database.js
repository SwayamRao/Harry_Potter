const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./ctf.db');

// Create tables and seed data
db.serialize(() => {
  // Create `users` table
  db.run("CREATE TABLE IF NOT EXISTS users (user_id INTEGER PRIMARY KEY, username TEXT, password TEXT)");

  // Create `resources` table
  db.run("CREATE TABLE IF NOT EXISTS resources (resource_id INTEGER PRIMARY KEY, resource_name TEXT, owner_id INTEGER)");

  // Insert users
  db.run("INSERT INTO users (username, password) VALUES ('user1', 'password1')");
  db.run("INSERT INTO users (username, password) VALUES ('user2', 'password2')");

  // Insert resources
  db.run("INSERT INTO resources (resource_name, owner_id) VALUES ('Secret File 1', 1)");
  db.run("INSERT INTO resources (resource_name, owner_id) VALUES ('Secret File 2', 2)");
  db.run("INSERT INTO resources (resource_name, owner_id) VALUES ('Flag', 2)");
});

module.exports = db;

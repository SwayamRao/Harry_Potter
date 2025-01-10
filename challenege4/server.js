const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Login page
app.get('/login', (req, res) => {
  res.send(`
    <form action="/login" method="POST">
      <label>Username:</label><br>
      <input type="text" name="username" required><br>
      <label>Password:</label><br>
      <input type="password" name="password" required><br>
      <input type="submit" value="Login">
    </form>
  `);
});

// Login handler
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Vulnerable SQL query
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  console.log(`Executing query: ${query}`);

  db.get(query, (err, user) => {
    if (err) {
      res.status(500).send("Database error");
      return;
    }
    if (user) {
      res.redirect(`/dashboard?user_id=${user.user_id}`);
    } else {
      res.send("Invalid credentials. <a href='/login'>Try again</a>");
    }
  });
});

// Dashboard route
app.get('/dashboard', (req, res) => {
  const userId = req.query.user_id;

  if (!userId) {
    return res.send("You need to login first. <a href='/login'>Login</a>");
  }

  db.all("SELECT * FROM resources WHERE owner_id = ?", [userId], (err, resources) => {
    if (err) {
      return res.status(500).send("Database error");
    }

    let resourcesHtml = '';
    resources.forEach(resource => {
      resourcesHtml += `<p><a href='/resource?id=${resource.resource_id}'>${resource.resource_name}</a></p>`;
    });

    res.send(`
      <h2>Welcome to the Dashboard</h2>
      <p>Click on a resource to view details:</p>
      ${resourcesHtml}
    `);
  });
});

// Vulnerable resource route (IDOR)
app.get('/resource', (req, res) => {
  const resourceId = req.query.id;

  db.get("SELECT * FROM resources WHERE resource_id = ?", [resourceId], (err, resource) => {
    if (err) {
      return res.status(500).send("Database error");
    }
    if (resource) {
      res.send(`
        <h3>Resource Details</h3>
        <p>Name: ${resource.resource_name}</p>
        <p>Owner ID: ${resource.owner_id}</p>
      `);
    } else {
      res.send("Resource not found.");
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

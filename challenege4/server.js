const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // To serve static files like images and CSS

// Login page
app.get('/login', (req, res) => {
  res.send(`
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-image: url('/Gilderoy-Lockhart-Wallpaper-hogwarts-professors-32796043-1024-768-2169687340.jpg');
            background-size: cover;
            background-position: center;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            flex-direction: column;
          }
            /* Hehe I will make harry read all my fan mails,
               But I only have the default creds with me and i cannot access
               Anyone's account .. Hmmm ig I need to make sure harry knows how to bypass this*/

          .container {
            text-align: center;
            background-color: rgba(255, 255, 255, 0.8); /* semi-transparent white background */
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
          }
          .login-form input[type="text"], .login-form input[type="password"] {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          .login-form input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
          }
          .login-form input[type="submit"]:hover {
            background-color: #45a049;
          }
          .image-container {
            text-align: center;
            margin-bottom: 20px;
          }
          img {
            width: 100px;
            height: auto;
            border-radius: 50%;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="image-container">
            <!-- Hello Harry, This is me Hagrid. I am very happy to see you here. You have grown a lot 
            but now we need to do a lot many things to defeat voldemort (Yea i said his name). 
            You need to help your professor because there is professor snape's account too in that and apprantly there
            is something very important in it -->
          </div>
          <form action="/login" method="POST" class="login-form">
            <label>Username:</label><br>
            <input type="text" name="username" required><br>
            <label>Password:</label><br>
            <input type="password" name="password" required><br>
            <input type="submit" value="Login">
          </form>
        </div>
      </body>
    </html>
  `);
});

// Login handler
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Secure SQL query using placeholders
  const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
  db.get(query, [username, password], (err, user) => {
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

// Resource route
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

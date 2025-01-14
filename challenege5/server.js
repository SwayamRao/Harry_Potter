const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const db = new sqlite3.Database('./ctf.db');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // To serve static files like images and CSS

app.get('/login', (req, res) => {
    res.send(`
      <html>
        <head>
          <title>Login</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-image: url('/desktop-wallpaper-harry-potter-horcrux-2356419416.jpg'); /* Background image */
              background-size: contain; /* Ensure the image fits without zooming */
              background-position: center;
              background-repeat: no-repeat; /* Prevents the image from repeating */
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              flex-direction: column;
            }
  
            .container {
              text-align: center;
              background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
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
          </style>
        </head>
        <body>
          <div class="container">
            <h2>Login</h2>
            <form action="/login" method="POST" class="login-form">
              Username: <input type="text" name="username" required><br>
              Password: <input type="password" name="password" required><br>
              <input type="submit" value="Login">
            </form>
          </div>
        </body>
      </html>
    `);
  });

// Vulnerable Login handler
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Vulnerable SQL query (still vulnerable to SQL injection)
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

  db.get(query, (err, user) => {
    if (err) {
      res.status(500).send('Database error');
      return;
    }

    if (user) {
      if (user.username === 'darklord') {
        res.send(`You have successfully accessed the last Horcrux, and by submitting the flag you will destroy it: secuRIT{h0rcrux_D3stR0y3d!}`);
      }  else {
        res.send(`Welcome, Harry! We got some info from snape that "darklord" 's last horcrux is stored with him and you need a way to bypass the login page. This is the only hope now harry, we belive in you.  `);
      }
    } else {
      res.send("Invalid credentials.");
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

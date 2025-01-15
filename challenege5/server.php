<?php
// Establish SQLite database connection
$db = new SQLite3('ctf.db');

// Start the session (if needed)
session_start();

// Handle GET request for login page
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    echo '
    <html>
        <head>
            <title>Login</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-image: url("/public/desktop-wallpaper-harry-potter-horcrux-2356419416.jpg"); /* Background image */
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
    </html>';
} 

// Handle POST request for login validation
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get input from form
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Vulnerable SQL query (no sanitization)
    $query = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";

    // Execute the query and fetch the result
    $result = $db->querySingle($query, true);

    if ($result) {
        // Check if the user is 'darklord'
        if ($result['username'] === 'darklord') {
            echo "You have successfully accessed the last Horcrux, and by submitting the flag you will destroy it: secuRIT{h0rcrux_D3stR0y3d!}";
        } else {
            echo 'Welcome, Harry! We got some info from Snape that "darklord"\'s last horcrux is stored with him and you need a way to bypass the login page. This is the only hope now Harry, we believe in you.';
        }
    } else {
        echo "Invalid credentials.";
    }
}

// Close the database connection
$db->close();
?>

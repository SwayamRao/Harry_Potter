<?php
// Set the cookie value to 'secuRIT' every time the page is loaded
setcookie('challenge_cookie', 'secuRIT', time() + 3600, '/'); // Expires in 1 hour
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookie Challenge</title>
</head>
<body>
    <h1>Welcome to the Cookie Challenge</h1>
    <p>Set the correct cookie to view the flag!</p>

    <p>
        <?php
        // Ensure the validate_cookie.php file exists before including it
        $file_path = 'lol.php';
        if (file_exists($file_path)) {
            include $file_path;
        } else {
            echo 'Error: Validation file not found!';
        }
        ?>
    </p>
</body>
</html>
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
    <style>
        body {
            background-image: url('3ef3dcca3865adbfa2765bbb06d8b640-447504504.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
    </style>
</head>
<body>
    <h1>Welcome to the class. I am the new monst.. sorry teacher here </h1>
    <p>So class what should we bake today ?</p>
    <p>Who said i resemble Dolores Umbridge?? </p>
    <!--Hehe no you might need to take hint cause you wont get everything in inspect everytime ;)--> 
    <p>
        <?php
     
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
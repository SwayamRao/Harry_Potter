<?php
// Define the correct cookie value
$correct_cookie = "cookie_value";

// Check if the cookie is set and has the correct value
if (isset($_COOKIE['challenge_cookie']) && $_COOKIE['challenge_cookie'] === $correct_cookie) {
    echo '<p>Congratulations! Here is your flag:</p>';
    echo '<pre>secuRIT{Harry_is_the_Ch0sen_one}</pre>';
} 
else if (isset($_COOKIE['challenge_cookie']) && $_COOKIE['challenge_cookie'] === "secuRIT"){
    echo 'Welcome Harry, Want to bake some cookies?';
}
else {
    echo '<p>You are on the correct path Harry, just try more</p>';
}
?>

<?php
// Define the correct cookie value
$correct_cookie = "cookie_monster6";

// Check if the cookie is set and has the correct value
if (isset($_COOKIE['challenge_cookie']) && $_COOKIE['challenge_cookie'] === $correct_cookie) {
    echo '<p>Congratulations! Here is your flag:</p>';
    echo '<pre>secuRIT{C00kies_CaN_B3_Dang3rous!}</pre>';
} 
else if (isset($_COOKIE['challenge_cookie']) && $_COOKIE['challenge_cookie'] === "secuRIT"){
    echo 'Welcome Harry, Wanna to bake some cookies?';
}
else if (isset($_COOKIE['challenge_cookie']) && $_COOKIE['challenge_cookie'] === "cookie_monster1")
{
    echo 'Wow you figured this out?? But do you have enough patience? Lets see hehe';
}
else if (isset($_COOKIE['challenge_cookie']) && $_COOKIE['challenge_cookie'] === "cookie_monster3")
{
    echo 'One step at a time! Right? ';
}
else if (isset($_COOKIE['challenge_cookie']) && $_COOKIE['challenge_cookie'] === "cookie_monster4")
{
    echo 'Great one more step ahead ? this is last i swear';
}
else if (isset($_COOKIE['challenge_cookie']) && $_COOKIE['challenge_cookie'] === "cookie_monster5")
{
    echo 'Hehe are you even on right path? ';
}
else {
    echo '<p>You are on the correct path Harry, just try more</p>';
}
?>

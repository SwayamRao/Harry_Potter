<?php
// Define the correct cookie value
$correct_cookie = "cookie_monster6";

// Check if the cookie is set and has the correct value
if (isset($_COOKIE['challenge_cookie']) && $_COOKIE['challenge_cookie'] === $correct_cookie) {
    echo '<p>Congratulations! Here is your flag:</p>';
    echo '<pre>secuRIT{C00kies_CaN_B3_Dang3rous!}</pre>';
} 
else if (isset($_COOKIE['challenge_cookie']) && $_COOKIE['challenge_cookie'] === "secuRIT"){
    echo '';
}
else if (isset($_COOKIE['challenge_cookie']) && $_COOKIE['challenge_cookie'] === "1"){
    echo 'Harry, I got some info reagrding the teacher; the teacher always uses his own name for naming cookie what a self-centered guy!! ';
}
else if (isset($_COOKIE['challenge_cookie']) && $_COOKIE['challenge_cookie'] === "cookie_monster")
{
    echo 'Wow you figured this out?? But do you have enough patience? Lets see hehe';
}
else if (isset($_COOKIE['challenge_cookie']) && $_COOKIE['challenge_cookie'] === "cookie_monster1")
{
    echo 'Keep trying you are right path';
}
else if (isset($_COOKIE['challenge_cookie']) && $_COOKIE['challenge_cookie'] === "cookie_monster3")
{
    echo 'One step at a time! Right? ';
}
else if (isset($_COOKIE['challenge_cookie']) && $_COOKIE['challenge_cookie'] === "cookie_monster4")
{
    echo 'Great! one more step ahead ? this is last i swear';
}
else if (isset($_COOKIE['challenge_cookie']) && $_COOKIE['challenge_cookie'] === "cookie_monster5")
{
    echo 'Hehe are you even on right path? ';
}
else {
    echo '<p>Harry you got to the track but you are running the other way</p>';
}
?>

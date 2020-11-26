<?php
$servername = "localhost";
$database = "login";
$username = "admin";
$password = "admin";
$conn = mysqli_connect($servername, $username, $password, $database);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
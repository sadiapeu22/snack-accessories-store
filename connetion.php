<?php
$servername = "localhost";
$username ="root";
$password ="";
$dbname="web";

&con = mysqli_connect($servername, $username, $password, $dbname);

if($con){
    echo "successfully";
}



?>
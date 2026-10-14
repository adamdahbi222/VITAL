<?php
$host ="localhost";
$dbname="vital";
$user ="root";
$password ="";

$vital_db = new mysqli($host,$user,$dbname);
if($vital_db->connect_error){
    die("connexion echouée" .$vital_db->connect_error);
}
?>
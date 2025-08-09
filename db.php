<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bitcoin_education"; 

try {
    $db = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "connexion réussie";
} catch(PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}
?>

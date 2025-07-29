<?php
// Paramètres de connexion à la base de données
$host = 'localhost';     // Serveur local (localhost avec XAMPP)
$user = 'root';          // Nom d'utilisateur par défaut sous XAMPP
$pass = '';              // Mot de passe vide par défaut
$dbname = 'bitcoin_education';    // Nom de la base de données à utiliser
$charset = 'utf8mb4';

try {
    // Création d'une nouvelle connexion PDO (accès sécurisé à MySQL)
    $bdd = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);

    // Active le mode exception pour afficher les erreurs SQL
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $e) {
    // En cas d'erreur de connexion, on affiche un message clair
    die("Erreur de connexion : " . $e->getMessage());
}
?>

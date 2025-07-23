<?php
// Paramètres de connexion à la base de données
$host = 'localhost';     // Serveur local (localhost avec XAMPP)
$user = 'root';          // Nom d'utilisateur par défaut sous XAMPP
$pass = '';              // Mot de passe vide par défaut
$dbname = 'bitcoin_education';    // Nom de la base de données à utiliser

try {
    // Création d'une nouvelle connexion PDO (accès sécurisé à MySQL)
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $email, $password);

    // Active le mode exception pour afficher les erreurs SQL
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $e) {
    // En cas d'erreur de connexion, on affiche un message clair
    die("Erreur de connexion : " . $e->getMessage());
}
?>

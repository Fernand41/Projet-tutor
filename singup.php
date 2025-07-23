<?php
session_start(); // ← Démarrer la session en haut du fichier
require 'db.php'; // Inclut la connexion MySQL

// Vérifie que la méthode est bien POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Récupère les données de l'utilisateur
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    // Prépare une requête SQL pour rechercher un utilisateur par email
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);

    // Récupère les informations de l'utilisateur (s'il existe)
    $user = $stmt->fetch();

    // Si l'utilisateur existe et que le mot de passe est correct
    if ($user && password_verify($password, $user['password'])) {
         // Stocker les infos en session
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['user_email'] = $user['email'];
        // Redirection vers une page de succès
        header("Location: index.html");
        exit;

    } else {
        // Sinon, on affiche un message d'erreur
        die("Identifiants incorrects.");
    }
}
?>

<?php
require 'db.php'; // Inclut le fichier de connexion à la base

// Vérifie que le formulaire a bien été envoyé en POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Récupère et nettoie les données envoyées par l'utilisateur
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    // Vérifie que l'adresse e-mail est bien valide
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Email invalide.");
    }

    // Vérifie que le mot de passe contient au moins 6 caractères
    if (strlen($password) < 6) {
        die("Mot de passe trop court.");
    }

    // Hashage du mot de passe avec l'algorithme par défaut (bcrypt)
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Prépare la requête SQL pour insérer le nouvel utilisateur
    $stmt = $pdo->prepare("INSERT INTO users (email, password) VALUES (?, ?)");

    try {
        // Exécute la requête avec les données fournies
        $stmt->execute([$email, $hashedPassword]);

        // Redirige vers une page de succès après inscription
        header("Location: singup.html");
        exit;

    } catch (PDOException $e) {
        // Si l'email existe déjà, affiche un message clair
        if ($e->getCode() == 23000) {
            die("Cet email est déjà utilisé.");
        } else {
            // Sinon, afficher l'erreur SQL exacte
            die("Erreur : " . $e->getMessage());
        }
    }
}
?>

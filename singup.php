<?php
session_start(); // ← Démarrer la session en haut du fichier
require 'db.php'; // Inclut la connexion MySQL

// Vérifie que la méthode est bien POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Récupère les données de l'utilisateur
    $email = $_POST['email'];
    $password = $_POST['password'];

    if ($email != "" && $password != "") {

        $req = $bdd->query("SELECT * FROM utilisateur WHERE email ='$email' AND password = '$password'");
        $req = $req->fetch();

        if ($req['id'] != false) {
 // Redirection vers une page de succès
        header("Location: index.html");
        exit;        }
else {
        // Sinon, on affiche un message d'erreur
        die("Identifiants incorrects.");
    }

    }

}
?>

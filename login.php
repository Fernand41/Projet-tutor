<?php
require 'db.php'; // Inclut le fichier de connexion à la base
if(isset($_POST['ok'])){
 $email = $_POST['email'];
$password = $_POST['password'];

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

$requete = $bdd->prepare("INSERT INTO utilisateur VALUES(0, :email, :password)");
$requete->execute(
    array(
        "email" => $email,
        "password" => $password
    )
);
try {

        // Redirige vers une page de succès après inscription
        header("Location: signup.html");
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

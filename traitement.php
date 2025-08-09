<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bitcoin_education"; 

try {
    $db = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}

if (isset($_POST['ok'])) {
    $pseudo   = $_POST['pseudo'];
    $nom      = $_POST['nom'];
    $prenom   = $_POST['prenom'];
    $email    = $_POST['email'];
    $password = $_POST['password'];

    // Vérifier d'abord si le pseudo existe déjà
    $checkQuery = $db->prepare("SELECT COUNT(*) FROM user WHERE pseudo = :pseudo");
    $checkQuery->execute(["pseudo" => $pseudo]);
    $pseudoExists = $checkQuery->fetchColumn();

    if ($pseudoExists) {
        // Si le pseudo existe déjà, afficher un message d'erreur
        $_SESSION['error'] = "Ce pseudo est déjà utilisé. Veuillez en choisir un autre.";
        header("Location: singup.php"); // Rediriger vers la page d'inscription
        exit();
    }

    // Vérifier si l'email existe déjà (bonne pratique supplémentaire)
    $checkEmail = $db->prepare("SELECT COUNT(*) FROM user WHERE email = :email");
    $checkEmail->execute(["email" => $email]);
    $emailExists = $checkEmail->fetchColumn();

    if ($emailExists) {
        $_SESSION['error'] = "Cet email est déjà associé à un compte.";
        header("Location: singup.php");
        exit();
    }

    // Si tout est bon, procéder à l'inscription
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    try {
        $requete = $db->prepare("INSERT INTO user (pseudo, nom, prenom, email, password) VALUES (:pseudo, :nom, :prenom, :email, :password)");
        $requete->execute([
            "pseudo"   => $pseudo,
            "nom"      => $nom,
            "prenom"   => $prenom,
            "email"    => $email,
            "password" => $hashedPassword,
        ]);

        $_SESSION['success'] = "Inscription réussie !";
        header("Location: login.php");
        exit();
    } catch(PDOException $e) {
        // Capturer d'autres erreurs potentielles
        $_SESSION['error'] = "Une erreur est survenue lors de l'inscription: " . $e->getMessage();
        header("Location: singup.php");
        exit();
    }
}

?>
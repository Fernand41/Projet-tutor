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

// Traitement des transactions Bitcoin (achat/vente)
if (isset($_POST["operation"])) {
    $operation = $_POST["operation"]; // Récupération de l'opération

    // ---- ACHAT ----
    if ($operation === "achat") {
        $country = $_POST['country'];
        $network = $_POST['network'];
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $email = $_POST['email'];
        $amount_xof = $_POST['amount_xof'];
        $amount_sats = $_POST['amount_sats'];
        $lightning_address = $_POST['lightning_address'];
        $deposit_id = $_POST['deposit_id'];

        try {
            $requete = $db->prepare("INSERT INTO buy_transactions 
                (country, network, firstname, lastname, email, amount_xof, amount_sats, lightning_address, deposit_id) 
                VALUES 
                (:country, :network, :firstname, :lastname, :email, :amount_xof, :amount_sats, :lightning_address, :deposit_id)");
            $requete->execute([
                "country"   => $country,
                "network"   => $network,
                "firstname" => $firstname,
                "lastname"  => $lastname,
                "email"     => $email,
                "amount_xof"=> $amount_xof,
                "amount_sats"=> $amount_sats,
                "lightning_address" => $lightning_address,
                "deposit_id"=> $deposit_id,
            ]);
            $_SESSION['success'] = "Achat réussi !";
        } catch(PDOException $e) {
            $_SESSION['error'] = "Erreur lors de l'achat : " . $e->getMessage();
            header("Location: achat.php");
            exit();
        }
    }

    // ---- VENTE ----
    elseif ($operation === "vente") {
        $country = $_POST['country'];
        $network = $_POST['network'];
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $email = $_POST['email'];
        $amount_sats = $_POST['amount_sats'];
        $amount_xof = $_POST['amount_xof'];
        $phone = $_POST['phone'];

        try {
            $requete = $db->prepare("INSERT INTO sell_transactions 
                (country, network, firstname, lastname, email, amount_sats, amount_xof, phone) 
                VALUES 
                (:country, :network, :firstname, :lastname, :email, :amount_sats, :amount_xof, :phone)");
            $requete->execute([
                "country"   => $country,
                "network"   => $network,
                "firstname" => $firstname,
                "lastname"  => $lastname,
                "email"     => $email,
                "amount_sats"=> $amount_sats,
                "amount_xof"=> $amount_xof,
                "phone"     => $phone,
            ]);
            $_SESSION['success'] = "Vente réussie !";
        } catch(PDOException $e) {
            $_SESSION['error'] = "Erreur lors de la vente : " . $e->getMessage();
            header("Location: achat.html");
            exit();
        }
    }

    // Confirmation et redirection
    header("Location: index.html");
    exit();
} else {
    echo "Formulaire invalide.";
}
?>
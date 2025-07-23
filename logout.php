<?php
// ⚠️ Important : ce fichier permet de déconnecter un utilisateur

session_start();            // On démarre la session en cours (si elle existe)
session_unset();            // On supprime toutes les variables de session
session_destroy();          // On détruit complètement la session

// ✅ Redirection vers la page de connexion après déconnexion
header("Location: singup.html");
exit; // On quitte le script
?>
